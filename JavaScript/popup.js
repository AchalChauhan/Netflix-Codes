var Netflixdata = [
  ["Action & adventure", "Action comedies", "43040"],
  ["Action & adventure", "Action sf & fantasy", "1568"],
  ["Action & adventure", "Action thrillers", "43048"],
  ["Action & adventure", "Adventures", "7442"],
  ["Action & adventure", "Asian action movies", "77232"],
  ["Action & adventure", "Classic Action & Adventure", "46576"],
  ["Action & adventure", "Comic book and superhero movies", "10118"],
  ["Action & adventure", "Crime action & adventure", "9584"],
  ["Action & adventure", "Foreign action & adventure", "11828"],
  ["Action & adventure", "Hijacking movies", "20541"],
  ["Action & adventure", "Martial arts movies", "8985"],
  ["Action & adventure", "Military action & adventure", "2125"],
  ["Action & adventure", "Spy action & adventure", "10702"],
  ["Action & adventure", "Westerns", "7700"],
  ["Anime", "Adult animation", "11881"],
  ["Anime", "Animal tales", "5507"],
  ["Anime", "Anime Sci-Fi", "2729"],
  ["Anime", "Anime action", "2653"],
  ["Anime", "Anime comedies", "9302"],
  ["Anime", "Anime dramas", "452"],
  ["Anime", "Anime fantasy", "11146"],
  ["Anime", "Anime features", "3063"],
  ["Anime", "Anime horror", "10695"],
  ["Anime", "Anime series", "6721"],
  ["Christmas", "British christmas children & family films", "1527064"],
  ["Christmas", "Canadian christmas children & family films", "1721544"],
  ["Christmas", "Christmas children & family films", "1474017"],
  ["Christmas", "Christmas children & family films for ages 11 to 12", "1477206"],
  ["Christmas", "Christmas children & family films for ages 5 to 7", "147201"],
  ["Christmas", "Christmas children & family films for ages 8 to 10", "1477204"],
  ["Christmas", "Christmas children & family films from the 1990s", "1476024"],
  ["Christmas", "European christmas children & family films", "1527063"],
  ["Christmas", "Family-friendly christmas films", "1394522"],
  ["Christmas", "Feel-good christmas children & family films", "1475066"],
  ["Christmas", "Goofy christmas children & family films", "145071"],
  ["Christmas", "Romantic christmas films", "1394527"],
  ["Classic Movies", "Classic SF & fantasy", "47147"],
  ["Classic Movies", "Classic TV shows", "46553"],
  ["Classic Movies", "Classic action & adventure", "46576"],
  ["Classic Movies", "Classic comedies", "31694"],
  ["Classic Movies", "Classic dramas", "29809"],
  ["Classic Movies", "Classic musical comedy", "32392"],
  ["Classic Movies", "Classic romantic movies", "31273"],
  ["Classic Movies", "Classic thrillers", "46588"],
  ["Classic Movies", "Classic war movies", "48744"],
  ["Classic Movies", "Classic westerns", "47465"],
  ["Classic Movies", "Epics", "52858"],
  ["Classic Movies", "Film Noir", "7687"],
  ["Classic Movies", "Silent Movies", "53310"],
  ["Comedies", "Animes comedies", "9302"],
  ["Comedies", "Dark comedies", "869"],
  ["Comedies", "Foreign Comedies", "4426"],
  ["Comedies", "Horror comedies", "89585"],
  ["Comedies", "Late Night Comedies", "1402"],
  ["Comedies", "Mockumentaries", "26"],
  ["Comedies", "Musicals comedies", "13335"],
  ["Comedies", "Political comedies", "2700"],
  ["Comedies", "Romantic Comedies", "5475"],
  ["Comedies", "Satires", "4922"],
  ["Comedies", "Screwball Comedies", "9702"],
  ["Comedies", "Slapstick comedies", "10256"],
  ["Comedies", "Sports comedies", "5286"],
  ["Comedies", "Stand-up Comedy", "11559"],
  ["Comedies", "Teen Comedies", "3519"],
  ["Documentaries", "Biographical documentaries", "3652"],
  ["Documentaries", "Crime documentaries", "9875"],
  ["Documentaries", "Foreign documentaries", "5161"],
  ["Documentaries", "Historical documentaries", "5349"],
  ["Documentaries", "Military documentaries", "4006"],
  ["Documentaries", "Music & concert documentaries", "90361"],
  ["Documentaries", "Political documentaries", "7018"],
  ["Documentaries", "Religious documentaries", "10005"],
  ["Documentaries", "Science & navature documentaries", "2595"],
  ["Documentaries", "Social & cultural documentaries", "3675"],
  ["Documentaries", "Spirituality documentaries", "2760"],
  ["Documentaries", "Sports documentaries", "180"],
  ["Documentaries", "Travel & adventure documentaries", "1159"],
];

function makeDropDown(data, level1Filter) {
  const genre = data.filter((r) => r[0] === level1Filter);

  const subGenreSet = new Set();
  genre.forEach((r) => subGenreSet.add(r[1]));

  const subGenre = [...subGenreSet];
  const subGenreDropdown = document.getElementById("dropdown2");
  subGenreDropdown.innerHTML="";

  subGenre.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item;
    subGenreDropdown.appendChild(option);
  });
}

function applyDropdown()
{
    const selectGenre = document.getElementById("dropdown1").value;
    makeDropDown(Netflixdata, selectGenre)
}


document.getElementById("dropdown1").addEventListener("change", applyDropdown);

document.addEventListener("DOMContentLoaded", applyDropdown);