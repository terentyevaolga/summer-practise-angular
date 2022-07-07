export interface CourseModel {
  title: string,
  text: string,
  img: string
}

export const MockCourse: Array<CourseModel> = [
  {
    title: 'Продуктовый дизайнер',
    text: 'Объясним, как попасть на позицию дизайнер-стажёра, и куда развиваться дальше.',
    img: '/assets/main-page/A.svg'
  },
  {
    title: 'Лаборатория: IOS-разработка',
    text: 'Вы научитесь работать с техническими требованиями и главное — получите менторскую поддержку',
    img: '/assets/main-page/G.svg'
  },
  {
    title: 'QA.Тестирование для начинающих',
    text: 'Дадим необходимый набор инструментов для начинающего тестировщика, оптимальное сочетание теории и практики.',
    img: '/assets/main-page/O.svg'
  },
  {
    title: 'Frontend-разработка',
    text: 'Познакомим с основами и быстро перейдём к практике: напишем проект на Javascript, React или Angular.',
    img: '/assets/main-page/N.svg'
  },
  {
    title: 'Java - разработка',
    text: 'Java в рекламе не нуждается. А у нас вы поймёте, как применять его в решении промышленных задач.',
    img: '/assets/main-page/A.svg'
  },
  {
    title: 'Системная аналитика',
    text: 'Расскажем на курсе. Это хорошая база для старта в аналитике.',
    img: '/assets/main-page/G.svg'
  },

]
