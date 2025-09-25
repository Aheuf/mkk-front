import Swal from "sweetalert2";

export const WEB_SOCKET_URL = `ws:${import.meta.env.VITE_DOMAIN}`;
export const BASE_URL_SERVICE = `//${import.meta.env.VITE_DOMAIN}`;

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
