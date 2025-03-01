function showInfo(service) {
    let descriptions = {
        "aws": "AWS (Amazon Web Services) is a cloud platform offering storage, computing, and AI solutions.",
        "azure": "Azure is a Microsoft cloud service providing infrastructure, AI, and analytics.",
        "gcp": "Google Cloud Platform (GCP) is a suite of cloud computing services by Google."
    };

    document.getElementById(service + "-text").innerText = descriptions[service];
}

// Переключение темы
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});