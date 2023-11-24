import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class'];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    fontFamily: {
      inter: ['var(--font-inter)', ...fontFamily.sans],
      spaceGrotesk: ['var(--font-spaceGrotesk)', ...fontFamily.sans],
    },
    boxShadow: {
      navbar:
        'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02), 0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09)',
      'button-primary': '0px 10px 50px 0px hsla(342, 92%, 54%, 0.3);',
      'button-secondary': '0px 10px 50px 0px hsla(250, 84%, 54%, 0.3);',
      'search-global': '0 5px 12px rgba(0, 0, 0, 0.2), inset 0 0 0 0 rgba(255, 255, 255, 0.05)',
    },
    colors: {
      border: 'var(--border)',
      input: 'var(--input)',
      ring: 'var(--ring)',
      background: {
        DEFAULT: 'var(--background)',
        darker: 'var(--background-darker)',
        dark: 'var(--background-dark)',
        light: 'var(--background-light)',
        lighter: 'var(--background-lighter)',
      },
      foreground: 'var(--foreground)',
      primary: {
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)',
        darker: 'var(--primary-darker)',
        dark: 'var(--primary-dark)',
        light: 'var(--primary-light)',
        lighter: 'hsl(342, 92%, 65%)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        foreground: 'var(--secondary-foreground)',
        darker: 'var(--secondary-darker)',
        dark: 'var(--secondary-dark)',
        light: 'var(--secondary-light)',
        lighter: 'var(--secondary-lighter)',
      },
      destructive: {
        DEFAULT: 'var(--destructive)',
        foreground: 'var(--destructive-foreground)',
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)',
      },
      contrast: {
        lower: 'var(--contrast-lower)',
        low: 'var(--contrast-low)',
        medium: 'var(--contrast-medium)',
        high: 'var(--contrast-high)',
        higher: 'var(--contrast-higher)',
      },
      warning: {
        DEFAULT: 'var(--warning)',
        darker: 'var(--warning-darker)',
        dark: 'var(--warning-dark)',
        light: 'var(--warning-light)',
        lighter: 'var(--warning-lighter)',
      },
      success: {
        DEFAULT: 'var(--success)',
        darker: 'var(--success-darker)',
        dark: 'var(--success-dark)',
        light: 'var(--success-light)',
        lighter: 'var(--success-lighter)',
      },
      error: {
        DEFAULT: 'var(--error)',
        darker: 'var(--error-darker)',
        dark: 'var(--error-dark)',
        light: 'var(--error-light)',
        lighter: 'var(--error-lighter)',
      },
      popover: {
        DEFAULT: 'var(--popover)',
        foreground: 'var(--popover-foreground)',
      },
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
};
export const plugins = [require('tailwindcss-animate'), require('@tailwindcss/typography')];
