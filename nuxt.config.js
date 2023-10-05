export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: '',
    public: {
      baseURL: '' // Exposed to the frontend as well.
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['~/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  }
});
