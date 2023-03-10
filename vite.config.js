/// <reference types="vitest" />
/// <reference types='vite/client'/>

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/shopping-cart/',
	server: {
		port: 3000,
		open: true,
	},
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		css: true,
		setupFiles: ['./src/components/__tests__/setup.js'],
	},
});
