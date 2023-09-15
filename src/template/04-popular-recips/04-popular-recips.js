const popularRecipsHtml = document.querySelector('.js-popular-recipes');

markingRecips();

// функція розмітки
async function markingRecips() {
  popularRecips();
  data.map(el => {
    const marcup = `<div class="precipes-marcup" id="${el._id}>
                <img class=" precipes-marcup-img" src="${el.preview}" alt="${el.title}">
                <div class="precipes-marcup-title">
                    <h3 class="precipes-marcup-title-text">${el.title}</h3>
                    <p class="precipes-marcup-text">${el.description}</p>
                </div>
            </div>`;
    popularRecipsHtml.insertAdjacentHTML('afterend', marcup);
  });
}
popularRecipsHtml.insertAdjacentHTML(
  'afterend',
  "<h2 class='precipes-title-text'>Popular recipes</h2>;"
);

// функція получення даних з бекенду
async function popularRecips() {
  const resp = await fetch(
    'https://tasty-treats-backend.p.goit.global/api/recipes/popular'
  );
  console.log(resp);

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  const data = await resp.json();
  return data;
}
