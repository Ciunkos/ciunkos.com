import companies from '../companies'

export const title = 'CV - Przemysław Zalewski - Ciunkos'
export const description = `Full-stack Web i Windows App deweloper z Wrocławia. Aktualnie pracuję dla ${companies.Sanddev}`

export default {
  description: `Full-stack Web i Windows App deweloper z Wrocławia. Aktualnie pracuję dla ${companies.Sanddev}`,
  aboutMe: 'Full-stack Web i Windows App deweloper z Wrocławia.',
  status: link => `Aktualnie pracuję dla ${link}`,
  contact: 'Kontakt',
  learnMore: 'Dowiedz się więcej',

  educationAndExperience: 'Edukacja i doświadczenie zawodowe',
  degree: 'inżyniera',
  fieldOfStudy: 'informatyki',
  faculty: 'Wydziale Informatyki i Zarządzania',
  university: 'Politechnice Wrocławskiej',
  education: ({ degree, fieldOfStudy, faculty, university }) => [
    'In 2014 I have earned ',
    degree,
    ' degree in ',
    fieldOfStudy,
    ' on ',
    faculty,
    ' of ',
    university,
    '.'
  ]
}
