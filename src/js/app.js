// Import Alpine.js
import Alpine from 'alpinejs';

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();

// Load tokens dynamically and set them as CSS variables
(async function setDesignTokens() {
    try {
        const response = await fetch('/tokens.json'); // Ensure the path to tokens.json is correct
        const tokens = await response.json();

        const root = document.documentElement; // Access the :root element in CSS

        // Recursive function to loop through tokens and set CSS variables
        function setVariables(obj, prefix = '') {
            for (const [key, value] of Object.entries(obj)) {
                if (value && typeof value === 'object' && !value.value) {
                    // If the value is an object and not a token, recurse deeper
                    setVariables(value, prefix ? `${prefix}-${key}` : key);
                } else if (value && value.value) {
                    // If it's a token, create a CSS variable
                    const variableName = `--${prefix}-${key}`.replace(/ /g, '-').toLowerCase();
                    root.style.setProperty(variableName, value.value);
                }
            }
        }

        // Start processing the tokens
        setVariables(tokens);
        console.log('Design tokens applied successfully!');
    } catch (error) {
        console.error('Error loading tokens:', error);
    }
})();
