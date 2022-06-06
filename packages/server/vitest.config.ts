import { defineConfig } from 'vite'
import { createFilter } from '@rollup/pluginutils'
import { transform } from '@swc/core'
import type { Plugin } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/modules': '/src/modules',
    },
  },
  esbuild: false,
  plugins: [
    RollupPluginSwc(),
  ],
})

// TODO: Add source of code below.
const queryRE = /\?.*$/
const hashRE = /#.*$/
const includeRE = /\.(tsx?|jsx)$/
const excludeRE = /\.js$/
const cleanUrl = (url: string) => url.replace(hashRE, '').replace(queryRE, '')

function RollupPluginSwc(): Plugin {
  const filter = createFilter(includeRE, excludeRE)

  return {
    name: 'rollup-plugin-swc',
    async transform(code, filename) {
      if (filter(filename) || filter(cleanUrl(filename))) {
        const result = await transform(code, {
          jsc: {
            target: 'es2019',
            parser: {
              syntax: 'typescript',
              decorators: true,
            },
            transform: {
              legacyDecorator: true,
              decoratorMetadata: true,
            },
          },
          filename,
        })

        return result
      }
    },
  }
}
