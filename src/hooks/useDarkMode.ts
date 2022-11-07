import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const systemPreference =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  const localStorageTheme =
    (typeof window !== 'undefined' && localStorage.getItem('theme')) || null;
  const localStoragePreference =
    localStorageTheme === 'light'
      ? 'light'
      : localStorageTheme === 'dark'
      ? 'dark'
      : null;

  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStoragePreference ?? systemPreference,
  );

  const toggleTheme = () =>
    setTheme(theme => (theme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [mounted ? theme : null, toggleTheme] as const;
};
