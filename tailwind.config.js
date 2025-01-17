const tokens = require('./public/tokens.json');

// Helper function to get nested values from tokens
function getTokenValue(path, fallback = '') {
  return path.split('.').reduce((obj, key) => obj?.[key] ?? fallback, tokens);
}

module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: getTokenValue('100-primitives/Mode 1.colors.primary.500.value', '#004ab9'),
        secondary: getTokenValue('100-primitives/Mode 1.colors.secondary.500.value', '#5f12a9'),
      },
      fontFamily: {
        montserrat: [
          getTokenValue('100-primitives/Mode 1.font.family.english.value', 'sans-serif'),
        ],
      },
      borderRadius: {
        lg: `${getTokenValue('100-primitives/Mode 1.border.radius.rounded-lg.value', 8)}px`,
      },
      fontSize: {
        small: `${getTokenValue('100-primitives/Mode 1.font.size.small.value', 12)}px`,
        medium: `${getTokenValue('100-primitives/Mode 1.font.size.medium.value', 16)}px`,
        large: `${getTokenValue('100-primitives/Mode 1.font.size.large.value', 24)}px`,
      },
      lineHeight: {
        100: `${getTokenValue('100-primitives/Mode 1.font.line-height.100.value', 15)}px`,
        200: `${getTokenValue('100-primitives/Mode 1.font.line-height.200.value', 18)}px`,
        300: `${getTokenValue('100-primitives/Mode 1.font.line-height.300.value', 24)}px`,
        400: `${getTokenValue('100-primitives/Mode 1.font.line-height.400.value', 36)}px`,
        500: `${getTokenValue('100-primitives/Mode 1.font.line-height.500.value', 48)}px`,
      },
    },
  },
  plugins: [],
};
