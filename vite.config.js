import {
  fileURLToPath,
  URL,
} from 'node:url';

import {
  defineConfig,
  loadEnv,
} from 'vite';

import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    //base: mode === 'production' ? '/portfolio/' : '/',
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    base : env.APP_ENV === 'prod' ? '/portfolio/' : '/',
  }
})

// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: mode === 'production' ? '/portfolio/' : '/',
})*/
/*const getImageBaseUrl = (mode) => {
  const env = loadEnv(mode, process.cwd(), '')
  if (mode === 'production') {
    return env.VITE_PROD_IMAGE_BASE_URL;
  } else {
    return env.VITE_IMAGE_BASE_URL;
  }
};

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  
  if (command === 'serve') {
    return {
      plugins: [
        vue(),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      base: '/',
      define: {
        // Pass the image base URL to your Vue components as global variable
        __IMAGE_BASE_URL__: getImageBaseUrl(mode)
      }
    }
  } else {
    // command === 'build'
    return {
      plugins: [
        vue(),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      base: '/portfolio',
      define: {
        // Pass the image base URL to your Vue components as global variable
        __IMAGE_BASE_URL__: getImageBaseUrl(mode)
      }
    }
  }
})*/
