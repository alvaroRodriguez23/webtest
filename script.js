const sobre = document.getElementById("sobre");
const pantallaSobre = document.getElementById("sobre-pantalla");
const carta = document.getElementById("carta");
const elementos = document.querySelectorAll(".aparecer");

/* BLOQUEAR SCROLL */
document.body.style.overflow = "hidden";

/* ABRIR SOBRE */
sobre.addEventListener("click", () => {
    sobre.classList.add("abriendo");
    setTimeout(() => {
        pantallaSobre.classList.add("abierto");
        carta.classList.add("visible");
        document.body.style.overflow = "auto";
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, 950);
});

/* ANIMACIONES AL HACER SCROLL */
const observer = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    }
);

elementos.forEach((elemento) => {
    observer.observe(elemento);
});

/* CORAZONES INTERACTIVOS */
const corazones = document.querySelectorAll(
    ".corazon-final, .recuerdo-corazon, .foto-corazon img"
);

corazones.forEach((corazon) => {
    corazon.addEventListener("click", () => {
        corazon.style.transform = "scale(1.4)";
        setTimeout(() => {
            corazon.style.transform = "";
        }, 350);
    });
});

/* PARALLAX SUAVE */
const papel = document.querySelector(".papel");
const flores = document.querySelector(".flores-fondo");

window.addEventListener(
    "scroll",
    () => {
        if (!papel || !flores) {
            return;
        }
        const scroll = window.scrollY;
        flores.style.transform = `translateY(${scroll * 0.025}px)`;
    },
    {
        passive: true
    }
);