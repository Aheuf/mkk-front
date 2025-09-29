import type { REGISTRATION_STATUS, ROLE } from "../../constant";
import type { LoginPlayerPayload, Player, NewPlayerPayload } from "../../models/Player";
import { playersStub } from "../../models/Player.stub";
import type { PlayerService } from "./PlayerService";

export class PlayerServiceMock implements PlayerService {
    login(_payload: LoginPlayerPayload): Promise<Player> {
        throw new Error("Method not implemented.");
    }

    logout(): Promise<void> {
        return Promise.resolve();
    }

    getRegistrationStatus(): Promise<REGISTRATION_STATUS> {
        throw new Error("Method not implemented.");
    }

    getPlayers(): Promise<Player[]> {
        throw new Error("Method not implemented.");
    }

    getMyPlayer(): Promise<Player> {
        return Promise.resolve(playersStub[0]);
    }

    updatePlayer(playerToUpdate: Player): Promise<Player> {
        return Promise.resolve(playerToUpdate);
    }

    createPlayer(_payload: NewPlayerPayload): Promise<ROLE> {
        throw new Error("Method not implemented.");
    }

    deletePlayer(_player: Player): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getPlayersEventSource(): EventSource {
        return new EventSource("");
    }

}