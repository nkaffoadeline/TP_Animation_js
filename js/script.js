

// Sélection de la boîte
const box = document.getElementById("box");

/// Animation pour le clic (translation vers la droite et retour)
box.addEventListener("click", () => {
  const tl = gsap.timeline();
  
  // Animation vers la droite
  tl.to(box, { x: 500, duration: 1 })
    // Retour à la position d'origine
    .to(box, { x: 0, duration: 1 });
});

// Animation pour le double clic (rotation)
box.addEventListener("dblclick", () => {
  gsap.to(box, { rotation: 360, duration: 1 });
});

// Animation pour mouseover (changement de couleur et scale)
box.addEventListener("mouseover", () => {
  gsap.to(box, { backgroundColor: "#e74c3c", scale: 1.2, duration: 0.5 });
});

// Animation pour mouseout (retour à la couleur initiale et scale normal)
box.addEventListener("mouseout", () => {
  gsap.to(box, { backgroundColor: "#3498db", scale: 1, duration: 0.5 });
});

// Animation pour un clic droit (contextmenu) (bascule)
box.addEventListener("contextmenu", (event) => {
  
  gsap.to(box, { y: 100, rotation: -180, duration: 1 });
});
