import axios from "axios";
import type { LoginPlayerPayload, NewPlayerPayload, Player } from "../models/Player";
import { BASE_URL_SERVICE, REGISTRATION_STATUS, ROLE } from "../constant";

export class PlayerService {

  async login(payload: LoginPlayerPayload): Promise<Player> {
    return (await axios.post(`${BASE_URL_SERVICE}/login`, payload, { withCredentials: true })).data;
  }

  async logout(): Promise<void> {
    return (await axios.post(`${BASE_URL_SERVICE}/logout`, null, { withCredentials: true }))
  }

  async getRegistrationStatus(): Promise<REGISTRATION_STATUS> {
    return (await axios.get(`${BASE_URL_SERVICE}/registration_status`)).data;
  }

  async getPlayers(): Promise<Player[]> {
    return (await axios.get(`${BASE_URL_SERVICE}/players`, { withCredentials: true })).data;
  }

  async getMyPlayer(): Promise<Player> {
    return (await axios.get(`${BASE_URL_SERVICE}/players/me`, { withCredentials: true })).data;
  }

  async updatePlayer(playerToUpdate: Player): Promise<Player> {
    return ( await axios.patch(`${BASE_URL_SERVICE}/players/${playerToUpdate.username}`, playerToUpdate, { withCredentials: true })).data;
  }

  async createPlayer(payload: NewPlayerPayload): Promise<ROLE> {
    const role: ROLE = (await axios.post(`${BASE_URL_SERVICE}/register`, payload)).data;
    return role;
  }

  async deletePlayer(player: Player): Promise<void> {
    return axios.delete(`${BASE_URL_SERVICE}/players/${player.username}`, { withCredentials: true });
  }
}