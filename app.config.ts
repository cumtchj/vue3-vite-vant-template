/**
 * @Author: Haojun.Cao
 * @Date: 2021/11/17 20:08
 */
import type { AliasOptions } from 'vite';
import { loadEnv } from 'vite';

const path = require('path');
const fs = require('fs');
type AppConfig = {
  viteMode: string,
  baseUrl: string,
  projectEnv: string,
  staticRouter: string,
  extensions: string[];
  alias?: AliasOptions,
  proxy?: object
}
export default function(mode: string): AppConfig {
  // 环境变量
  const envConfig = loadEnv(mode, path.join(process.cwd(), 'env'));
  console.log('env=====',envConfig);

  const viteMode = envConfig.VITE_MODE;
// 接口base url
  const runEnv = envConfig.VITE_RUN_ENV;
// 项目跑起来的环境
  const baseUrl = envConfig.VITE_BASE_ORIGIN;
  const projectEnv = envConfig.VITE_APP_ENV;
// 静态资源 base url
  const staticRouter = runEnv === 'server' ? envConfig.VITE_STATIC_ROUTER : '/';
// 别名设置，直接获取文件夹名做别名，无需配置
  const dirPath = path.join(__dirname, 'src');
  const items = fs.readdirSync(dirPath);
  const aliasDirs = items.filter((item: string) => {
    const filePath = path.join(dirPath, item);
    return fs.statSync(filePath).isDirectory();
  });
  const alias = aliasDirs.reduce(
    (sum: object, item: string) =>
      Object.assign(sum, { ['@' + item]: path.resolve(__dirname, `src/${item}/`) }),
    { '@': path.resolve(__dirname, 'src/') }
  );

// 拓展名设置
  const extensions = ['.vue', '.js', '.ts', 'tsx', '.scss'];

// 代理设置,修改数组即可
  const proxyPaths:string[] = [];
  const proxy = proxyPaths.length
    ? proxyPaths.reduce(
      (sum, item) =>
        Object.assign(sum, {
          [item]: {
            target: baseUrl,
            changeOrigin: true,
            pathRewrite: { [`^${item}`]: /*item*/ '' }
          }
        }),
      {
        '/bees-manage': {
          target: process.env.VUE_APP_MANAGE,
          changeOrigin: true,
          pathRewrite: { '^/bees-manage': '/bees-manage' }
        }
      }
    )
    : undefined;

  return {
    viteMode, baseUrl, projectEnv, extensions, staticRouter, alias, proxy
  };
}

