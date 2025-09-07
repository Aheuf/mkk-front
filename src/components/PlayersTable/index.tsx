import type { Player } from "../../models/Player";
import heartFull from "../../assets/images/heartFull.png";
import heartEmpty from "../../assets/images/heartEmpty.png";
import PlayerButton, { PLAYER_BUTTON_SIZE, PLAYER_BUTTON_VARIANT } from "../PlayerButton";

interface PlayersTableProps {
    players: Player[],
    onClickPlayerHp(player: Player, newPv: number): void
}

export default function PlayersTable({ players, onClickPlayerHp }: PlayersTableProps) {
    return (
        <table className="text-white table-auto bg-white/50 mario-font text-3xl w-2/3 rounded">
            <thead>
                <tr>
                    <th>joueur</th>
                    <th>vie</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {players.map(player =>
                    <tr key={player.username} className={`player-row border-2 border-black${player.pv === 0 && " text-slate-500 bg-slate-500"}`}>
                        <td>{`${player.prenom} ${player.nom.charAt(0)}.`}</td>
                        <td className="flex justify-center items-center">
                            <PlayerButton className="opacity-0" size={PLAYER_BUTTON_SIZE.SM} variant={PLAYER_BUTTON_VARIANT.MINUS} onClick={() => onClickPlayerHp(player, player.pv-1)} />
                            {[1, 2, 3].map(pv => (
                                <img src={player.pv >= pv ? heartFull : heartEmpty} className="size-14" />
                            ))}
                            <PlayerButton className="opacity-0" size={PLAYER_BUTTON_SIZE.SM} variant={PLAYER_BUTTON_VARIANT.PLUS} onClick={() => onClickPlayerHp(player, player.pv+1)} />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}