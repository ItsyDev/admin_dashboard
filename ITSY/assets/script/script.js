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