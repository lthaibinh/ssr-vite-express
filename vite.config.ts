import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split 'index.js' into smaller chunks based on imported modules.
          if (id.includes("entry-client.tsx")) {
            return "chunk-client-index";
          }
          if (id.includes("entry-server.tsx")) {
            return "chunk-server-index";
          }
        },
      },
    },
  },
})
