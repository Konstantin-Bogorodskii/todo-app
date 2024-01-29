import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			components: '/src/components',
			ui: '/src/components/ui',
			types: '/src/types',
			hooks: '/src/hooks',
			api: '/src/api',
			services: '/src/api/services',
			constants: '/src/constants',
			styles: '/src/styles'
		}
	}
});
