module.exports = {
  content: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      objectPosition: {
        'center-lower': 'center 80%', // add custom position
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: ['corporate'],
  },
}
