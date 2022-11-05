let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");
let b = document.getElementById("bold");

let re_id = document.getElementById("reId");
let re_password = document.getElementById("rePassword");
let re_email = document.getElementById("reEmail");
let reButton = document.getElementById("reButton");
let reSuccess = document.querySelector(".registerSuccess");
let rgsnackbar = document.querySelector(".rgsnackbar");
let re_ary = [];

let login_id = document.getElementById("loId");
let login_password = document.getElementById("loPassword");
let losnackbar = document.querySelector(".losnackbar");
let loButton = document.getElementById("loButton");
let losuccess = document.querySelector(".loginSuccess");

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

function register() {
  x.style.left = "-480px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function che() {
  b.style.color = "gray";
  b.style.fontWeight = "700";
  b.style.fontFamily = "sans-serif";
}

reButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (re_id.value && re_password.value && re_email.value) {
    re_ary.push(re_id.value);
    re_ary.push(re_email.value);
    re_ary.push(re_password.value);

    re_id.value = "";
    re_password.value = "";
    re_email.value = "";

    reSuccess.classList.add("registershow");
    reButton.classList.add("active");
  } else {
    rgsnackbar.classList.add("snackbarshow");
    setTimeout(function () {
      rgsnackbar.classList.remove("snackbarshow");
    }, 2000);
  }
});

loButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (login_id.value === re_ary[0] && login_password.value === re_ary[2]) {
    login_id.value = "";
    login_password.value = "";
    losuccess.classList.add("loginshow");
    loButton.classList.add("active");
  } else if (
    login_id.value !== re_ary[0] &&
    login_password.value !== re_ary[2]
  ) {
    x.style.left = "-480px";
    y.style.left = "50px";
    z.style.left = "110px";
    x.style.transition = "1s";
    y.style.transition = "1s";
    losnackbar.classList.add("snackbarshow");
    setTimeout(function () {
      losnackbar.classList.remove("snackbarshow");
    }, 3000);
  } else {
    losnackbar.textContent = "Wrong User ID or Password";
    losnackbar.classList.add("snackbarshow");
    setTimeout(function () {
      losnackbar.classList.remove("snackbarshow");
    }, 3000);
  }
});
