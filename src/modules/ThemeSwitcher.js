class ThemeSwitcher {
  selector = '[data-js-theme-toggle]'
  textSelector = '[data-js-theme-toggle-text]'
  storageKey = 'english-flux-theme'

  constructor() {
    this.buttonElements = Array.from(document.querySelectorAll(this.selector))
    this.textElements = Array.from(document.querySelectorAll(this.textSelector))
    if (!this.buttonElements.length || !this.textElements.length) {
      return
    }

    this.rootElement = document.documentElement
    this.currentTheme = this.getSavedTheme()
    this.applyTheme(this.currentTheme)
    this.buttonElements.forEach((buttonElement) => {
      buttonElement.addEventListener('click', this.onToggle)
    })
  }

  getSavedTheme() {
    const savedTheme = window.localStorage.getItem(this.storageKey)
    return savedTheme === 'dark' ? 'dark' : 'light'
  }

  applyTheme(theme) {
    this.rootElement.dataset.theme = theme
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    this.buttonElements.forEach((buttonElement) => {
      buttonElement.setAttribute(
        'aria-label',
        `Переключить на ${nextTheme === 'dark' ? 'темную' : 'светлую'} тему`
      )
    })
    this.textElements.forEach((textElement) => {
      textElement.textContent = nextTheme === 'dark' ? 'Темная' : 'Светлая'
    })
  }

  onToggle = () => {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
    this.applyTheme(this.currentTheme)
    window.localStorage.setItem(this.storageKey, this.currentTheme)
  }
}

export default ThemeSwitcher

