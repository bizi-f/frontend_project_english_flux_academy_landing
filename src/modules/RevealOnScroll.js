class RevealOnScroll {
  selector = '[data-js-reveal]'

  constructor() {
    this.elements = Array.from(document.querySelectorAll(this.selector))
    if (!this.elements.length) {
      return
    }

    this.observer = new IntersectionObserver(this.onIntersect, {
      threshold: 0.18,
    })

    this.elements.forEach((element) => {
      this.observer.observe(element)
    })
  }

  onIntersect = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      }

      entry.target.classList.add('is-visible')
      this.observer.unobserve(entry.target)
    })
  }
}

export default RevealOnScroll