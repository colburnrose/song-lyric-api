"use strict";

function getLyrics(artist, title) {
  const URL = `https://api.lyrics.ovh/v1/${artist}/${title}`;

  fetch(URL)
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error(
          `Error processing your request: ${response.statusText}`
        );
      }
    })
    .then((response) => {
      displayResults(response);
    })
    .catch((error) => {
      console.log(`Error: ${error.statusText}`);
    });
}

function displayResults(response) {
  // clear items
  $("#results").empty();

  $("#results").append(`${response.lyrics}`);

  $("#results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((e) => {
    e.preventDefault();
    console.log("clicked");
    let artist = $(".js-query-artist").val();
    let title = $(".js-query-title").val();
    getLyrics(artist, title);
  });
}

$(watchForm());
