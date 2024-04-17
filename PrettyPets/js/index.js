//select elements
const searchInput = document.querySelector(".form-group input");
const searchButton = document.querySelector(".form-group button");
const searchResultNode = document.querySelector(".pets-simples");
const storiesNode = document.querySelector(".stories-items");

// searchPets function
const searchPets = (data, searchText) => {
    const result = searchText
        ? data?.filter((pet) =>
            pet.location.toLowerCase().includes(searchText.trim().toLowerCase())
        )
        : [];
    return result;
};

const createElement = (tag, className, src, alt) => {
    const node = document.createElement(tag);
    node.className = className;
    if (src) node.src = src;
    if (alt) node.alt = alt;
    return node;
};

// show the searched pets in the browser
const showSearchedPets = (data, node) => {
    data?.map((pet) => {
        //item node
        const item = createElement("div", "item");
        //pet widget
        const petNode = createElement("div", "pet--widget");

        //image container
        const imageContainer = createElement("div", "image");

        //pet image
        const image = createElement("img", null, pet.image, "pet image");

        // text container
        const text = createElement("div", "text");
        // pet name
        const name = createElement("h4");
        name.textContent = pet?.name;

        //pet gender and age_class
        const genderAndAge = createElement("p");
        genderAndAge.textContent = `${pet?.gender} | ${pet?.age_class}`;

        //pet location
        const location = createElement("p");
        location.textContent = pet?.location;

        imageContainer.appendChild(image);
        text.appendChild(name);
        text.appendChild(genderAndAge);
        text.appendChild(location);

        petNode.appendChild(imageContainer);
        petNode.appendChild(text);

        item.appendChild(petNode);

        node.appendChild(item);
    });
};

// show the stories in the browser (note: another way to insert html tags)
const showStories = (data) =>
    data
        ?.map(
            (story) => `<div class="item">
                <div class="story-widget">
                  <div class="image">
                    <img src=${story.image} alt="graphic-image" />
                  </div>
                  <div class="text">
                    <h3>${story.title}</h3>
                    <a href=${story.link} class="link">More Text</a>
                  </div>
                </div>
              </div>
  
  `
        )
        .join("");

const noShowNoResult = (node) => {
    const p = createElement("p");
    p.textContent = "No results";
    console.log(p);
    node.appendChild(p);
};

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const searchText = searchInput.value;
    const searchResult = searchPets(petsData, searchText);
    // clear search result main node
    searchResultNode.textContent = "";
    if (searchResult?.length > 0)
        showSearchedPets(searchResult, searchResultNode);
    else noShowNoResult(searchResultNode);
});

//stories
// clear stories
storiesNode.textContent = "";
storiesNode.innerHTML = showStories(stories);
