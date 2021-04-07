const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const user_name = document.getElementById("user_name");
const user_email = document.getElementById('user_email');
const user_number_phone = document.getElementById("user_number_phone");
const user_password1 = document.getElementById("user_password1");
const user_password2 = document.getElementById("user_password2");
const btn_next_form  = document.getElementById("btn_next_form");
const btn_back_form  = document.getElementById("btn_back_form_register");

function validasi_user_password() {

     if (user_password2.value != user_password1.value) {
          document.querySelector('.err_konfirmasi_password').classList.toggle('d-block')
          return (false)
     }
     else {
          document.querySelector('.err_konfirmasi_password').classList.remove('d-block')
          setTimeout(() => {
               document.querySelector('.register_box').classList.add("d-none");
               document.querySelector('#sectionStore').classList.remove("d-none");
          }, 500);
     }
     return(true)
}



btn_next_form.addEventListener('click', function (e) {

     if (first_name.value && last_name.value && user_name.value && user_email.value && user_password1.value && user_password2.value && user_number_phone.value != "") {
           validasi_user_password();
           e.preventDefault();
     }
    else {
          alert("Mohon Isi Form ini Dengan Benar!")
     }

})

btn_back_form.addEventListener('click', function (e) {
     document.querySelector('.register_box').classList.remove('d-none')
     document.querySelector('#sectionStore').classList.add('d-none')
     e.preventDefault();
});
