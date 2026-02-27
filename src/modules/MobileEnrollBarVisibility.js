class MobileEnrollBarVisibility {
  selectors = {
    bar: '.mobile-enroll-bar',
    footer: '.site-footer',
  }

  stateClasses = {
    isHidden: 'mobile-enroll-bar--hidden',
  }

  constructor() {
    this.barElement = document.querySelector(this.selectors.bar)
    this.footerElement = document.querySelector(this.selectors.footer)

    if (!this.barElement || !this.footerElement) {
      return
    }

    this.observer = new IntersectionObserver(this.onIntersect, {
      threshold: 0.01,
    })

    this.observer.observe(this.footerElement)
  }

  onIntersect = ([entry]) => {
    this.barElement.classList.toggle(
      this.stateClasses.isHidden,
      entry.isIntersecting
    )
  }
}

export default MobileEnrollBarVisibility
