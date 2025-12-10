import { players } from "../data/players.js";

export function getTotalGoals() {
    return players.reduce((total, player) => total + player.goals, 0);
}

export function getPlayerByPosition(position) {
    return players.filter(player => player.position === position)
}

export function getTotalAssist() {
    return players.reduce((total, player) => total + player.assists, 0);
}

export function getTopscorer() {
    const getMax = (a, b) => Math.max(a, b)
    return players.reduce((accumulator, currentValue) => accumulator = getMax(accumulator, currentValue.goals), 0);
}

export function getAverageAge() {
    const totalAge = players.reduce((total, player) => total + player.age, 0)
    return totalAge / players.length
}

export function getPlayersByNationality(nationality) {
    return players.filter(player => player.nationality === nationality)
}
// this is create a copy
export function getPlayersByGoals() {
    return players.map(player => player).sort((a, b) => b.goals - a.goals)
}

export function getYoungPlayers(maxAge) {
    const youngPlayers = players.filter(player => player.age < maxAge)
    return youngPlayers
}
