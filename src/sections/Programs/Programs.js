const programs = [
  {
    title: 'Starter A2 -> B1',
    text: 'Перезапуск грамматики, разговорная база для жизни и ежедневные словарные практики.',
    details: '3 урока в неделю · 12 недель',
  },
  {
    title: 'Business English Pro',
    text: 'Переговоры, презентации, деловая переписка и уверенное общение на работе.',
    details: '2 урока в неделю · 10 недель',
  },
  {
    title: 'IELTS Speaking Lab',
    text: 'Стратегия экзамена, пробные сессии и точная коррекция беглости речи.',
    details: '2 урока в неделю · 8 недель',
  },
]

const Programs = () => {
  const cards = programs
    .map(
      ({ title, text, details }) => `<li class="programs__item">
        <article class="program-card">
          <h3 class="program-card__title">${title}</h3>
          <p class="program-card__text">${text}</p>
          <p class="program-card__details">${details}</p>
        </article>
      </li>`
    )
    .join('')

  return `<section class="programs container" id="programs" data-js-reveal>
    <header class="programs__header">
      <p class="programs__eyebrow">Программы</p>
      <h2 class="programs__title">Выберите маршрут к свободному английскому</h2>
    </header>
    <ul class="programs__list">${cards}</ul>
  </section>`
}

export default Programs