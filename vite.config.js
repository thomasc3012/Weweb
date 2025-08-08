import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"home":{"outputDir":"./home","lang":"en","cacheVersion":126,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://8358f841-897f-4c3d-a497-c7288ebc2c5f.weweb-preview.io/home/"},{"rel":"alternate","hreflang":"en","href":"https://8358f841-897f-4c3d-a497-c7288ebc2c5f.weweb-preview.io/home/"}]},"index":{"outputDir":"./","lang":"en","cacheVersion":126,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://8358f841-897f-4c3d-a497-c7288ebc2c5f.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://8358f841-897f-4c3d-a497-c7288ebc2c5f.weweb-preview.io/"}]},"home-2-copy":{"outputDir":"./home-2-copy","lang":"en","cacheVersion":126,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://8358f841-897f-4c3d-a497-c7288ebc2c5f.weweb-preview.io/home-2-copy/"},{"rel":"alternate","hreflang":"en","href":"https://8358f841-897f-4c3d-a497-c7288ebc2c5f.weweb-preview.io/home-2-copy/"}]},"trading":{"outputDir":"./trading","lang":"en","cacheVersion":126,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://8358f841-897f-4c3d-a497-c7288ebc2c5f.weweb-preview.io/trading/"},{"rel":"alternate","hreflang":"en","href":"https://8358f841-897f-4c3d-a497-c7288ebc2c5f.weweb-preview.io/trading/"}]},"home-2":{"outputDir":"./home-2","lang":"en","cacheVersion":126,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://8358f841-897f-4c3d-a497-c7288ebc2c5f.weweb-preview.io/home-2/"},{"rel":"alternate","hreflang":"en","href":"https://8358f841-897f-4c3d-a497-c7288ebc2c5f.weweb-preview.io/home-2/"}]}};

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
