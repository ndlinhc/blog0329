// 联系页面表单处理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const subject = this.querySelector('#subject').value;
            const message = this.querySelector('#message').value;
            
            // 验证数据
            if (!name || !email || !subject || !message) {
                alert('请填写所有字段');
                return;
            }
            
            // 显示提交状态
            const submitBtn = this.querySelector('.btn-primary');
            submitBtn.textContent = '正在发送...';
            submitBtn.disabled = true;
            
            // 模拟发送过程（实际应用中需要发送到后端API）
            setTimeout(() => {
                alert('消息已发送！我们会尽快回复您。');
                submitBtn.textContent = '发送消息';
                submitBtn.disabled = false;
                
                // 清空表单
                this.querySelector('#name').value = '';
                this.querySelector('#email').value = '';
                this.querySelector('#subject').value = '';
                this.querySelector('#message').value = '';
            }, 2000);
        });
    }
});