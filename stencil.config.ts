import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import replace from 'postcss-replace';
import purgecss from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';

const purge = purgecss({
  content: ['./src/**/*.tsx', './src/index.html'],
  safelist: [':host'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  devServer: {
    openBrowser: !process.env.NOBROWSER,
  },
  namespace: 'leibal-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
        replace({ pattern: 'html', data: { replaceAll: ':host' } } as any),
        // purge and cssnano if production build
        ...(!process.argv.includes('--dev') ? [purge, cssnano()] : []),
      ],
    }),
  ],
};
