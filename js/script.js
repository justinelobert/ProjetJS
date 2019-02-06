let films = [
    {
        titre:"Le Parfum",
        realisateur:"Tom Tykwer",
        acteurs: ["Jawad","Eric","Gay léponge"],
        sortie:"4 octobre 2006",
        synopsis:"Grand parfumeur fou",
        nbEntrée: 2000
    },
    {
        titre:"Valérian",
        realisateur:"Luc Besson",
        acteurs: ["Saucis","Ri","Cantonnais"],
        /*    acteurs: [
            {prénom:"Gary", nom:"Bary"},
            {prénom:"Saucis", nom:"Strasbourgee"},
            {prénom:"Ri", nom:"Cantonnais"}
        ], */
        sortie:"26 juillet 2017",
        synopsis:"Film Fantastique",
        nbEntrée: 6000
    },
    {
        titre:"Hansel&Gretel",
        realisateur:"Tomy Wirkola",
        acteurs: ["Gary","Strasbourgee","bourge"],
        sortie:"6 mars 2013",
        synopsis:"Horreur,Fantastique",
        nbEntrée: 4000
    }
];

// ajout bouton
let bouton = document.createElement('button');
bouton.textContent = "Ici";
bouton.onclick = function() {
    alert (films[0].realisateur);
};

document.getElementById('film').appendChild(bouton);


document.getElementById('film').insertAdjacentHTML("beforebegin", "<h1> Ma liste de film </h1>");
document.getElementById('film').insertAdjacentHTML("beforebegin", '<h2 id ="sous-titre"> Titre </h2>');
document.getElementById('film').insertAdjacentHTML("afterend", '<span id ="Copy">Copyright</span>');
document.getElementById('Copy').insertAdjacentText("beforebegin", " @");
document.getElementById('Copy').innerHTML=('nouveau copyright <b>2019</b>');
document.getElementById('Copy').insertAdjacentHTML( "afterend"," Justine");



function addFilms(film) { // crea fonction pour ajout film
    return '<div class ="list-film">' + "\n" + 
        '<div>' + film.titre + '</div>' + "\n" +
        '<div>' + film.realisateur + '</div>' + "\n" +
        '<div>' + film.sortie + '</div>' + "\n" +
        '<div>' + film.synopsis + '</div>' + "\n" +
        '<div>' + film.nbEntrée + '</div>' +
        '</div>';
}

let newFilm = { // ajout nvx film
    titre: "allez",
    realisateur: "nardine",
    sortie: "bebeck",
    synopsis: "trouc trouc",
    nbEntrée: 4500
};

document.getElementById('film').insertAdjacentHTML("beforeend", addFilms(newFilm));

films.forEach(function(film) {
    let filmHtml = '<div class ="un-film">' + "\n" + 
        '<div>' + film.titre + '</div>' + "\n" +
        '<div>' + film.realisateur + '</div>' + "\n" +
        '<div>' + film.sortie + '</div>' + "\n" +
        '<div>' + film.synopsis + '</div>' + "\n" +
        '<div>' + film.nbEntrée + '</div>' + "\n" +
        `<button onlick = "alert('${film.acteurs}')">acteurs</button>` +
        '</div>';
    document.getElementById('film').insertAdjacentHTML("beforeend",filmHtml);

}); 
function alterStyle(elem) {
  elem.style.background = 'green';
}

function resetStyle(elemId) {
  elem = document.getElementById(elemId);
  elem.style.background = 'white';
}