document.addEventListener('DOMContentLoaded', () => {
  renderSection('works', myWorks);
  renderSection('research', myResearch);
  renderSection('articles', myArticles);
  renderStats();
  renderTimeline();
  renderSkills();
  initTheme();
  initNav();
  initSpotlight();
  initProgress();
  initScrollAnimations();
  initBackToTop();
});

function renderSection(sectionId, dataArray) {
  const section = document.getElementById(sectionId);
  const mount = section && section.querySelector('.mount');
  if (!mount || !dataArray) return;

  const typeStr = sectionId === 'works' ? 'work' : (sectionId === 'research' ? 'research' : 'article');
  const allSkills = [...new Set(dataArray.flatMap(item => item.skills || []))];

  const filterHTML = `
    <div class="filter-bar" role="toolbar" aria-label="Filter ${sectionId}">
      <button class="filter-btn active" data-filter="all" type="button">All</button>
      ${allSkills.map(skill => `<button class="filter-btn" data-filter="${skill}" type="button">${skill}</button>`).join('')}
    </div>
  `;

  const gridHTML = dataArray.map((item, index) => {
    const skillsHTML = (item.skills || []).map(s => `<span class="skill-badge">${s}</span>`).join('');
    const statusHTML = item.status
      ? `<span class="status-badge status-${item.status.toLowerCase()}">${item.status}</span>`
      : '';

    return `
      <article class="project-card animate-on-scroll" data-skills="${(item.skills || []).join(',')}" style="--d:${Math.min(index, 6) * 0.06}s">
        <div class="project-image">
          <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
          ${statusHTML}
        </div>
        <div class="project-content">
          <h4>${item.title}</h4>
          <p class="truncated-text">${item.shortDescription}</p>
          <div class="d-flex flex-wrap gap-2">${skillsHTML}</div>
          <div class="card-actions">
            <button class="toggle-btn" type="button" onclick="openDetails('${typeStr}', ${index})">Details</button>
            ${item.githubUrl ? `<a class="github-btn" href="${item.githubUrl}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>` : ''}
            ${item.pdfUrl ? (/^https?:\/\//i.test(item.pdfUrl)
              ? `<a class="pdf-btn" href="${item.pdfUrl}" target="_blank" rel="noopener">Read paper</a>`
              : `<button class="pdf-btn" type="button" onclick="openPdf('${item.pdfUrl}')">${item.title.includes('Slides') ? 'View slides' : 'Read PDF'}</button>`) : ''}
            ${item.linkUrl ? `<a class="pdf-btn" href="${item.linkUrl}" target="_blank" rel="noopener">Read article</a>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');

  mount.innerHTML = `${filterHTML}<div class="project-grid">${gridHTML}</div>`;
  initFilters(section);
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
        const cardSkills = card.getAttribute('data-skills') || '';
        const show = filter === 'all' || cardSkills.split(',').includes(filter);
        card.style.display = show ? 'flex' : 'none';
      });
    });
  });
}

function showSection(sectionId, event) {
  if (event) event.preventDefault();
  const target = document.getElementById(sectionId);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  closeMenu();
}

function openDetails(type, index) {
  const data = type === 'work' ? myWorks : (type === 'research' ? myResearch : myArticles);
  const project = data[index];
  document.getElementById('modalProjectTitle').textContent = project.title;
  document.getElementById('modalProjectImage').src = project.imageUrl;
  document.getElementById('modalProjectImage').alt = project.title;
  document.getElementById('modalProjectDescription').innerHTML = project.fullDescription;
  new bootstrap.Modal(document.getElementById('projectDetailModal')).show();
}

function openPdf(url) {
  const frame = document.getElementById('pdfFrame');
  frame.src = url;
  const modalEl = document.getElementById('pdfModal');
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
  modalEl.addEventListener('hidden.bs.modal', () => { frame.src = ''; }, { once: true });
}

function renderStats() {
  const container = document.getElementById('statsContainer');
  if (!container || typeof profileStats === 'undefined') return;
  container.innerHTML = `<div class="stats-row">${profileStats.map(stat => `
    <div class="stat-card animate-on-scroll">
      <div class="stat-icon"><i class="${stat.icon}"></i></div>
      <div class="stat-value" data-count="${stat.value}">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('')}</div>`;
}

function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container || typeof experienceTimeline === 'undefined') return;
  container.innerHTML = experienceTimeline.map(item => `
    <article class="timeline-item animate-on-scroll">
      <div class="timeline-dot"><i class="${item.icon}"></i></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-institution">${item.institution}</p>
          </div>
          <span class="timeline-period">${item.period}</span>
        </div>
        <p class="timeline-description">${item.description}</p>
        ${item.highlight ? `<div class="timeline-highlight">${item.highlight}</div>` : ''}
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skillsContainer');
  if (!container || typeof skillCategories === 'undefined') return;
  container.innerHTML = skillCategories.map(category => `
    <article class="skill-category animate-on-scroll">
      <div class="skill-category-header">
        <i class="${category.icon} skill-category-icon"></i>
        <h3 class="skill-category-title">${category.category}</h3>
      </div>
      <div class="skill-category-badges">
        ${category.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(saved);

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', next);
    applyTheme(next);
  });

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const icon = toggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#08090e' : '#f4efe6');
  }
}

function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  const bar = document.getElementById('topbar');

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const links = [...menu.querySelectorAll('a')];
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const onScroll = () => {
    bar.classList.toggle('scrolled', window.scrollY > 8);
    const mark = window.scrollY + 120;
    let current = sections[0];
    sections.forEach(section => {
      if (section.offsetTop <= mark) current = section;
    });
    links.forEach(link => {
      link.classList.toggle('active', current && link.getAttribute('href') === `#${current.id}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function closeMenu() {
  const menu = document.getElementById('menu');
  const toggle = document.getElementById('navToggle');
  if (!menu || !toggle) return;
  menu.classList.remove('open');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
}

function initSpotlight() {
  const spot = document.getElementById('spotlight');
  if (!spot || window.matchMedia('(pointer: coarse)').matches) return;
  window.addEventListener('pointermove', (event) => {
    spot.style.opacity = '1';
    spot.style.left = `${event.clientX}px`;
    spot.style.top = `${event.clientY}px`;
  }, { passive: true });
}

function initProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  const update = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`;
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

let revealObserver;
function initScrollAnimations() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('animated');
        const value = entry.target.querySelector('[data-count]');
        if (value) countUp(value);
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }
  document.querySelectorAll('.animate-on-scroll:not(.animated)').forEach(el => revealObserver.observe(el));
}

function countUp(el) {
  const raw = el.getAttribute('data-count');
  const match = String(raw).match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return;
  const end = parseFloat(match[1]);
  const suffix = match[2];
  const decimals = match[1].includes('.') ? 1 : 0;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / 800);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (end * eased).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initBackToTop() {
  const button = document.getElementById('backToTop');
  if (!button) return;
  window.addEventListener('scroll', () => {
    button.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
