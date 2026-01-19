export type BuildMode = "development" | 'production';

export interface BuildPaths {
  entry: string
  build: string
  public: string
}

export interface BuildConfig {
  mode: BuildMode,
  paths: BuildPaths,
  port: number
}
