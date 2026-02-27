import Button from '@/components/Button/Button'

const MobileEnrollBar = () => `<aside class="mobile-enroll-bar">
  <p class="mobile-enroll-bar__text">Бесплатный созвон по уровню</p>
  ${Button({ label: 'Записаться', href: '#cta', mode: 'primary' })}
</aside>`

export default MobileEnrollBar
