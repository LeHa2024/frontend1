function getBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      return data.message;
    });
}

function getSubBreeds(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/list`)
    .then((response) => response.json())
    .then((data) => {
      return data.message;
    });
}

function getRandomImages(breed, subBreed, number = 3) {
  return fetch(
    `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/${number}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.message;
    });
}

function renderBreeds(breeds) {
  const $loading = $(".loading");
  const $breedSelector = $(".breed-selector");
  const $select = $("#breed");

  for (const breed in breeds) {
    const breedName = breed[0].toUpperCase() + breed.slice(1);
    $select.append(`<option value="${breed}">${breedName}</option>`);
  }

  $loading.addClass("hidden");
  $breedSelector.removeClass("hidden");
}

function renderSubBreeds(subBreeds) {
  const $subBreedList = $(".sub-breed-list");
  const $imagesContainer = $(".images-container");
  const $imageList = $imagesContainer.find(".images-list");

  $subBreedList.empty();

  if (subBreeds.length === 0) {
    $subBreedList.append("<p>No sub-breeds found</p>");
    $imagesContainer.addClass("hidden");
  } else {
    for (const subBreed of subBreeds) {
      const subBreedName = subBreed[0].toUpperCase() + subBreed.slice(1);

      $(`<li><a href="">${subBreedName}</a></li>`)
        .click(function (e) {
          e.preventDefault();
          getRandomImages($("#breed").val(), subBreed).then(renderImages);
        })
        .appendTo($subBreedList);
    }

    $imageList.empty();
    $imageList.append("<p>Select a sub-breed</p>");
    $imagesContainer.removeClass("hidden");
  }
}

function renderImages(images) {
  const $imageList = $(".images-list");

  $imageList.empty();
  for (const image of images) {
    $(`<img src="${image}" alt="">`).appendTo($imageList);
  }
}

$(function () {
  getBreeds().then(renderBreeds);

  $("#get-sub-breed").on("click", function () {
    const breed = $("#breed").val();

    if (breed === "") {
      return;
    }

    getSubBreeds(breed).then(renderSubBreeds);
  });
});
