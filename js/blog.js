// 博客页面特定功能
document.addEventListener('DOMContentLoaded', function() {
    // 评论表单提交处理
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input').value;
            const comment = this.querySelector('textarea').value;
            
            // 这里可以添加提交评论的逻辑
            // 例如：发送到后端API或显示新的评论
            console.log('评论提交:', { name, comment });
            
            // 显示提交成功消息
            alert('评论提交成功！');
            
            // 清空表单
            this.querySelector('input').value = '';
            this.querySelector('textarea').value = '';
        });
    }
    
    // 分享功能
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = window.location.href;
            const title = document.querySelector('.post-header h1').textContent;
            
            if (navigator.share) {
                navigator.share({
                    title: title,
                    text: '分享这篇文章',
                    url: url
                });
            } else {
                // 备用分享方法
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
            }
        });
    });
    
    // 文章目录导航
    const headings = document.querySelectorAll('.post-content h2, .post-content h3');
    if (headings.length > 3) {
        const tocContainer = document.createElement('div');
        tocContainer.className = 'table-of-content';
        tocContainer.innerHTML = '<h3>文章目录</h3>';
        
        const tocList = document.createElement('ul');
        headings.forEach(heading => {
            if (heading.textContent.trim()) {
                const tocItem = document.createElement('li');
                tocItem.innerHTML = `<a href="#${heading.id || ''}">${heading.textContent}</a>`;
                tocList.appendChild(tocItem);
            }
        });
        
        tocContainer.appendChild(tocList);
        const postContent = document.querySelector('.post-content');
        if (postContent) {
            postContent.insertBefore(tocContainer, postContent.firstChild);
        }
    }
});