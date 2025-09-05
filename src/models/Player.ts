import type { ROLE } from "../constant";

export type Player = {
  id?: string;
  prenom:string;
  nom:string;
  password?: string;
  pv?:number;
  role?:ROLE;
}