import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#faf5fb',
          100: '#f3e8f6',
          200: '#e6cfec',
          500: '#9b4fae',
          600: '#82388f',
          700: '#6a2d75',
          900: '#3b1a42',
        },
        coral: {
          400: '#ff8a7a',
          500: '#f9705d',
          600: '#e65a47',
        },
      },
    },
  },
}
