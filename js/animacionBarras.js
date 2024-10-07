// Función para animar una barra de progreso

function animateProgressBar(id, width) {
    let elem = document.getElementById(id).querySelector('.percentage');
    let currentWidth = 0
    let interval = setInterval(() => {
        if (currentWidth >= width) {
            clearInterval(interval);
        } else {
            currentWidth++;
            elem.style.width = currentWidth + "%"
            elem.textContent = currentWidth + "%"
        }
    }, 15);
}

// Función que inicia las animaciones de las barras de progreso
function startAnimation() {
    animateProgressBar("progress-html", 40)
    animateProgressBar("progress-java", 50)
    animateProgressBar("progress-c++", 20)
    animateProgressBar("progress-c#", 30)
    animateProgressBar("progress-python", 25)
    animateProgressBar("progress-r", 30)
    animateProgressBar("progress-sql", 80)
    animateProgressBar("progress-git", 50)
    animateProgressBar("progress-haskell", 40)
    animateProgressBar("progress-kotlin", 10)
    animateProgressBar("progress-linux", 30)
}

// Detectar cuando la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    startAnimation();

    // Detectar click en el enlace de "Curriculum Vitae"
    const curriculumLink = document.querySelector("a[href='#curriculum']");

    curriculumLink.addEventListener("click", function() {
        startAnimation();
    });
});