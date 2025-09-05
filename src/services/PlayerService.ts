import axios from "axios";
import type { Player } from "../models/Player";
import { BASE_URL_SERVICE, ROLE } from "../constant";

export class PlayerService {

  async getPlayer(prenom:string, nom:string, mdp:string):Promise<Player> {
    return (await axios.post(`${BASE_URL_SERVICE}/login`, {prenom, nom, mdp})).data;
  }

  async getPlayers(role:ROLE):Promise<Player[]> {
    if(role === ROLE.ADMIN) {
      return (await axios.get(`${BASE_URL_SERVICE}/players`)).data;
    }
    throw new Error("Unauthorized access: Only admins can retrieve player list.");
  }

  async updatePlayer(playerToUpdate: Player):Promise<Player> {
    return ( await axios.patch(`${BASE_URL_SERVICE}/players`, playerToUpdate)).data;
  }

  async getPlayerCount():Promise<number> {
    return (await axios.get(`${BASE_URL_SERVICE}/players/count`)).data;
  }

  async createPlayer(player: Player):Promise<boolean> {
    const createdPlayer: Player = (await axios.post(`${BASE_URL_SERVICE}/players`, player)).data;
    return !!createdPlayer;
  }
}