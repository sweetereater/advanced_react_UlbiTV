import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { 
  DefinePlugin, 
  ProgressPlugin, 
  WebpackPluginInstance,
} from "webpack";
import { BuildConfig } from "./types/configTypes";

export function createPlugins(buildOptions: BuildConfig): WebpackPluginInstance[]  {

  const { isDev, paths } = buildOptions;

  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.public,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: isDev,
    }),
  ]

  if (isDev) {
    plugins.push(new ProgressPlugin())
    plugins.push(new ReactRefreshPlugin(),)
  }
  
  return plugins;
  
}
