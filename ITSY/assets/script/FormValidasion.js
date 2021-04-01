const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const user_name = document.getElementById("user_name");
const user_email = document.getElementById('user_email');
const user_number_phone = document.getElementById("user_number_phone");
const user_password = document.getElementById("user_password");
const user_konfirmasi_password = document.getElementById("user_konfirmasi_password");
const btn_next_form = document.getElementById('btn_next_form');

function Validasion_first_name() {
     if (first_name.value === "") {
        return  document.querySelector('.err_firs_name').classList.add('d-block')
     } else if (first_name.value !== "") {
          return document.querySelector('.err_firs_name').classList.remove('d-block')
     }
}
function Validasion_last_name() {
     if (last_name.value === "") {
        return  document.querySelector('.err_last_name').classList.add('d-block')
     } else if (last_name.value !== "") {
          return document.querySelector('.err_last_name').classList.remove('d-block')
     }
}

function Validasion_username() {
      if (user_name.value === "") {
        return  document.querySelector('.err_username').classList.add('d-block')
     } else if (user_name.value !== "") {
          return document.querySelector('.err_username').classList.remove('d-block')
     }
}

function Validasion_user_email() {
      if (user_email.value === "") {
        return  document.querySelector('.err_user_email').classList.add('d-block')
     } else if (user_email.value !== "") {
          return document.querySelector('.err_user_email').classList.remove('d-block')
     }
}

function Validasion_user_number_phone() {
      if (user_number_phone.value === "") {
        return  document.querySelector('.err_number_phone').classList.add('d-block')
     } else if (user_number_phone.value !== "") {
          return document.querySelector('.err_number_phone').classList.remove('d-block')
     }
}

function Validasion_user_password() {
     if (user_password.value === "") {
          return document.querySelector('.err_konfirmasi_password').classList.add('d-block')
     } else if (user_password.value !== "") {
          return document.querySelector('.err_konfirmasi_password').classList.remove('d-block')
     }
}

//  Vaidasi Password, Jika Tidak Sama Dengan Yang di atas....
function Validasi_konfirmasi_password() {
     if (user_password.value !== user_konfirmasi_password.value) {
           return document.querySelector('.err_konfirmasi_password_tidak_sama').classList.add('d-block');
     } else {
          return document.querySelector('.err_konfirmasi_password_tidak_sama').classList.remove('d-block');
     }
}

btn_next_form.addEventListener("click", function (e) {
     e.preventDefault();
     Validasion_first_name();
     Validasion_last_name();
     Validasion_username();
     Validasion_user_email();
     Validasion_user_number_phone();
     Validasion_user_password();
     Validasi_konfirmasi_password();
})