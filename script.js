const SPORTS = [
	['🤺','fencing'],
	['⛸','figure skating'],
	['⛷','skier'],
	['🏂','snowboarder'],
	['🏌','golfing'],
	['🚣','rowing boat'],
	['🏊','swimming'],
	['🤸','gymnastics'],
	['🤾','handball']
];

const WINNERS = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const OLYMPIC = ['🔵','⚫','🔴','🟡','🟢'];
// Европа — синий, Азия — жёлтый, Африка — чёрный, Австралия — зелёный и Америка — красный

const MEDALS = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];

const CONTINENTS = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

const FLAGS = [
	['fr','🇫🇷'],
	['it','🇮🇹'],
	['us','🇺🇸'],
	['ca','🇨🇦'],
	['ru','🇷🇺'],
	['no','🇳🇴'],
	['jp','🇯🇵'],
	['au','🇦🇺'],
	['gb','🇬🇧'],
	['se','🇸🇪'],
	['ro','🇷🇴'],
	['ua','🇺🇦'],
	['dk','🇩🇰'],
	['de','🇩🇪']
];
function renderOlympic() {                                      
	let olympicTitle = [];
	for ( let i = 0; i < OLYMPIC.length; i++){
		olympicTitle.push(` <th >${OLYMPIC[i]}</th> `)

	}
	return olympicTitle.join(``);
}

function getWinnerBySports(sportsName) {
	let Winnersarray = [];
		 for (let i = 0; i<WINNERS.length; i++) {
			 let currentWinner = WINNERS[i]; // ['fencing','gold','fr'] 
			 typeSportWinner = currentWinner[0]; // fencing
			 if (typeSportWinner === sportsName)
				 Winnersarray.push(currentWinner)
		 }
	return  Winnersarray
}

function continentByCountry(winnerCountry) {
	
	for (let i = 0; i < CONTINENTS.length; i++) {
		let countryData = CONTINENTS[i], // ['fr','Europe']
			country = countryData[0],// fr
			countryContinent = countryData[1]; // Europe
		
		if (country === winnerCountry)
			return countryContinent;
	}
}

	function getFlagByCountry(winnerCountry) {
		for (let i = 0; i < FLAGS.length; i++) {
			let countryArr = FLAGS[i], // ['fr','🇫🇷']
				countryName = countryArr[0], // fr
				countryFlag = countryArr[1];
			if (countryName === winnerCountry)
				
				return countryFlag
		}
	}
function getMedalIcon(winnerMedal) {
	for (let i = 0; i < MEDALS.length; i++) {
		let medalsArr = MEDALS[i],
			medalsIcon = medalsArr[0],
			medalsName = medalsArr[1];
		if (medalsName === winnerMedal)
			
			return medalsIcon
	}

}

	function renderSports() {
 
		let sportsIcon = [];
for (let i = 0; i < SPORTS.length; i++) {
		
			let Europe = [];
			let Africa = [];
			let Americas = [];
			let Asia = [];
			let Oceania = [];
		
		icons = SPORTS[i]; //['🤺','fencing'],
let currentWinners = getWinnerBySports(icons[1])
      


		
for (let i = 0; i < currentWinners.length; i++) {
				let winner = currentWinners[i],// ['fencing', 'gold', 'fr']
					winnerCountry = winner[2],
					winnerMedal = winner[1];
			
				let winnerContinent = continentByCountry(winnerCountry)
			

let winnerRender = `<div class = "winner ${winnerMedal}">${getFlagByCountry(winnerCountry)} – ${getMedalIcon(winnerMedal)}</div>`;
				switch (winnerContinent) {
					case `Europe`:
						Europe.push(winnerRender);
						break;
					case `The Americas`:
						Americas.push(winnerRender);
						break;
					case `Africa`:
						Africa.push(winnerRender);
						break;
					case `Asia`:
						Asia.push(winnerRender);
						break;
					case `Oceania`:
						Oceania.push(winnerRender);
						break;
				   }
			}
		

			sportsIcon.push(`<tr>
		   <td> ${icons[0]} </td>
		   <td>${Europe.join(``)}</td>
			<td>${Africa.join(``)}</td>
			<td>${Americas.join(``)}</td>
			<td>${Asia.join(``)}</td>
			<td>${Oceania.join(``)}</td>
		 </tr>`)
		}
	
		return sportsIcon.join(``);

	}


	document.write(`
<table>
			<thead>
<tr>
<th>  ${renderOlympic()}</th>
</tr>

			</thead>
	<tbody>

	
${renderSports()}

  </tbody>
</table>`)




