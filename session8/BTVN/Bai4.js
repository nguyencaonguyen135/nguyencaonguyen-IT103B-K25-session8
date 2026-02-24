const players = [
  "Messi - Forward - 25",
  "Ronaldo - Forward - 30",
  "Neymar - Forward - 18",
  "De Bruyne - Midfielder - 8",
  "Kante - Midfielder - 2",
  "Van Dijk - Defender - 5",
  "Alisson - Goalkeeper - 0"
];

const getReversedNames = (players) => {
  const playerNames = players.map((player) => {
    const playerInfo = player.split(" - ");
    const playerName = playerInfo[0];
    return playerName;
  });

  const copiedNames = playerNames.slice();
  const reversedNames = copiedNames.reverse();

  return reversedNames;
};

console.log(getReversedNames(players));
