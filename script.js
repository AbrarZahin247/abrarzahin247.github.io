// --- DYNAMIC CONTENT RENDERING ---

document.addEventListener('DOMContentLoaded', () => {
    const worksContainer = document.querySelector('#works');
    const researchContainer = document.querySelector('#research');

    // Updated function to create cards. Note the new onclick attribute.
    const createCardHTML = (item, type, index) => {
        const skillBadgesHTML = item.skills.map(skill => `<div class="skill-badge">${skill}</div>`).join('');
        
        // Button now calls showProjectDetails, passing the type and index
        const detailsButtonHTML = item.fullDescription 
            ? `<button class="toggle-btn" onclick="showProjectDetails('${type}', ${index})">Show more</button>` 
            : '';
        
        const pdfButtonHTML = item.pdfUrl 
            ? `<button class="pdf-btn" onclick="openPdfModal('${item.pdfUrl}')">View Full Report</button>` 
            : '';

        return `
            <div class="project-card">
                <div class="project-image">
                    <img src="${item.imageUrl}" alt="${item.title}">
                </div>
                <div class="project-content">
                    <h4>${item.title}</h4>
                    <p class="truncated-text">${item.shortDescription}</p>
                    <div class="skill-badges">${skillBadgesHTML}</div>
                    <div class="card-actions">
                        ${detailsButtonHTML}
                        ${pdfButtonHTML}
                    </div>
                </div>
            </div>
        `;
    };
    
    // Populate sections, passing the item, type, and index to the card creator
    worksContainer.innerHTML = `
        <h2 class="mb-4 px-4 fw-bolder">My Works</h2>
        <div class="project-grid">
            ${myWorks.map((item, index) => createCardHTML(item, 'work', index)).join('')}
        </div>`;

    researchContainer.innerHTML = `
        <h2 class="mb-4 px-4 fw-bolder">My Research</h2>
        <div class="project-grid">
            ${myResearch.map((item, index) => createCardHTML(item, 'research', index)).join('')}
        </div>`;
});


// --- INTERACTIVE FUNCTIONS ---

// NEW: Function to populate and show the project detail modal
function showProjectDetails(type, index) {
    // Determine which data array to use
    const projectData = (type === 'work') ? myWorks : myResearch;
    const project = projectData[index];

    // Get references to modal elements
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalImage = document.getElementById('modalProjectImage');
    const modalDescription = document.getElementById('modalProjectDescription');
    
    // Populate the modal with the selected project's data
    modalTitle.textContent = project.title;
    modalImage.src = project.imageUrl;
    modalImage.alt = project.title;
    modalDescription.innerHTML = project.fullDescription;

    // Create a new Bootstrap modal instance and show it
    const projectModal = new bootstrap.Modal(document.getElementById('projectDetailModal'));
    projectModal.show();
}

// Kept the same for navigation
function showSection(sectionId, event) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// Kept the same for PDF viewing
function openPdfModal(pdfUrl) {
    const pdfFrame = document.getElementById('pdfFrame');
    const modal = new bootstrap.Modal(document.getElementById('pdfModal'));
    
    pdfFrame.src = pdfUrl;
    modal.show();
    
    document.getElementById('pdfModal').addEventListener('hidden.bs.modal', () => {
        pdfFrame.src = '';
    }, { once: true });
}

// Kept the same for background effect
const colours = ["#f8f9fa", "#f1f3f5", "#e9ecef"];
let index = 0;
let lastChange = 0;
const delay = 500;

document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastChange < delay) return;
    lastChange = now;
    index = (index + 1) % colours.length;
    document.body.style.backgroundColor = colours[index];
});