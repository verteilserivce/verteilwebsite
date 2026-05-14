/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WEB3FORMS_KEY: string | undefined;
  readonly PUBLIC_SITE_URL: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
