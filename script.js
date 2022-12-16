const grid = document.getElementById("grid");
let datos = [];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c788b97d7mshbf706b59419f219p18efccjsne410a59e6726',
		'X-RapidAPI-Host': 'premier-league-standings1.p.rapidapi.com'
	}
};

fetch('https://premier-league-standings1.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => {
    datos = response;
    displayDatos(datos);
  })
	.catch(err => console.error(err));


function displayDatos(datos) {
    console.log(datos)
  const template = datos.map((ff) => {

      return(`<div class="col ">
                <div class="card text-center">
                    <div class="card-body">
                        <img class="card-image-top logo"  src="${ff.team.logo}"></img>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${ff.team.name}</h5>
                        <h5 class="card-title hh">Wins: ${ff.stats.wins}</h1>
                        <h5 class="hh card-title">Losses: ${ff.stats.losses}</h5>
                    </div>
                </div>
              </div>`)}).join(" ");

  grid.innerHTML = template;


}
