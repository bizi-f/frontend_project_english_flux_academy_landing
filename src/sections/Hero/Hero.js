import Button from '@/components/Button/Button'

const Hero = () => `<section class="hero container" data-js-reveal>
  <div class="hero__content">
    <p class="hero__badge">Онлайн-обучение в потоках</p>
    <h1 class="hero__title">Заговорите на английском уверенно за 12 недель</h1>
    <p class="hero__description">Живые разговорные спринты, обратная связь по произношению и поддержка ментора. Прогресс по четкой системе без хаоса.</p>
    <div class="hero__actions">
      ${Button({ label: 'Пройти бесплатный тест', href: '#cta' })}
      ${Button({ label: 'Посмотреть демо-урок', href: '#programs', mode: 'secondary' })}
    </div>
    <ul class="hero__meta-list">
      <li class="hero__meta-item"><strong>8 400+</strong> студентов</li>
      <li class="hero__meta-item"><strong>4.9/5</strong> средняя оценка</li>
      <li class="hero__meta-item"><strong>96%</strong> доходят до финала</li>
    </ul>
  </div>
  <div class="hero__visual" aria-hidden="true">
    <article class="hero-card hero-card--main">
      <h3 class="hero-card__title">Еженедельный разговорный спринт</h3>
      <p class="hero-card__text">Ролевые диалоги и реальные сценарии общения.</p>
    </article>
    <article class="hero-card hero-card--side">
      <p class="hero-card__metric">+37%</p>
      <p class="hero-card__text">рост уверенности в речи в среднем за 5 недель</p>
    </article>
  </div>
</section>`

export default Hero
