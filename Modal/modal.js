const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#modal button");
const openModal = document.querySelector("#open");
const overlay = document.querySelector("#overlay");
const demo = document.querySelector("#demo");

openModal.addEventListener("click", () => {
  gsap.fromTo(openModal, 0.3, { scale: 1 }, { scale: 0 });
  gsap.fromTo(modal, 0.3, { scale: 0 }, { scale: 1, delay: 0.3 });
  setTimeout(() => {
    overlay.classList.add("open");
    modal.classList.add("open");
    demo.innerHTML = "can't click";
  }, 300);
});

closeModal.addEventListener("click", () => {
  gsap.fromTo(modal, 0.3, { scale: 1 }, { scale: 0 });
  gsap.fromTo(openModal, 0.3, { scale: 0 }, { scale: 1, delay: 0.3 });
  setTimeout(() => {
    modal.classList.remove("open");
    overlay.classList.remove("open");
    demo.innerHTML = "can click";
  }, 350);
});
