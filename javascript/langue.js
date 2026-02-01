const translations = {
    fr: {
        nav_title: "Navigation",
        nav_home: "Accueil",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_project_smashboard: "SmashBoard",
        nav_project_pharmhappy: "PharmHappy",
        nav_project_dataviz: "Music Charts",
        nav_lang_fr: "Français",
        nav_lang_en: "Anglais",
        menu_toggle: "Menu",
        text_size_increase: "Augmenter le texte (+6px)",
        text_size_reset: "Taille par défaut",
        homepage_title: "Lacroix Lenny",
        homepage_subtitle: "Futur Data Engineer, étudiant en BUT Informatique parcours DATA, toujours prêt à relever de nouveaux défis.",
        homepage_document_title: "Accueil",
        homepage_nav_skills_desc: "Découvrez mes compétences",
        homepage_nav_projects_desc: "Explorez mes réalisations",
        homepage_timeline_title: "Mon parcours",
        homepage_timeline_bac_date: "2022",
        homepage_timeline_bac_title: "Baccalauréat mention Très Bien",
        homepage_timeline_bac_desc: "Spécialités : Mathématiques, Physique, Numériques et Sciences Informatique",
        homepage_timeline_but_date: "2023 - 2026",
        homepage_timeline_but_title: "BUT Informatique parcours DATA",
        homepage_timeline_but_desc: "Formation en développement et analyse de données",
        homepage_timeline_stage_date: "Avril - Juin 2025",
        homepage_timeline_stage_title: "Stage chez Spacefoot",
        homepage_timeline_stage_desc: "Première expérience professionnelle",
        homepage_timeline_alternance_date: "Septembre 2025 - Août 2026",
        homepage_timeline_alternance_title: "Alternance chez Spacefoot",
        homepage_timeline_alternance_desc: "Développement de compétences en environnement professionnel",
        homepage_timeline_future_title: "Et plus à venir...",
        skills_document_title: "Compétences",
        skills_title: "Compétences",
        skills_section_data_bi: "Data & Business Intelligence",
        skills_section_db_ai: "Base de données & IA",
        skills_section_front: "Front-end",
        skills_section_back: "Back-end",
        skills_section_devops: "DevOps & Systèmes",
        skill_pandas_desc: "Nettoyage, transformation, analyse de <br>données, dataframes.",
        skill_powerbi_desc: "Dataviz, rapports, KPI, transformation <br> et modèles.",
        skill_grafana_desc: "Dashboards, métriques, panels, <br> visualisations.",
        skill_sql_desc: "Modélisation, requêtes, jointures, <br>agrégations, optimisation.",
        skill_mysql_desc: "Schémas, index, requêtes, et <br> administration de base.",
        skill_postgres_desc: "SQL avancé, contraintes, performances, <br> Common Table Expression.",
        skill_mongodb_desc: "Documents, agrégations, <br> modélisation NoSQL.",
        skill_ai_desc: "Bases du Machine Learning, <br>compréhension des modèles.",
        skill_html_desc: "Structure sémantique, accessibilité de base <br>et structure du DOM.",
        skill_css_desc: "Mise en page responsive, flex/grid,<br> animations, composants UI.",
        skill_tailwind_desc: "Design system utilitaire, prototypage <br>rapide, responsive.",
        skill_js_desc: "Pages dynamiques, DOM, événements, <br>logique côté client et SRR.",
        skill_ts_desc: "Typage strict, classe, interface, <br> gestion des cookies et des storages.",
        skill_svelte_desc: "Composants, gestion des états <br>et de la réactivité.",
        skill_php_desc: "Back-end web, formulaires, sessions, <br>CRUD, intégrations et tests.",
        skill_symfony_desc: "Architecture MVC, routes, contrôleurs, <br>Doctrine, API Platform.",
        skill_python_desc: "Automatisation, scripts, data (Pandas), <br>APIs et algorithmes complexes.",
        skill_django_desc: "Back-end Python, ORM, auth, <br>endpoints, bonnes pratiques.",
        skill_fastapi_desc: "APIs rapides, validation Pydantic, <br>docs Swagger/OpenAPI.",
        skill_rust_desc: "Découverte du langage, performance, <br>sécurité mémoire et API Axum.",
        skill_docker_desc: "Conteneurisation, images, compose, <br>environnements reproductibles.",
        skill_linux_desc: "Terminal, permissions, tooling,<br> workflows de dev.",
        skill_cisco_desc: "Simulation réseau, topologies, <br>routage/switching de base.",
        skill_git_desc: "Branches, PR, merge/rebase, <br> versionnage en équipe.",
        skill_plotly_desc: "Visualisations interactives, graphiques avancés, Python & JavaScript.",
        smashboard_document_title: "Projet SmashBoard",
        smashboard_title: "SmashBoard",
        smashboard_subtitle: "Un outil interactif pour planifier et illustrer mes entraînements de badminton",
        smashboard_p1: "Ce projet m’a permis de créer un outil visuel et interactif pensé pour le badminton. L’objectif est de schématiser les situations de jeu, représenter les trajectoires de volants, placer les joueurs et travailler sur des stratégies d’entraînement.",
        smashboard_p2: "Cet outil propose une liste simple d'outils, permettant de dessiner des lignes droites, des lignes en cloches, des flèches, des traits libres, supprimer les traits à proximité, de placer des joueurs et de les déplacer.",
        smashboard_p3: "Il a également été pensé pour une utilisation fréquente sur mobile, comme l'illustre la capture d'écran ci-dessous.",
        smashboard_img_mobile_alt: "SmashBoard sur mobile",
        smashboard_p4_before_link: "Vous pouvez retrouver le code source de ce projet sur mon Github, en cliquant sur ",
        smashboard_link_text: "ce lien",
        smashboard_p5_before_link: "Ce projet a été déployé via CloudFlare / Wrangler, et est fréquemment utilisé par mon entraîneur. Il est retrouvable en cliquant sur ",
        pharmhappy_document_title: "PharmHappy",
        pharmhappy_title: "PharmHappy",
        pharmhappy_subtitle: "Projet scolaire de développement d'application avec Symfony.",
        pharmhappy_p1: "Dans le cadre de ma formation, par groupe de 6, nous avons du réaliser une application complète, de la phase d'analyse, jusqu'au développement complet de l'application, en y ajoutant une suite de tests unitaires. Également, le site a été déployé entièrement sur une machine virtuelle, accessible dans le réseau de l'IUT.",
        pharmhappy_p2: "La phase d'analyse nous a présenté le sujet : nous devions développer une application de gestion de stock pharmaceutique pour des gestionnaires, permettant également à des clients de commander sur le site. Nous devions aussi gérer le cas des pharmacies, qui avait accès à un stock de médicament plus complet. Les gestionnaires devaient pouvoir gérer les stocks et la date de péremption des échantillons.",
        pharmhappy_p3: "En partant de l'énoncé, nous avons donc créé un diagramme de navigabilité, des cas d'usages avec leur scénario nominal et alternatif, une charte graphique et des maquettes de pages avec <b>Figma</b>.",
        pharmhappy_p4: "Une fois la phase d'analyse terminée, nous avons pu lancer le développement, avec <b>PHP</b> et le framework <b>Symfony</b>. Nous avons suivi le modèle vu / contrôleur avec nos entités, en utilisant des templates Twig pour le rendu du site.",
        pharmhappy_p5: "Enfin, le site dispose d'un chatbot, développé avec l'API d'OpenAI, réglé pour répondre aux questions des utilisateurs concernant les médicaments.",
        pharmhappy_gallery_intro: "Voici des images illustrant le rendu final du site :",
        lightbox_hint: "Cliquez sur l'image pour l'afficher en plein écran.",
        pharmhappy_repo_text: "Voici un ",
        pharmhappy_repo_link_text: "lien",
        pharmhappy_repo_after: " vers le dépôt GitHub du site.",
        lightbox_fullscreen_alt: "Image en plein écran",
        dataviz_document_title: "Dataviz - Music Charts",
        dataviz_title: "Dataviz - Music Charts",
        dataviz_subtitle: "Projet scolaire de récolte et d'analyse de données.",
        dataviz_p1: "Dans le cadre de ma formation, j'ai réalisé un projet d'analyse de données, avec un thème libre. Nous avons choisi d'analyser des données musicales, en récoltant des informations sur les artistes, leurs titres, et leur nombre d'écoutes quotidiennes et hebdomadaires, filtrables par pays. Nous avons pour cela utilisé <a href=\"https://kworb.net/\">Kworb</a>, qui propose de multiples tableaux selon différentes plateformes.",
        dataviz_p2: "Nous avons conçu nos algorithmes de récupération de données en Python avec <b>BeautifulSoup</b>, et nous avons stocké les données dans une base <b>PostgreSQL</b>, que nous avons fait fonctionner avec des conteneurs <b>Docker</b>. Pour les visuels, nous avons créé nos premiers tableaux de bord avec <b>Microsoft Power BI</b>, puis ajouté de nouveaux dashboards avec <b>Metabase</b>.",
        dataviz_p3: "De plus, sur la période d'avril à juin 2025, une machine virtuelle exécutait les mêmes scripts afin de récolter un maximum de données, ce qui a permis de monter le total à environ 10 000 artistes pour 500 000 musiques. La machine virtuelle est maintenant éteinte, mais les scripts peuvent toujours être utilisés en local sur ce dépôt.",
        dataviz_powerbi_intro: "Voici les visuels sur <b>Power BI</b> :",
        dataviz_p4: "Pour compléter nos tableaux de bord, nous avons ajouté une deuxième source de données, provenant du site <a href=\"https://acousticbrainz.org/\">AcousticBrainz</a>, qui permet d'obtenir des informations musicales sur les morceaux : leur style ou leur genre, également triables par région. Nous avons aussi reproduit certains dashboards réalisés sur Power BI.",
        dataviz_metabase_intro: "Voici les visuels sur <b>Metabase</b> :<br>",
        dataviz_repo_text: "Vous pouvez retrouver le dépôt Github sur ce ",
        dataviz_repo_link_text: "lien",
        dataviz_context_title: "Contexte du projet",
        dataviz_source_title: "Source de données : Kworb",
        dataviz_tech_title: "Technologies utilisées",
        dataviz_collection_title: "Collecte de données massive",
        dataviz_stat_artists: "Artistes",
        dataviz_stat_songs: "Musiques",
        dataviz_powerbi_title: "Visualisations Power BI",
        dataviz_acousticbrainz_title: "Analyse avec AcousticBrainz",
        dataviz_metabase_title: "Visualisations Metabase",
        dataviz_view_github: "Voir le code sur GitHub",
        smashboard_demo_title: "Démonstration",
        smashboard_concept_title: "Concept",
        smashboard_features_title: "Fonctionnalités",
        smashboard_mobile_title: "Version mobile",
        smashboard_tech_title: "Technologies",
        smashboard_view_github: "Voir le code sur GitHub",
        smashboard_view_demo: "Voir la démo en ligne",
        smashboard_feature_draw: "Dessin libre",
        smashboard_feature_lines: "Lignes & Flèches",
        smashboard_feature_players: "Placement joueurs",
        smashboard_feature_erase: "Effacement",
        smashboard_usage_title: "Utilisation active",
        smashboard_usage_text: "Ce projet est déployé en production et est régulièrement utilisé par mes entraîneurs et moi-même pour préparer et illustrer nos séances d'entraînement de badminton. L'outil s'est avéré pratique et efficace pour la planification tactique.",
        pharmhappy_context_title: "Contexte du projet",
        pharmhappy_analysis_title: "Phase d'analyse",
        pharmhappy_dev_title: "Développement",
        pharmhappy_chatbot_title: "Chatbot IA",
        pharmhappy_gallery_title: "Aperçu du site",
        pharmhappy_view_github: "Voir le code sur GitHub",
        ia_competence: "Intelligence Artificielle",
        projects_document_title: "Projets",
        projects_page_title: "Mes Projets",
        projects_page_subtitle: "Découvrez mes réalisations en développement et data analysis",
        smashboard_preview_desc: "Un outil interactif pour planifier et illustrer les entraînements de badminton avec des schémas tactiques.",
        pharmhappy_preview_desc: "Application de gestion de stock pharmaceutique avec système de commande et chatbot intelligent.",
        dataviz_preview_desc: "Analyse de données musicales avec récolte automatisée et tableaux de bord interactifs."
    },
    en: {
        nav_title: "Navigation",
        nav_home: "Home",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_project_smashboard: "SmashBoard",
        nav_project_pharmhappy: "PharmHappy",
        nav_project_dataviz: "Music Charts",
        nav_lang_fr: "French",
        nav_lang_en: "English",
        menu_toggle: "Menu",
        text_size_increase: "Increase text (+6px)",
        text_size_reset: "Default size",
        homepage_title: "Lacroix Lenny",
        homepage_subtitle: "Future Data Engineer, student in BUT Computer Science DATA track, always ready to take on new challenges.",
        homepage_document_title: "Homepage",
        homepage_nav_skills_desc: "Discover my technical skills",
        homepage_nav_projects_desc: "Explore my achievements",
        homepage_timeline_title: "My Journey",
        homepage_timeline_bac_date: "2022",
        homepage_timeline_bac_title: "Baccalaureate with Highest Honors",
        homepage_timeline_bac_desc: "Specialties: Mathematics, Physics-Chemistry, Computer Science",
        homepage_timeline_but_date: "2023 - 2026",
        homepage_timeline_but_title: "Bachelor of Technology in Computer Science - DATA track",
        homepage_timeline_but_desc: "Training in development and data analysis",
        homepage_timeline_stage_date: "April - June 2025",
        homepage_timeline_stage_title: "Internship at Spacefoot",
        homepage_timeline_stage_desc: "First professional experience",
        homepage_timeline_alternance_date: "September 2025 - August 2026",
        homepage_timeline_alternance_title: "Apprenticeship at Spacefoot",
        homepage_timeline_alternance_desc: "Skill development in a professional environment",
        homepage_timeline_future_title: "And more to come...",
        skills_document_title: "Skills",
        skills_title: "Skills",
        skills_section_data_bi: "Data & Business Intelligence",
        skills_section_db_ai: "Databases & AI",
        skills_section_front: "Front-end",
        skills_section_back: "Back-end",
        skills_section_devops: "DevOps & Systems",
        skill_pandas_desc: "Cleaning, transforming, and analyzing <br>data, dataframes.",
        skill_powerbi_desc: "Dataviz, reports, KPIs, transformations <br> and models.",
        skill_grafana_desc: "Dashboards, metrics, panels, <br> visualizations.",
        skill_sql_desc: "Modeling, queries, joins, <br>aggregations, optimization.",
        skill_mysql_desc: "Schemas, indexes, queries, and <br> database administration.",
        skill_postgres_desc: "Advanced SQL, constraints, performance, <br> Common Table Expressions.",
        skill_mongodb_desc: "Documents, aggregations, <br> NoSQL modeling.",
        skill_ai_desc: "Machine Learning basics, <br>model understanding.",
        skill_html_desc: "Semantic structure, basic accessibility, <br>and DOM structure.",
        skill_css_desc: "Responsive layout, flex/grid,<br> animations, UI components.",
        skill_tailwind_desc: "Utility design system, rapid <br>prototyping, responsive.",
        skill_js_desc: "Dynamic pages, DOM, events, <br>client-side logic and SSR.",
        skill_ts_desc: "Strict typing, classes, interfaces, <br> cookies and storage handling.",
        skill_svelte_desc: "Components, state management <br>and reactivity.",
        skill_php_desc: "Web backend, forms, sessions, <br>CRUD, integrations and tests.",
        skill_symfony_desc: "MVC architecture, routes, controllers, <br>Doctrine, API Platform.",
        skill_python_desc: "Automation, scripts, data (Pandas), <br>APIs and complex algorithms.",
        skill_django_desc: "Python backend, ORM, auth, <br>endpoints, best practices.",
        skill_fastapi_desc: "Fast APIs, Pydantic validation, <br>Swagger/OpenAPI docs.",
        skill_rust_desc: "Discovering the language, performance, <br>memory safety and Axum APIs.",
        skill_docker_desc: "Containerization, images, compose, <br>reproducible environments.",
        skill_linux_desc: "Terminal, permissions, tooling,<br> dev workflows.",
        skill_cisco_desc: "Network simulation, topologies, <br>basic routing/switching.",
        skill_git_desc: "Branches, PRs, merge/rebase, <br>team versioning.",
        skill_plotly_desc: "Interactive visualizations, advanced charts, Python & JavaScript.",
        smashboard_document_title: "SmashBoard Project",
        smashboard_title: "SmashBoard",
        smashboard_subtitle: "An interactive tool to plan and illustrate my badminton training sessions",
        smashboard_p1: "This project helped me build a visual and interactive tool designed for badminton. The goal is to map game situations, represent shuttle trajectories, place players, and work on training strategies.",
        smashboard_p2: "The tool provides a simple toolbox to draw straight lines, curved lines, arrows, freehand strokes, delete nearby strokes, place players, and move them.",
        smashboard_p3: "It was also designed for frequent use on mobile, as shown in the screenshot below.",
        smashboard_img_mobile_alt: "SmashBoard on mobile",
        smashboard_p4_before_link: "You can find the source code of this project on my GitHub by clicking ",
        smashboard_link_text: "this link",
        smashboard_p5_before_link: "This project was deployed using Cloudflare / Wrangler and is frequently used by my coach. You can access it by clicking ",
        pharmhappy_document_title: "PharmHappy",
        pharmhappy_title: "PharmHappy",
        pharmhappy_subtitle: "School project: building an application with Symfony.",
        pharmhappy_p1: "As part of my studies, in a group of 6, we had to build a complete application from analysis all the way to full development, including a suite of unit tests. The site was also fully deployed on a virtual machine accessible within the university network.",
        pharmhappy_p2: "During analysis, we were given the requirements: we had to develop a pharmaceutical stock management app for managers, and also allow customers to order products on the site. We also had to handle pharmacies, which had access to a broader drug inventory. Managers had to manage stock and sample expiration dates.",
        pharmhappy_p3: "Starting from the statement, we built a navigation diagram, use cases with nominal and alternate scenarios, a style guide, and page mockups with <b>Figma</b>.",
        pharmhappy_p4: "Once the analysis phase was complete, we started development with <b>PHP</b> and the <b>Symfony</b> framework. We followed the model/view/controller approach with our entities and used Twig templates for rendering.",
        pharmhappy_p5: "Finally, the site includes a chatbot built with the OpenAI API, configured to answer users' questions about medications.",
        pharmhappy_gallery_intro: "Here are images showing the final result:",
        lightbox_hint: "Click the image to view it fullscreen.",
        pharmhappy_repo_text: "Here is a ",
        pharmhappy_repo_link_text: "link",
        pharmhappy_repo_after: " to the site's GitHub repository.",
        lightbox_fullscreen_alt: "Fullscreen image",
        dataviz_document_title: "Dataviz - Music Charts",
        dataviz_title: "Dataviz - Music Charts",
        dataviz_subtitle: "School project about collecting and analyzing data.",
        dataviz_p1: "As part of my studies, I carried out a data analysis project with a free theme. We chose to analyze music data by collecting information about artists, their tracks, and their daily and weekly stream counts, filterable by country. For that we used <a href=\"https://kworb.net/\">Kworb</a>, which provides multiple charts across different platforms.",
        dataviz_p2: "We built our data collection algorithms in Python using <b>BeautifulSoup</b>, and stored the data in a <b>PostgreSQL</b> database running in <b>Docker</b> containers. For visuals, we created our first dashboards in <b>Microsoft Power BI</b> and then added new dashboards with <b>Metabase</b>.",
        dataviz_p3: "In addition, from April to June 2025, a virtual machine ran the same scripts to collect as much data as possible, bringing the total to about 10,000 artists and 500,000 tracks. The VM is now turned off, but the scripts can still be used locally from this repository.",
        dataviz_powerbi_intro: "Here are the <b>Power BI</b> visuals:",
        dataviz_p4: "To complement our dashboards, we added a second data source from <a href=\"https://acousticbrainz.org/\">AcousticBrainz</a>, which provides musical information about tracks (style/genre), also sortable by region. We also reproduced some dashboards initially made in Power BI.",
        dataviz_metabase_intro: "Here are the <b>Metabase</b> visuals:<br>",
        dataviz_repo_text: "You can find the GitHub repository via this ",
        dataviz_repo_link_text: "link",
        dataviz_context_title: "Project Context",
        dataviz_source_title: "Data Source: Kworb",
        dataviz_tech_title: "Technologies Used",
        dataviz_collection_title: "Massive Data Collection",
        dataviz_stat_artists: "Artists",
        dataviz_stat_songs: "Songs",
        dataviz_powerbi_title: "Power BI Visualizations",
        dataviz_acousticbrainz_title: "AcousticBrainz Analysis",
        dataviz_metabase_title: "Metabase Visualizations",
        dataviz_view_github: "View code on GitHub",
        smashboard_demo_title: "Demo",
        smashboard_concept_title: "Concept",
        smashboard_features_title: "Features",
        smashboard_mobile_title: "Mobile Version",
        smashboard_tech_title: "Technologies",
        smashboard_view_github: "View code on GitHub",
        smashboard_view_demo: "View live demo",
        smashboard_feature_draw: "Free drawing",
        smashboard_feature_lines: "Lines & Arrows",
        smashboard_feature_players: "Player placement",
        smashboard_feature_erase: "Erasing",
        smashboard_usage_title: "Active Use",
        smashboard_usage_text: "This project is deployed in production and is regularly used by my coaches and myself to prepare and illustrate our badminton training sessions. The tool has proven to be practical and effective for tactical planning.",
        pharmhappy_context_title: "Project Context",
        pharmhappy_analysis_title: "Analysis Phase",
        pharmhappy_dev_title: "Development",
        pharmhappy_chatbot_title: "AI Chatbot",
        pharmhappy_gallery_title: "Site Preview",
        pharmhappy_view_github: "View code on GitHub",
        ia_competence: "Artificial Intelligence",
        projects_document_title: "Projects",
        projects_page_title: "My Projects",
        projects_page_subtitle: "Discover my work in development and data analysis",
        smashboard_preview_desc: "An interactive tool to plan and illustrate badminton training sessions with tactical diagrams.",
        pharmhappy_preview_desc: "Pharmaceutical stock management application with ordering system and intelligent chatbot.",
        dataviz_preview_desc: "Music data analysis with automated collection and interactive dashboards."
    }
};
const STORAGE_KEY = 'portfolio_lang';
const FONT_SIZE_STORAGE_KEY = 'portfolio_base_font_size_px';
const DEFAULT_BASE_FONT_SIZE_PX = 16;
const FONT_SIZE_STEP_PX = 6;
const MIN_BASE_FONT_SIZE_PX = 12;
const MAX_BASE_FONT_SIZE_PX = 28;
function clampNumber(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function getStoredBaseFontSizePx() {
    try {
        const raw = localStorage.getItem(FONT_SIZE_STORAGE_KEY);
        if (!raw) return null;
        const n = Number(raw);
        if (!Number.isFinite(n)) return null;
        return clampNumber(n, MIN_BASE_FONT_SIZE_PX, MAX_BASE_FONT_SIZE_PX);
    } catch (e) {
        return null;
    }
}
function setStoredBaseFontSizePx(px) {
    try {
        localStorage.setItem(FONT_SIZE_STORAGE_KEY, String(px));
    } catch (e) {
    }
}
function clearStoredBaseFontSizePx() {
    try {
        localStorage.removeItem(FONT_SIZE_STORAGE_KEY);
    } catch (e) {
    }
}
function applyBaseFontSizePx(px) {
    document.documentElement.style.setProperty('--base-font-size', `${px}px`);
}
function getCurrentBaseFontSizePx() {
    const computed = getComputedStyle(document.documentElement).getPropertyValue('--base-font-size').trim();
    const n = Number.parseFloat(computed);
    if (Number.isFinite(n)) return n;
    return DEFAULT_BASE_FONT_SIZE_PX;
}
function refreshTextSizeControlsState() {
    const btnPlus = document.getElementById('fontPlus');
    const btnReset = document.getElementById('fontReset');
    if (!btnPlus || !btnReset) return;

    const current = getCurrentBaseFontSizePx();
    const increasedValue = DEFAULT_BASE_FONT_SIZE_PX + FONT_SIZE_STEP_PX;

    // Actif visuel
    btnPlus.classList.remove('text-btn-active');
    btnReset.classList.remove('text-btn-active');

    if (current === DEFAULT_BASE_FONT_SIZE_PX) {
        btnReset.classList.add('text-btn-active');
    } else {
        btnPlus.classList.add('text-btn-active');
    }

    // Activation/désactivation
    btnPlus.disabled = current >= increasedValue;
    btnReset.disabled = current === DEFAULT_BASE_FONT_SIZE_PX;
}

function initTextSizeControls() {
    const btnPlus = document.getElementById('fontPlus');
    const btnReset = document.getElementById('fontReset');
    if (!btnPlus || !btnReset) return;

    btnPlus.addEventListener('click', () => {
        // Une seule augmentation: on passe directement à DEFAULT + STEP (avec clamp).
        const next = clampNumber(DEFAULT_BASE_FONT_SIZE_PX + FONT_SIZE_STEP_PX, MIN_BASE_FONT_SIZE_PX, MAX_BASE_FONT_SIZE_PX);
        applyBaseFontSizePx(next);
        setStoredBaseFontSizePx(next);
        refreshTextSizeControlsState();
    });

    btnReset.addEventListener('click', () => {
        applyBaseFontSizePx(DEFAULT_BASE_FONT_SIZE_PX);
        clearStoredBaseFontSizePx();
        refreshTextSizeControlsState();
    });

    refreshTextSizeControlsState();
}
function getInitialLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) return stored;
    const browserLang = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    if (translations[browserLang]) return browserLang;
    return 'fr';
}
let currentLang = getInitialLanguage();
function setLanguage(lang) {
    if (!translations[lang]) return;
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, currentLang);
    updateContent();
    updateFlagStyles();
}
function translateKey(key) {
    return (translations[currentLang] && translations[currentLang][key]) || null;
}
function updateDocumentMeta() {
    document.documentElement.setAttribute('lang', currentLang);
    const titleEl = document.querySelector('title[data-key]');
    if (titleEl) {
        const titleKey = titleEl.getAttribute('data-key');
        const t = translateKey(titleKey);
        if (t) titleEl.textContent = t;
    }
}
function updateContent() {
    updateDocumentMeta();
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (element.tagName.toLowerCase() === 'title') return;
        const t = translateKey(key);
        if (t) {
            element.innerHTML = t;
        }
    });
    const attrElements = document.querySelectorAll('[data-i18n-attr][data-key]');
    attrElements.forEach(element => {
        const key = element.getAttribute('data-key');
        const attr = element.getAttribute('data-i18n-attr');
        const t = translateKey(key);
        if (!t || !attr) return;
        element.setAttribute(attr, t);
    });
}
function updateFlagStyles() {
    const btnFr = document.getElementById('flag_fr');
    const btnEn = document.getElementById('flag_en');
    if (!btnFr || !btnEn) return;
    btnFr.classList.remove('flag-active');
    btnEn.classList.remove('flag-active');
    if (currentLang === 'fr') {
        btnFr.classList.add('flag-active');
    } else {
        btnEn.classList.add('flag-active');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const storedSize = getStoredBaseFontSizePx();
    if (storedSize) {
        applyBaseFontSizePx(storedSize);
    } else {
        applyBaseFontSizePx(DEFAULT_BASE_FONT_SIZE_PX);
    }
    updateContent();
    updateFlagStyles();
    initTextSizeControls();
});