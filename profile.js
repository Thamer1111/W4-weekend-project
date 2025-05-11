document.addEventListener("DOMContentLoaded", function () {
    let user = localStorage.getItem('loggedInUser');
    let age = localStorage.getItem('age');
    let logoutBtn = document.getElementById("logoutBtn");
    let info = document.getElementById("info-profile");

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
  });

  info.innerHTML = `
            <h4><b>اسم المستخدم: </b> ${user}</h4>
            <h4><b>العمر: </b> ${age}</h4>
  `

});
