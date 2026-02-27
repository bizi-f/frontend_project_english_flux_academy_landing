const faqItems = [
  {
    question: 'Сколько времени нужно уделять в неделю?',
    answer:
      'Для стабильного прогресса достаточно 4-5 часов в неделю: два живых урока, домашние задания и один разговорный спринт.',
  },
  {
    question: 'Есть ли персональная обратная связь?',
    answer:
      'Да. Еженедельно менторы разбирают ваши spoken-задачи, произношение и грамматические ошибки с конкретными рекомендациями.',
  },
  {
    question: 'Можно ли сменить программу в процессе?',
    answer:
      'После ежемесячного чекпоинта мы можем скорректировать маршрут обучения без потери уже пройденных результатов.',
  },
  {
    question: 'Подойдет ли курс новичкам?',
    answer:
      'У нас есть потоки от A2 до C1. Сначала вы проходите бесплатный тест, затем мы подбираем подходящую группу.',
  },
]

const FAQ = () => {
  const itemsMarkup = faqItems
    .map(
      ({ question, answer }, index) => `<li class="faq__item">
        <article class="faq-card ${index === 0 ? 'is-open' : ''}" data-js-accordion-item>
          <button class="faq-card__question" type="button" data-js-accordion-trigger aria-expanded="${index === 0 ? 'true' : 'false'}">
            <span>${question}</span>
            <span class="faq-card__icon" aria-hidden="true"></span>
          </button>
          <div class="faq-card__answer-wrap" data-js-accordion-content ${index === 0 ? '' : 'hidden'}>
            <p class="faq-card__answer">${answer}</p>
          </div>
        </article>
      </li>`
    )
    .join('')

  return `<section class="faq container" id="faq" data-js-reveal>
    <header class="faq__header">
      <p class="faq__eyebrow">Вопросы и ответы</p>
      <h2 class="faq__title">Все, что важно знать перед стартом</h2>
    </header>
    <ul class="faq__list" data-js-accordion>${itemsMarkup}</ul>
  </section>`
}

export default FAQ