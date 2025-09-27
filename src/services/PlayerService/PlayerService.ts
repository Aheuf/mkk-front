import type { REGISTRATION_STATUS, ROLE } from "../../constant";
import type { LoginPlayerPayload, NewPlayerPayload, Player } from "../../models/Player";


export interface PlayerService {

  login(payload: LoginPlayerPayload): Promise<Player>;

  logout(): Promise<void>;

  getRegistrationStatus(): Promise<REGISTRATION_STATUS>;

  getPlayers(): Promise<Player[]>;

  getMyPlayer(): Promise<Player>;

  updatePlayer(playerToUpdate: Player): Promise<Player>;

  createPlayer(payload: NewPlayerPayload): Promise<ROLE>;

  deletePlayer(player: Player): Promise<void>;

  getPlayersEventSource(): EventSource;
}