let introID = document.getElementById("intros");
let intro1 = "<p class = 'small-size'>Hello!</p><p>I'm <span class='turq-color'>Praneeth Ravuri</span></p>"
let intro2 = "<p class = 'small-size'>Master's in Computer Science Student</p><p>@ <span class='turq-color'>George Mason University</span></p>";
let isIntro1 = true;

function keepFading() {
  $("#introduction").fadeOut(3000, function() {
    if (isIntro1) {
      introID.innerHTML = intro2;
      isIntro1 = false;
    } else {
      introID.innerHTML = intro1;
      isIntro1 = true;
    }
    $("#introduction").fadeIn(2500, keepFading);
  });
}

keepFading();