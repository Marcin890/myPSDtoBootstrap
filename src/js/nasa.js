class Recipe {
  constructor() {
    this.apiUrl = `https://images-api.nasa.gov/search?q=michael%20collins&description=apollo%2011&media_type=image&year_end=1970`;
    this.nasaEl = document.querySelector(".nasa-container");
    // this.titleEl = document.querySelector(".recipe__title");
    this.imageEl = document.querySelector(".nasa-image");
    // this.listEl = document.querySelector(".recipe__list");
    this.spinnerEl = document.querySelector(".spinner");
    this.init();
  }
  showLoading() {
    this.spinnerEl.classList.add("spinner--visible");
    this.nasaEl.classList.add("recipe--invisible");
  }

  hideLoading() {
    this.spinnerEl.classList.remove("spinner--visible");
    this.nasaEl.classList.remove("recipe--invisible");
  }

  getNasa() {
    return fetch(this.apiUrl)
      .then(resp => resp.json())
      .then(data => data.collection.items[4].links[0]);
  }

  showNasa(rec) {
    // this.titleEl.innerHTML = rec.label;

    this.imageEl.src = rec.href;
    // this.listEl.innerHTML = "";
    // let items = "";
    // rec.ingredientLines.forEach(r => {
    //   items += `<li class="recipe__list-item">${r}</li>`;
    // });
    // this.listEl.innerHTML = items;
    this.hideLoading();
  }

  init() {
    this.showLoading();
    this.getNasa().then(n => this.showNasa(n));
  }
}

const button = document.querySelector(".recipes__button");
button.addEventListener("click", () => new Recipe());
