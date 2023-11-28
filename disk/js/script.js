const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle('scrolling-active', windowPosition);
});

// fungsi loading button daftar index.html
document.addEventListener("DOMContentLoaded", function () {
  const daftarButton = document.getElementById("daftar-button");

  daftarButton.addEventListener("click", function () {
    daftarButton.classList.add("loading");
    setTimeout(function () {
      window.location.href = "pendaftaran.html";
    }, 2000); 
  });
});

// fungsi cencel button cencel pendaftaran.html
const cancelButton = document.getElementById('cancel-button');
const spinner = cancelButton.querySelector('.spinner-border');

cancelButton.addEventListener('click', () => {
  // Tampilkan spinner
  spinner.classList.remove('d-none');

  // Alihkan ke "index.html" setelah beberapa waktu (misalnya, 2 detik)
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
});



// Script contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzlTIUBBTW5WdjXIPnOr_L3PMU23N2Cpk8smjK9cLEpauFvzvodkTbm-71N9jr-Qs_YLw/exec'
  const form = document.forms['test'];
  const btnDaftar = document.querySelector('.btn-daftar');
  const btnLoading = document.querySelector('.btn-loading');
  const myAlert = document.querySelector('.my-alert');

  form.addEventListener('submit', e => {
    e.preventDefault();  
    // ketika button daftar di klik
    // tampilkan tombol loading, hilangkan tombol daftar
      btnLoading.classList.toggle('d-none');
      btnDaftar.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // tampilkan tombol daftar, hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnDaftar.classList.toggle('d-none');
        // Tampilkan allert
        myAlert.classList.toggle('d-none');
        // Reset data
        form.reset();
        console.log('Success!', response);
      })
      .catch(error => console.error('Error!', error.message))
  });

