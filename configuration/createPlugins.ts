import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildConfig } from "./types/configTypes";

export function createPlugins(buildOptions: BuildConfig): WebpackPluginInstance[]  {

  const { paths } = buildOptions;
  
  return [
    new HtmlWebpackPlugin({
      template: paths.public,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
  ]
}
