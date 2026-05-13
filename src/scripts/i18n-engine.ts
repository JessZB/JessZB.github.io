/**
 * i18n-engine.ts
 * Client-side i18n engine.
 * - Detects browser language on first visit
 * - Loads the appropriate JSON (es.json or en.json)
 * - Swaps all [data-i18n] elements
 * - Handles theme-aware keys: [data-i18n-arepa] / [data-i18n-coffee]
 * - Persists language choice in localStorage
 */

type Lang = 'es' | 'en';
type Theme = 'arepa' | 'coffee';

// Flatten nested JSON into dot-notation keys
function flatten(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      Object.assign(acc, flatten(val as Record<string, unknown>, fullKey));
    } else {
      acc[fullKey] = String(val);
    }
    return acc;
  }, {} as Record<string, string>);
}

function detectLang(): Lang {
  const stored = localStorage.getItem('jesszb-lang') as Lang | null;
  if (stored === 'es' || stored === 'en') return stored;

  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return browser === 'en' ? 'en' : 'es';
}

function getTheme(): Theme {
  return (document.documentElement.getAttribute('data-theme') as Theme) || 'arepa';
}

async function loadTranslations(lang: Lang): Promise<Record<string, string>> {
  const res = await fetch(`/src/data/${lang}.json`);
  const json = await res.json();
  return flatten(json);
}

function applyTranslations(t: Record<string, string>, theme: Theme): void {
  // Standard i18n elements
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n!;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Placeholder attributes
  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
    '[data-i18n-placeholder]'
  ).forEach((el) => {
    const key = (el as HTMLElement).dataset.i18nPlaceholder!;
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Theme-aware text (data-i18n-arepa / data-i18n-coffee)
  document.querySelectorAll<HTMLElement>('[data-i18n-arepa]').forEach((el) => {
    const keyArepa = el.dataset.i18nArepa!;
    const keyCoffee = el.dataset.i18nCoffee!;
    const key = theme === 'coffee' ? keyCoffee : keyArepa;
    if (key && t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
}

// Exported so ThemeToggle can call it when theme changes
export async function updateLang(lang?: Lang): Promise<void> {
  const activeLang = lang || detectLang();
  const theme = getTheme();

  localStorage.setItem('jesszb-lang', activeLang);
  document.documentElement.setAttribute('data-lang', activeLang);

  const t = await loadTranslations(activeLang);
  applyTranslations(t, theme);

  // Update toggle label visibility
  document.querySelectorAll<HTMLElement>('[data-lang-label]').forEach((el) => {
    el.setAttribute('aria-current', el.dataset.langLabel === activeLang ? 'true' : 'false');
  });
}

// Called by ThemeToggle after theme switches to re-apply theme-aware texts
export async function refreshThemeTexts(): Promise<void> {
  const lang = detectLang();
  const theme = getTheme();
  const t = await loadTranslations(lang);

  document.querySelectorAll<HTMLElement>('[data-i18n-arepa]').forEach((el) => {
    const keyArepa = el.dataset.i18nArepa!;
    const keyCoffee = el.dataset.i18nCoffee!;
    const key = theme === 'coffee' ? keyCoffee : keyArepa;
    if (key && t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
}

// Auto-init on page load
document.addEventListener('DOMContentLoaded', () => {
  updateLang();
});
