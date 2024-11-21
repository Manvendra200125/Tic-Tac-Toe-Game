import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Use '@' as shorthand for './src'
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure proper resolution of file extensions
  },
  build: {
    outDir: 'dist', // Default output folder
    rollupOptions: {
      input: 'src/main.jsx', // Ensure the correct entry file
    },
  },
  server: {
    port: 3000, // Optional: Specify dev server port
  },
  define: {
    'process.env': {}, // Mock `process.env` for compatibility
  },
});
