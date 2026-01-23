import { ResolveOptions } from "webpack";
import { BuildConfig } from "./types/configTypes";

export function createResolvers(options: BuildConfig): ResolveOptions {
  return {
    alias: {},
    modules: [options.paths.src, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  }
}
