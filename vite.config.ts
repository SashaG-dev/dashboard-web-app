import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const processEnvValues = {
    'process.env': Object.entries(env).reduce((prev, [key, value]) => {
      return { ...prev, [key]: value };
    }),
  };

  return {
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString();
            }
          },
        },
      },
    },
    define: {
      'process.env.FIREBASE_API_KEY': JSON.stringify(env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
        env.FIREBASE_AUTH_DOMAIN
      ),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
        env.FIREBASE_PROJECT_ID
      ),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
        env.FIREBASE_STORAGE_BUCKET
      ),
      'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
        env.FIREBASE_MESSAGING_SENDER_ID
      ),
      'process.env.FIREBASE_APP_ID': JSON.stringify(env.FIREBASE_APP_ID),
      'process.env.DEMO_EMAIL': JSON.stringify(env.DEMO_EMAIL),
      'process.env.DEMO_PASSWORD': JSON.stringify(env.DEMO_PASSWORD),
      'process.env.DEMO_ID': JSON.stringify(env.DEMO_ID),
    },
  };
});
