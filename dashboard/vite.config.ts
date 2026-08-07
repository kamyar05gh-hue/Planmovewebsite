import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dashboard-website/',
  plugins: [react()],
  server: {
    port: 8000,
    strictPort: true,
  },
});
