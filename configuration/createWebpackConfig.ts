import webpack from 'webpack';

import { createLoaders } from "./createLoaders";
import { createPlugins } from "./createPlugins";
import { createResolvers } from "./createResolvers";
import { BuildConfig } from './types/configTypes';

export function createWebpackConfig(config: BuildConfig): webpack.Configuration {

  const { mode, paths } = config;

  return {
    mode,
    
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
