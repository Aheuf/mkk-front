export const WEB_SOCKET_URL = window.location.href.includes("localhost") ? "ws:localhost:3000" : "wss:mk-api.grosbi.de"
export const BASE_URL_SERVICE =  window.location.href.includes("localhost") ? "http://localhost:3000" : "https://mk-api.grosbi.de";

export enum ROLE {
  ADMIN = "ADMIN",
  PLAYER = "PLAYER",
  QUEUED = "QUEUED",
  UNKNOWN = "UNKNOWN"
};

export enum REGISTRATION_STATUS {
  OPEN = "OPEN",
  FULL = "FULL"
}
