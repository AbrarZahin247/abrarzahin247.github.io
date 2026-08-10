document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('#sidebar');
    
    if(mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if(sidebar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    renderSection('works', myWorks);
    renderSection('research', myResearch);
    renderSection('articles', myArticles);
    renderStats();
    renderTimeline();
    renderSkills();
    initDarkMode();
    initScrollAnimations();
    initBackToTop();
});

// Function to generate the HTML grid for projects
// function renderSection(sectionId, dataArray) {
//     const container = document.querySelector(`#${sectionId}`);
//     if (!container) return;

//     // Set Title dynamically
//     const title = sectionId === 'works' ? 'My Works' : 'My Research';
//     // Determine type string for modal function
//     const typeStr = sectionId === 'works' ? 'work' : 'research';

//     // Inside function renderSection(sectionId, dataArray) ...

//     const gridHTML = dataArray.map((item, index) => {
//         const skillsHTML = item.skills.map(s => `<span class="skill-badge">${s}</span>`).join('');
//         const typeStr = sectionId === 'works' ? 'work' : 'research';

//         return `
//         <div class="project-card">
//             <div class="project-image">
//                 <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
//             </div>
//             <div class="project-content">
//                 <h4>${item.title}</h4>
//                 <p class="truncated-text">${item.shortDescription}</p>
//                 <div class="d-flex flex-wrap gap-2 mb-3">
//                     ${skillsHTML}
//                 </div>
//                 <div class="card-actions">
//                     <button class="toggle-btn" onclick="openDetails('${typeStr}', ${index})">
//                         <i class="fas fa-info-circle me-1"></i> Details
//                     </button>
                    
//                     ${item.githubUrl ? `
//                     <a href="${item.githubUrl}" target="_blank" class="github-btn">
//                         <i class="fab fa-github me-1"></i> Code
//                     </a>` : ''}

//                     ${item.pdfUrl ? `
//                     <button class="pdf-btn" onclick="openPdf('${item.pdfUrl}')">
//                         <i class="fas fa-file-pdf me-1"></i> Report
//                     </button>` : ''}
//                 </div>
//             </div>
//         </div>
//         `;
//     }).join('');

//     container.innerHTML = `
//         <h2 class="mb-4 fw-bold border-bottom pb-2">${title}</h2>
//         <div class="project-grid">
//             ${gridHTML}
//         </div>
//     `;
// }
function renderSection(sectionId, dataArray) {
    const container = document.querySelector(`#${sectionId}`);
    if (!container) return;

    let title = 'My Works';
    if (sectionId === 'research') title = 'My Research';
    if (sectionId === 'articles') title = 'Articles & Presentations';

    const typeStr = sectionId === 'works' ? 'work' : (sectionId === 'research' ? 'research' : 'article');

    const allSkills = [...new Set(dataArray.flatMap(item => item.skills))];
    
    const filterHTML = `
        <div class="filter-bar">
            <button class="filter-btn active" data-filter="all">All</button>
            ${allSkills.map(skill => `<button class="filter-btn" data-filter="${skill}">${skill}</button>`).join('')}
        </div>
    `;

    const gridHTML = dataArray.map((item, index) => {
        const skillsHTML = item.skills.map(s => `<span class="skill-badge">${s}</span>`).join('');
        
        const statusHTML = item.status
            ? `<span class="status-badge status-${item.status.toLowerCase()}">${item.status}</span>`
            : '';

        return `
        <div class="project-card animate-on-scroll" data-skills="${item.skills.join(',')}">
            <div class="project-image">
                <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
                ${statusHTML}
            </div>
            <div class="project-content">
                <h4>${item.title}</h4>
                <p class="truncated-text">${item.shortDescription}</p>
                <div class="d-flex flex-wrap gap-2 mb-3">
                    ${skillsHTML}
                </div>
                <div class="card-actions">
                    <button class="toggle-btn" onclick="openDetails('${typeStr}', ${index})">
                        <i class="fas fa-info-circle me-1"></i> Details
                    </button>
                    
                    ${item.githubUrl ? `
                    <a href="${item.githubUrl}" target="_blank" class="github-btn">
                        <i class="fab fa-github me-1"></i> Code
                    </a>` : ''}

                    ${item.pdfUrl ? `
                    <button class="pdf-btn" onclick="openPdf('${item.pdfUrl}')">
                        <i class="fas fa-file-pdf me-1"></i> ${item.title.includes('Slides') ? 'View Slides' : 'Read PDF'}
                    </button>` : ''}

                    ${item.linkUrl ? `
                    <a href="${item.linkUrl}" target="_blank" class="pdf-btn" style="text-decoration:none">
                        <i class="fas fa-external-link-alt me-1"></i> Read Article
                    </a>` : ''}
                </div>
            </div>
        </div>
        `;
    }).join('');

    container.innerHTML = `
        <h2 class="mb-4 fw-bold border-bottom pb-2">${title}</h2>
        ${filterHTML}
        <div class="project-grid">
            ${gridHTML}
        </div>
    `;
    
    initFilters(container);
    initScrollAnimations();
}

function initFilters(container) {
    const filterBtns = container.querySelectorAll('.filter-btn');
    const projectCards = container.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const cardSkills = card.getAttribute('data-skills');
                
                if (filter === 'all' || cardSkills.includes(filter)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}
// Function to handle Navigation Clicks
function showSection(sectionId, event) {
    if(event) event.preventDefault();
    
    // Hide all main sections
    document.querySelectorAll('.content-section').forEach(el => el.style.display = 'none');
    
    // Show the target section
    const target = document.getElementById(sectionId);
    if(target) target.style.display = 'block';
    
    // Update Active Link State
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    if (event && event.currentTarget.classList.contains('nav-link')) {
        event.currentTarget.classList.add('active');
    }

    // Mobile: Close sidebar automatically after clicking a link
    if(window.innerWidth < 992) {
        document.querySelector('#sidebar').classList.remove('active');
        const icon = document.querySelector('.mobile-nav-toggle i');
        if(icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

// Function to open Project Details Modal
// function openDetails(type, index) {
//     const data = type === 'work' ? myWorks : myResearch;
//     const project = data[index];
    
    
//     // Populate Modal Elements
//     document.getElementById('modalProjectTitle').textContent = project.title;
//     document.getElementById('modalProjectImage').src = project.imageUrl;
//     document.getElementById('modalProjectDescription').innerHTML = project.fullDescription;
    
//     // Show Bootstrap Modal
//     const modal = new bootstrap.Modal(document.getElementById('projectDetailModal'));
//     modal.show();
// }
function openDetails(type, index) {
    let data;
    if (type === 'work') data = myWorks;
    else if (type === 'research') data = myResearch;
    else if (type === 'article') data = myArticles; // <--- ADD THIS CHECK
    
    const project = data[index];
    // ... rest of function remains the same
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectImage').src = project.imageUrl;
    document.getElementById('modalProjectDescription').innerHTML = project.fullDescription;
    
    new bootstrap.Modal(document.getElementById('projectDetailModal')).show();
}

// Function to open PDF Modal
function openPdf(url) {
    const frame = document.getElementById('pdfFrame');
    frame.src = url;
    
    const modalEl = document.getElementById('pdfModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
    
    modalEl.addEventListener('hidden.bs.modal', () => {
        frame.src = '';
    }, { once: true });
}

function renderStats() {
    const container = document.getElementById('statsContainer');
    if (!container || typeof profileStats === 'undefined') return;
    
    const statsHTML = profileStats.map(stat => `
        <div class="stat-card animate-on-scroll">
            <div class="stat-icon"><i class="${stat.icon}"></i></div>
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');
    
    container.innerHTML = `<div class="stats-row">${statsHTML}</div>`;
}

function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container || typeof experienceTimeline === 'undefined') return;
    
    const timelineHTML = experienceTimeline.map(item => `
        <div class="timeline-item animate-on-scroll">
            <div class="timeline-dot">
                <i class="${item.icon}"></i>
            </div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <div>
                        <h5 class="timeline-title">${item.title}</h5>
                        <p class="timeline-institution">${item.institution}</p>
                    </div>
                    <span class="timeline-period">${item.period}</span>
                </div>
                <p class="timeline-description">${item.description}</p>
                ${item.highlight ? `<div class="timeline-highlight"><strong>${item.highlight}</strong></div>` : ''}
            </div>
        </div>
    `).join('');
    
    container.innerHTML = timelineHTML;
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container || typeof skillCategories === 'undefined') return;
    
    const skillsHTML = skillCategories.map(category => {
        const badgesHTML = category.skills.map(skill => 
            `<span class="skill-badge">${skill}</span>`
        ).join('');
        
        return `
            <div class="skill-category animate-on-scroll">
                <div class="skill-category-header">
                    <i class="${category.icon} skill-category-icon"></i>
                    <h5 class="skill-category-title">${category.category}</h5>
                </div>
                <div class="skill-category-badges">
                    ${badgesHTML}
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = skillsHTML;
}

function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = html.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

