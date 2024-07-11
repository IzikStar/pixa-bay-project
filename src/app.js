const searchTerms = [
    "mountains",
    "sunset",
    "beach",
    "forest",
    "cityscape",
    "desert",
    "flowers",
    "animals",
    "waterfall",
    "night sky",
    "snow",
    "countryside",
    "lake",
    "autumn",
    "spring",
    "summer",
    "winter",
    "birds",
    "wildlife",
    "landscape",
    "meadow",
    "canyon",
    "valley",
    "hill",
    "village",
    "clouds",
    "stars",
    "rain",
    "sunrise",
    "fog",
    "path",
    "tree",
    "field",
    "garden",
    "island",
    "cliff",
    "reef",
    "pond",
    "flower",
    "mushroom",
    "butterfly",
    "insect",
    "fish",
    "coral",
    "prairie",
    "savannah",
    "swamp",
    "marsh",
    "jungle",
    "rainforest",
    "bay",
    "cape",
    "fjord",
    "glacier",
    "grove",
    "orchard",
    "vineyard",
    "gorge",
    "stream",
    "lagoon",
    "archipelago",
    "deserted island",
    "natural bridge",
    "sand dunes",
    "oasis",
    "hot spring",
    "geyser",
    "volcano",
    "lava",
    "crater",
    "peak",
    "summit",
    "foothills",
    "plateau",
    "mesa",
    "butte",
    "rock formation",
    "cave",
    "stalactites",
    "stalagmites",
    "cavern",
    "waterhole",
    "grotto",
    "bluff",
    "ravine",
    "delta",
    "estuary",
    "mudflat",
    "sandbar",
    "boulder",
    "pebble",
    "meander",
    "oxbow lake",
    "quarry",
    "reservoir",
    "water reservoir",
    "irrigation canal",
    "natural pool",
    "salt flat",
    "salt marsh",
    "seagrass",
    "kelp forest",
    "mangrove",
    "seabed",
    "deep sea",
    "coral reef"
];

function createButtons(searchTerms) {
    const allButtons = document.getElementById("allButtons");
    searchTerms.forEach(term => {
        const button = document.createElement("button");
        button.textContent = term;
        button.classList.add("btn", "btn-primary", "m-2");
        button.onclick = () => {
            fetchData(term);
        };
        allButtons.appendChild(button);
    });
}

function searchLine() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
        fetchData(searchInput.value);
    });
    searchInput.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            fetchData(searchInput.value);
        }
    });
}

function init() {
    createButtons(searchTerms);
    searchLine();
}

const imagesGenerator = (arr) => {
    const allImages = document.getElementById("allImages");
    allImages.innerHTML = ""; // Clear previous images
    for (let i = 0; i < arr.length; i++) {
        const image = new Image(arr[i].tags, arr[i].webformatURL, arr[i].imageWidth, arr[i].imageHeight, arr[i].downloads, arr[i].views);
        image.render();
    }
}

const fetchData = (query) => {
    let key = "44539987-e8fc7b76a3ba15f32cbea7c74";
    fetch(`https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&pretty=true`)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            imagesGenerator(data.hits);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

init();