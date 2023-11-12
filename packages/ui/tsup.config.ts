import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => {
    return {
        treeshake: true,
        splitting: true,
        entry: ["./**/*.tsx"],
        format: ["esm"],
        dts: true,
        minify: true,
        clean: true,
        external: ["react"],
        ...options
    }
})