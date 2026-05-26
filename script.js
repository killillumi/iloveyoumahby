
function startNetflix() {
  const music = document.getElementById("bgMusic");
  const hero = document.querySelector(".hero");
  const interimStage = document.getElementById("interimMessageStage");
  
  const l1 = document.getElementById("line1");
  const l2 = document.getElementById("line2");
  const l3 = document.getElementById("line3");

  hero.style.transition = "0.8s ease";
  hero.style.opacity = "0";

  setTimeout(() => {
    hero.style.display = "none";
    
    if (interimStage) {
      interimStage.classList.add("show");

      setTimeout(() => { l1.classList.add("visible"); }, 200);      
      setTimeout(() => { l1.classList.remove("visible"); }, 2500);  
      
      setTimeout(() => { l2.classList.add("visible"); }, 3500);      
      setTimeout(() => { l2.classList.remove("visible"); }, 5800);   

      setTimeout(() => { l3.classList.add("visible"); }, 6800);      
      setTimeout(() => { l3.classList.remove("visible"); }, 9100);   


      setTimeout(() => {
        interimStage.classList.remove("show"); 
        setTimeout(() => {
          startMemoryReveal(); 
        }, 1000);
      }, 10000);

    } else {
      startMemoryReveal();
    }
  }, 800);

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

function setActiveEpisode(selectedCard) {
  const viewer = document.getElementById("episodeViewer");
  const allCards = document.querySelectorAll(".episode-card");

  const isAlreadyActive = selectedCard.classList.contains("active");

  allCards.forEach(card => card.classList.remove("active"));

  if (!isAlreadyActive) {
    selectedCard.classList.add("active");

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

  hero.style.transition = "0.8s ease";
  hero.style.opacity = "0";

  setTimeout(() => {
    hero.style.display = "none";
    
    if (interimStage) {
      interimStage.classList.add("show");

      setTimeout(() => { l1.classList.add("visible"); }, 200);       
      setTimeout(() => { l1.classList.remove("visible"); }, 2500);   

      setTimeout(() => { l2.classList.add("visible"); }, 3500);  
      setTimeout(() => { l2.classList.remove("visible"); }, 5800);

      setTimeout(() => { l3.classList.add("visible"); }, 6800);      
      setTimeout(() => { l3.classList.remove("visible"); }, 9100);   

      setTimeout(() => {
        interimStage.classList.remove("show"); 
        setTimeout(() => {
          startMemoryReveal();
        }, 1000);
      }, 10000);

    } else {
      startMemoryReveal();
    }
  }, 800);

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

function setActiveEpisode(selectedCard) {
  const viewer = document.getElementById("episodeViewer");
  const allCards = document.querySelectorAll(".episode-card");
  
  const isAlreadyActive = selectedCard.classList.contains("active");

  allCards.forEach(card => card.classList.remove("active"));

  if (!isAlreadyActive) {
    selectedCard.classList.add("active");

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