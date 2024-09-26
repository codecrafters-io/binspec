/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  safelist: {
    greedy: [/ember-tooltip/, /ember-popover/],
    deep: [
      // Ember's built-in components: <Input /> and <TextArea />
      /^input$/,
      /^textarea$/,
      // There's something wrong with how we're picking styles from ember-animated
      /ember-animated/,
      /animated-container/,
      /animated-orphans/,
    ],
  },
  plugins: [require('@tailwindcss/typography')],
};
