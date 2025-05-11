document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (localStorage.getItem('loggedInUser') != username || localStorage.getItem('pass') != password) {
        message.innerHTML = '<div class="text-danger">اسم المستخدم أو كلمة المرور غير صحيحة.</div>';
        return;
      }
  
      message.innerHTML = '<div class="text-success">تم تسجيل الدخول بنجاح!</div>';
      
      window.location.href = "index.html";
      
    });
  });
  