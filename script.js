document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar nav a');
    const sections = document.querySelectorAll('#home, #about, #services, #portfolio, #testimonials, #contact');
    const navbar = document.querySelector('.navbar');

    // دالة لتحديد الرابط النشط وتغيير خلفية شريط التنقل
    function handleScroll() {
        let current = '';
        const headerHeight = navbar.offsetHeight; 

        sections.forEach(section => {
            // نُعدِّل الإزاحة للتعرف على القسم بشكل صحيح أسفل شريط التنقل الثابت
            const sectionTop = section.offsetTop - headerHeight - 20; 
            const sectionBottom = sectionTop + section.clientHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        // تفعيل الرابط المناسب
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        // تفعيل خلفية شريط التنقل عند التمرير لأسفل
        if (window.scrollY > 50) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // نُعلّق على حدث التمرير ونُفعّله عند التحميل الأولي
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});