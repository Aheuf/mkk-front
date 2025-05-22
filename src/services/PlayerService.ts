import axios from "axios";
import type { Player } from "../models/Player";

export class PlayerService {
  BASE_URL = "http://localhost:3000";

  async getPlayer(prenom:string, nom:string):Promise<Player> {
    const player: Player = (await axios.get(`${this.BASE_URL}/players/${nom}`)).data;
    if(player.prenom !== prenom){
      console.log("problème de remontée de joueur");
    }
    return player;
  }

  async getPlayers():Promise<Player[]> {
    return (await axios.get(`${this.BASE_URL}/players`)).data;
  }

  async updatePlayer(playerToUpdate: Player):Promise<Player> {
    return ( await axios.patch(`${this.BASE_URL}/players/${playerToUpdate.nom}`, {pv:playerToUpdate.pv})).data;
  }
}