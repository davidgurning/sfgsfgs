//Toggle kelas avtive

const navbarNav = document.querySelector(".navba-nav");
// const humbergerMenu = document.querySelector(".navbar-extra");

//ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//ketika diklik diluar nav dan juga button option dapat menutup navbarnya

const optionMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!optionMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ANIMATION-----------------
var typed = new Typed(".typing", {
  strings: ["Designer", "Web Developer"],
  typeSpeed: 150,
  backSpeed: 30,
  loop: true,
});

// --------------contact-bottom--------------------
// Ambil referensi ke elemen input nama dan email
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("message");
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const subjectValue = subjectInput.value.trim();

  if (
    nameValue.length < 6 ||
    emailValue.length < 8 ||
    subjectValue.length < 10
  ) {
    alert("Silakan periksa kembali isian formulir Anda.");
    event.preventDefault();
  } else {
    alert("Formulir berhasil dikirim.");
  }
});

// ---------------untuk seluruh project----------------------------
const allButton = document.getElementById("#all");

const websiteButton = document.getElementById("#website-btn");

const websiteElement = document.querySelector(".pembungkus-website");

const designButton = document.getElementById("#design-btn");

const designElement = document.querySelector(".pembungkus-design");

const mobileButton = document.getElementById("#mobile-btn");

const mobileElement = document.querySelector(".pembungkus-mobile");

allButton.addEventListener("click", function (event) {
  event.preventDefault();
  designElement.style.display = "block";
  mobileElement.style.display = "block";
  websiteElement.style.display = "block";
});

websiteButton.addEventListener("click", function (event) {
  event.preventDefault();
  designElement.style.display = "none";
  mobileElement.style.display = "none";
  websiteElement.style.display = "block";
});

designButton.addEventListener("click", function (event) {
  event.preventDefault();
  websiteElement.style.display = "none";
  mobileElement.style.display = "none";
  designElement.style.display = "block";
});

// Menambahkan event listener untuk mengubah display pada klik tombol
mobileButton.addEventListener("click", function (event) {
  event.preventDefault(); // Menghentikan tindakan default dari tautan
  // if (mobileElement.style.display === "flex") {
  // websiteElement.style.display === "flex";
  websiteElement.style.display = "none"; // Menampilkan elemen
  designElement.style.display = "none"; // menampilkan elemen
  // } else {
  mobileElement.style.display = "block"; // Menampilkan elemen
  // designElement.style.display = "flex"; // Menyembunyikan elemen
  // }
});

// -------------------------------------------------skills
const aboutDis = document.querySelector(".about");
const aboutBtn = document.getElementById("about-btn");

const heroDis = document.querySelector(".hero-section");
const heroBtn = document.getElementById("hero-btn");

const serviceDis = document.querySelector(".service");
const serviceBtn = document.getElementById("service-btn");

const skillsDis = document.querySelector(".skills");
const skillsBtn = document.getElementById("skills-btn");

const contactDis = document.querySelector(".contact");
const contactBtn = document.getElementById("contact-btn");

const projectbtn = document.getElementById("btn-style-pmb");
const certifbtn = document.getElementById("btn-style-certif");

const resumeDis = document.querySelector(".resume");
const resumesBtn = document.getElementById("resume-btn");

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// Mendefinisikan elemen-elemen dan tombol-tombol Anda
const elements = {
  about: document.querySelector(".about"),
  hero: document.querySelector(".hero-section"),
  service: document.querySelector(".service"),
  skills: document.querySelector(".skills"),
  contact: document.querySelector(".contact"),
};

const buttons = {
  about: document.getElementById("about-btn"),
  hero: document.getElementById("hero-btn"),
  service: document.getElementById("service-btn"),
  skills: document.getElementById("skills-btn"),
  contact: document.getElementById("contact-btn"),
  project: document.getElementById("project-btn"),
};

// Fungsi untuk mengatur tampilan elemen dan menggulir ke atas
function toggleElementAndScrollToTop(elementToShow) {
  for (const key in elements) {
    if (elements.hasOwnProperty(key)) {
      elements[key].style.display = key === elementToShow ? "block" : "none";
    }
  }
  window.scrollTo(0, 0); // Menggulir halaman ke atas
}

// Menambahkan event listener pada semua tombol
for (const key in buttons) {
  if (buttons.hasOwnProperty(key)) {
    const button = buttons[key];
    if (button) {
      // Memeriksa apakah elemen button tidak null atau undefined
      button.addEventListener("click", function (event) {
        event.preventDefault();
        toggleElementAndScrollToTop(key);
      });
    }
  }
}

// Menampilkan elemen awal saat halaman dimuat (misalnya, "hero" ditampilkan pertama kali)
toggleElementAndScrollToTop("hero");

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

aboutBtn.addEventListener("click", function (event) {
  event.preventDefault();
  aboutBtn.style.color = "rgb(18, 247, 255, 0.4)";
  aboutBtn.style.fontSize = "1.2rem";
  aboutBtn.style.fontWeight = "600";
  aboutDis.style.display = "block";
  heroDis.style.display = "none";
  heroBtn.style.color = "#fff";
  heroBtn.style.fontSize = "1rem";
  serviceDis.style.display = "none";
  serviceBtn.style.color = "#fff";
  serviceBtn.style.fontSize = "1rem";
  skillsDis.style.display = "none";
  skillsBtn.style.color = "#fff";
  skillsBtn.style.fontSize = "1rem";
  contactDis.style.display = "none";
  contactBtn.style.color = "#fff";
  contactBtn.style.fontSize = "1rem";
  resumeDis.style.display = "none";
  resumesBtn.style.color = "#fff";
  resumesBtn.style.fontSize = "1rem";
});

heroBtn.addEventListener("click", function (event) {
  event.preventDefault();
  heroBtn.style.color = "rgb(18, 247, 255, 0.4)";
  heroBtn.style.fontSize = "1.2rem";
  aboutDis.style.display = "none";
  aboutBtn.style.color = "#fff";
  aboutBtn.style.fontSize = "1rem";
  heroDis.style.display = "block";
  serviceDis.style.display = "none";
  serviceBtn.style.color = "#fff";
  serviceBtn.style.fontSize = "1rem";
  skillsDis.style.display = "none";
  skillsBtn.style.color = "#fff";
  contactDis.style.display = "none";
  contactBtn.style.color = "#fff";
  contactBtn.style.fontSize = "1rem";
  resumeDis.style.display = "none";
  resumesBtn.style.color = "#fff";
  resumesBtn.style.fontSize = "1rem";
});

serviceBtn.addEventListener("click", function (event) {
  event.preventDefault();
  serviceBtn.style.color = "rgb(18, 247, 255, 0.4)";
  serviceBtn.style.fontSize = "1.2rem";
  aboutDis.style.display = "none";
  aboutBtn.style.color = "#fff";
  aboutBtn.style.fontSize = "1rem";
  heroDis.style.display = "none";
  heroBtn.style.color = "#fff";
  heroBtn.style.fontSize = "1rem";
  serviceDis.style.display = "block";
  skillsDis.style.display = "none";
  skillsBtn.style.color = "#fff";
  skillsBtn.style.fontSize = "1rem";
  contactDis.style.display = "none";
  contactBtn.style.color = "#fff";
  contactBtn.style.fontSize = "1rem";
  resumeDis.style.display = "none";
  resumesBtn.style.color = "#fff";
  resumesBtn.style.fontSize = "1rem";
});

resumesBtn.addEventListener("click", function (event) {
  event.preventDefault();
  resumesBtn.style.color = "rgb(18, 247, 255, 0.4)";
  resumesBtn.style.fontSize = "1.2rem";
  resumeDis.style.display = "block";
  aboutDis.style.display = "none";
  aboutBtn.style.color = "#fff";
  aboutBtn.style.fontSize = "1rem";
  heroDis.style.display = "none";
  heroBtn.style.color = "#fff";
  heroBtn.style.fontSize = "1rem";
  serviceDis.style.display = "none";
  serviceBtn.style.color = "#fff";
  serviceBtn.style.fontSize = "1rem";
  skillsDis.style.display = "none";
  skillsBtn.style.color = "#fff";
  skillsBtn.style.fontSize = "1rem";
  contactDis.style.display = "none";
  contactBtn.style.color = "#fff";
  contactBtn.style.fontSize = "1rem";
});

skillsBtn.addEventListener("click", function (event) {
  event.preventDefault();
  skillsBtn.style.color = "rgb(18, 247, 255, 0.4)";
  skillsBtn.style.fontSize = "1.2rem";
  aboutDis.style.display = "none";
  aboutBtn.style.color = "#fff";
  aboutBtn.style.fontSize = "1rem";
  heroDis.style.display = "none";
  heroBtn.style.color = "#fff";
  heroBtn.style.fontSize = "1rem";
  serviceDis.style.display = "none";
  serviceBtn.style.color = "#fff";
  serviceBtn.style.fontSize = "1rem";
  skillsDis.style.display = "block";
  contactDis.style.display = "none";
  contactBtn.style.color = "#fff";
  contactBtn.style.fontSize = "1rem";
  resumeDis.style.display = "none";
  resumesBtn.style.color = "#fff";
  resumesBtn.style.fontSize = "1rem";
});

contactBtn.addEventListener("click", function (event) {
  event.preventDefault();
  contactBtn.style.color = "rgb(18, 247, 255, 0.4)";
  contactBtn.style.fontSize = "1.2rem";
  aboutDis.style.display = "none";
  aboutBtn.style.color = "#fff";
  aboutBtn.style.fontSize = "1rem";
  heroDis.style.display = "none";
  heroBtn.style.color = "#fff";
  heroBtn.style.fontSize = "1rem";
  serviceDis.style.display = "none";
  serviceBtn.style.color = "#fff";
  serviceBtn.style.fontSize = "1rem";
  skillsDis.style.display = "none";
  skillsBtn.style.color = "#fff";
  skillsBtn.style.fontSize = "1rem";
  contactDis.style.display = "block";
  resumeDis.style.display = "none";
  resumesBtn.style.color = "#fff";
  resumesBtn.style.fontSize = "1rem";
});

projectbtn.addEventListener("click", function (event) {
  event.preventDefault();
  aboutDis.style.display = "none";
  heroDis.style.display = "none";
  serviceDis.style.display = "block";
  skillsDis.style.display = "none";
  contactDis.style.display = "none";
  // display.scroll(0.0);
});

certifbtn.addEventListener("click", function (event) {
  event.preventDefault();
  aboutDis.style.display = "none";
  heroDis.style.display = "none";
  serviceDis.style.display = "none";
  skillsDis.style.display = "block";
  contactDis.style.display = "none";
});

// const btnPort = document.querySelectorAll(".btn-size");
// const allbtn = document.getElementById("all");

// btnPort.addEventListener("click", function (event) {
//   event.preventDefault();
//   allbtn.style.top = "5px";
// });

// skills---------------------------------------------------------
const shsButton = document.getElementById("#senior-high-school-btn");
const seluruhnyaButton = document.getElementById("#seluruhnya-btn");
const collageButton = document.getElementById("#collage-btn");
const orgButton = document.getElementById("#organization-btn");
const expertiseButton = document.getElementById("#expertise-btn");
const shsElement = document.querySelector(".pembungkus-shs");
const orgElement = document.querySelector(".pembungkus-org");
const collageElement = document.querySelector(".pembungkus-collage");
const expertiseElement = document.querySelector(".pembungkus-expertise");

seluruhnyaButton.addEventListener("click", function (event) {
  event.preventDefault();
  shsElement.style.display = "block";
  orgElement.style.display = "block";
  collageElement.style.display = "block";
  expertiseElement.style.display = "block";
});

shsButton.addEventListener("click", function (event) {
  event.preventDefault();
  shsElement.style.display = "block";
  orgElement.style.display = "none";
  collageElement.style.display = "none";
  expertiseElement.style.display = "none";
});

orgButton.addEventListener("click", function (event) {
  event.preventDefault();
  shsElement.style.display = "none";
  orgElement.style.display = "block";
  collageElement.style.display = "none";
  expertiseElement.style.display = "none";
});

collageButton.addEventListener("click", function (event) {
  event.preventDefault();
  shsElement.style.display = "none";
  orgElement.style.display = "none";
  collageElement.style.display = "block";
  expertiseElement.style.display = "none";
});

expertiseButton.addEventListener("click", function (event) {
  event.preventDefault();
  shsElement.style.display = "none";
  orgElement.style.display = "none";
  collageElement.style.display = "none";
  expertiseElement.style.display = "block";
});

// progress-bar

// ======================================================================
// Get the modal and close button
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");
const openModalButton = document.getElementById("openModal");

// When the user clicks the openModalButton, display the modal
openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks the closeModal button or outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal || event.target == closeModal) {
    modal.style.display = "none";
  }
});

// button project
const modal1 = document.getElementById("myModal-1");
const closeModal1 = document.getElementById("closeModal-1");
const openModalButton1 = document.getElementById("openModal-1");

// When the user clicks the openModalButton, display the modal
openModalButton1.addEventListener("click", function () {
  modal1.style.display = "block";
});

// When the user clicks the closeModal button or outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal1 || event.target == closeModal1) {
    modal1.style.display = "none";
  }
});

// button project
const modal2 = document.getElementById("myModal-2");
const closeModal2 = document.getElementById("closeModal-2");
const openModalButton2 = document.getElementById("openModal-2");

// When the user clicks the openModalButton, display the modal
openModalButton2.addEventListener("click", function () {
  modal2.style.display = "block";
});

// When the user clicks the closeModal button or outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal2 || event.target == closeModal2) {
    modal2.style.display = "none";
  }
});

// ---------------------------------------------------------
// fade-in effect :

$(document).ready(function () {
  $("#about-btn").click(function (e) {
    e.preventDefault(); // Mencegah tautan dari pergi ke anchor
    $(".about").fadeIn();
  });
});
