import Button from '@/components/Button/Button'

const Pricing =
  () => `<section class="pricing container" id="pricing" data-js-reveal>
  <div class="pricing__content">
    <p class="pricing__eyebrow">Тарифы</p>
    <h2 class="pricing__title">Прозрачные условия под разные цели</h2>
    <p class="pricing__description">Во всех тарифах: живые занятия, проверка домашней работы и дашборд прогресса.</p>
  </div>
  <div class="pricing-card">
    <p class="pricing-card__label">Самый популярный</p>
    <p class="pricing-card__price">12 999₽  <span>/ месяц</span></p>
    <ul class="pricing-card__features">
      <li>2 живых занятия в неделю</li>
      <li>Чат поддержки с ментором</li>
      <li>AI-тренажер произношения</li>
    </ul>
    ${Button({ label: 'Выбрать тариф', href: '#cta', isWide: true })}
  </div>
</section>`

export default Pricing
