// Sets up dark/light mode for the whole site using the next-themes library.
"use client"; // runs in the browser, because it reads saved settings and the OS theme

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class" // adds class="dark" to <html> in dark mode
      defaultTheme="system" // first visit: follow the OS setting
      enableSystem
      disableTransitionOnChange // avoids a color "fade" sweeping the page when switching
    >
      {children}
    </NextThemesProvider>
  );
}
