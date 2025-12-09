import { players } from "../data/players.js";

export function getAllPlayers() {
    return players
}


export const findPlayerById = (id) => {
    return players.find(player => player.id === id)
}

// function createPlayer(name,position,age,nationality,goals=0,assists=0,matches=0) {
//     return {
//         id:players.length+1,
//         name,
//         position,
//         age,
//         goals,
//         assists,
//         matches,
//         nationality
//     }
// }


// function addPlayer(playerData) {
//     const player = createPlayer(playerData.name,playerData.position,playerData.age,playerData.nationality,playerData.goals,playerData.assists,playerData.matches)
//     player.id = players.length+1
//     players.push(player)
//     return player
// }


function addPlayer(playerData) {
    const newPlayer = {
        id: players.length + 1,
        name: playerData.name,
        position: playerData.position,
        age: playerData.age,
        goals: 0,
        assists: 0,
        matches: 0,
        nationality: playerData.nationality
    }
    players.push(newPlayer)
    return newPlayer
}
addPlayer({name:"itamar",position:"Forward",age:21,nationality:"Israeli"})
console.log(getAllPlayers())

export function removePlayer(id) {
    for (let i = 0;i<players.length;i++) {
        if (players[i].id===id) {
            const removed = players.splice(i,1)
            return removed
        }
        else {
            return null
        }
    } 
}

function updatePayerData(name) {
    
}