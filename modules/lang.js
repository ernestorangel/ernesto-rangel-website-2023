export function setupLanguage(userLanguage) {
  setHtmlLang(userLanguage);
}

function setHtmlLang(lang) {
  document.querySelector('html').lang = lang;
}
