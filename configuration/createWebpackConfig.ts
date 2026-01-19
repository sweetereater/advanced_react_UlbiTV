import { type Configuration } from 'webpack';

import { createDevServer } from './createDevServer';
import { createLoaders } from "./createLoaders";
import { createPlugins } from "./createPlugins";
import { createResolvers } from "./createResolvers";
import { BuildConfig } from './types/configTypes';


export function createWebpackConfig(config: BuildConfig): Configuration {

  const { mode, isDev, paths } = config;

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
      rules: createLoaders(config),
    },
    
    resolve: createResolvers(),

    plugins: createPlugins(config),
  }
}
