let progress = 0;

// Función para iniciar una lección adaptativa
function startLesson() {
    const lessonContent = document.getElementById('lesson-content');
    if (progress < 30) {
        lessonContent.innerHTML = "<p>Lección Básica: Fundamentos de la Inteligencia Artificial.</p>";
    } else if (progress < 60) {
        lessonContent.innerHTML = "<p>Lección Intermedia: Aplicaciones prácticas de la IA en la educación.</p>";
    } else {
        lessonContent.innerHTML = "<p>Lección Avanzada: Algoritmos adaptativos y su uso en plataformas de aprendizaje.</p>";
    }

    // Aumenta el progreso
    progress = Math.min(progress + 20, 100);
    updateProgress();
}

// Función para actualizar el progreso en la interfaz
function updateProgress() {
    const progressElement = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    progressElement.style.width = progress + '%';
    progressText.innerText = progress + '%';
}

// Función para iniciar una evaluación adaptativa
function takeQuiz() {
    alert("Iniciando evaluación...");
    progress = Math.min(progress + 10, 100); // Incrementa en 10% el progreso
    updateProgress();
}
