// Members Display Script
let loadedMembers = null;

// Position / Lab role mapping (use i18n if available)
function getPositionLabel(positionKey) {
    if (window.i18n && window.i18n.t) {
        const translated = window.i18n.t(`members.position.${positionKey}`);
        if (translated && translated !== `members.position.${positionKey}`) return translated;
    }
    const fallback = {
        professor: 'Trưởng phòng thí nghiệm',
        associate_professor: 'Phó trưởng phòng thí nghiệm',
        assistant_professor: 'Giảng viên / Nhà nghiên cứu hợp tác',
        postdoc: 'Nghiên cứu viên sau tiến sĩ (cộng tác)',
        phd_student: 'Nghiên cứu sinh (PhD Student)',
        master_student: 'Học viên cao học (MSc Student)',
        undergraduate: 'Sinh viên đại học',
        research_assistant: 'Trợ lý nghiên cứu',
        collaborator: 'Giáo sư/nhà nghiên cứu cộng tác'
    };
    return fallback[positionKey] || positionKey;
}

// Categorize positions: Leadership / Collaborators / Students
const positionCategories = {
    leaders: ['professor', 'associate_professor'],
    faculty: ['assistant_professor', 'postdoc', 'collaborator'],
    students: ['phd_student', 'master_student', 'undergraduate', 'research_assistant']
};

// Get initials from name
function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .slice(-2)
        .join('')
        .toUpperCase();
}

// Build academic titles + affiliation line for card and detail
function getDegreeAffiliationLine(member) {
    const parts = [];
    // New: support multiple academic titles (codes) if provided
    let titles = [];
    if (Array.isArray(member.academicTitles) && member.academicTitles.length > 0) {
        titles = member.academicTitles.map(code => {
            if (window.i18n && window.i18n.t) {
                const label = window.i18n.t(`members.title.${code}`);
                if (label && label !== `members.title.${code}`) return label;
            }
            const fallback = {
                prof: 'Prof.',
                assoc_prof: 'Assoc. Prof.',
                dr: 'Dr.',
                msc: 'MSc',
                bsc: 'BSc'
            };
            return fallback[code] || code;
        });
    } else if (member.academicTitle) {
        // Backwards compatibility: old single string
        titles = [member.academicTitle];
    }

    if (titles.length) parts.push(titles.join(', '));
    if (member.affiliation) parts.push(member.affiliation);
    return parts.length ? parts.join(' · ') : '';
}

// Create member card HTML (clickable -> full detail)
function createMemberCard(member) {
    const initials = getInitials(member.name);
    const position = getPositionLabel(member.position);
    const degreeAffiliation = getDegreeAffiliationLine(member);

    // Photo
    let photoHTML;
    if (member.photo) {
        photoHTML = `<img src="${API_BASE_URL.replace('/api', '')}${member.photo}" alt="${member.name}">`;
    } else {
        photoHTML = `<div class="member-photo-placeholder">${initials}</div>`;
    }

    // Bio (truncate on card)
    const bio = member.bio ? (member.bio.length > 150 ? member.bio.substring(0, 150) + '...' : member.bio) : '';

    // Research interests
    let interestsHTML = '';
    if (member.researchInterests && member.researchInterests.length > 0) {
        interestsHTML = `
            <div class="member-interests">
                ${member.researchInterests.slice(0, 3).map(interest =>
                    `<span class="interest-tag">${interest}</span>`
                ).join('')}
            </div>
        `;
    }

    // Social links
    let socialHTML = '';
    if (member.socialLinks) {
        const links = [];
        if (member.socialLinks.googleScholar) links.push(`<a href="${member.socialLinks.googleScholar}" target="_blank" class="social-link" title="Google Scholar">🎓</a>`);
        if (member.socialLinks.linkedin) links.push(`<a href="${member.socialLinks.linkedin}" target="_blank" class="social-link" title="LinkedIn">💼</a>`);
        if (member.socialLinks.github) links.push(`<a href="${member.socialLinks.github}" target="_blank" class="social-link" title="GitHub">💻</a>`);
        if (member.socialLinks.personalWebsite) links.push(`<a href="${member.socialLinks.personalWebsite}" target="_blank" class="social-link" title="Website">🌐</a>`);
        if (links.length > 0) socialHTML = `<div class="member-social">${links.join('')}</div>`;
    }

    return `
        <div class="member-card member-card-clickable" data-member-id="${member._id}" role="button" tabindex="0">
            <div class="member-photo">${photoHTML}</div>
            <div class="member-info">
                <div class="member-name">${member.name}</div>
                <div class="member-position">${position}</div>
                ${degreeAffiliation ? `<div class="member-degree-affiliation">${degreeAffiliation}</div>` : ''}
                ${bio ? `<div class="member-bio">${bio}</div>` : ''}
                ${interestsHTML}
                ${socialHTML}
            </div>
        </div>
    `;
}

// Load and display members
async function loadMembers() {
    try {
        const response = await api.getMembers({ isAlumni: false });
        const members = response.data;
        loadedMembers = members;
        
        if (!members || members.length === 0) {
            showEmptyState();
            return;
        }
        
        renderMembersByCategory(members);
        
    } catch (error) {
        console.error('Error loading members:', error);
        showErrorState();
    }
}

function renderMembersByCategory(members) {
    const categorized = {
        leaders: [],
        faculty: [],
        students: []
    };
    
    members.forEach(member => {
        if (positionCategories.leaders.includes(member.position)) {
            categorized.leaders.push(member);
        } else if (positionCategories.faculty.includes(member.position)) {
            categorized.faculty.push(member);
        } else if (positionCategories.students.includes(member.position)) {
            categorized.students.push(member);
        }
    });
    
    displayCategory('leadersGrid', categorized.leaders);
    displayCategory('facultyGrid', categorized.faculty);
    displayCategory('studentsGrid', categorized.students);
}

// Expose re-render helper for language switching
window.rerenderMembersForLanguage = function () {
    if (loadedMembers && Array.isArray(loadedMembers) && loadedMembers.length > 0) {
        renderMembersByCategory(loadedMembers);
    }
};

// Display category
function displayCategory(gridId, members) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    if (members.length === 0) {
        grid.innerHTML = '<div class="empty-state">Chưa có thành viên trong danh mục này</div>';
        return;
    }
    grid.innerHTML = members.map(member => createMemberCard(member)).join('');
}

// ----- Member detail modal -----
function openMemberDetail(id) {
    const modal = document.getElementById('memberDetailModal');
    if (!modal) return;
    const content = document.getElementById('memberDetailContent');
    if (!content) return;
    content.innerHTML = '<div class="loading">Đang tải...</div>';
    modal.classList.add('show');

    api.getMemberById(id)
        .then(res => {
            const m = res.data;
            const position = getPositionLabel(m.position);
            const degreeAffiliation = getDegreeAffiliationLine(m);

            let photoHTML;
            if (m.photo) {
                photoHTML = `<img src="${API_BASE_URL.replace('/api', '')}${m.photo}" alt="${m.name}">`;
            } else {
                photoHTML = `<div class="member-photo-placeholder">${getInitials(m.name)}</div>`;
            }

            let interestsHTML = '';
            if (m.researchInterests && m.researchInterests.length > 0) {
                interestsHTML = `<div class="member-detail-interests">${m.researchInterests.map(i => `<span class="interest-tag">${i}</span>`).join('')}</div>`;
            }

            let socialHTML = '';
            if (m.socialLinks) {
                const links = [];
                if (m.socialLinks.googleScholar) links.push(`<a href="${m.socialLinks.googleScholar}" target="_blank" rel="noopener">Google Scholar</a>`);
                if (m.socialLinks.orcid) links.push(`<a href="${m.socialLinks.orcid}" target="_blank" rel="noopener">ORCID</a>`);
                if (m.socialLinks.linkedin) links.push(`<a href="${m.socialLinks.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`);
                if (m.socialLinks.github) links.push(`<a href="${m.socialLinks.github}" target="_blank" rel="noopener">GitHub</a>`);
                if (m.socialLinks.personalWebsite) links.push(`<a href="${m.socialLinks.personalWebsite}" target="_blank" rel="noopener">Website</a>`);
                if (links.length > 0) socialHTML = `<div class="member-detail-social"><strong>Liên kết:</strong> ${links.join(' · ')}</div>`;
            }

            content.innerHTML = `
                <div class="member-detail-photo">${photoHTML}</div>
                <div class="member-detail-body">
                    <h2 class="member-detail-name">${m.name}</h2>
                    <div class="member-detail-position">${position}</div>
                    ${degreeAffiliation ? `<div class="member-detail-degree-affiliation">${degreeAffiliation}</div>` : ''}
                    ${m.bio ? `<div class="member-detail-bio">${m.bio}</div>` : ''}
                    ${interestsHTML}
                    ${socialHTML}
                </div>
            `;
        })
        .catch(() => {
            content.innerHTML = '<div class="empty-state">Không tải được thông tin thành viên.</div>';
        });
}

function closeMemberDetail() {
    const modal = document.getElementById('memberDetailModal');
    if (modal) modal.classList.remove('show');
}

// Show empty state
function showEmptyState() {
    ['leadersGrid', 'facultyGrid', 'studentsGrid'].forEach(gridId => {
        const grid = document.getElementById(gridId);
        if (grid) {
            grid.innerHTML = '<div class="empty-state">Chưa có thông tin thành viên</div>';
        }
    });
}

// Show error state
function showErrorState() {
    ['leadersGrid', 'facultyGrid', 'studentsGrid'].forEach(gridId => {
        const grid = document.getElementById(gridId);
        if (grid) {
            grid.innerHTML = '<div class="empty-state">Không thể tải thông tin thành viên</div>';
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadMembers();
    // Click on member card -> full detail
    document.querySelector('.section')?.addEventListener('click', (e) => {
        const card = e.target.closest('.member-card-clickable');
        if (card && card.dataset.memberId) openMemberDetail(card.dataset.memberId);
    });
    document.querySelector('.section')?.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const card = e.target.closest('.member-card-clickable');
        if (card && card.dataset.memberId) openMemberDetail(card.dataset.memberId);
    });
    // Close member detail modal: overlay click, Escape
    const memberModal = document.getElementById('memberDetailModal');
    memberModal?.addEventListener('click', (e) => { if (e.target === memberModal) closeMemberDetail(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMemberDetail(); });
});
