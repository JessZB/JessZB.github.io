/**
 * theme-init.ts
 * Runs BEFORE paint (injected as inline script in <head>).
 * Sets data-theme on <html> from localStorage to prevent flash.
 */

type Theme = 'arepa' | 'coffee';

function initTheme(): void {
  const stored = localStorage.getItem('jesszb-theme') as Theme | null;
  const theme: Theme = stored === 'coffee' ? 'coffee' : 'arepa';
  document.documentElement.setAttribute('data-theme', theme);
}

initTheme();

export {};
