document.getElementById("formKontak").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;
  const notif = document.getElementById("notif");

  // Simulasi kirim pesan
  notif.textContent = `Terima kasih ${nama}, pesan kamu sudah dikirim!`;
  notif.style.color = "green";

  // Reset form
  document.getElementById("formKontak").reset();

  // Simpan data terakhir di localStorage
  localStorage.setItem("lastContact", JSON.stringify({ nama, email, pesan }));
});
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️";
  } else {
    darkModeBtn.textContent = "🌙";
  }
});
// Efek fade-in untuk setiap section
window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, header");
  sections.forEach((el, i) => {
    el.classList.add("fade-in");
    el.style.animationDelay = `${i * 0.3}s`; // jeda antar elemen
  });
});
// Scroll halus saat klik menu navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// === LIGHTBOX DENGAN SLIDESHOW ===
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const images = Array.from(document.querySelectorAll(".gallery-container img"));
let currentIndex = 0;

// Buka lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Tutup lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Klik luar → tutup
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Navigasi Next
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Navigasi Prev
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});
// === Navigasi pakai keyboard ===
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "block") {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImg.src = images[currentIndex].src;
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
    } else if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  }
});

