import type { HopeThemeLocaleData } from "../../shared";

export const enLocale: HopeThemeLocaleData = {
  lang: "pl-PL",

  navbarLocales: {
    langName: "Polski",
    selectLangText: "Język",
    selectLangAriaLabel: "Wybierz język",
  },

  metaLocales: {
    author: "Autor",
    date: "Utworzono",
    origin: "Originał",
    views: "Wejść",
    category: "Kategoria",
    tag: "Tagi",
    readingTime: "Czas czytania",
    words: "Słowa",
    toc: "Na tej stronie",
    prev: "Poprzednia",
    next: "Następna",
    lastUpdated: "Ostatnia akutalizacja",
    contributors: "Współtwórcy",
    editLink: "Edytuj tą stronę",
  },

  blogLocales: {
    article: "Artykuły",
    articleList: "Lista artykułów",
    category: "Kategoria",
    tag: "Tagi",
    timeline: "Oś czasu",
    timelineTitle: "Wczoraj jeszcze raz!",
    all: "Wszystkie",
    intro: "Osobiste wprowadzenie",
    star: "Gwiazda",
    slides: "Slajdy",
    encrypt: "Zaszyfrowane",
  },

  paginationLocales: {
    prev: "Poprzednia",
    next: "Następna",
    navigate: "Skocz do",
    action: "Idź",
    errorText: "Podaj numer między 1 i $page !",
  },

  outlookLocales: {
    themeColor: "Kolor tematu",
    darkmode: "Tryb motywu",
    fullscreen: "Pełny ekran",
  },

  encryptLocales: {
    title: "Podaj hasło",
    errorHint: "Podaj poprawne hasło!",
  },

  routeLocales: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "404msg": [
      "Nic tu nie ma.",
      "Jak tu się dostaliśmy?",
      "A imię jego czterdzieści i cztery",
      "Wygląda na to, że mamy zepsute odnośniki",
    ],
    back: "Wróć",
    home: "Strona główna",
    openInNewWindow: "Otwórz w nowym oknie",
  },
};
