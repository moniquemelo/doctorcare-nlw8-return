// onscroll serve para eu saber se estou scrollando a pagina
// scrollY me dá a posição do scroll, se for 0 então tá totalmente em cima.
function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
