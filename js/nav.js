const Navbar = {
  // Initialize all navbar features
  init() {
    this.setupDropdowns();
    this.setupSearch();
    this.setupClickOutside();
    console.log('Navbar initialized successfully');
  },

  // Setup dropdown functionality  
  setupDropdowns() {
    const toggles = document.querySelectorAll('.dropdown-toggle');
    console.log(`Found ${toggles.length} dropdown toggles`);

    toggles.forEach(toggle => {
      // Remove any existing handlers
      toggle.onclick = null;

      // Attach clean click handler
      toggle.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const thisDropdown = toggle.nextElementSibling;
        
        if (!thisDropdown || !thisDropdown.classList.contains('dropdown-menu')) {
          console.warn('Dropdown menu not found for toggle:', toggle);
          return;
        }

        // Close all other dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== thisDropdown) {
            menu.classList.remove('open');
          }
        });

        // Toggle current dropdown
        thisDropdown.classList.toggle('open');
        
        console.log('Dropdown toggled:', thisDropdown.classList.contains('open'));
      };
    });
  },

  // Setup search functionality
  setupSearch() {
    const searchInput = document.getElementById("search-bar-input");
    
    if (!searchInput) {
      console.warn('Search input not found');
      return;
    }

    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.handleSearch(searchInput.value.trim().toLowerCase());
      }
    });

    console.log('Search functionality initialized');
  },

  // Handle search logic
  handleSearch(query) {
    if (!query) return;

    // Check if recipeDatabase exists (some pages might not have it)
    if (typeof recipeDatabase === 'undefined') {
      console.warn('recipeDatabase not found - search may not work on this page');
      // You could redirect to a search page or show a message
      alert('Search functionality not available on this page');
      return;
    }

    // Search through recipe database
    for (const key in recipeDatabase) {
      const recipe = recipeDatabase[key];
      const fullName = recipe.RECIPE_NAME.toLowerCase();

      if (fullName.includes(query)) {
        window.location.href = `recipe.html?recipe=${key}`;
        return;
      }
    }

    // No recipe found
    alert('No recipe found matching your search');
  },

  // Setup click outside to close dropdowns
  setupClickOutside() {
    document.addEventListener('click', (e) => {
      // Check if click is outside dropdown area
      if (
        !e.target.closest('.dropdown-toggle') &&
        !e.target.closest('.dropdown-menu')
      ) {
        // Close all dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.remove('open');
        });
      }
    });

    console.log('Click outside handler initialized');
  },

  // Utility method to reinitialize navbar (useful for dynamic content)
  reinitialize() {
    console.log('Reinitializing navbar...');
    this.init();
  }
};

// Initialize navbar when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  Navbar.init();
});

// Also initialize if DOM is already loaded (for late-loading scripts)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    Navbar.init();
  });
} else {
  // DOM is already loaded
  Navbar.init();
}

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navbar;
} else if (typeof window !== 'undefined') {
  window.Navbar = Navbar;
}