/* ============================================
   TELUGU CONFESSIONS - SCRIPT.JS
   Vanilla JavaScript - No Frameworks
   ============================================ */

// ============================================
// DATA
// ============================================

const categories = [
    {
        id: 'telugu-confessions',
        name: 'Telugu Confessions',
        teluguName: 'తెలుగు కన్ఫెషన్స్',
        description: 'Heart-touching stories from Telugu hearts',
        icon: '💜',
    },
    {
        id: 'pellam-confessions',
        name: 'Pellam Confessions',
        teluguName: 'పెళ్ళాం కన్ఫెషన్స్',
        description: 'Stories from married life',
        icon: '💍',
    },
    {
        id: 'nri-confessions',
        name: 'NRI Confessions',
        teluguName: 'NRI కన్ఫెషన్స్',
        description: 'Stories from abroad',
        icon: '✈️',
    },
    {
        id: 'software-confessions',
        name: 'Software Confessions',
        teluguName: 'సాఫ్ట్‌వేర్ కన్ఫెషన్స్',
        description: 'Tales from the tech world',
        icon: '💻',
    },
    {
        id: 'hyderabad-confessions',
        name: 'Hyderabad Confessions',
        teluguName: 'హైదరాబాద్ కన్ఫెషన్స్',
        description: 'Stories from the city of pearls',
        icon: '🏙️',
    },
    {
        id: 'love-stories',
        name: 'Love Stories',
        teluguName: 'ప్రేమ కథలు',
        description: 'Beautiful tales of love',
        icon: '❤️',
    },
];

const confessions = [
    {
        id: '1',
        title: 'Pregnancy ayyaka naa husband behaviour change ayindi',
        content: `My husband and I got married through an arrange marriage. It was all good till an year. We used to chill out, late night talks, celebrating each other most of the times. He used to see my previous chats suddenly. I've already informed him that I had an ex but I haven't done anything wrong.

After I got pregnant, everything changed. He became distant, stopped talking to me properly. I don't know what happened. Sometimes I feel so alone in this journey. I just want my old husband back. The one who used to make me laugh, who used to care about my feelings.

నా బాధ ఎవరికి చెప్పుకోను? అమ్మ దగ్గరికి వెళ్ళాలని ఉంది కానీ వాళ్ళు worry అవుతారు. ఈ confusion లో నేను ఉన్నాను.`,
        excerpt: 'My husband and I got married through an arrange marriage. It was all good till an year. We used to chill out, late night talks, celebrating each other most of the times...',
        author: 'Guest',
        category: 'pellam-confessions',
        tags: ['Marriage', 'Pregnancy', 'Relationship'],
        likes: 245,
        comments: 32,
        createdAt: '2025-11-22',
    },
    {
        id: '2',
        title: 'Naa Childhood Lo Jarigina Confession',
        content: `Naa peru Pavan, madhi Vizag. Nenu chinnapatnundi chala introvert ni ewaritho ekkuva kalise vadini kaadu, so friends evaru leru eppudu intlone unde vadini.

Alanti time lo kotha ga maa street lo internet cafe okati open chesaru, dantho pattu playstation and games kuda 1hour ki ala rent ki tesukoni aadukovochu. Naku games ante interest undatam valla daily velle vadini.

అక్కడ నాకు ఒక friend దొరికింది. Life లో first time proper friendship అనుభవించాను. But ఆ cafe close అయిపోయాక, మేము contact లో ఉండలేకపోయాము. ఇప్పటికీ ఆ friend గుర్తొస్తుంది.`,
        excerpt: 'Naa peru Pavan, madhi Vizag. Nenu chinnapatnundi chala introvert ni ewaritho ekkuva kalise vadini kaadu...',
        author: 'Pavan',
        category: 'telugu-confessions',
        tags: ['Childhood', 'Friendship', 'Memories'],
        likes: 189,
        comments: 24,
        createdAt: '2025-11-16',
    },
    {
        id: '3',
        title: 'Missing Intimacy In My Life',
        content: `I married to the most wonderful and responsible man a girl can ever find. 15 years of knowing my man and 6 years of relationship tharuvatha parents tho godava padi we got married!

26 years kalla we got settled with jobs and house and have decent income and no financial stress of taking care of parents. But something is missing. The spark that we had during our dating days is gone.

We both are so busy with work that we forgot to nurture our relationship. I miss those days when he used to surprise me, when we used to have long conversations about nothing and everything.`,
        excerpt: 'I married to the most wonderful and responsible man a girl can ever find. 15 years of knowing my man and 6 years of relationship...',
        author: 'Guest',
        category: 'nri-confessions',
        tags: ['Marriage', 'NRI Life', 'Relationship'],
        likes: 312,
        comments: 45,
        createdAt: '2025-11-14',
    },
    {
        id: '4',
        title: 'Software job lo depression face chesanu',
        content: `Hi everyone, nenu oka software company lo work chestunna. Initially chala happy ga unde vadini with good package and everything. But slowly work pressure increase ayindi.

Manager toxic, deadlines impossible, work-life balance ante em undo marchipoyanu. Nights sleep raaledu, weekends kuda work. Family time zero.

One day I broke down completely. Realized health is more important than any job. Now I'm taking therapy and slowly recovering. To everyone going through similar situation - please take care of yourselves.`,
        excerpt: 'Hi everyone, nenu oka software company lo work chestunna. Initially chala happy ga unde vadini with good package...',
        author: 'Anonymous Dev',
        category: 'software-confessions',
        tags: ['Mental Health', 'Work Life', 'Recovery'],
        likes: 567,
        comments: 89,
        createdAt: '2025-11-10',
    },
    {
        id: '5',
        title: 'First Love Story - Hyderabad lo start ayindi',
        content: `Nenu engineering first year lo unnapudu, Hyderabad lo maa college canteen lo first time chusanu her. Simple kurta, reading a book, completely lost in her own world.

I didn't have courage to talk to her for 6 months! Finally one day library lo accidentally same book kosam reach chesamu. That was our first conversation.

4 years of beautiful friendship turned into love. Now we are married for 2 years. Sometimes I still can't believe that the girl I was too shy to talk to is now my wife. Life is beautiful when you find the right person.`,
        excerpt: 'Nenu engineering first year lo unnapudu, Hyderabad lo maa college canteen lo first time chusanu her...',
        author: 'Happy Husband',
        category: 'hyderabad-confessions',
        tags: ['Love', 'College', 'Happy Ending'],
        likes: 892,
        comments: 123,
        createdAt: '2025-11-08',
    },
    {
        id: '6',
        title: 'Long Distance Relationship Success Story',
        content: `5 years long distance relationship after marriage! Yes, you read it right. Naa husband US lo, nenu India lo. Visa issues valla we couldn't be together for 5 years.

Video calls became our dinner dates, messages became our morning kisses. It was hard, extremely hard. There were times when I wanted to give up. But his love kept me going.

Finally last month I got my visa. Now we are together and every small moment feels like a blessing. To all couples in LDR - if the love is real, distance is just a test.`,
        excerpt: '5 years long distance relationship after marriage! Yes, you read it right. Naa husband US lo, nenu India lo...',
        author: 'Finally Together',
        category: 'love-stories',
        tags: ['LDR', 'Marriage', 'Patience'],
        likes: 1024,
        comments: 156,
        createdAt: '2025-11-05',
    },
];

// ============================================
// STATE
// ============================================

let state = {
    currentPage: 'home',
    theme: localStorage.getItem('theme') || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    visibleConfessions: [],
    displayedCount: 4,
    searchQuery: '',
    likedConfessions: JSON.parse(localStorage.getItem('likedConfessions') || '[]'),
    currentConfession: null,
};

// ============================================
// UTILITIES
// ============================================

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function formatFullDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getCategoryById(categoryId) {
    return categories.find(c => c.id === categoryId);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// THEME
// ============================================

function initTheme() {
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
    updateThemeIcon();
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
    localStorage.setItem('theme', state.theme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    if (state.theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    // Handle all navigation clicks
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
        });
    });
    
    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial navigation based on hash
    handleHashChange();
}

function handleHashChange() {
    const hash = window.location.hash.slice(1) || 'home';
    
    // Check if it's a confession page
    if (hash.startsWith('confession-')) {
        const id = hash.replace('confession-', '');
        showConfession(id);
    } else {
        navigateTo(hash);
    }
}

function navigateTo(page) {
    state.currentPage = page;
    
    // Update URL
    window.location.hash = page;
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show target page
    const targetPage = document.getElementById(page);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
    
    // Close mobile menu
    closeMobileMenu();
    
    // Update floating button visibility
    updateFloatingButton();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateFloatingButton() {
    const floatingBtn = document.getElementById('floatingBtn');
    if (floatingBtn) {
        floatingBtn.classList.toggle('hidden', state.currentPage === 'submit');
    }
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        updateMenuIcon();
    });
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('open');
    updateMenuIcon();
}

function updateMenuIcon() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileMenu.classList.contains('open')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// ============================================
// HEADER SCROLL
// ============================================

function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
    });
}

// ============================================
// CATEGORIES
// ============================================

function renderCategories() {
    // Home page categories grid
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (categoriesGrid) {
        categoriesGrid.innerHTML = categories.map((cat, index) => `
            <div class="category-card glass-card" data-category="${cat.id}" style="animation-delay: ${index * 100}ms">
                <div class="category-icon">${cat.icon}</div>
                <h3 class="category-name">${cat.name}</h3>
                <p class="category-telugu">${cat.teluguName}</p>
            </div>
        `).join('');
        
        // Add click handlers
        categoriesGrid.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const categoryId = card.dataset.category;
                filterByCategory(categoryId);
            });
        });
    }
    
    // Categories page grid
    const categoriesPageGrid = document.getElementById('categoriesPageGrid');
    if (categoriesPageGrid) {
        categoriesPageGrid.innerHTML = categories.map((cat, index) => {
            const count = confessions.filter(c => c.category === cat.id).length;
            return `
                <div class="category-page-card glass-card" data-category="${cat.id}" style="animation-delay: ${index * 100}ms">
                    <div class="category-page-header">
                        <div class="category-page-icon">${cat.icon}</div>
                        <span class="category-badge">${count} stories</span>
                    </div>
                    <h2 class="category-page-title">${cat.name}</h2>
                    <p class="category-page-telugu telugu-text">${cat.teluguName}</p>
                    <p class="category-page-description">${cat.description}</p>
                    <a href="#" class="link-arrow" data-category="${cat.id}">
                        View Stories
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            `;
        }).join('');
        
        // Add click handlers
        categoriesPageGrid.querySelectorAll('[data-category]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const categoryId = el.dataset.category;
                filterByCategory(categoryId);
            });
        });
    }
    
    // Footer categories
    const footerCategories = document.getElementById('footerCategories');
    if (footerCategories) {
        footerCategories.innerHTML = categories.slice(0, 4).map(cat => `
            <li><a href="#" data-category="${cat.id}">${cat.name}</a></li>
        `).join('');
        
        footerCategories.querySelectorAll('[data-category]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                filterByCategory(link.dataset.category);
            });
        });
    }
    
    // Category select in form
    const categorySelect = document.getElementById('confessionCategory');
    if (categorySelect) {
        categorySelect.innerHTML = '<option value="">Select a category</option>' +
            categories.map(cat => `
                <option value="${cat.id}">${cat.icon} ${cat.name}</option>
            `).join('');
    }
}

function filterByCategory(categoryId) {
    state.searchQuery = '';
    document.getElementById('searchInput').value = '';
    
    const filtered = confessions.filter(c => c.category === categoryId);
    state.visibleConfessions = filtered;
    state.displayedCount = filtered.length;
    
    renderConfessions();
    navigateTo('home');
    
    const category = getCategoryById(categoryId);
    showToast(`Showing ${category.name}`);
}

// ============================================
// CONFESSIONS
// ============================================

function renderConfessions() {
    const grid = document.getElementById('confessionsGrid');
    if (!grid) return;
    
    const toShow = state.visibleConfessions.slice(0, state.displayedCount);
    
    grid.innerHTML = toShow.map((confession, index) => {
        const category = getCategoryById(confession.category);
        const isLiked = state.likedConfessions.includes(confession.id);
        
        return `
            <article class="confession-card glass-card" style="animation-delay: ${index * 100}ms">
                <a href="#confession-${confession.id}" class="confession-card-link">
                    <div class="confession-category">
                        <span class="confession-category-badge">
                            <span>${category.icon}</span>
                            ${category.name}
                        </span>
                    </div>
                    
                    <div class="confession-content">
                        <h2 class="confession-title">${confession.title}</h2>
                        <p class="confession-excerpt telugu-text">${confession.excerpt}</p>
                    </div>
                    
                    <div class="confession-meta">
                        <span class="confession-meta-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            ${confession.author}
                        </span>
                        <span class="confession-meta-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            ${formatDate(confession.createdAt)}
                        </span>
                    </div>
                </a>
                
                <div class="confession-actions">
                    <button class="confession-action ${isLiked ? 'liked' : ''}" data-action="like" data-id="${confession.id}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span class="like-count">${isLiked ? confession.likes + 1 : confession.likes}</span>
                    </button>
                    
                    <a href="#confession-${confession.id}" class="confession-action">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>${confession.comments}</span>
                    </a>
                    
                    <button class="confession-action confession-share" data-action="share" data-id="${confession.id}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                    </button>
                </div>
            </article>
        `;
    }).join('');
    
    // Add action handlers
    grid.querySelectorAll('[data-action="like"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleLike(btn.dataset.id, btn);
        });
    });
    
    grid.querySelectorAll('[data-action="share"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleShare(btn.dataset.id);
        });
    });
    
    // Update load more state
    updateLoadMore();
}

function initConfessions() {
    state.visibleConfessions = [...confessions];
    state.displayedCount = 4;
    renderConfessions();
}

function loadMoreConfessions() {
    if (state.displayedCount >= state.visibleConfessions.length) return;
    
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
    
    setTimeout(() => {
        state.displayedCount += 4;
        renderConfessions();
        loader.style.display = 'none';
    }, 500);
}

function updateLoadMore() {
    const endMessage = document.getElementById('endMessage');
    
    if (state.displayedCount >= state.visibleConfessions.length && state.visibleConfessions.length > 4) {
        endMessage.style.display = 'block';
    } else {
        endMessage.style.display = 'none';
    }
}

// ============================================
// SINGLE CONFESSION
// ============================================

function showConfession(id) {
    const confession = confessions.find(c => c.id === id);
    if (!confession) {
        navigateTo('home');
        return;
    }
    
    state.currentConfession = confession;
    const category = getCategoryById(confession.category);
    const isLiked = state.likedConfessions.includes(confession.id);
    
    const detailContainer = document.getElementById('confessionDetail');
    detailContainer.innerHTML = `
        <header class="confession-detail-header">
            <span class="confession-category-badge">
                <span>${category.icon}</span>
                ${category.name}
            </span>
            
            <h1 class="confession-detail-title">${confession.title}</h1>
            
            <div class="confession-detail-meta">
                <span class="confession-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    ${confession.author}
                </span>
                <span class="confession-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    ${formatFullDate(confession.createdAt)}
                </span>
                <span>(${formatDate(confession.createdAt)})</span>
            </div>
        </header>
        
        <div class="confession-detail-content glass-card">
            <div class="confession-detail-text telugu-text">
                ${confession.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
            </div>
            
            <div class="confession-detail-tags">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
                ${confession.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        <div class="confession-detail-actions glass-card">
            <button class="detail-action ${isLiked ? 'liked' : ''}" id="detailLikeBtn">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span id="detailLikeCount">${isLiked ? confession.likes + 1 : confession.likes}</span>
            </button>
            
            <div class="detail-action">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>${confession.comments}</span>
            </div>
            
            <button class="detail-action" id="detailShareBtn">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                <span>Share</span>
            </button>
        </div>
        
        <div class="confession-detail-comments glass-card">
            <h3>Leave a Comment</h3>
            <textarea class="comment-textarea telugu-text" placeholder="Share your thoughts... మీ అభిప్రాయం చెప్పండి"></textarea>
            <button class="btn btn-primary">Post Comment</button>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('detailLikeBtn').addEventListener('click', () => {
        handleDetailLike(confession.id);
    });
    
    document.getElementById('detailShareBtn').addEventListener('click', () => {
        handleShare(confession.id);
    });
    
    // Show confession page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('confession').classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// ACTIONS
// ============================================

function handleLike(id, btn) {
    const isLiked = state.likedConfessions.includes(id);
    
    if (isLiked) {
        state.likedConfessions = state.likedConfessions.filter(i => i !== id);
        btn.classList.remove('liked');
    } else {
        state.likedConfessions.push(id);
        btn.classList.add('liked');
    }
    
    localStorage.setItem('likedConfessions', JSON.stringify(state.likedConfessions));
    
    // Update count
    const confession = confessions.find(c => c.id === id);
    const countEl = btn.querySelector('.like-count');
    countEl.textContent = state.likedConfessions.includes(id) ? confession.likes + 1 : confession.likes;
}

function handleDetailLike(id) {
    const btn = document.getElementById('detailLikeBtn');
    const countEl = document.getElementById('detailLikeCount');
    const isLiked = state.likedConfessions.includes(id);
    
    if (isLiked) {
        state.likedConfessions = state.likedConfessions.filter(i => i !== id);
        btn.classList.remove('liked');
    } else {
        state.likedConfessions.push(id);
        btn.classList.add('liked');
    }
    
    localStorage.setItem('likedConfessions', JSON.stringify(state.likedConfessions));
    
    const confession = confessions.find(c => c.id === id);
    countEl.textContent = state.likedConfessions.includes(id) ? confession.likes + 1 : confession.likes;
}

async function handleShare(id) {
    const confession = confessions.find(c => c.id === id);
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: confession.title,
                text: confession.excerpt,
                url: `${window.location.origin}#confession-${id}`
            });
        } catch (err) {
            console.log('Share cancelled');
        }
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(`${window.location.origin}#confession-${id}`);
        showToast('Link copied to clipboard!');
    }
}

// ============================================
// SEARCH
// ============================================

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        state.searchQuery = query;
        
        searchClear.style.display = query ? 'flex' : 'none';
        
        filterConfessions(query);
    });
    
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        searchClear.style.display = 'none';
        filterConfessions('');
    });
}

function filterConfessions(query) {
    if (!query) {
        state.visibleConfessions = [...confessions];
    } else {
        const lowerQuery = query.toLowerCase();
        state.visibleConfessions = confessions.filter(c =>
            c.title.toLowerCase().includes(lowerQuery) ||
            c.content.toLowerCase().includes(lowerQuery) ||
            c.tags.some(t => t.toLowerCase().includes(lowerQuery))
        );
    }
    
    state.displayedCount = Math.min(4, state.visibleConfessions.length);
    renderConfessions();
}

// ============================================
// INFINITE SCROLL
// ============================================

function initInfiniteScroll() {
    const options = {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && state.currentPage === 'home') {
                loadMoreConfessions();
            }
        });
    }, options);
    
    const loadMore = document.getElementById('loadMore');
    if (loadMore) {
        observer.observe(loadMore);
    }
}

// ============================================
// FORM HANDLING
// ============================================

function initForm() {
    const form = document.getElementById('confessionForm');
    const contentTextarea = document.getElementById('confessionContent');
    const charCount = document.getElementById('charCount');
    
    // Character count
    contentTextarea.addEventListener('input', () => {
        charCount.textContent = contentTextarea.value.length;
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span style="animation: spin 1s linear infinite;">⏳</span> Submitting...';
        
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success
        form.style.display = 'none';
        document.querySelector('.submit-header').style.display = 'none';
        document.getElementById('submitSuccess').style.display = 'block';
        
        showToast('Confession submitted successfully! 💕');
        
        // Reset and redirect after delay
        setTimeout(() => {
            form.reset();
            charCount.textContent = '0';
            form.style.display = 'flex';
            document.querySelector('.submit-header').style.display = 'block';
            document.getElementById('submitSuccess').style.display = 'none';
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Submit Confession
            `;
            navigateTo('home');
        }, 2000);
    });
}

function validateForm() {
    let isValid = true;
    
    const title = document.getElementById('confessionTitle');
    const titleError = document.getElementById('titleError');
    const category = document.getElementById('confessionCategory');
    const categoryError = document.getElementById('categoryError');
    const content = document.getElementById('confessionContent');
    const contentError = document.getElementById('contentError');
    
    // Reset errors
    title.classList.remove('error');
    category.classList.remove('error');
    content.classList.remove('error');
    titleError.textContent = '';
    categoryError.textContent = '';
    contentError.textContent = '';
    
    // Validate title
    if (!title.value.trim()) {
        title.classList.add('error');
        titleError.textContent = 'Title is required';
        isValid = false;
    } else if (title.value.length < 10) {
        title.classList.add('error');
        titleError.textContent = 'Title must be at least 10 characters';
        isValid = false;
    }
    
    // Validate category
    if (!category.value) {
        category.classList.add('error');
        categoryError.textContent = 'Please select a category';
        isValid = false;
    }
    
    // Validate content
    if (!content.value.trim()) {
        content.classList.add('error');
        contentError.textContent = 'Story content is required';
        isValid = false;
    } else if (content.value.length < 100) {
        content.classList.add('error');
        contentError.textContent = 'Story must be at least 100 characters';
        isValid = false;
    }
    
    if (!isValid) {
        showToast('Please fix the errors in the form');
    }
    
    return isValid;
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initMobileMenu();
    initHeaderScroll();
    renderCategories();
    initConfessions();
    initSearch();
    initInfiniteScroll();
    initForm();
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});

// Add CSS animation for spinner
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
