// Функция для показа/скрытия информации о сервисе
function showInfo(service) {
    let descriptions = {
        "aws": "AWS (Amazon Web Services) is a cloud platform offering storage, computing, and AI solutions.",
        "azure": "Azure is a Microsoft cloud service providing infrastructure, AI, and analytics.",
        "gcp": "Google Cloud Platform (GCP) is a suite of cloud computing services by Google."
    };

    let paragraph = document.getElementById(service + "-text");

    // Если текст уже отображается, скрываем его, иначе показываем описание
    if (paragraph.innerText === descriptions[service]) {
        paragraph.innerText = "Click below to learn more!";
    } else {
        paragraph.innerText = descriptions[service];
    }
}

// Переключение темы (тёмная/светлая)
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
