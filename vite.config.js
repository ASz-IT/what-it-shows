import path from 'node:path';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

const runbook = path.resolve('src/lib/layouts/runbook.svelte');

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter(),
      extensions: ['.svelte', '.svx'],
      alias: {
        '#lib': 'src/lib'
      },
      preprocess: [
        mdsvex({
          extensions: ['.svx'],
          layout: {
            runbook
          }
        })
      ]
    })
  ]
});
