
// =====================
// START SEQUENCE (IMMEDIATE REVEAL)
// =====================
// =====================
// START SEQUENCE WITH 3-LINE STEP TIMING
// =====================
function startNetflix() {
  const music = document.getElementById("bgMusic");
  const hero = document.querySelector(".hero");
  const interimStage = document.getElementById("interimMessageStage");
  
  const l1 = document.getElementById("line1");
  const l2 = document.getElementById("line2");
  const l3 = document.getElementById("line3");

  // 1. Hide the initial landing hero instantly
  hero.style.transition = "0.8s ease";
  hero.style.opacity = "0";

  setTimeout(() => {
    hero.style.display = "none";
    
    if (interimStage) {
      // 2. Open the black container stage
      interimStage.classList.add("show");

      // --- LINE 1 TIMING ---
      setTimeout(() => { l1.classList.add("visible"); }, 200);       // Fade Line 1 In
      setTimeout(() => { l1.classList.remove("visible"); }, 2500);   // Fade Line 1 Out

      // --- LINE 2 TIMING ---
      setTimeout(() => { l2.classList.add("visible"); }, 3500);      // Fade Line 2 In
      setTimeout(() => { l2.classList.remove("visible"); }, 5800);   // Fade Line 2 Out

      // --- LINE 3 TIMING ---
      setTimeout(() => { l3.classList.add("visible"); }, 6800);      // Fade Line 3 In
      setTimeout(() => { l3.classList.remove("visible"); }, 9100);   // Fade Line 3 Out

      // --- EXIT SEQUENCE ---
      setTimeout(() => {
        interimStage.classList.remove("show"); // Drop the stage completely
        setTimeout(() => {
          startMemoryReveal(); // Reveal "Episodes of Us" main data pipelines
        }, 1000);
      }, 10000);

    } else {
      startMemoryReveal();
    }
  }, 800);

  // Soft audio soundtrack fade-in handler
  if (music) {
    music.volume = 0;
    music.play().catch(() => {});

    let v = 0;
    const fade = setInterval(() => {
      if (v < 0.4) {
        v += 0.02;
        music.volume = v;
      } else {
        clearInterval(fade);
      }
    }, 120);
  }
}


// =====================
// CINEMATIC MEMORY REVEAL
// =====================
function startMemoryReveal() {
  const sections = document.querySelectorAll(".section");
  let delay = 0;

  sections.forEach(sec => {
    if (sec.classList.contains("hero")) return;

    setTimeout(() => {
      sec.classList.add("memory");
      setTimeout(() => {
        sec.classList.add("show");
      }, 50);
    }, delay);

    delay += 600; 
  });
}

// =====================
// STAR CONSTELLATIONS
// =====================
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 0.3,
  vy: (Math.random() - 0.5) * 0.3
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let s of stars) {
    s.x += s.vx;
    s.y += s.vy;

    if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
    if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.beginPath();
    ctx.arc(s.x, s.y, 1.2, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      let dx = stars[i].x - stars[j].x;
      let dy = stars[i].y - stars[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 110) {
        ctx.strokeStyle = "rgba(168,230,207,0.12)";
        ctx.beginPath();
        ctx.moveTo(stars[i].x, stars[i].y);
        ctx.lineTo(stars[j].x, stars[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// =====================
// INTERACTIVE NETFLIX EPISODES LOGIC (TOGGLE MODE)
// =====================
function setActiveEpisode(selectedCard) {
  const viewer = document.getElementById("episodeViewer");
  const allCards = document.querySelectorAll(".episode-card");
  
  // Check if the card you just clicked is already active
  const isAlreadyActive = selectedCard.classList.contains("active");

  // 1. Clear out active styling across all cards to ensure only one is open at a time
  allCards.forEach(card => card.classList.remove("active"));

  // 2. If it wasn't active, open it. If it was active, it stays closed!
  if (!isAlreadyActive) {
    selectedCard.classList.add("active");

    // 3. Smoothly fade and swap the photo viewer to match the open episode
    if (viewer) {
      viewer.classList.add("swapping");

      setTimeout(() => {
        const targetPhoto = selectedCard.getAttribute("data-photo");
        if (targetPhoto) {
          viewer.src = targetPhoto;
        }
        viewer.classList.remove("swapping");
      }, 400);
    }
  }

function startNetflix() {
  const music = document.getElementById("bgMusic");
  const hero = document.querySelector(".hero");
  const interimStage = document.getElementById("interimMessageStage");
  
  const l1 = document.getElementById("line1");
  const l2 = document.getElementById("line2");
  const l3 = document.getElementById("line3");

  // 1. Hide the initial landing hero instantly
  hero.style.transition = "0.8s ease";
  hero.style.opacity = "0";

  setTimeout(() => {
    hero.style.display = "none";
    
    if (interimStage) {
      // 2. Open the black container stage
      interimStage.classList.add("show");

      // --- LINE 1 TIMING ---
      setTimeout(() => { l1.classList.add("visible"); }, 200);       // Fade Line 1 In
      setTimeout(() => { l1.classList.remove("visible"); }, 2500);   // Fade Line 1 Out

      // --- LINE 2 TIMING ---
      setTimeout(() => { l2.classList.add("visible"); }, 3500);      // Fade Line 2 In
      setTimeout(() => { l2.classList.remove("visible"); }, 5800);   // Fade Line 2 Out

      // --- LINE 3 TIMING ---
      setTimeout(() => { l3.classList.add("visible"); }, 6800);      // Fade Line 3 In
      setTimeout(() => { l3.classList.remove("visible"); }, 9100);   // Fade Line 3 Out

      // --- EXIT SEQUENCE ---
      setTimeout(() => {
        interimStage.classList.remove("show"); // Drop the stage completely
        setTimeout(() => {
          startMemoryReveal(); // Reveal "Episodes of Us" main data pipelines
        }, 1000);
      }, 10000);

    } else {
      startMemoryReveal();
    }
  }, 800);

  // Soft audio soundtrack fade-in handler
  if (music) {
    music.volume = 0;
    music.play().catch(() => {});

    let v = 0;
    const fade = setInterval(() => {
      if (v < 0.4) {
        v += 0.02;
        music.volume = v;
      } else {
        clearInterval(fade);
      }
    }, 120);
  }
}


// =====================
// CINEMATIC MEMORY REVEAL
// =====================
function startMemoryReveal() {
  const sections = document.querySelectorAll(".section");
  let delay = 0;

  sections.forEach(sec => {
    if (sec.classList.contains("hero")) return;

    setTimeout(() => {
      sec.classList.add("memory");
      setTimeout(() => {
        sec.classList.add("show");
      }, 50);
    }, delay);

    delay += 600; 
  });
}

// =====================
// STAR CONSTELLATIONS
// =====================
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 0.3,
  vy: (Math.random() - 0.5) * 0.3
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let s of stars) {
    s.x += s.vx;
    s.y += s.vy;

    if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
    if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.beginPath();
    ctx.arc(s.x, s.y, 1.2, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      let dx = stars[i].x - stars[j].x;
      let dy = stars[i].y - stars[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 110) {
        ctx.strokeStyle = "rgba(168,230,207,0.12)";
        ctx.beginPath();
        ctx.moveTo(stars[i].x, stars[i].y);
        ctx.lineTo(stars[j].x, stars[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// =====================
// INTERACTIVE NETFLIX EPISODES LOGIC (TOGGLE MODE)
// =====================
function setActiveEpisode(selectedCard) {
  const viewer = document.getElementById("episodeViewer");
  const allCards = document.querySelectorAll(".episode-card");
  
  // Check if the card you just clicked is already active
  const isAlreadyActive = selectedCard.classList.contains("active");

  // 1. Clear out active styling across all cards to ensure only one is open at a time
  allCards.forEach(card => card.classList.remove("active"));

  // 2. If it wasn't active, open it. If it was active, it stays closed!
  if (!isAlreadyActive) {
    selectedCard.classList.add("active");

    // 3. Smoothly fade and swap the photo viewer to match the open episode
    if (viewer) {
      viewer.classList.add("swapping");

      setTimeout(() => {
        const targetPhoto = selectedCard.getAttribute("data-photo");
        if (targetPhoto) {
          viewer.src = targetPhoto;
        }
        viewer.classList.remove("swapping");
      }, 400);
    }
  }
}}