import { players,clubInfo } from "./data/players.js";
import { getAllPlayers, findPlayerById,findPlayerByPartialName,removePlayer,
    updatePayerData,addPlayer } from "./utils/playerManager.js";
import { getTotalGoals,getPlayerByPosition,getTotalAssist,getTopscorer,
    getAverageAge,getPlayersByNationality,getPlayersByGoals,getYoungPlayers,getPlayersWithMinGoals,
    calculatePlayerScore,getTop3Scorers,getAllPlayersNmae,getGoalsPerMatch
 } from "./utils/statistics.JS";

console.log('='.repeat(50));
console.log('⚽ FOOTBALL CLUB MANAGEMENT SYSTEM ⚽');
console.log('='.repeat(50));

console.log('\n📋 CLUB INFORMATION');
console.log('─'.repeat(50));
console.log(`Name: ${clubInfo.name}`);
console.log(`Founded: ${clubInfo.founded}`);
console.log(`Stadium: ${clubInfo.stadium}`);
console.log(`City: ${clubInfo.city}`);

console.log('\n👥 PLAYER ROSTER')
console.log('─'.repeat(50))
getAllPlayers().forEach(player => {
    console.log(`#${player.id} ${player.name} - ${player.position} - Age ${player.age}`)
})