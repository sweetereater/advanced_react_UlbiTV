import path from 'path';
import { createWebpackConfig } from './configuration/createWebpackConfig';
import { BuildEnvOptions } from './configuration/types/configTypes';

export default (env: BuildEnvOptions) => {

  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const config = createWebpackConfig({
    mode,
    port,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      public: path.resolve(__dirname, 'public', 'index.html'),
    },
  });

  return config;

};
