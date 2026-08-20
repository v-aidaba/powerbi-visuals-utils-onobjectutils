import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
    resolve: {
        alias: {
            "powerbi-visuals-api": fileURLToPath(new URL("./test/mocks/powerbiApiMock.ts", import.meta.url)),
        },
    },
    test: {
        environment: "jsdom",
        globals: false,
        include: [
            "test/**/*{Test,Tests}.ts",
            "test/**/*.{test,spec}.ts"
        ],
        setupFiles: ["./test/setup.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "html", "lcov"],
            include: ["src/**/*.ts"],
            exclude: ["src/index.ts", "src/types.ts"],
        },
    },
});
