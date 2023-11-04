cambioForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const cambioEscuderia = document.querySelector('#cambioEscuderia').value

    localStorage.setItem('escuderia', JSON.stringify(cambioEscuderia))
    
    window.location.href = 'login.html'

})