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


// TODO LIST VARIAN
const container_todo = document.querySelector('.container_todo_value');
const inputValue = document.querySelector('.filter_varian');
const btn_filter_todo = document.querySelector('.btn_filter_varian');

//mengambil element
const add_ui_varian = document.getElementById("add_ui_varian");

// Event click listener pada button input varian
btn_filter_todo.addEventListener("click", function (e) {
    // parent alert todos
    const el = document.createElement("div");

    // stong tag todos
    const strElement = document.createElement("strong");
    strElement.textContent = inputValue.value;

    // span text close icons
    const span_times_close = document.createElement("span")
    span_times_close.setAttribute("aria-hidden", true)
    span_times_close.textContent = "x";

    // btn close
    const btn_close = document.createElement('button');
    btn_close.type = "button";
    btn_close.classList.add("close");
    btn_close.setAttribute("data-dismiss","alert")
    btn_close.setAttribute("arial-label", "close")

    // loop class array
    const clasListElAlert = ["alert", "alert-warning", "alert-dismissible", "fade", "show","w-25"]
    clasListElAlert.forEach(itemClass => {
        el.classList.add( itemClass);
        el.setAttribute("role","alert")
    })

    btn_close.appendChild(span_times_close)

    el.appendChild(strElement)
    el.appendChild(btn_close)
    container_todo.appendChild(el)

    // membbuat parent pada ui varian
    const ui_varian = document.createElement('div');
    ui_varian.classList.add(`col-auto`);
    ui_varian.setAttribute("id", "new_id_varian");

    // Judul todolist user
    const ui_label_varian = document.createElement("h6");
    ui_label_varian.classList.add(`font-weight-bold`)
    ui_label_varian.textContent = inputValue.value;

    const close_add_inp = document.createElement("span");
    close_add_inp.classList.add("close_add_inp");
    close_add_inp.textContent = "x";
    ui_label_varian.appendChild(close_add_inp);




    // hasil ketika true user mengirim varian yg baru
    const ui_input_varian = document.createElement("input");
    ui_input_varian.classList.add(`form-control`);

    ui_varian.appendChild(ui_label_varian);
    ui_varian.appendChild(ui_input_varian);
    add_ui_varian.appendChild(ui_varian);


    // close new  ui input varian
    document.querySelectorAll(".close_add_inp").forEach(items => {
            items.addEventListener("click",function (e) {
                e.target.parentElement.parentElement.style.display = "none";
            })
        })
    // Menginisialisasikan default input menjadi kosong lagi ketika
    inputValue.value = "";
})

// textarea edit keterangan produk & symbol2
var quill = new Quill('#editor', {
    theme: 'snow'
  });


// +varian
const btn_add_varian = document.querySelector('.btn_add_varian');
btn_add_varian.addEventListener('click', function () {
    document.querySelector(".KategoriVariann_product_2").classList.remove('d-none')
})
