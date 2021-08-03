import './sass/styles.scss'

window.onload = init

function init() {
  const header = document.querySelector('.header-js') as HTMLElement
  const search = document.querySelector('.search-js') as HTMLElement
  const burger = document.querySelector('.burger-js') as HTMLElement
  const sidebar = document.querySelector('.sidebar-js') as HTMLElement

  const searchTop = search.offsetTop

  burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--open')
  })

  window.addEventListener('scroll', () => {
    if (search && burger && header) {
      if (searchTop - window.pageYOffset <= 25) {
        header.classList.add('header--fixed')
        return
      }
      header.classList.remove('header--fixed')
    }
  })
}
