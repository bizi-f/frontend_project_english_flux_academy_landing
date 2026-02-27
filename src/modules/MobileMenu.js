class MobileMenu {
  selectors = {
    root: '[data-js-mobile-menu]',
    dialog: '[data-js-mobile-menu-dialog]',
    toggle: '[data-js-mobile-menu-toggle]',
    link: '[data-js-mobile-menu-link]',
  }

  stateClasses = {
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) {
      return
    }

    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    if (!this.dialogElement) {
      return
    }

    this.toggleElements = Array.from(
      this.rootElement.querySelectorAll(this.selectors.toggle)
    )
    this.linkElements = Array.from(
      this.rootElement.querySelectorAll(this.selectors.link)
    )

    this.bindEvents()
  }

  openMenu = () => {
    if (!this.dialogElement.open) {
      this.dialogElement.showModal()
      document.documentElement.classList.add(this.stateClasses.isLock)
    }
  }

  closeMenu = () => {
    if (this.dialogElement.open) {
      this.dialogElement.close()
      document.documentElement.classList.remove(this.stateClasses.isLock)
    }
  }

  onToggleClick = () => {
    if (this.dialogElement.open) {
      this.closeMenu()
      return
    }

    this.openMenu()
  }

  onDialogClose = () => {
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  bindEvents() {
    this.toggleElements.forEach((toggleElement) => {
      toggleElement.addEventListener('click', this.onToggleClick)
    })

    this.linkElements.forEach((linkElement) => {
      linkElement.addEventListener('click', this.closeMenu)
    })

    this.dialogElement.addEventListener('close', this.onDialogClose)
  }
}

export default MobileMenu
