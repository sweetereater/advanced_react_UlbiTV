export type BuildMode = "development" | 'production';

export interface BuildEnvOptions {
  mode?: BuildMode,
  port?: number
}

export interface BuildPaths {
  entry: string
  build: string
  public: string
  src: string
}

export interface BuildConfig {
  mode: BuildMode,
  isDev: boolean,
  paths: BuildPaths,
  port: number
}
