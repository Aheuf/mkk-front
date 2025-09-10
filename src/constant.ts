import Swal from "sweetalert2";

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

export const Toast = Swal.mixin({
  toast: true,
  width: "28em",
  position: "top",
  showConfirmButton: false,
  showCloseButton: true,
  timer: 5000,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
