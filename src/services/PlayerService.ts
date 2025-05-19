import axios from "axios";
import type { Player } from "../models/Player";

export class PlayerService {
  BASE_URL = "http://localhost:3000";

  async getPlayer(prenom:string, nom:string):Promise<Player> {
    return (await axios.get(`${this.BASE_URL}/players/${nom}`)).data;
  }

  async getPlayers(player:Player):Promise<Player[]> {
    if(player.role === "ADMIN") {
      return (await axios.get(`${this.BASE_URL}/players`)).data;
    }
    console.error("vous n'avez pas les droits necessaires, dommage");
    return [];
  }

  async updatePlayer(playerToUpdate: Player):Promise<Player> {
    return ( await axios.patch(`${this.BASE_URL}/players/${playerToUpdate.nom}`, {pv:playerToUpdate.pv})).data;
  }
}