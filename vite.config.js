import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
  server: {
    port: 5173, // Ensure Vite listens on port 5173
  },
});
