import path from 'path';
import { createWebpackConfig } from './configuration/createWebpackConfig';

const config = createWebpackConfig({
  mode: 'production',
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    public: path.resolve(__dirname, 'public', 'index.html'),
  },
  port: 3000,
});

export default config;
