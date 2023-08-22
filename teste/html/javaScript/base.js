var menuItem = document.querySelectorAll(".bot_t")


function selectItem(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectItem)
)


//expandir ao click

var expandButton = document.getElementById('expand');
var sidebar = document.querySelector('.sidebar');

expandButton.addEventListener('click', function() {
    sidebar.classList.toggle('expandir');
});