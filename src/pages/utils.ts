import { AxiosError } from "axios";
import type { NavigateFunction } from "react-router";
import { Toast } from "../constant";

export function handle401And403Errors(e: any, navigate: NavigateFunction) {
    if (e instanceof AxiosError) {
        if (e.status && [401, 403].includes(e.status)) {
            Toast.fire("Vous avez été déconnecté(e)", "", "error");
            navigate("/");
        } else {
            Toast.fire(`Erreur HTTP ${e.status}`, e.message, "error");
        }
        return;
    }

    Toast.fire(`Erreur inconnue`, e, "error");
    throw e;
}

export function handleRateLimiter(e: any) {
    if (e instanceof AxiosError && e.status === 429) {
        Toast.fire("Trop de requêtes !", "Tu arrêtes de spam, calmos l'asticot", "warning");
        return;
    }
    throw e;
}
