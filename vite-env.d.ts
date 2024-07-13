/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_LITLY_PROJECT_ID: string;
    readonly VITE_VITE_SERVICE_KEY: string;
    readonly VITE_VITE_TEMPLATE_ID: string;
    readonly VITE_VITE_PUBLIC_KEY: string;
    readonly VITE_GITHUB_TOKEN: string;
}
  
interface ImportMeta {
readonly env: ImportMetaEnv;
}
  