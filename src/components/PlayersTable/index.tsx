import type { Player } from "../../models/Player";
import heartFull from "../../assets/images/heartFull.png";
import heartEmpty from "../../assets/images/heartEmpty.png";
import PlayerButton, { PLAYER_BUTTON_SIZE, PLAYER_BUTTON_VARIANT } from "../PlayerButton";
import DeleteButton from "../DeleteButton";

interface PlayersTableProps {
    players: Player[];
    className?: string;
    onClickPlayerHp(player: Player, newPv: number): void;
    onClickPlayerDelete(player: Player): void;
    isLoading?: boolean;
}

export default function PlayersTable({ players, onClickPlayerHp, onClickPlayerDelete, className, isLoading = false }: PlayersTableProps) {
    return (
        <table className={`text-white table-fixed bg-white/50 mario-font text-3xl w-2/3 rounded ${className ?? ""}`}>
            <thead>
                <tr>
                    <th>joueur</th>
                    <th>vie</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {isLoading
                    ? ["Alice", "Bob", "Charlie"].map(skeletonPlayer => (
                        <tr className="animate-pulse player-row border-2" key={skeletonPlayer}>
                            <td><i>{skeletonPlayer}</i></td>
                            <td className="relative flex justify-center items-center">
                                {[1,2,3].map(() => <img src={heartEmpty} className="size-14" />)}
                            </td>
                        </tr>
                    ))
                    : players.map(player =>
                        <tr key={player.username} className={`player-row border-2${player.pv === 0 ? " text-slate-500 bg-slate-500" : ""}`}>
                            <td>{player.username}</td>
                            <td className="relative flex justify-center items-center">
                                <PlayerButton className="opacity-0" size={PLAYER_BUTTON_SIZE.SM} variant={PLAYER_BUTTON_VARIANT.MINUS} onClick={() => onClickPlayerHp(player, player.pv - 1)} />
                                {[1, 2, 3].map(pv => (
                                    <img src={player.pv >= pv ? heartFull : heartEmpty} className="size-14" />
                                ))}
                                <PlayerButton className="opacity-0" size={PLAYER_BUTTON_SIZE.SM} variant={PLAYER_BUTTON_VARIANT.PLUS} onClick={() => onClickPlayerHp(player, player.pv + 1)} />
                                <DeleteButton className="opacity-0 absolute right-4" onClick={() => onClickPlayerDelete(player)} />
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}