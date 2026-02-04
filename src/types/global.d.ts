declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: unknown;
    }
  }
}

declare module 'react-markdown' {
  import { ReactElement } from 'react';
  interface ReactMarkdownProps {
    children?: string;
    className?: string;
    components?: unknown;
    remarkPlugins?: unknown[];
    rehypePlugins?: unknown[];
  }

  export default function ReactMarkdown(
    props: ReactMarkdownProps
  ): ReactElement;
}

declare module 'react-markdown/lib/complex-types' {
  export type NormalComponents = {
    [key: string]: unknown;
  };
}

export {};
