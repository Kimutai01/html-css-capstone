const dynamicPart = document.querySelector('.players');
const playerList = [
  {
    name: 'Lionel Messi',
    image: 'assets/images/players/messi.jpeg',
    title: 'Argentina top player, one of a kind.',
    desc: 'He has won 6 golden boot and is also the best playmaker in todays world',
  },
  {
    name: 'Cristiano ronaldo',
    image: 'assets/images/players/cristiano.jpeg',
    title: 'All time top goal scorer',
    desc: 'He is a portugal player, their top scorer',
  },
  {
    name: 'Neymar junior',
    image: 'assets/images/players/neymar.jpeg',
    title: 'The most beautiful player to watch',
    desc: 'He is the most skilled player',
  },
  {
    name: 'Harry Kane',
    image: 'assets/images/players/kane.jpeg',
    title: 'Englands striker and captain',
    desc: 'He is Englands top scorer',
  },
  {
    name: 'Bukayo saka',
    image: 'assets/images/players/saka.jpeg',
    title: 'Englands right winger',
    desc: 'He has been arsenals best player this season',
  },
  {
    name: 'Robert lewandoski',
    image: 'assets/images/players/lewa.jpeg',
    title: 'Polish striker',
    desc: 'All time top scorer of bundesliga',
  },
];

for (let i = 0; i < 2; i += 1) {
  dynamicPart.innerHTML += `
      <div class="player">
      <div class="com-img-container">
        <img src="${playerList[i].image}" alt="${playerList[i].name} player">
      </div>
      <div class="player-info">
        <h3>${playerList[i].name}</h3>
        <h4 class="player-title">${playerList[i].title}</h4>
        <div class="grey-line"></div>
        <p>${playerList[i].desc}</p>
      </div>
    </div>`;
}

for (let i = 2; i < playerList.length; i += 1) {
  dynamicPart.innerHTML += `
       <div class="player hidden" id="hiddenInfo${i}">
       <div class="com-img-container">
         <img src="${playerList[i].image}" alt="${playerList[i].name} player">
       </div>
       <div class="player-info">
         <h3>${playerList[i].name}</h3>
         <h4 class="player-title">${playerList[i].title}</h4>
         <div class="grey-line"></div>
         <p>${playerList[i].desc}</p>
       </div>
     </div>`;
}
