import type { Player } from "./Player"

export enum ServerSentEventType {
    DELETE = "delete",
    UPDATE = "update",
    CREATE = "create"
}

export type ServerSentEventPayload = {
    action: ServerSentEventType.DELETE,
    username: string
} | {
    action: ServerSentEventType.UPDATE,
    username: string,
    pv: number
} | {
    action: ServerSentEventType.CREATE,
    player: Player
}
