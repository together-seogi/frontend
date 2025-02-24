import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
    host: "0.0.0.0",
  },
  server: {
    cors: {
      origin: [
        "https://tseogi.juany.kr",
        "https://api-tseogi.juany.kr",
      ],
      methods: ["POST", "GET", "PATCH", "PUT", "OPTIONS", "DELETE"],
      allowedHeaders: ["*"],
    }
  },
});
