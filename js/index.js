let color = document.querySelector('#colorChange')

color.addEventListener('change', chanceColors)

function chanceColors() {
    document.querySelector('.bg').style.backgroundColor = color.value
    document.querySelector('.separador').style.backgroundColor = color.value
    document.querySelector('#equal').style.color = color.value
    document.querySelector('#btnAC').style.color = color.value
}