import type { ROLE } from "../constant";

export type Player = {
  username: string;
  prenom: string;
  nom: string;
  password: string;
  pv: number;
  role: ROLE;
}

export type LoginPlayerPayload = {
  username: string;
  password: string;
}

export type NewPlayerPayload = {
  username: string;
  prenom: string;
  nom: string;
  password: string;
}
