// Accessible names that must follow the active language (the i18n engine only swaps text).
// Mark an element with data-aria-es/data-aria-en (aria-label) and/or data-title-es/data-title-en (title).
// Safe to import from several components: the module is evaluated once per page.
function currentLang(): 'es' | 'en' {
  return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'es';
}

function syncAccessibleNames(): void {
  const lang = currentLang();
  document.querySelectorAll<HTMLElement>('[data-aria-es]').forEach((el) => {
    const value = el.getAttribute(`data-aria-${lang}`);
    if (value) el.setAttribute('aria-label', value);
  });
  document.querySelectorAll<HTMLElement>('[data-title-es]').forEach((el) => {
    const value = el.getAttribute(`data-title-${lang}`);
    if (value) el.setAttribute('title', value);
  });
}

syncAccessibleNames();
document.addEventListener('astro:page-load', syncAccessibleNames);
new MutationObserver(syncAccessibleNames).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-lang'],
});
