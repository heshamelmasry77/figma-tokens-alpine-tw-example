import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    root: '.', // Root is the current directory
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()],
        },
    },
    build: {
        outDir: 'dist', // Output directory for builds
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'), // Ensure Vite knows where index.html is
            },
        },
    },
});
