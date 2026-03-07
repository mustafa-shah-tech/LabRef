document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const cardsGrid = document.getElementById('cardsGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilters = document.getElementById('categoryFilters');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const resultsCount = document.getElementById('resultsCount');
    const emptyState = document.getElementById('emptyState');
    const themeToggle = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;

    // State
    let currentCategory = 'All';
    let searchQuery = '';

    // Initialize Application
    initTheme();
    renderCards(labTests);

    // Event Listeners
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterAndRender();
    });

    categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Update active class
            filterBtns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Update state
            currentCategory = e.target.dataset.category;
            filterAndRender();
        }
    });

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('labref-theme', newTheme);
    });

    // Core Logic
    function filterAndRender() {
        const filteredTests = labTests.filter(test => {
            const matchesCategory = currentCategory === 'All' || test.category === currentCategory;
            const matchesSearch = test.name.toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        requestAnimationFrame(() => renderCards(filteredTests));

        if (window.innerWidth < 768) {
            document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function renderCards(tests) {
        // Clear grid
        cardsGrid.innerHTML = '';

        // Update counts and empty state
        resultsCount.textContent = `Showing ${tests.length} of ${labTests.length} tests`;

        if (tests.length === 0) {
            emptyState.classList.remove('hidden');
            cardsGrid.style.display = 'none';
        } else {
            emptyState.classList.add('hidden');
            // Remove display none if it was previously set by empty state
            cardsGrid.style.display = '';

            // Render new cards
            tests.forEach((test, index) => {
                const card = createCard(test);
                cardsGrid.appendChild(card);

                // Stagger animations slightly
                setTimeout(() => {
                    card.classList.add('render');
                }, 30 * index);
            });
        }
    }

    function createCard(test) {
        const div = document.createElement('div');
        div.className = 'test-card';

        const badgeClass = `badge-${test.category.toLowerCase()}`;

        div.innerHTML = `
            <div class="card-header">
                <h3 class="test-name">${test.name}</h3>
                <span class="category-badge ${badgeClass}">${test.category}</span>
            </div>
            
            <table class="ranges-table">
                <tbody>
                    <tr>
                        <th>Male</th>
                        <td>${test.male}<span class="unit-cell">${test.unit}</span></td>
                    </tr>
                    <tr>
                        <th>Female</th>
                        <td>${test.female}<span class="unit-cell">${test.unit}</span></td>
                    </tr>
                </tbody>
            </table>
            
            <div class="indications">
                <div class="pill pill-high">
                    <strong>HIGH</strong> 
                    <span>${test.high}</span>
                </div>
                <div class="pill pill-low">
                    <strong>LOW</strong> 
                    <span>${test.low}</span>
                </div>
            </div>
        `;

        return div;
    }

    function initTheme() {
        const savedTheme = localStorage.getItem('labref-theme');
        if (savedTheme) {
            htmlEl.setAttribute('data-theme', savedTheme);
        } else {
            // Default to dark as requested
            htmlEl.setAttribute('data-theme', 'dark');
        }
    }
});
