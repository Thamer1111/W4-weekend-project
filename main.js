document.addEventListener("DOMContentLoaded", function () {
  let user = localStorage.getItem('loggedInUser');
  let logindiv = document.getElementById('logdiv');
  let eventsList = document.getElementById('eventsList');
  let eventadd = document.getElementById("add-time-event");


  let events = [
    { year: "1543م", title: "نيكولاس كوبرنيكوس", description: `نشر كتابه "حول دوران الأجرام السماوية"، حيث اقترح أن الشمس، وليس الأرض، هي مركز الكون. هذا النموذج heliocentric كان بداية الثورة العلمية.` },
    { year: "1609م", title: "غاليليو غاليلي", description: `قام بتجارب أسقط فيها أجسامًا مختلفة ليثبت أن التسارع لا يعتمد على الكتلة، واستخدم التلسكوب لمراقبة القمر والكواكب، مما دعم نظرية كوبرنيكوس.` },
    { year: "1687م", title: " إسحاق نيوتن", description: `نشر كتابه "المبادئ الرياضية للفلسفة الطبيعية"، حيث صاغ: قوانين الحركة الثلاثة و قانون الجاذبية العام , ما وضع الأساس لفيزياء كلاسيكية سادت لقرون.` },
    { year: "1864م", title: "جيمس كلارك ماكسويل", description: `وضع أربع معادلات شهيرة تصف الكهرباء والمغناطيس، ودمجها في نظرية واحدة: النظرية الكهرومغناطيسية، التي تنبأت بوجود الموجات الكهرومغناطيسية.` },
    { year: "1900م ", title: "ماكس بلانك", description: `اقترح أن الطاقة تنبعث من الأجسام على شكل كمات (quanta) صغيرة. هذا المفهوم كان بداية ميكانيكا الكم.` },
    { year: "1905م", title: "ألبرت أينشتاين", description: `سنة المعجزات: نشر النظرية النسبية الخاصة، وطرح معادلة الطاقة الشهيرة: E=<sup>2</sup>mc التي تربط الكتلة بالطاقة، وغيّرت مفهوم الزمن والسرعة.` },
    { year: "1915م", title: "ألبرت أينشتاين", description: `طور نظريته لتشمل الجاذبية، حيث لم تعد قوة بين الأجسام، بل انحناء في نسيج الزمكان نتيجة الكتلة والطاقة.` }
  ];

  if (!user) {
    // eventadd.innerHTML=``;

    logindiv.innerHTML = `
    <a class="btn btn-outline-light btn-sm" id="loginBtn" href="login.html">تسجيل الدخول</a>
    <a class="btn btn-outline-light btn-sm" id="registBtn" href="register.html">تسجيل جديد</a>`;

  }else {
    eventadd.innerHTML = `<div class="container mt-5 w-50">
    
    <form id="eventForm" class="card p-4 shadow">
    <h3 class="mb-3 text-center">اضافة حدث زمني</h3>
      <div class="mb-2">
        <label for="scientist" class="form-label">اسم العالم</label>
        <input type="text" class="form-control" id="scientist" required>
      </div>
      <div class="mb-2">
        <label for="yeare" class="form-label">سنة الحدث</label>
        <input type="text" class="form-control" id="yeare" required>
      </div>
      <div class="mb-2">
        <label for="desc-theory" class="form-label">وصف النظرية</label>
        <textarea class="form-control" id="desc-theory" required></textarea>
      </div>
      <button type="submit" class="btn bg-sin btnhovr text-white  w-100" id="subBtn" >اضافة الحدث</button>
    </form>
  </div>`;
    logindiv.innerHTML = `<a class="link-underline link-underline-opacity-0 text-white" href="profile.html"><img class="rounded-circle" src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg" width="7%">  مرحبا  ${user}</a>`

    let subBtn = document.getElementById("subBtn");

    subBtn.addEventListener("click" , ()=>{
      
      let scientist = document.getElementById('scientist').value.trim();
      let desc_theory = document.getElementById('desc-theory').value.trim();
      let yeare = document.getElementById('yeare').value.trim();

      events[events.length] = {year: yeare, title: scientist, description: `${desc_theory}`};

    });
  
  }

  

  events.sort((a, b)=> {
    return a.year - b.year;
  });

  events.forEach(event => {
    let col = document.createElement('div');
    col.className = 'text-end row my-4';
    col.innerHTML = `
      <div class="col-1 d-flex align-items-center">
          <h6 class="mb-2 text-center ">${event.year}</h6>
        </div>
        <div class="bord col-1" ></div>
        <div class="col-10 h-100 text-end">
        <div>
          <h5 class="text-colr">${event.title}</h5>
          <p>${event.description}</p>
        </div>
      </div>
    `;
    eventsList.appendChild(col);
  });
});
