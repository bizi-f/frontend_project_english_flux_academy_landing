class Accordion {
  selector = '[data-js-accordion]'

  constructor() {
    this.rootElements = Array.from(document.querySelectorAll(this.selector))
    if (!this.rootElements.length) {
      return
    }

    this.rootElements.forEach((rootElement) => {
      rootElement.addEventListener('click', this.onRootClick)
    })
  }

  onRootClick = (event) => {
    const triggerElement = event.target.closest('[data-js-accordion-trigger]')
    if (!triggerElement) {
      return
    }

    const itemElement = triggerElement.closest('[data-js-accordion-item]')
    const contentElement = itemElement?.querySelector('[data-js-accordion-content]')
    if (!itemElement || !contentElement) {
      return
    }

    const isOpen = itemElement.classList.contains('is-open')
    itemElement.classList.toggle('is-open', !isOpen)
    triggerElement.setAttribute('aria-expanded', String(!isOpen))
    contentElement.hidden = isOpen
  }
}

export default Accordion