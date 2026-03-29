// 移动菜单切换
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 页面滚动时隐藏移动菜单
window.addEventListener('scroll', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// 加载更多文章功能（示例）
function loadMorePosts() {
    // 这里可以添加加载更多文章的逻辑
    console.log('加载更多文章');
}

// 页面加载动画
window.addEventListener('DOMContentLoaded', () => {
    // 添加页面加载完成的动画效果
    document.body.classList.add('loaded');
});