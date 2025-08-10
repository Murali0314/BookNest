import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Serve assets relative to the root path
  build: {
    outDir: 'dist', // output folder (default is 'dist')
    sourcemap: false, // disable source maps for production (optional)
    // You can add more build options here if needed
  },
});

