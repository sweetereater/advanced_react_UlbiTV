import { type Configuration } from 'webpack';

import { createLoaders } from "./createLoaders";
import { createPlugins } from "./createPlugins";
import { createResolvers } from "./createResolvers";
import { BuildConfig } from './types/configTypes';
import { createDevServer } from './createDevServer';


export function createWebpackConfig(config: BuildConfig): Configuration {

  const { mode, paths } = config;
  const isDev = mode === 'development';


  return {
    mode,

    devtool: isDev ? 'inline-source-map' : undefined,

    devServer: createDevServer(config),

    entry: paths.entry,
    
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },

    module: {
      rules: createLoaders(),
    },
    
    resolve: createResolvers(),

    plugins: createPlugins(config),
  }
}
