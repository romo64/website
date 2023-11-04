(function(){
    const openButton = document.querySelector('.nav_menu')
    const menu = document.querySelector('.nav_link')
    const cerrarMenu = document.querySelector('.nav_cerrar')

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
    });

    cerrarMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    })

    
})();