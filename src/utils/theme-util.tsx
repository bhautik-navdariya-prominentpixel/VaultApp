import { ThemeEnum } from "../common/enums/inde";

const THEME_KEY = "app_theme";

export function getAppTheme(): ThemeEnum {
  const theme = localStorage.getItem(THEME_KEY);
  if (theme === ThemeEnum.DARK) {
    return ThemeEnum.DARK;
  } else if (theme === ThemeEnum.LIGHT) {
    return ThemeEnum.LIGHT;
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ThemeEnum.DARK
    : ThemeEnum.LIGHT;
}

export function setAppTheme(theme: ThemeEnum) {
  const root = document.documentElement;
  if (theme == ThemeEnum.DARK) {
    root.classList.remove(ThemeEnum.LIGHT);
    root.classList.add(ThemeEnum.DARK);
  } else {
    root.classList.remove(ThemeEnum.DARK);
    root.classList.add(ThemeEnum.LIGHT);
  }
  localStorage.setItem(THEME_KEY, theme);
}
