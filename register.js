document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('registerForm');
    let message = document.getElementById('message');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      let username = document.getElementById('username').value.trim();
      let password = document.getElementById('password').value.trim();
      let age = document.getElementById('age').value.trim();
      if (username.length <= 4) {
        message.innerHTML = '<div class="text-danger">اسم المستخدم يجب أن يكون أكثر من 4 أحرف.</div>';
        return;
      }
  
      if (password.length <= 3) {
        message.innerHTML = '<div class="text-danger">كلمة المرور يجب أن تكون أكثر من 3 أحرف.</div>';
        return;
      }
  
      localStorage.setItem('loggedInUser', username);
      localStorage.setItem('pass', password);
      localStorage.setItem('age', age);
      message.innerHTML = '<div class="text-success">تم إنشاء الحساب بنجاح!</div>';

      window.location.href = "index.html";
    });
  });
  