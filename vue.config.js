import { resolve } from 'path';

export default {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/su-ranker/'
    : '/',
   chainWebpack: config => {
      const apiClient = process.env.VUE_APP_API_CLIENT; // mock or server
      config.resolve.alias.set(
          'api-client',
          resolve(__dirname, `src/api/${apiClient}`)
      );
  }
};