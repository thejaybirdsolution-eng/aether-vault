/* ==========================================================================
   JAYBIRD ARCHIVE — MONOCHROME ARCHITECTURAL LAUNCHER (15 RELEASES)
   ========================================================================== */

const PLATFORM_ICONS = {
  windows: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="2" y="2" width="9" height="9" rx="1"></rect>
    <rect x="13" y="2" width="9" height="9" rx="1"></rect>
    <rect x="2" y="13" width="9" height="9" rx="1"></rect>
    <rect x="13" y="13" width="9" height="9" rx="1"></rect>
  </svg>`,
  android: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 16V15a7 7 0 0 1 14 0v1H5z"></path>
    <line x1="8" y1="9" x2="6" y2="6"></line>
    <line x1="16" y1="9" x2="18" y2="6"></line>
    <circle cx="9.5" cy="12.5" r="0.8" fill="currentColor"></circle>
    <circle cx="14.5" cy="12.5" r="0.8" fill="currentColor"></circle>
    <rect x="5" y="16" width="14" height="4" rx="1"></rect>
  </svg>`,
  gba: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="2" y="6" width="20" height="12" rx="3.5"></rect>
    <rect x="8.5" y="8.5" width="7" height="7" rx="1"></rect>
    <path d="M5.2 11v2M4.2 12h2"></path>
    <circle cx="18.2" cy="11" r="0.8" fill="currentColor"></circle>
    <circle cx="19.6" cy="12.8" r="0.8" fill="currentColor"></circle>
  </svg>`
};

const RELEASES = [
  // ========================================================================
  // TIER 1: 5 STARRED FLAGSHIPS (5-COLUMN TOP ROW)
  // ========================================================================
  {
    id: 1,
    file: 'ClipCut-win-x64.zip',
    title: 'ClipCut',
    desc: 'Native Windows x64 video trimmer, timeline clipper, and interactive crop overlay utility.',
    category: 'windows',
    platformIcon: 'windows',
    format: 'WINDOWS x64',
    ext: 'win',
    size: '112 KB',
    starred: true
  },
  {
    id: 2,
    file: 'Jbird-Reader.apk',
    title: 'Jbird Reader',
    desc: 'Native Android book, document, and comic reader with offline indexing and OLED dark UI.',
    category: 'android',
    platformIcon: 'android',
    format: 'ANDROID APK',
    ext: 'apk',
    size: '60.5 MB',
    starred: true
  },
  {
    id: 3,
    file: 'Multiverse-Brawl-Android.apk',
    title: 'Multiverse Brawl Android',
    desc: 'Standalone Android APK port of Multiverse Brawl with touch controls and full fighter roster.',
    category: 'android',
    platformIcon: 'android',
    format: 'ANDROID APK',
    ext: 'apk',
    size: '10.6 MB',
    starred: true
  },
  {
    id: 4,
    file: 'Pokemon - Ruby Version (U) (V1.1) - Mod Menu.gba',
    title: 'Pokémon Ruby + Mod Menu',
    desc: 'Pokémon Ruby (v1.1) GBA ROM with integrated in-game Mod Menu for warp, spawns, and debug.',
    category: 'pokemon',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '16.0 MB',
    starred: true
  },
  {
    id: 5,
    file: 'multiverse_brawl.gba',
    title: 'Multiverse Brawl',
    desc: 'Cross-franchise GBA platform fighter featuring custom knockback physics and special cancels.',
    category: 'original',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '3.28 MB',
    starred: true,
    crossPortNote: 'Android APK port also available →',
    crossPortTargetId: 3
  },

  // ========================================================================
  // TIER 2: 10 ARCHIVE BUILDS (5 x 2 GRID)
  // ========================================================================
  {
    id: 6,
    file: 'Pokemon-Ruby-Android-1.3.1.apk',
    title: 'Pokémon Ruby Android v1.3.1',
    desc: 'Native Android APK with built-in Mod Menu overlay and instant dialogue skip.',
    category: 'android',
    platformIcon: 'android',
    format: 'ANDROID APK',
    ext: 'apk',
    size: '21.7 MB',
    starred: false
  },
  {
    id: 7,
    file: 'pokefirered_live_action.gba',
    title: 'Pokémon FireRed: Live Action',
    desc: '16 MB FireRed overhaul with real-time combat mechanics and direct overworld action.',
    category: 'pokemon',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '16.0 MB',
    starred: false
  },
  {
    id: 8,
    file: 'Pokemon_LeafGreen_x_Zelda_Minish_Cap.gba',
    title: 'LeafGreen × Zelda Minish Cap',
    desc: 'Kanto & Hyrule crossover blending Pokémon LeafGreen and Minish Cap mechanics.',
    category: 'pokemon',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '16.0 MB',
    starred: false
  },
  {
    id: 9,
    file: 'Pokemon_LeafGreen_MK_Edition.gba',
    title: 'LeafGreen: MK Edition',
    desc: 'Custom LeafGreen Mortal Kombat Edition featuring arcade fighter encounters.',
    category: 'pokemon',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '16.0 MB',
    starred: false
  },
  {
    id: 10,
    file: 'Pokemon_Kombat_Advance.gba',
    title: 'Pokémon Kombat Advance',
    desc: '60fps 2D arena fighting engine engineered natively for Game Boy Advance.',
    category: 'pokemon',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '64 KB',
    starred: false
  },
  {
    id: 11,
    file: 'tidemark.gba',
    title: 'Tidemark',
    desc: 'Original maritime tactical exploration and oceanic adventure built for GBA.',
    category: 'original',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '2.00 MB',
    starred: false
  },
  {
    id: 12,
    file: 'wildheart.gba',
    title: 'Wildheart',
    desc: 'Wilderness action RPG with creature companions, custom tile shaders, and bosses.',
    category: 'original',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '1.75 MB',
    starred: false
  },
  {
    id: 13,
    file: 'aethermon.gba',
    title: 'Aethermon',
    desc: 'Original monster-taming RPG engine featuring elemental synthesis and pixel art.',
    category: 'original',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '1.07 MB',
    starred: false
  },
  {
    id: 14,
    file: 'Emberwake.gba',
    title: 'Emberwake',
    desc: 'Volcanic dungeon crawler with dynamic lighting tiles and frame-accurate combat.',
    category: 'original',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '268 KB',
    starred: false
  },
  {
    id: 15,
    file: 'NeonPulse.gba',
    title: 'NeonPulse',
    desc: 'High-speed synthwave reflex runner utilizing GBA hardware scaling and chiptune DSP.',
    category: 'original',
    platformIcon: 'gba',
    format: 'GBA ROM',
    ext: 'gba',
    size: '128 KB',
    starred: false
  }
];

let activeFilter = 'all';
let searchQuery = '';
const downloadedIds = new Set();

function matchesFilter(item) {
  const q = searchQuery.trim().toLowerCase();
  const textMatch = !q ||
    item.title.toLowerCase().includes(q) ||
    item.file.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q) ||
    item.format.toLowerCase().includes(q);

  if (!textMatch) return false;
  if (activeFilter === 'all') return true;
  if (activeFilter === 'starred') return item.starred;
  return item.category === activeFilter;
}

function createCardElement(item, indexNum) {
  const isMatch = matchesFilter(item);
  const isDone = downloadedIds.has(item.id);
  const numStr = String(indexNum).padStart(2, '0');
  const iconSvg = PLATFORM_ICONS[item.platformIcon] || PLATFORM_ICONS.gba;

  const card = document.createElement('article');
  card.className = [
    'release-card',
    item.starred ? 'starred' : '',
    item.crossPortNote ? 'has-note' : '',
    !isMatch ? 'filtered-out' : ''
  ].filter(Boolean).join(' ');

  const tagClass = item.ext === 'apk' ? 'tag-apk' : item.ext === 'win' ? 'tag-win' : '';

  card.innerHTML = `
    <div class="card-meta-row">
      <span class="format-tag ${tagClass}">
        ${iconSvg}
        <span>${item.format}</span>
      </span>
      ${item.starred
        ? `<span class="star-badge" title="Featured Release">★ Starred</span>`
        : `<span class="index-num">${numStr}</span>`
      }
    </div>

    <div class="card-body">
      <h2 class="card-title" title="${item.title}">${item.title}</h2>
      <p class="card-desc" title="${item.desc}">${item.desc}</p>
      ${item.crossPortNote ? `
        <div class="port-note-pill" data-port-link="${item.crossPortTargetId}" title="Click to download Multiverse-Brawl-Android.apk">
          ${PLATFORM_ICONS.android}
          <span>${item.crossPortNote}</span>
        </div>
      ` : ''}
    </div>

    <div class="card-footer-row">
      <span class="size-label">${item.size}</span>
      <button class="dl-button ${isDone ? 'done' : ''}" type="button">
        ${isDone ? '✓ Saved' : '↓ Download'}
      </button>
    </div>
  `;

  // Cursor-tracked subtle monochrome specular light
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });

  // Update bottom architectural status bar on hover
  card.addEventListener('mouseenter', () => {
    const statusEl = document.getElementById('status-inspect');
    if (statusEl) {
      statusEl.textContent = `${item.title}  ·  ${item.file} (${item.size})`;
    }
  });

  // Clicking the cross-port note downloads the Android APK port directly
  card.addEventListener('click', (e) => {
    const portLink = e.target.closest('[data-port-link]');
    if (portLink) {
      e.stopPropagation();
      const targetId = Number(portLink.dataset.portLink);
      const targetItem = RELEASES.find(r => r.id === targetId);
      if (targetItem) {
        downloadBuild(targetItem);
      }
      return;
    }
    downloadBuild(item);
  });

  return card;
}

function renderAll() {
  const featuredContainer = document.getElementById('featured-grid');
  const libraryContainer = document.getElementById('library-grid');
  featuredContainer.innerHTML = '';
  libraryContainer.innerHTML = '';

  let visibleCount = 0;

  RELEASES.forEach((item, idx) => {
    if (matchesFilter(item)) visibleCount++;
    const card = createCardElement(item, idx + 1);
    if (item.starred) {
      featuredContainer.appendChild(card);
    } else {
      libraryContainer.appendChild(card);
    }
  });

  const countEl = document.getElementById('status-count');
  if (countEl) {
    countEl.textContent = `${visibleCount} / ${RELEASES.length} Visible`;
  }
}

function downloadBuild(item) {
  const url = `vault-files/${encodeURIComponent(item.file)}`;
  const a = document.createElement('a');
  a.href = url;
  a.download = item.file;
  document.body.appendChild(a);
  a.click();
  a.remove();

  downloadedIds.add(item.id);
  renderAll();
  showToast(`Downloading ${item.file} (${item.size})`);
}

function showToast(text) {
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast-item';
  el.innerHTML = `<span style="color:#e2b96f;">★</span> <span>${text}</span>`;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.2s ease';
    setTimeout(() => el.remove(), 220);
  }, 2600);
}

function openLegalModal() {
  document.getElementById('legal-modal-backdrop').classList.add('open');
}

function closeLegalModal() {
  document.getElementById('legal-modal-backdrop').classList.remove('open');
}

window.addEventListener('DOMContentLoaded', () => {
  renderAll();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderAll();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderAll();
  });

  // Legal modal triggers
  document.getElementById('btn-open-legal-top').addEventListener('click', openLegalModal);
  document.getElementById('btn-open-legal-bottom').addEventListener('click', openLegalModal);
  document.getElementById('btn-close-legal').addEventListener('click', closeLegalModal);
  document.getElementById('btn-accept-legal').addEventListener('click', () => {
    closeLegalModal();
    showToast('Florida Terms of Use & Disclaimers Acknowledged');
  });
  document.getElementById('legal-modal-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'legal-modal-backdrop') closeLegalModal();
  });

  // Keyboard shortcuts ('/' to search, 'Esc' to close modal or clear search)
  window.addEventListener('keydown', (e) => {
    const legalOpen = document.getElementById('legal-modal-backdrop').classList.contains('open');
    if (e.key === 'Escape' && legalOpen) {
      closeLegalModal();
      return;
    }
    if (e.key === '/' && document.activeElement !== searchInput && !legalOpen) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      searchQuery = '';
      searchInput.blur();
      renderAll();
    }
  });
});
