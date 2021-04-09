const navigation_sidebar = document.querySelector('.navigation ');

document.querySelector('.toggle').addEventListener('click', function () {
     this.classList.toggle('show_sidebar');

     // show menubar hide
     navigation_sidebar.classList.toggle('show_sidebars');
})
function Home() {
     history.pushState({}, "", "/itsy_Dashboard.html")
     document.getElementById("Home").innerHTML =
     `
          Hello World
     `
}


var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// textarea edit keterangan produk & symbol2
var quill = new Quill('#editor', {
    theme: 'snow'
  });

// produk setting
const setting_produk = document.querySelectorAll('.setting_product .check_varian');
setting_produk.forEach(item => {
    item.addEventListener('click',function (e) {
        if (e.target.name === "varian") {
            document.querySelector(".Kategori_Varian").classList.toggle('d-none');
            document.querySelector(".varian_product").classList.toggle("d-none")
        }else if (e.target.name === "diskon") {
                document.querySelector(".parent_diskon").classList.toggle("d-none")
        }else if (e.target.name === "grosir") {
                document.querySelector('.harga_grosir_check_true').classList.toggle("d-none")
        }
    })
})


// pemilihan varian size and warna
const Kategori_Varian = document.querySelectorAll(".Kategori_Varian");
Kategori_Varian.forEach(itemsVarian => {
    itemsVarian.addEventListener("click", function (e) {
        if (e.target.name === "kategori_size") {
            document.querySelector(".varian_product_true_size ").classList.toggle('d-none');
        }
        if (e.target.name === "kategori_warna") {
            document.querySelector(".product_true_color ").classList.toggle('d-none');
        }

    })
});



// +varian
const btn_add_varian = document.querySelector('.tambah_varian');
btn_add_varian.addEventListener('click', function () {
    document.querySelector(".KategoriVariann_product_2").classList.toggle('d-none')
})
