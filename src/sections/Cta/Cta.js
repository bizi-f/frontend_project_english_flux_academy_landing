import Button from '@/components/Button/Button'

const Cta = () => `<section class="cta container" id="cta" data-js-reveal>
  <div class="cta__box">
    <h2 class="cta__title">Получите персональный план обучения</h2>
    <p class="cta__text">Оставьте контакт, и мы подберем оптимальную программу под ваш уровень и цели.</p>
    <form class="cta__form" action="#" method="post" data-js-lead-form>
      <label class="cta__field">
        <span class="visually-hidden">Email</span>
        <input class="cta__input" type="email" placeholder="Ваш email" required data-js-lead-email />
      </label>
      <label class="cta__field">
        <span class="visually-hidden">Телефон</span>
        <input class="cta__input" type="tel" placeholder="Ваш телефон" required data-js-lead-phone />
      </label>
      ${Button({ label: 'Получить курс', type: 'submit', extraAttrs: { 'data-js-lead-submit': '' } })}
      <p class="cta__status" data-js-lead-status></p>
    </form>
  </div>
</section>`

export default Cta
