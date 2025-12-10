import { players } from "../data/players.js";

export function getTotalGoals() {
    return players.reduce((total, player) => total + player.goals, 0);
}

export function getPlayerByPosition(position) {
    return players.filter(player => player.position===position)
}
