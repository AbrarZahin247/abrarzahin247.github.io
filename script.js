document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Sidebar Toggle Logic
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('#sidebar');
    
    if(mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            // Toggle icon between bars and times (X)
            if(sidebar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Render Project Sections
    // Note: myWorks and myResearch come from data.js
    renderSection('works', myWorks);
    renderSection('research', myResearch);
    renderSection('articles', myArticles);
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

    // 1. Dynamic Title
    let title = 'My Works';
    if (sectionId === 'research') title = 'My Research';
    if (sectionId === 'articles') title = 'Articles & Presentations'; // <--- New Title

    const typeStr = sectionId === 'works' ? 'work' : (sectionId === 'research' ? 'research' : 'article');

    const gridHTML = dataArray.map((item, index) => {
        const skillsHTML = item.skills.map(s => `<span class="skill-badge">${s}</span>`).join('');
        
        return `
        <div class="project-card">
            <div class="project-image">
                <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
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
        <div class="project-grid">
            ${gridHTML}
        </div>
    `;
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
    
    // Clear iframe src when closed to stop loading/playing
    modalEl.addEventListener('hidden.bs.modal', () => {
        frame.src = '';
    }, { once: true });
}