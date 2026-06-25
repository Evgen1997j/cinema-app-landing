// Плавный скролл для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Подсчёт скачиваний (опционально)
document.querySelectorAll('.btn-download').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Скачивание файла:', this.textContent.trim());
        // Здесь можно добавить аналитику
    });
});

console.log('🎬 Лендинг Кинотеатр загружен!');
