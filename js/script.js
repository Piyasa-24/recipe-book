// Function to get URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to populate template with data
function populateTemplate(data) {
  const container = document.querySelector('#main-container');
  if (!container) return;

  // Store original template only once
  let html = container.dataset.template || container.innerHTML;
  if (!container.dataset.template) {
    container.dataset.template = html;
  }

  // Replace text placeholders (except image URLs)
  for (const [key, value] of Object.entries(data)) {
    // Skip image URL keys here
    if (key === 'HERO_IMAGE_URL' || key === 'CHEF_AVATAR_URL') continue;

    const placeholder = `{{${key}}}`;
    html = html.replace(new RegExp(placeholder, 'g'), value);
  }

  // Inject content with replaced text
  container.innerHTML = html;

  // Inject image URLs directly by setting src attribute
  const heroImageElem = container.querySelector('.recipe-image');
  if (heroImageElem && data.HERO_IMAGE_URL) {
    heroImageElem.src = data.HERO_IMAGE_URL;
  }

  const chefAvatarElem = container.querySelector('.chef-avatar');
  if (chefAvatarElem && data.CHEF_AVATAR_URL) {
    chefAvatarElem.src = data.CHEF_AVATAR_URL;
  }

  // Re-bind dropdowns after DOM changes
  setupDropdowns();
}


// Function to load recipe based on URL parameter
function loadRecipeFromUrl() {
  const recipeParam = getUrlParameter('recipe');
  if (!recipeParam) return;

  const recipeData = getRecipeByKey(recipeParam);
  if (!recipeData) return;

  populateTemplate(recipeData);
  document.title = `${recipeData.RECIPE_NAME} - Recipe`;
}

// Updated window load event listener
window.addEventListener('load', () => {
  if (window.location.pathname.includes('recipe.html') || getUrlParameter('recipe')) {
    loadRecipeFromUrl();
  } else if (typeof recipeData !== 'undefined') {
    populateTemplate(recipeData);
  }
});

// Allow re-initialization if content is dynamically added
window.addEventListener('contentUpdated', () => {
  setupDropdowns();
});
