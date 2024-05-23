import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import FullReload from 'vite-plugin-full-reload'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),FullReload(['src/**/*.{js,jsx,ts,tsx,css}'])],
	esbuild: {
		jsxInject: `import 'tailwindcss/tailwind.css'`,
	},
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "http://localhost:8000",
				changeOrigin: true,
			},
		},
	},
});