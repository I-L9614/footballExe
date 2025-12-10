import { players } from "../data/players.js";

export function getTotalGoals() {
    return players.reduce((total, player) => total + player.goals, 0);
}
console.log(getTotalGoals())
