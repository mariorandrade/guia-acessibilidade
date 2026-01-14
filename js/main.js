/**
 * LÓGICA DE INTERAÇÃO - MANUAL PRÁTICO WCAG 2.2
 */

const wcagGrid = document.getElementById('wcagGrid');
const searchInput = document.getElementById('searchInput');
const roleFilter = document.getElementById('roleFilter');
const levelFilter = document.getElementById('levelFilter');

function normalizeText(str) {
  return str
    .normalize("NFD")                // separa caracteres dos acentos
    .replace(/[\u0300-\u036f]/g, "") // remove os acentos
    .toLowerCase();                  // converte para minúsculas
}


function renderCards() {
    const searchTerm = searchInput.value;
    const selectedRole = roleFilter.value;
    const selectedLevel = levelFilter.value;



    wcagGrid.innerHTML = '';

    // 1. FILTRAGEM
    const filteredData = wcagData.filter(item => {
        const matchesSearch = normalizeText(item.title).includes(normalizeText(searchTerm)) || 
                              item.sc.includes(searchTerm) ||
                              item.tags.some(tag => normalizeText(tag).includes(normalizeText(searchTerm)));
        
        // Se selectedRole for 'all', não filtramos por papel (mostra todos os cards)
        const matchesRole = selectedRole === 'all' || item.roles.includes(selectedRole);
        const matchesLevel = selectedLevel === 'all' || item.level === selectedLevel;

        return matchesSearch && matchesRole && matchesLevel;
    });

    // 2. RENDERIZAÇÃO
    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'wcag-card';

        let rolesHtml = '';
        
        // Quando 'all' está selecionado, iteramos por TODOS os steps presentes no objeto
        if (selectedRole === 'all') {
            let stepsContent = '';
            
            // Mapeamento para nomes amigáveis
            const roleNames = {
                design: 'Design',
                development: 'Dev',
                content: 'Conteúdo',
                qa: 'QA',
                product: 'Product'
            };

            // Itera sobre todas as chaves existentes em item.steps
            for (const [roleKey, instruction] of Object.entries(item.steps)) {
                const displayName = roleNames[roleKey] || roleKey.charAt(0).toUpperCase() + roleKey.slice(1);
                stepsContent += `<p><strong>${displayName}:</strong> ${instruction}</p>`;
            }

            rolesHtml = `
                <div class="all-roles-summary">
                    <p class="summary-title"><i class="fas fa-layer-group"></i> Tarefas por Perfil:</p>
                    ${stepsContent}
                </div>
            `;
        } else {
            // Quando um papel específico está selecionado, destacamos apenas esse
            const specificStep = item.steps[selectedRole] || "Consulte as diretrizes gerais para este perfil.";
            rolesHtml = `
                <div class="all-roles-summary">
                    <p class="summary-title"><strong><i class="fas fa-bolt"></i> Ação para ${selectedRole.toUpperCase()}:</strong></p>
                    <p>${specificStep}</p>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="card-header">
            <span>
                <span class="sc-number">${item.sc}</span>
                <span class="sc-principle">${item.pour}</span>
            </span>
                <span class="level-badge level-${item.level.replace('+', '')}">${item.level}</span>
            </div>
            <h3>${item.title}</h3>
            <p class="short-desc">${item.shortDesc}</p>
            
            <div class="card-details">
                <div class="detail-section">
                    <strong><i class="fas fa-info-circle"></i> Porque é importante?</strong>
                    <p>${item.why}</p>
                </div>
                ${rolesHtml}
            </div>

            <div class="card-footer">
                <div class="tags">
                    ${item.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
                <a href="${item.url}" target="_blank" class="doc-link">Ver na W3C <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        
        wcagGrid.appendChild(card);
    });

    if (filteredData.length === 0) {
        wcagGrid.innerHTML = `
            <div class="no-results gray-bg">
                <p>Nenhum critério encontrado para estes filtros.</p>
                <button onclick="resetFilters()">Limpar Filtros</button>
            </div>`;
    }
}

function resetFilters() {
    searchInput.value = '';
    roleFilter.value = 'all';
    levelFilter.value = 'all';
    renderCards();
}

searchInput.addEventListener('input', renderCards);
roleFilter.addEventListener('change', renderCards);
levelFilter.addEventListener('change', renderCards);

document.addEventListener('DOMContentLoaded', renderCards);