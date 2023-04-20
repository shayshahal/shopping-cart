/// <reference types="vitest" />
/// <reference types='vite/client'/>

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		open: true,
		port: 3000,
	},
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		css: true,
		setupFiles: ['./src/components/__tests__/setup.js'],
	},
});
