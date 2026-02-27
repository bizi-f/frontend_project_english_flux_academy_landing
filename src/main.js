import '@/appStyles'
import App from '@/app'
import homePage from '@/pages/home'
import aboutPage from '@/pages/about'
import notFoundPage from '@/pages/notFound'
import ThemeSwitcher from '@/modules/ThemeSwitcher'
import Accordion from '@/modules/Accordion'
import RevealOnScroll from '@/modules/RevealOnScroll'
import LeadForm from '@/modules/LeadForm'
import MobileMenu from '@/modules/MobileMenu'
import MobileEnrollBarVisibility from '@/modules/MobileEnrollBarVisibility'

const pagesByPath = {
  '/': {
    title: 'English Flux Academy',
    render: homePage,
    appOptions: { showMobileEnrollBar: true },
  },
  '/index.html': {
    title: 'English Flux Academy',
    render: homePage,
    appOptions: { showMobileEnrollBar: true },
  },
  '/about.html': {
    title: 'О школе | English Flux Academy',
    render: aboutPage,
    appOptions: { showMobileEnrollBar: false },
  },
  '/404.html': {
    title: 'Страница не найдена | English Flux Academy',
    render: notFoundPage,
    appOptions: { showMobileEnrollBar: false },
  },
}

const mount = () => {
  const rootElement = document.querySelector('#app')
  if (!rootElement) {
    return
  }

  const currentPage = pagesByPath[window.location.pathname] ?? {
    title: 'Страница не найдена | English Flux Academy',
    render: notFoundPage,
    appOptions: { showMobileEnrollBar: false },
  }

  document.title = currentPage.title
  rootElement.innerHTML = App(currentPage.render(), currentPage.appOptions)

  new ThemeSwitcher()
  new Accordion()
  new RevealOnScroll()
  new LeadForm()
  new MobileMenu()
  new MobileEnrollBarVisibility()
}

mount()
