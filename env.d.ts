interface ImportMetaEnv {
  readonly VITE_MODE: string
  readonly VITE_RUN_ENV: string
  readonly VITE_APP_ENV: string
  readonly VITE_BASE_ORIGIN: string
  readonly VITE_STATIC_ROUTER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
