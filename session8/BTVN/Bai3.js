const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
];

const filterPlayersByPosition = (position, players) => {
  return players.filter((player) => {
    const [, playerPosition] = player.split(" - ");
    return playerPosition === position;
  });
};

console.log(filterPlayersByPosition("Midfielder", players));
console.log(filterPlayersByPosition("Forward", players));
