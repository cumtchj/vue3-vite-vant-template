import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import legacy from '@vitejs/plugin-legacy'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import getAppConfig from './app.config';

// console.log(alias);
const config = defineConfig(({ command, mode }) => {
  const appConfig = getAppConfig(mode);
  return {
    mode: appConfig.viteMode,
    base: appConfig.staticRouter,
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()]
      })
    ],
    resolve: {
      alias: appConfig.alias
    },
    build: {
      target: 'es2015',
      // minify: 'terser',
      // sourcemap: false // 是否产出sourcemap.json
    }
  };
});
console.log('config=====',config);
export default config;
