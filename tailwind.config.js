import plugin from 'tailwindcss/plugin';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.ts',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      background: '#010C15',
      primary: '#011221',
      'primary-light': '#011627',
      'primary-dark': '#01080E',
      'primary-white': '#E5E9F0',
      secondary: '#607B96',
      'secondary-green': '#3C9D93',
      'secondary-blue': '#4D5BCE',
      'secondary-white': '#FFFFFF',
      accent: '#FEA55F',
      'accent-green': '#43D9AD',
      'accent-red': '#E99287',
      'accent-purple': '#C98BDF',
      'accent-blue': '#3A49A4',
      'accent-light': '#81A1C1',
      'accent-code': '#5565E8',
      line: '#1E2D3D',
      'gradient-blue': '#4D5BCE',
      'gradient-green': '#43D9AD',
    },
    fontSize: {
      headline: '3.875rem',
      subheadline: '2rem',
      'subheadline-mobile': '1.25rem',
      'message-headline': '1.625rem',
      body: '1.125rem',
      label: '1rem',
      code: '0.875rem',
    },
    extend: {
      gridTemplateColumns: {
        main: '21.5rem 1fr',
        code: '1.5rem 1fr',
      },
      gridTemplateRows: {
        main: '3.5rem 1fr 3.25rem',
      },
    },
  },
  plugins: [
    forms('@tailwindcss/forms'),
    plugin(function ({ addComponents }) {
      addComponents({
        h1: {
          fontSize: '2rem',
          color: '#FFFFFF',
        },
        h2: {
          fontSize: '1.5rem',
          color: '#FFFFFF',
        },
        h3: {
          fontSize: '1.25rem',
          color: '#FFFFFF',
        },
        p: {
          fontSize: '1rem',
          color: '#FFFFFF',
        },
        '.btn': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '0.5rem',
          padding: '0.625rem 0.875rem',
        },
        '.btn-primary': {
          color: '#01080E',
          backgroundColor: '#FEA55F',
          '&:hover': {
            backgroundColor: '#FFAC6B',
          },
        },
        '.btn-default': {
          color: '#FFFFFF',
          backgroundColor: '#1C2B3A',
          '&:hover': {
            backgroundColor: '#263B50',
          },
        },
        '.btn-ghost': {
          color: '#FFFFFF',
          backgroundColor: 'transparent',
          boxSizing: 'border-box',
          border: '1px solid #FFFFFF',
          '&:hover': {
            border: '1px solid #FFFFFF80',
          },
        },
        '.btn-social': {
          fill: '#607B96',
          height: '1.5rem',
          width: '1.5rem',
          opacity: '0.5',
        },
      });
    }),
  ],
};
