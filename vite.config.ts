import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/

export default defineConfig(() => {
    return {
        plugins: [react()],
        envDir: "./env",
        server: {
            host: "localhost",
            port: 4001,
            open: true,
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src/"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@layout": path.resolve(__dirname, "./src/layout"),
                "@services": path.resolve(__dirname, "./src/services"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@pages": path.resolve(__dirname, "./src/pages"),
            },
        },
    };
});
