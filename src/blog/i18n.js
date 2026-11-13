import { createContext, useContext } from 'react'

/* A post is written in one language (post.lang, 'en' unless set) and can name its twin in the
   other one (post.alternate: the twin's slug). The words the blog adds around the markdown
   (labels, dates, the byline) come from here. */

export const STRINGS = {
  en: {
    locale: 'en-GB',
    draft: 'Draft',
    minRead: minutes => `${minutes} min read`,
    writtenBy: 'Written by',
    updated: 'Updated',
    published: 'Published',
    contributors: 'About the contributors',
    relatedPosts: 'Related posts',
    permalink: 'Permalink',
    callouts: {
      note: 'Note',
      tip: 'Tip',
      important: 'Important',
      warning: 'Warning',
      caution: 'Caution',
      tldr: 'TL;DR',
      przemo: 'Przemo says'
    },
    otherLanguage: 'Czytaj po polsku',
    home: 'ciunkos.com'
  },
  pl: {
    locale: 'pl-PL',
    draft: 'Szkic',
    minRead: minutes => `${minutes} min czytania`,
    writtenBy: 'Autor',
    updated: 'Aktualizacja',
    published: 'Opublikowano',
    contributors: 'O autorach',
    relatedPosts: 'Powiązane wpisy',
    permalink: 'Link do sekcji',
    callouts: {
      note: 'Uwaga',
      tip: 'Wskazówka',
      important: 'Ważne',
      warning: 'Ostrzeżenie',
      caution: 'Ostrożnie',
      tldr: 'W skrócie',
      przemo: 'Przemo mówi'
    },
    otherLanguage: 'Read in English',
    home: 'ciunkos.com'
  }
}

export const postLang = post => (post && post.lang === 'pl' ? 'pl' : 'en')

export const stringsFor = lang => STRINGS[lang] || STRINGS.en

// the language of the post being rendered, for the components react-markdown creates
export const LangContext = createContext('en')

export const useLang = () => useContext(LangContext)

export const useStrings = () => stringsFor(useLang())
