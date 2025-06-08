// Текущая страница
document.getElementById('currentSection').textContent = 'Главная';

// Меню для мобильных устройств
const menuToggle = document.getElementById('menuToggle');
const logoContainer = document.getElementById('logoContainer');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    logoContainer.classList.toggle('active');
    sidebar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Изменение иконки меню
    const icon = menuToggle.querySelector('i');
    if (logoContainer.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Навигация по разделам
const navLinks = document.querySelectorAll('nav a');
const sectionPages = document.querySelectorAll('.section-page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetSection = link.getAttribute('data-section');
        
        // Обновление активного пункта меню
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
        
        // Обновление заголовка текущего раздела
        document.getElementById('currentSection').textContent = link.textContent;
        
        // Показ соответствующего раздела
        sectionPages.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetSection).classList.add('active');
        
        // Прокрутка к началу страницы
        window.scrollTo(0, 0);
        
        // Закрытие меню на мобильных устройствах
        if (window.innerWidth < 992) {
            logoContainer.classList.remove('active');
            sidebar.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        }
    });
});

// Анимация при загрузке
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});