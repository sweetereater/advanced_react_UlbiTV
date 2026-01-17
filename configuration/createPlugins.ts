import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildConfig } from "./types/configTypes";

export function createPlugins(buildOptions: BuildConfig): WebpackPluginInstance[]  {

  const { paths } = buildOptions;
  
  return [
    new HtmlWebpackPlugin({
      template: paths.public,
    }),
    new ProgressPlugin(),
  ]
}
