import { RuleSetRule } from "webpack"
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildConfig } from "./types/configTypes";

export function createLoaders(options: BuildConfig): RuleSetRule[] {

  const { isDev } = options;

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // "style-loader",
      isDev ? MiniCssExtractPlugin.loader : 'style-loader', // Не уверен, что нужно это условие, мб всегда стоит использовать MiniCssExtractPlugin?
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (path: string) => path.includes('.module.'),
            localIdentName: isDev ? "[name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }


  return [
    tsLoader,
    scssLoader,
    svgLoader,
  ]
}
