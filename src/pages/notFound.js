import Button from '@/components/Button/Button'

const notFoundPage = () => `<section class="not-found container" data-js-reveal>
  <p class="not-found__code">404</p>
  <h1 class="not-found__title">Страница не найдена</h1>
  <p class="not-found__text">Похоже, ссылка устарела или была удалена. Вернитесь на главную и продолжите обучение.</p>
  ${Button({ label: 'На главную', href: '/', mode: 'primary' })}
</section>`

export default notFoundPage