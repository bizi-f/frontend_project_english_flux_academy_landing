class LeadForm {
  selector = '[data-js-lead-form]'

  constructor() {
    this.formElement = document.querySelector(this.selector)
    if (!this.formElement) {
      return
    }

    this.emailElement = this.formElement.querySelector('[data-js-lead-email]')
    this.phoneElement = this.formElement.querySelector('[data-js-lead-phone]')
    this.statusElement = this.formElement.querySelector('[data-js-lead-status]')
    this.submitButton = this.formElement.querySelector('[data-js-lead-submit]')

    this.formElement.addEventListener('submit', this.onSubmit)
  }

  isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  isValidPhone(value) {
    if (!value) return false

    const digits = value.replace(/\D/g, '')

    if (digits.length === 11 && digits.startsWith('8')) {
      return true
    }

    if (digits.length === 11 && digits.startsWith('7')) {
      return true
    }

    if (digits.length === 12 && digits.startsWith('7')) {
      return true
    }

    return false
  }

  setStatus(type, message) {
    if (!this.statusElement) {
      return
    }

    this.statusElement.className = `cta__status cta__status--${type}`
    this.statusElement.textContent = message
  }

  setSubmitting(isSubmitting) {
    if (!this.submitButton) {
      return
    }

    this.submitButton.disabled = isSubmitting
    this.submitButton.textContent = isSubmitting
      ? 'Отправка...'
      : 'Получить план'
  }

  onSubmit = async (event) => {
    event.preventDefault()

    const email = this.emailElement?.value.trim() ?? ''
    const phone = this.phoneElement?.value.trim() ?? ''

    if (!this.isValidEmail(email)) {
      this.setStatus(
        'error',
        'Введите корректный email, например name@example.com'
      )
      return
    }

    if (!this.isValidPhone(phone)) {
      this.setStatus('error', 'Введите корректный телефон')
      return
    }

    try {
      this.setSubmitting(true)
      this.setStatus('loading', 'Отправляем данные...')

      await new Promise((resolve) => {
        window.setTimeout(resolve, 900)
      })

      this.formElement.reset()
      this.setStatus('success', 'Готово! Мы свяжемся с вами в ближайшее время.')
    } catch {
      this.setStatus('error', 'Не удалось отправить форму. Попробуйте еще раз.')
    } finally {
      this.setSubmitting(false)
    }
  }
}

export default LeadForm
