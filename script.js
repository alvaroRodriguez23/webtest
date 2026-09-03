const sobre = document.getElementById("sobre");
const pantallaSobre = document.getElementById("sobre-pantalla");
const carta = document.getElementById("carta");
const elementos = document.querySelectorAll(".aparecer");




const SUPABASE_URL = "https://rtbbnjliebmodfdaeves.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_FQGkNGgtAEkPcpMdo7iMXA_q-uiMXpH";


async function registrarVisita() {
    const dispositivo = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
        ? "Móvil"
        : "PC";

    const navegador = navigator.userAgent;

    const { error } = await supabase
        .from("visitas")
        .insert({
            dispositivo: dispositivo,
            navegador: navegador
        });

    if (error) {
        console.error("Error registrando visita:", error);
    } else {
        console.log("Visita registrada correctamente");
    }
}

registrarVisita();


const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

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