const wcagData = [
    {
        title: "Conteúdo Não Textual",
        sc: "1.1.1",
        level: "A",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
        roles: ["design", "development", "content", "qa"],
        shortDesc: "Alternativas de texto para conteúdo não textual.",
        why: "Informa utilizadores que não conseguem ver imagens ou ouvir sons.",
        steps: {
            design: "Definir texto alternativo para imagens informativas; ocultar decorativas.",
            development: "Atributos alt em &lt;img&gt; e labels em ícones.",
            content: "Escrever descrições precisas.",
            qa: "Validar com leitor de ecrã."
        },
        tags: ["imagens", "alt-text"]
    },
    {
        title: "Apenas Áudio e Vídeo (Pré-gravado)",
        sc: "1.2.1",
        level: "A",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html",
        roles: ["content", "qa"],
        shortDesc: "Alternativa textual para apenas áudio ou apenas vídeo.",
        why: "Permite que pessoas cegas ou surdas acedam a ficheiros de media isolados.",
        steps: {
            content: "Fornecer transcrição completa para áudio e descrição textual para vídeo.",
            qa: "Verificar se a transcrição corresponde fielmente ao conteúdo sonoro/visual."
        },
        tags: ["áudio", "vídeo"]
    },
    {
        title: "Legendas (Pré-gravadas)",
        sc: "1.2.2",
        level: "A",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html",
        roles: ["content", "product"],
        shortDesc: "Legendas para áudio em vídeo.",
        why: "Torna o conteúdo acessível a surdos.",
        steps: {
            content: "Criar e sincronizar ficheiros de legendas (SRT/VTT).",
            product: "Garantir que o player de vídeo suporta a ativação de legendas externas."
        },
        tags: ["vídeo", "legendas"]
    },
    {
        title: "Descrição de Áudio ou Alternativa (Pré-gravada)",
        sc: "1.2.3",
        level: "A",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html",
        roles: ["content"],
        shortDesc: "Descrição áudio para vídeo.",
        why: "Explica ações visuais para quem não vê.",
        steps: { 
            content: "Criar uma alternativa textual ou uma faixa de áudio secundária que descreva a ação visual." 
        },
        tags: ["vídeo", "acessibilidade-visual"]
    },
    {
        title: "Legendas (Em Direto)",
        sc: "1.2.4",
        level: "AA",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html",
        roles: ["product"],
        shortDesc: "Legendas em tempo real.",
        why: "Acesso live para surdos.",
        steps: { 
            product: "Contratar e integrar serviços de transcrição em tempo real para eventos live." 
        },
        tags: ["live", "streaming"]
    },
    {
        title: "Descrição de Áudio (Pré-gravada)",
        sc: "1.2.5",
        level: "AA",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html",
        roles: ["content"],
        shortDesc: "Descrição áudio obrigatória.",
        why: "Garante que a informação visual essencial é ouvida.",
        steps: { 
            content: "Gravar e sincronizar uma trilha de áudio que narre detalhes visuais importantes não ditos no diálogo." 
        },
        tags: ["vídeo"]
    },
    {
        title: "Informações e Relações",
        sc: "1.3.1",
        level: "A",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
        roles: ["development", "design", "qa"],
        shortDesc: "Estrutura lógica via código.",
        why: "Garante que leitores de ecrã percebam títulos, listas e tabelas.",
        steps: {
            design: "Definir uma hierarquia visual clara e consistente para títulos e grupos de dados.",
            development: "Usar HTML semântico (h1-h6, table, ul/ol) para que a estrutura seja percebida pelo código.",
            qa: "Validar se a estrutura de títulos e listas permanece lógica ao desativar o CSS."
        },
        tags: ["semântica", "estrutura"]
    },
    {
        title: "Sequência Significativa",
        sc: "1.3.2",
        level: "A",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html",
        roles: ["development", "design"],
        shortDesc: "Ordem de leitura lógica.",
        why: "Se a ordem do código for diferente da visual, o leitor de ecrã confunde.",
        steps: { 
            design: "Desenhar layouts que mantenham uma ordem de leitura linear e intuitiva.",
            development: "Garantir que a ordem dos elementos no DOM (HTML) corresponde à ordem visual de leitura." 
        },
        tags: ["dom", "leitura"]
    },
    {
        title: "Características Sensoriais",
        sc: "1.3.3",
        level: "A",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html",
        roles: ["design", "content"],
        shortDesc: "Instruções sem depender apenas de forma/som.",
        why: "Cegos não sabem o que é 'o botão verde à direita'.",
        steps: { 
            design: "Não utilizar apenas cor, forma ou posição para identificar componentes.",
            content: "Usar nomes descritivos de botões nas instruções (ex: botão 'Enviar'), nunca posições ou cores isoladas." 
        },
        tags: ["instruções"]
    },
    {
        title: "Orientação",
        sc: "1.3.4",
        level: "AA",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/orientation.html",
        roles: ["design", "development"],
        shortDesc: "Não bloquear modo Retrato ou Paisagem.",
        why: "Cadeiras de rodas têm ecrãs fixos numa posição.",
        steps: { 
            design: "Criar layouts adaptáveis que funcionem tanto em vertical como em horizontal.",
            development: "Não restringir a orientação da página via CSS ou JavaScript."
        },
        tags: ["mobile", "orientação"]
    },
    {
        title: "Uso da Cor",
        sc: "1.4.1",
        level: "A",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html",
        roles: ["design", "development"],
        shortDesc: "Cor não deve ser o único meio de info.",
        why: "Daltónicos não distinguem apenas por cor.",
        steps: { 
            design: "Garantir que estados de erro ou links tenham sublinhados ou ícones além da mudança de cor.",
            development: "Implementar indicadores visuais (bordas, ícones) programaticamente para estados de validação."
        },
        tags: ["cor", "daltonismo"]
    },
    {
        title: "Controlo de Áudio",
        sc: "1.4.2",
        level: "A",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html",
        roles: ["development", "design"],
        shortDesc: "Parar som que toca automaticamente.",
        why: "Sons automáticos impedem ouvir o leitor de ecrã.",
        steps: { 
            design: "Incluir um mecanismo visível de pausa ou paragem logo no início da página.",
            development: "Garantir que o áudio automático dure menos de 3 segundos ou que exista um comando de teclado para silenciar." 
        },
        tags: ["áudio"]
    },
    {
        title: "Contraste (Mínimo)",
        sc: "1.4.3",
        level: "AA",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
        roles: ["design", "qa"],
        shortDesc: "Rácio 4.5:1 para texto.",
        why: "Garante leitura para baixa visão.",
        steps: { 
            design: "Validar paleta de cores no Figma garantindo 4.5:1 para texto normal e 3:1 para texto grande.",
            qa: "Utilizar ferramentas de inspeção (como Color Contrast Analyser) para validar os rácios implementados." 
        },
        tags: ["contraste", "cor"]
    },
    {
        title: "Redimensionar Texto",
        sc: "1.4.4",
        level: "AA",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html",
        roles: ["development", "design"],
        shortDesc: "Zoom até 200% sem perda.",
        why: "Pessoas com presbiopia precisam aumentar a fonte.",
        steps: { 
            design: "Desenhar layouts flexíveis que suportem a expansão de contentores de texto.",
            development: "Usar unidades relativas (rem/em) e evitar alturas fixas (px) em caixas de texto." 
        },
        tags: ["zoom", "tipografia"]
    },
    {
        title: "Imagens de Texto",
        sc: "1.4.5",
        level: "AA",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html",
        roles: ["design", "content"],
        shortDesc: "Evitar texto dentro de imagens.",
        why: "Texto em imagem pixaliza e não é lido pelo browser.",
        steps: { 
            design: "Utilizar tipos de letra reais e CSS para estilização em vez de exportar banners com texto embutido.",
            content: "Sempre que possível, fornecer a informação em formato HTML puro em vez de infográficos isolados." 
        },
        tags: ["texto", "imagens"]
    },
    {
        title: "Refluxo (Reflow)",
        sc: "1.4.10",
        level: "AA",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
        roles: ["development", "design"],
        shortDesc: "Sem scroll horizontal até 400% zoom.",
        why: "Crucial para baixa visão.",
        steps: { 
            design: "Projetar a experiência mobile-first para garantir que o conteúdo flui numa coluna única.",
            development: "Usar media queries e layouts fluidos (Flexbox/Grid) para evitar scroll horizontal em zoom alto." 
        },
        tags: ["zoom", "layout"]
    },
    {
        title: "Contraste Não Textual",
        sc: "1.4.11",
        level: "AA",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html",
        roles: ["design", "development"],
        shortDesc: "Rácio 3:1 para ícones e botões.",
        why: "Garante que o utilizador vê os limites dos elementos UI.",
        steps: { 
            design: "Garantir rácio de 3:1 para estados de foco, bordas de inputs e ícones funcionais.",
            development: "Aplicar estilos CSS que mantenham o contraste em estados :hover e :active." 
        },
        tags: ["contraste", "ui"]
    },
    {
        title: "Espaçamento de Texto",
        sc: "1.4.12",
        level: "AA",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html",
        roles: ["development", "qa"],
        shortDesc: "Permitir aumento de espaçamento.",
        why: "Ajuda na dislexia.",
        steps: { 
            development: "Garantir que o layout não quebra ao aumentar line-height, letter-spacing e word-spacing.",
            qa: "Testar a legibilidade do conteúdo aplicando estilos personalizados de espaçamento." 
        },
        tags: ["tipografia", "espaçamento"]
    },
    {
        title: "Conteúdo ao Passar Rato ou Foco",
        sc: "1.4.13",
        level: "AA",
        pour: ["Percecionável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html",
        roles: ["design", "development"],
        shortDesc: "Tooltips devem ser persistentes e dispensáveis.",
        why: "Evita que menus desapareçam antes do utilizador os ler.",
        steps: { 
            design: "Projetar tooltips que não cubram o conteúdo que os acionou.",
            development: "Garantir que o conteúdo extra possa ser fechado com a tecla Esc e permaneça visível enquanto o rato estiver sobre ele." 
        },
        tags: ["hover", "focus"]
    },
    {
        title: "Teclado",
        sc: "2.1.1",
        level: "A",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",
        roles: ["development", "qa"],
        shortDesc: "Toda a funcionalidade disponível via teclado.",
        why: "Essencial para limitações motoras ou visuais.",
        steps: { 
            development: "Usar elementos interativos nativos (&lt;button&gt;, &lt;a&gt;); evitar scripts que dependam apenas de onMouseOver.",
            qa: "Realizar o teste 'No Mouse' em todos os fluxos críticos da aplicação." 
        },
        tags: ["teclado", "interação"]
    },
    {
        title: "Sem Armadilha de Teclado",
        sc: "2.1.2",
        level: "A",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html",
        roles: ["development", "qa"],
        shortDesc: "Impedir que o foco fique preso.",
        why: "Evita que utilizadores fiquem bloqueados em modais.",
        steps: { 
            development: "Implementar 'Focus Traps' corretos em modais que permitam sair com Esc ou Tab.",
            qa: "Validar se é possível entrar e sair de componentes complexos usando apenas o teclado." 
        },
        tags: ["foco", "teclado"]
    },
    {
        title: "Ajustar Tempo",
        sc: "2.2.1",
        level: "A",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html",
        roles: ["product", "development"],
        shortDesc: "Permitir prolongar limites de tempo.",
        why: "Pessoas precisam de ritmos diferentes para ler ou agir.",
        steps: { 
            product: "Definir requisitos para avisos de expiração de sessão (mínimo 20 segundos antes).",
            development: "Implementar a funcionalidade técnica de renovação de sessão sem perda de dados." 
        },
        tags: ["tempo", "sessão"]
    },
    {
        title: "Pausar, Parar, Ocultar",
        sc: "2.2.2",
        level: "A",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html",
        roles: ["design", "development"],
        shortDesc: "Controlo sobre conteúdo que se move.",
        why: "Movimento distrai utilizadores com TDAH ou causa náuseas.",
        steps: { 
            design: "Incluir um botão de 'Pausa' visível em qualquer elemento que se mova automaticamente por mais de 5s.",
            development: "Respeitar a preferência de sistema do utilizador para reduzir movimento (Reduced Motion)." 
        },
        tags: ["animação", "carrossel"]
    },
    {
        title: "Interrupções",
        sc: "2.2.4",
        level: "AAA",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/no-interruption.html",
        roles: ["design", "product"],
        shortDesc: "Adiar ou suprimir interrupções.",
        why: "Alertas inesperados desorientam o utilizador.",
        steps: { 
            design: "Projetar um centro de notificações em vez de pop-ups intrusivos.",
            product: "Permitir que o utilizador configure a prioridade dos alertas no sistema." 
        },
        tags: ["notificações", "AAA"]
    },
    {
        title: "Três Flashes ou Menos",
        sc: "2.3.1",
        level: "A",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html",
        roles: ["design", "content"],
        shortDesc: "Sem flashes rápidos.",
        why: "Evita ataques de epilepsia fotossensível.",
        steps: { 
            design: "Evitar o uso de animações intermitentes rápidas ou transições de alto brilho.",
            content: "Não carregar vídeos que contenham luzes estroboscópicas ou flashes intensos." 
        },
        tags: ["saúde", "segurança"]
    },
    {
        title: "Animação por Interação (AAA)",
        sc: "2.3.3",
        level: "AAA",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
        roles: ["development", "design"],
        shortDesc: "Desativar animações desnecessárias.",
        why: "Movimento de scroll causa tonturas.",
        steps: { 
            design: "Garantir que animações decorativas não são essenciais para a compreensão do site.",
            development: "Implementar a media query 'prefers-reduced-motion' para desligar animações não essenciais." 
        },
        tags: ["animação", "AAA"]
    },
    {
        title: "Título da Página",
        sc: "2.4.2",
        level: "A",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html",
        roles: ["content", "development"],
        shortDesc: "Títulos únicos e informativos.",
        why: "Ajuda a identificar a página em abas.",
        steps: { 
            content: "Definir títulos claros que descrevam o propósito específico da página.",
            development: "Garantir que a tag &lt;title&gt; é atualizada dinamicamente em aplicações Single Page (SPA)." 
        },
        tags: ["seo", "navegação"]
    },
    {
        title: "Ordem do Foco",
        sc: "2.4.3",
        level: "A",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html",
        roles: ["development", "design"],
        shortDesc: "Navegação por tabulação lógica.",
        why: "O foco deve seguir a ordem visual.",
        steps: { 
            design: "Entregar o design com um 'Focus Map' indicando a ordem de navegação esperada.",
            development: "Seguir a ordem do fluxo visual no código HTML e evitar o uso de tabindex positivo." 
        },
        tags: ["teclado", "foco"]
    },
    {
        title: "Objetivo do Link (Em Contexto)",
        sc: "2.4.4",
        level: "A",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html",
        roles: ["content", "design"],
        shortDesc: "Link deve ser claro pelo contexto.",
        why: "Evita confusão com links 'Clique aqui'.",
        steps: { 
            design: "Diferenciar visualmente os links do resto do texto com sublinhados ou ícones.",
            content: "Escrever textos de link que descrevam o destino, mesmo quando lidos isoladamente." 
        },
        tags: ["links"]
    },
    {
        title: "Várias Formas",
        sc: "2.4.5",
        level: "AA",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html",
        roles: ["design", "development"],
        shortDesc: "Mais do que uma forma de chegar a uma página.",
        why: "Utilizadores diferentes preferem usar o menu, a pesquisa ou o mapa do site.",
        steps: { 
            design: "Projetar elementos de navegação redundantes como menus de rodapé e barras de pesquisa.",
            development: "Implementar tecnicamente a funcionalidade de pesquisa e garantir que o mapa do site é indexável." 
        },
        tags: ["navegação"]
    },
    {
        title: "Títulos e Rótulos (Labels)",
        sc: "2.4.6",
        level: "AA",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html",
        roles: ["content", "design"],
        shortDesc: "Títulos e labels claros.",
        why: "Labels claros dizem ao utilizador o que esperar de um campo ou secção.",
        steps: { 
            design: "Garantir que os campos de formulário têm rótulos visíveis e sempre próximos do input.",
            content: "Escrever títulos descritivos que ajudem o utilizador a navegar rapidamente pelo conteúdo." 
        },
        tags: ["labels", "ux-writing"]
    },
    {
        title: "Foco Visível",
        sc: "2.4.7",
        level: "AA",
        pour: ["Operável"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
        roles: ["design", "development"],
        shortDesc: "Indicador de foco visível pelo teclado.",
        why: "Quem navega por teclado precisa de saber onde está o cursor.",
        steps: { 
            design: "Definir um estilo de foco (outline) com alto contraste que se destaque do fundo.",
            development: "Não remover o `outline` padrão do CSS sem criar uma alternativa visível e acessível." 
        },
        tags: ["teclado", "foco"]
    },
    {
        title: "Idioma da Página",
        sc: "3.1.1",
        level: "A",
        pour: ["Compreensível"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html",
        roles: ["development", "qa"],
        shortDesc: "Definir o idioma principal no código.",
        why: "Permite que o leitor de ecrã use a pronúncia correta.",
        steps: { 
            development: "Configurar o atributo `lang` na tag HTML (ex: &lt;html lang='pt'&gt;).",
            qa: "Verificar se o sintetizador de voz utiliza o idioma esperado ao carregar a página." 
        },
        tags: ["idioma", "acessibilidade-global"]
    },
    {
        title: "Ajuda na Introdução de Dados",
        sc: "3.3.2",
        level: "A",
        pour: ["Compreensível"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html",
        roles: ["design", "content", "development"],
        shortDesc: "Instruções claras em formulários.",
        why: "Reduz erros e frustração ao preencher dados.",
        steps: { 
            design: "Incluir exemplos de formato (ex: DD/MM/AAAA) visíveis junto aos campos.",
            content: "Escrever mensagens de ajuda curtas e objetivas.",
            development: "Associar programaticamente as instruções ao input usando `aria-describedby`." 
        },
        tags: ["formulários", "erros"]
    },
    {
        title: "Sugestão em Caso de Erro",
        sc: "3.3.3",
        level: "AA",
        pour: ["Compreensível"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html",
        roles: ["content", "development"],
        shortDesc: "Sugerir correções para erros.",
        why: "Ajuda o utilizador a saber como corrigir o que preencheu mal.",
        steps: { 
            content: "Criar mensagens de erro que expliquem exatamente o que deve ser corrigido.",
            development: "Implementar validação em tempo real que sugira correções conhecidas." 
        },
        tags: ["erros", "validação"]
    },
    {
        title: "Prevenção de Erros (Jurídicos, Financeiros, Dados)",
        sc: "3.3.4",
        level: "AA",
        pour: ["Compreensível"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data-reentry.html",
        roles: ["product", "design", "development"],
        shortDesc: "Rever e confirmar dados sensíveis.",
        why: "Evita transações erradas ou perda de dados irreversível.",
        steps: { 
            product: "Definir fluxos de confirmação ou períodos de cancelamento para ações críticas.",
            design: "Criar ecrãs de revisão/resumo antes da submissão final de formulários complexos.",
            development: "Implementar mecanismos de 'Undo' (Anular) ou confirmação explícita no sistema." 
        },
        tags: ["segurança", "erros"]
    },
    {
        title: "Parsing (Análise)",
        sc: "4.1.1",
        level: "A",
        pour: ["Robusto"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/parsing.html",
        roles: ["development", "qa"],
        shortDesc: "HTML sem erros de sintaxe.",
        why: "Tags mal fechadas quebram tecnologias assistivas.",
        steps: { 
            development: "Garantir que o código HTML é válido, sem IDs duplicados e com tags corretamente aninhadas.",
            qa: "Utilizar o W3C Validator para detetar erros estruturais no código final." 
        },
        tags: ["html", "qualidade"]
    },
    {
        title: "Nome, Função, Valor",
        sc: "4.1.2",
        level: "A",
        pour: ["Robusto"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html",
        roles: ["development", "qa", "design"],
        shortDesc: "Semântica para componentes customizados.",
        why: "Garante que o leitor de ecrã sabe o que um componente faz (ex: é um botão ou um menu?).",
        steps: { 
            design: "Especificar o comportamento e estado (aberto/fechado/selecionado) de componentes customizados.",
            development: "Usar ARIA roles e estados (aria-expanded, aria-selected) quando elementos nativos não forem suficientes.",
            qa: "Testar se componentes interativos anunciam corretamente o seu nome e função no leitor de ecrã." 
        },
        tags: ["aria", "semântica"]
    },
    {
        title: "Mensagens de Estado",
        sc: "4.1.3",
        level: "AA",
        pour: ["Robusto"],
        url: "https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html",
        roles: ["development"],
        shortDesc: "Alertar sobre mudanças sem mover o foco.",
        why: "O utilizador precisa de saber que algo aconteceu (ex: 'item adicionado') sem ser interrompido.",
        steps: { 
            development: "Utilizar `aria-live` (polite ou assertive) para anunciar mensagens de estado dinâmicas." 
        },
        tags: ["aria", "dinâmico"]
    }
];