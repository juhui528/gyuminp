// Project Data
const projects = [
    { 
        id: 1, 
        title: "대구트립로드", 
        category: "Web Redesign", 
        img: "./img/triproad.jpg", 
        desc: "대구의 다양한 관광 명소를 소개하는 플랫폼의 사용자 경험을 개선했습니다. 복잡한 정보를 시각적으로 체계화하여 접근성을 높였습니다.", 
        points: "Figma, Interaction, Notion, UX Research, Team Project(40%)", 
        link: "https://www.figma.com/design/wwQoQ6Inzqsyhqq8RcR7wy/%EB%8C%80%EA%B5%AC%ED%8A%B8%EB%A6%BD%EB%A1%9C%EB%93%9C?node-id=580-10392&t=GN4htaao9XD8r5xO-1" 
    },
    { 
        id: 2, 
        title: "사그락상회", 
        category: "Web Design", 
        img: "./img/sagrak.jpg", 
        desc: "친환경 제품을 판매하는 스토어의 브랜드 아이덴티티와 랜딩페이지를 디자인했습니다. 자연스러운 톤앤매너로 신뢰감을 주도록 설계했습니다.", 
        points: "Branding, UI Design, Shopify, Personal Project(100%)", 
        link: "https://juhui528.github.io/sagrak/" 
    },
    { 
        id: 3, 
        title: "Aesop app", 
        category: "UX/UI App Design", 
        img: "./img/aesop.jpg", 
        desc: "감각적인 브랜드 이미지를 모바일 앱 환경에 녹여내어 가치를 전달하는 프리미엄 뷰티 앱이 되도록 설계했습니다.", 
        points: "Figma, Prototyping, Motion Design, Personal Project(100%)", 
        link: "./img/portfolio.pdf" 
    },
    { 
        id: 4, 
        title: "espoir", 
        category: "Clone Coding", 
        img: "./img/espoir.jpg", 
        desc: "기존 에스쁘아 사이트의 인터랙티브한 요소를 고도화하여 클론 코딩한 프로젝트입니다. 인터랙션 구현에 집중했습니다.", 
        points: "GSAP Animation, JavaScript, HTML5/CSS3, Personal Project(100%)", 
        link: "https://juhui528.github.io/espoir_clone/" 
    },
    { 
        id: 5, 
        title: "26초 영화제 포스터", 
        category: "Graphic Design", 
        img: "./img/posterpf.png", 
        desc: "타이포그래피와 강렬한 컬러 대비를 활용한 전시 포스터 시리즈입니다. 메시지 전달의 극대화를 목표로 작업했습니다.", 
        points: "Illustrator, Typography, Visual Identity, Personal Project(100%)", 
        link: "./img/29s.pdf" 
    },
    { 
        id: 6, 
        title: "잇몸망개 BI 디자인", 
        category: "Brand Identity", 
        img: "./img/mang.png", 
        desc: "신규 스타트업의 브랜드 로고 및 가이드라인 제작 프로젝트입니다. 브랜드의 핵심 가치를 심볼릭하게 시각화했습니다.", 
        points: "Logo Design, Brand Story, Identity System, Personal Project(100%)", 
        link: "./img/manggae.pdf" 
    }
];

// Render Projects with Images instead of Icons
const projectList = document.getElementById('project-list');
projects.forEach(p => {
    const card = document.createElement('div');
    card.className = "project-group group cursor-pointer";
    card.onclick = () => openModal(p);
    card.innerHTML = `
        <div class="project-img-box aspect-video bg-neutral-50 dark:bg-neutral-900 rounded-3xl flex items-center justify-center overflow-hidden border border-neutral-100 dark:border-neutral-800 group-hover:border-main transition-all duration-500 relative">
            <!-- Image of ${p.title} -->
            <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100">
            <div class="absolute inset-0 bg-main/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        <div class="mt-8 mob:mt-6 flex justify-between items-start text-left px-2">
            <div class="pr-4">
                <span class="text-main text-[16px] font-black tracking-widest uppercase mb-2 block">${p.category}</span>
                <h3 class="text-3xl mob:text-2xl italic-black uppercase tracking-tight group-hover:text-main transition-colors">${p.title}</h3>
            </div>
            <div class="w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center group-hover:bg-main group-hover:text-white group-hover:border-main transition-all shrink-0">
                <i class="fa-solid fa-plus text-sm"></i>
            </div>
        </div>
    `;
    projectList.appendChild(card);
});

// Modal Functions
const modal = document.getElementById('project-modal');
const modalImg = document.getElementById('modal-img');

function openModal(project) {
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-category').innerText = project.category;
    document.getElementById('modal-desc').innerText = project.desc;
    document.getElementById('modal-points').innerText = project.points;
    document.getElementById('modal-link').href = project.link;
    modalImg.src = project.img;
    modalImg.alt = project.title;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.theme = 'light';
        updateParticlesForTheme(false);
    } else {
        html.classList.add('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.theme = 'dark';
        updateParticlesForTheme(true);
    }
});

// Scroll Logic
const topBtn = document.getElementById('top-btn');
const header = document.getElementById('main-header');
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 300) topBtn.classList.add('show'); else topBtn.classList.remove('show');
    if (window.innerWidth > 768) {
        if (st > lastScrollTop && st > 100) header.classList.add('nav-up'); else header.classList.remove('nav-up');
        if (st > 50) header.classList.add('bg-white/80', 'dark:bg-black/80', 'backdrop-blur-md', 'py-4', 'shadow-sm');
        else header.classList.remove('bg-white/80', 'dark:bg-black/80', 'backdrop-blur-md', 'py-4', 'shadow-sm');
    }
    lastScrollTop = st;
});

// Three.js Background
let scene, camera, renderer, particles, particleMaterial;
function createCircleTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d'); ctx.beginPath(); ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff'; ctx.fill(); return new THREE.CanvasTexture(canvas);
}
function init3D() {
    const container = document.getElementById('canvas-container');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio); renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    const geometry = new THREE.BufferGeometry(); const vertices = [];
    for (let i = 0; i < 4000; i++) vertices.push(Math.random() * 2000 - 1000, Math.random() * 2000 - 1000, Math.random() * 2000 - 1000);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const isDark = html.classList.contains('dark');
    particleMaterial = new THREE.PointsMaterial({ color: isDark ? 0xffffff : 0x5133E7, size: 4, transparent: true, opacity: isDark ? 0.35 : 0.65, map: createCircleTexture(), blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending, alphaTest: 0.01 });
    particles = new THREE.Points(geometry, particleMaterial); scene.add(particles); camera.position.z = 800;
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => { mouseX = (e.clientX - window.innerWidth / 2) / 100; mouseY = (e.clientY - window.innerHeight / 2) / 100; });
    function animate() { requestAnimationFrame(animate); particles.rotation.y += 0.0003; scene.rotation.x += (mouseY * 0.03 - scene.rotation.x) * 0.05; scene.rotation.y += (mouseX * 0.03 - scene.rotation.y) * 0.05; renderer.render(scene, camera); }
    animate();
}
function updateParticlesForTheme(isDark) { if (particleMaterial) { particleMaterial.color.setHex(isDark ? 0xffffff : 0x5133E7); particleMaterial.opacity = isDark ? 0.35 : 0.65; particleMaterial.blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending; particleMaterial.needsUpdate = true; } }
window.addEventListener('resize', () => { if (camera && renderer) { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); } });
window.onload = init3D;