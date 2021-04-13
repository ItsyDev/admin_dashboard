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
const container = document.querySelector('.container_todo_value');
var inputValue = document.querySelector('.filter_varian');
const add = document.querySelector('.btn_filter_varian');

if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item{
    constructor(name){
        this.createItem(name);
    }
    createItem(name){
        var itemBox = document.createElement('div');
        itemBox.classList.add(`alert`);

        var input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');

        var edit = document.createElement('button');
        edit.classList.add(`btn-info`);
        edit.innerHTML = "EDIT";
        edit.addEventListener('click', () => this.edit(input, name));

        var remove = document.createElement('button');
        remove.classList.add(`btn-danger`);
        remove.innerHTML = "REMOVE";
        remove.addEventListener('click', () => this.remove(itemBox, name));

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
        else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})

function check(){
    if(inputValue.value != ""){
        new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        inputValue.value = "";
    }
    console.log("Hello World");
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


new item("Size");




// textarea edit keterangan produk & symbol2
var quill = new Quill('#editor', {
    theme: 'snow'
  });

// +varian
const btn_add_varian = document.querySelector('.tambah_varian');
btn_add_varian.addEventListener('click', function () {
    document.querySelector(".KategoriVariann_product_2").classList.toggle('d-none')
})
