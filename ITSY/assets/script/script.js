const navigation_sidebar = document.querySelector('.navigation ');
function title_change(changeTitle) {
     document.querySelector('.card-header h5 ').innerHTML = changeTitle ;
}
document.querySelector('.toggle').addEventListener('click', function () {
     this.classList.toggle('show_sidebar');

     // show menubar hide
     navigation_sidebar.classList.toggle('show_sidebars')

})