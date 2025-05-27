import axios from "axios";
import type { Player } from "../models/Player";
import { BASE_URL_SERVICE } from "../constant";

export class PlayerService {

  async getPlayer(prenom:string, nom:string):Promise<Player> {
    const player: Player = (await axios.get(`${BASE_URL_SERVICE}/players/${nom}`)).data;
    if(player.prenom !== prenom.toUpperCase()){
      console.log(`problème de remontée de joueur`);
    }
    return player;
  }

  async getPlayers():Promise<Player[]> {
    return (await axios.get(`${BASE_URL_SERVICE}/players`)).data;
  }

  async updatePlayer(playerToUpdate: Player):Promise<Player> {
    return ( await axios.patch(`${BASE_URL_SERVICE}/players/${playerToUpdate.nom}`, {pv:playerToUpdate.pv})).data;
  }
}