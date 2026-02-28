import Button from '@/components/Button/Button'
import { withBase } from '@/lib/sitePath'

const Header =
  () => `<header class="site-header container" data-js-reveal data-js-mobile-menu>
  <a class="site-header__brand" href="${withBase('/')}" aria-label="English Flux Academy">
    <span class="site-header__brand-mark">EF</span>
    <span class="site-header__brand-text">English Flux Academy</span>
  </a>
  <nav class="site-header__nav" aria-label="Основная навигация">
    <a class="site-header__link" href="#programs">Программы</a>
    <a class="site-header__link" href="#reviews">Отзывы</a>
    <a class="site-header__link" href="#pricing">Тарифы</a>
    <a class="site-header__link" href="#faq">Вопросы</a>
  </nav>
  <div class="site-header__actions">
    <button class="theme-switch" type="button" data-js-theme-toggle>
      <span class="theme-switch__text" data-js-theme-toggle-text>Темная</span>
    </button>
    ${Button({ label: 'Записаться на звонок', href: '#cta', mode: 'ghost' })}
    <button class="site-header__menu-toggle" type="button" data-js-mobile-menu-toggle aria-label="Открыть меню">
      <span class="site-header__menu-line"></span>
      <span class="site-header__menu-line"></span>
      <span class="site-header__menu-line"></span>
    </button>
  </div>
  <dialog class="site-header__menu-dialog" data-js-mobile-menu-dialog>
    <div class="site-header__menu-dialog-inner">
      <div class="site-header__menu-dialog-top">
        <p class="site-header__menu-title">Меню</p>
        <button class="site-header__menu-toggle site-header__menu-toggle--close" type="button" data-js-mobile-menu-toggle aria-label="Закрыть меню">
          <span class="site-header__menu-line"></span>
          <span class="site-header__menu-line"></span>
          <span class="site-header__menu-line"></span>
        </button>
      </div>
      <nav class="site-header__menu-nav" aria-label="Мобильная навигация">
        <a class="site-header__menu-link" href="#programs" data-js-mobile-menu-link>Программы</a>
        <a class="site-header__menu-link" href="#reviews" data-js-mobile-menu-link>Отзывы</a>
        <a class="site-header__menu-link" href="#pricing" data-js-mobile-menu-link>Тарифы</a>
        <a class="site-header__menu-link" href="#faq" data-js-mobile-menu-link>Вопросы</a>
        <a class="site-header__menu-link" href="${withBase('/about.html')}" data-js-mobile-menu-link>О школе</a>
      </nav>
      <div class="site-header__menu-controls">
        <button class="theme-switch theme-switch--mobile" type="button" data-js-theme-toggle>
          <span class="theme-switch__text" data-js-theme-toggle-text>Темная</span>
        </button>
        ${Button({ label: 'Записаться на звонок', href: withBase('/#cta'), mode: 'ghost', className: 'site-header__menu-button', extraAttrs: { 'data-js-mobile-menu-link': '' } })}
      </div>
    </div>
  </dialog>
</header>`

export default Header
