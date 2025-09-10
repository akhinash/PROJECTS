const movies = [
  {
    title: "The Avengers",
    genre: "action",
    description: "Earth's mightiest heroes must come together to stop a global threat.",
    image: "PROJECT2/assets/avengers.jpeg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    title: "The Hangover",
    genre: "comedy",
    description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg",
    trailer: "https://www.youtube.com/embed/tcdUhdOlz9M"
  },
  {
    title: "The Pursuit of Happyness",
    genre: "drama",
    description: "A struggling salesman takes custody of his son and fights to build a better life.",
    image: "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg",
    trailer: "https://www.youtube.com/embed/89Kq8SDyvfg"
  }
];

const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayMovies(filteredMovies) {
  movieList.innerHTML = "";
  filteredMovies.forEach(movie => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card h-100 shadow">
        <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.genre.toUpperCase()}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <button class="btn btn-outline-light btn-sm" onclick='openModal(${JSON.stringify(movie)})'>Story & Trailer</button>
            <button class="btn btn-outline-danger btn-sm" onclick='addToWatchlist(${JSON.stringify(movie)})'>♥</button>
          </div>
        </div>
      </div>
    `;
    movieList.appendChild(col);
  });
}

function openModal(movie) {
  document.getElementById("movieTitle").innerText = movie.title;
  document.getElementById("movieDesc").innerText = movie.description;
  document.getElementById("movieTrailer").src = movie.trailer;
  const modal = new bootstrap.Modal(document.getElementById("movieModal"));
  modal.show();
}

// Watchlist
let watchlist = [];

function addToWatchlist(movie) {
  if (!watchlist.find(item => item.title === movie.title)) {
    watchlist.push(movie);
    alert(`"${movie.title}" added to your watchlist!`);
  } else {
    alert(`"${movie.title}" is already in your watchlist.`);
  }
}

// Initial Load
displayMovies(movies);

// Search
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(value));
  displayMovies(filtered);
});

// Genre Filter
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Button visual highlight
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const genre = button.getAttribute("data-genre");
    if (genre === "all") {
      displayMovies(movies);
    } else {
      const filtered = movies.filter(m => m.genre === genre);
      displayMovies(filtered);
    }
  });
});
