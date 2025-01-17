const tokens = require('./public/tokens.json');

// Helper function to safely access nested properties
function getTokenValue(path, fallback = '') {
  return path.split('.').reduce((obj, key) => obj?.[key] ?? fallback, tokens);
}

module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'], // Include all relevant files for Tailwind
  theme: {
    extend: {
      colors: {
        primary: getTokenValue('100-primitives/Mode 1.colors.primary.500.value', ''),
        secondary: getTokenValue('100-primitives/Mode 1.colors.secondary.500.value', ''),
      },
      fontFamily: {
        montserrat: [
          getTokenValue('100-primitives/Mode 1.font.family.english.value', ''),
        ],
      },
      borderRadius: {
        lg: `${getTokenValue('100-primitives/Mode 1.border.radius.rounded-lg.value', )}px`,
      },
      fontSize: {
        small: `${getTokenValue('100-primitives/Mode 1.font.size.small.value', )}px`,
        medium: `${getTokenValue('100-primitives/Mode 1.font.size.medium.value', )}px`,
        large: `${getTokenValue('100-primitives/Mode 1.font.size.large.value', )}px`,
      },
    },
  },
  plugins: [],
};


// The result of what's on top
// theme: {
//   extend: {
//     colors: {
//       primary: '#004ab9',
//           secondary: '#5f12a9',
//     },
//     fontFamily: {
//       montserrat: ['Montserrat'],
//     },
//     borderRadius: {
//       lg: '8px',
//     },
//     fontSize: {
//       small: '12px',
//           medium: '16px',
//           large: '24px',
//     },
//   },
// }
