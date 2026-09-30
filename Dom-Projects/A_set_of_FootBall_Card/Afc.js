const footballTeam = {
	team: "Spain",
	year: 2026,
	headCoach: "Es Luis de la Fuente",
	players: [
		{ name: "David Raya", position: "goalkeeper", isCaptain: false },
		{ name: "Joan Garcia", position: "goalkeeper", isCaptain: false },
		{ name: "Unai Simon", position: "goalkeeper", isCaptain: false },
		{ name: "Pedro Porro", position: "defender", isCaptain: false },
		{ name: "Marcos Llorenete", position: "defender", isCaptain: false },
		{ name: "Aymeric Laporte", position: "defender", isCaptain: false },
		{ name: "Pau Cubarsi", position: "defender", isCaptain: false },
		{ name: "Marc Pubill", position: "defender", isCaptain: false },
		{ name: "Eric Garcia", position: "defender", isCaptain: false },
		{ name: "Marc Cucurella", position: "defender", isCaptain: false },
		{ name: "Alejandro Grimaldo", position: "defender", isCaptain: false },
		{ name: "Rodri", position: "midfielder", isCaptain: true },
		{ name: "Martin Zubimendi", position: "midfielder", isCaptain: false },
		{ name: "Pedri", position: "midfielder", isCaptain: false },
		{ name: "Fabian Ruiz", position: "midfielder", isCaptain: false },
		{ name: "Mikel Merino", position: "midfielder", isCaptain: false },
		{ name: "Gavi", position: "midfielder", isCaptain: false },
		{ name: "Alex Baena", position: "midfielder", isCaptain: false },
		{ name: "Mikel Oyarzabal", position: "forward", isCaptain: false },
		{ name: "Lamine Yamal", position: "forward", isCaptain: false },
		{ name: "Ferran Torres", position: "forward", isCaptain: false },
		{ name: "Borja Iglesias", position: "forward", isCaptain: false },
		{ name: "Dani Olmo", position: "forward", isCaptain: false },
		{ name: "Victor Munoz", position: "forward", isCaptain: false },
		{ name: "Nico Williams", position: "forward", isCaptain: false },
		{ name: "Yeremy Pino", position: "forward", isCaptain: false },
	],
};

document.querySelector("#team").textContent = footballTeam.team;
document.querySelector("#year").textContent = footballTeam.year;
document.querySelector("#head-coach").textContent = footballTeam.headCoach;

const selectElement = document.querySelector("#players");
const playerCard = document.querySelector("#player-cards");

function playerRender(players) {
    playerCard.innerHTML = players.map((p) => {
		return `<div class = "player-card"> 
        <h2>${p.isCaptain ? "Captain" : ""}  ${p.name}</h2>
        <p>${p.position}</p>
        </div>`;
	}).join(" ");
} playerRender(footballTeam.players);

selectElement.addEventListener("change", (e) => {
	const selectedValue = e.target.value;
	const player = footballTeam.players;

	const players =
		selectedValue === "all"
			? player
            : player.filter((player) => player.position === selectedValue);
 playerRender(players);
});
