import cx from '@/lib/cx'

const Button = (props = {}) => {
  const {
    className,
    label,
    href,
    mode = 'primary',
    type = 'button',
    isWide = false,
    extraAttrs,
  } = props

  const tagName = href ? 'a' : 'button'
  const attrs = {
    class: cx('button', className, `button--${mode}`, {
      'button--wide': isWide,
    }),
    href,
    type: href ? undefined : type,
    ...extraAttrs,
  }

  const attrString = Object.entries(attrs)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([name, value]) => `${name}="${value}"`)
    .join(' ')

  return `<${tagName} ${attrString}><span class="button__label">${label}</span></${tagName}>`
}

export default Button