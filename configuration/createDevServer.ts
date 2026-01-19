import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildConfig } from './types/configTypes';


export function createDevServer(options: BuildConfig): DevServerConfiguration {

  const { port } = options;

  return {
    open: true,
    port,
    client: {
      overlay: {
        errors: true,
        runtimeErrors: true,
        warnings: false,
      }
    },
  }
}
