declare module 'next' {
  import React from 'react';

  export interface Metadata {
    title?:
      | string
      | {
          default: string;
          template: string;
        };
    description?: string;
    keywords?: string[];
    authors?: Array<{ name: string; url?: string }>;
    creator?: string;
    publisher?: string;
    metadataBase?: URL;
    alternates?: {
      canonical?: string;
    };
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
      siteName?: string;
      locale?: string;
      type?: string;
      images?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
      }>;
    };
    twitter?: {
      card?: string;
      title?: string;
      description?: string;
      creator?: string;
      site?: string;
      images?: string[];
    };
    robots?: {
      index?: boolean;
      follow?: boolean;
      googleBot?: {
        index?: boolean;
        follow?: boolean;
        'max-video-preview'?: number;
        'max-image-preview'?: string;
        'max-snippet'?: number;
      };
    };
    icons?: {
      icon?: string;
      apple?: string;
    };
  }

  export interface Viewport {
    themeColor?: string;
    width?: string;
    initialScale?: number;
    maximumScale?: number;
  }
}

declare module 'next/script' {
  import React from 'react';

  export interface ScriptProps extends React.ScriptHTMLAttributes<HTMLScriptElement> {
    src?: string;
    strategy?: 'afterInteractive' | 'beforeInteractive' | 'lazyOnload' | 'worker';
    id?: string;
    children?: string;
  }

  const Script: React.FC<ScriptProps>;
  export default Script;
}
