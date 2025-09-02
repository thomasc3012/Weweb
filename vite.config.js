import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"home-2_2":{"outputDir":"./home-2_2","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n<style>\r\n* {\r\n    &::-webkit-scrollbar-thumb {\r\n    background-color: blue;\r\n    border-radius: red;\r\n}\r\n    &::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n    }\r\n    &::-webkit-scrollbar {\r\n        width: 4px;\r\n        height: 4px;\r\n        background-color: transparent;\r\n    }\r\n}\r\n</style>","body":"\n="},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/home-2_2/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/home-2_2/"}]},"index":{"outputDir":"./","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n<style>\r\n* {\r\n    &::-webkit-scrollbar-thumb {\r\n    background-color: blue;\r\n    border-radius: red;\r\n}\r\n    &::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n    }\r\n    &::-webkit-scrollbar {\r\n        width: 4px;\r\n        height: 4px;\r\n        background-color: transparent;\r\n    }\r\n}\r\n</style>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/"}]},"home-2":{"outputDir":"./home-2","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n<style>\r\n* {\r\n    &::-webkit-scrollbar-thumb {\r\n    background-color: blue;\r\n    border-radius: red;\r\n}\r\n    &::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n    }\r\n    &::-webkit-scrollbar {\r\n        width: 4px;\r\n        height: 4px;\r\n        background-color: transparent;\r\n    }\r\n}\r\n</style>","body":"\n="},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/home-2/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/home-2/"}]},"login":{"outputDir":"./login","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<style>\r\n* {\r\n    &::-webkit-scrollbar-thumb {\r\n    background-color: blue;\r\n    border-radius: red;\r\n}\r\n    &::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n    }\r\n    &::-webkit-scrollbar {\r\n        width: 4px;\r\n        height: 4px;\r\n        background-color: transparent;\r\n    }\r\n}\r\n</style>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/login/"}]},"test-page":{"outputDir":"./test-page","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/test-page/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/test-page/"}]},"signup":{"outputDir":"./signup","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/signup/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/signup/"}]},"trading":{"outputDir":"./trading","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n<style>\r\n* {\r\n    &::-webkit-scrollbar-thumb {\r\n    background-color: blue;\r\n    border-radius: red;\r\n}\r\n    &::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n    }\r\n    &::-webkit-scrollbar {\r\n        width: 4px;\r\n        height: 4px;\r\n        background-color: transparent;\r\n    }\r\n}\r\n</style>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/trading/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/trading/"}]},"notifications":{"outputDir":"./notifications","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/notifications/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/notifications/"}]},"settings-copy":{"outputDir":"./settings-copy","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n<style>\r\n* {\r\n    &::-webkit-scrollbar-thumb {\r\n    background-color: blue;\r\n    border-radius: red;\r\n}\r\n    &::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n    }\r\n    &::-webkit-scrollbar {\r\n        width: 4px;\r\n        height: 4px;\r\n        background-color: transparent;\r\n    }\r\n}\r\n</style>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/settings-copy/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/settings-copy/"}]},"peakshave":{"outputDir":"./peakshave","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n<style>\r\n* {\r\n    &::-webkit-scrollbar-thumb {\r\n    background-color: blue;\r\n    border-radius: red;\r\n}\r\n    &::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n    }\r\n    &::-webkit-scrollbar {\r\n        width: 4px;\r\n        height: 4px;\r\n        background-color: transparent;\r\n    }\r\n}\r\n</style>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/peakshave/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/peakshave/"}]},"settingshmi":{"outputDir":"./settingshmi","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n<style>\r\n* {\r\n    &::-webkit-scrollbar-thumb {\r\n    background-color: blue;\r\n    border-radius: red;\r\n}\r\n    &::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n    }\r\n    &::-webkit-scrollbar {\r\n        width: 4px;\r\n        height: 4px;\r\n        background-color: transparent;\r\n    }\r\n}\r\n</style>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/settingshmi/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/settingshmi/"}]},"serversettings":{"outputDir":"./serversettings","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n<style>\r\n* {\r\n    &::-webkit-scrollbar-thumb {\r\n    background-color: blue;\r\n    border-radius: red;\r\n}\r\n    &::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n    }\r\n    &::-webkit-scrollbar {\r\n        width: 4px;\r\n        height: 4px;\r\n        background-color: transparent;\r\n    }\r\n}\r\n</style>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/serversettings/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/serversettings/"}]},"settings":{"outputDir":"./settings","lang":"en","cacheVersion":18,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n<style>\r\n* {\r\n    &::-webkit-scrollbar-thumb {\r\n    background-color: blue;\r\n    border-radius: red;\r\n}\r\n    &::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n    }\r\n    &::-webkit-scrollbar {\r\n        width: 4px;\r\n        height: 4px;\r\n        background-color: transparent;\r\n    }\r\n}\r\n</style>","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/settings/"},{"rel":"alternate","hreflang":"en","href":"https://91360dec-d376-4bde-b5b6-af804c854d83.weweb-preview.io/settings/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
