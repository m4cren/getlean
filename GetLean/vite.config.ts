import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    server: {
        host: '192.168.1.9',
        port: 5173, // Change if needed
    },
});
