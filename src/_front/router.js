import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"8358f841-897f-4c3d-a497-c7288ebc2c5f","homePageId":"c8958bb8-90c5-4272-9d37-5d40a58bb3d7","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":{},"defaultTheme":"dark","langs":[{"lang":"en","default":true}],"background":{"backgroundColor":"#1F2937","backgroundOrder":"col,grad,img"},"workflows":[{"id":"ca4e13f6-78d2-4425-afc3-ae437fbc347c","actions":{"cbbac9df-9674-473d-abb6-0d13e1f79f50":{"id":"cbbac9df-9674-473d-abb6-0d13e1f79f50","args":{"method":"POST"},"type":"2bd1c688-31c5-443e-ae25-59aa5b6431fb-apiRequest"}},"trigger":"onload-app","firstAction":"cbbac9df-9674-473d-abb6-0d13e1f79f50"}],"pages":[{"id":"336dd127-55c4-4e23-9a27-d6508de443bf","linkId":"336dd127-55c4-4e23-9a27-d6508de443bf","name":"test page","folder":null,"paths":{"en":"test-page","default":"test-page"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"92c1d0a6-ef84-4a34-8745-bdb46e6e9549","sectionTitle":"Section","linkId":"7438861d-bbfb-4954-8bae-c0a79af0c90d"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a8b1a2a6-9e80-4452-89f8-9fe26721f221","linkId":"a8b1a2a6-9e80-4452-89f8-9fe26721f221","name":"Server settings","folder":null,"paths":{"en":"serversettings","default":"serversettings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"e968bb36-43be-4883-b8c8-3036e4a81154","sectionTitle":"Main Container","linkId":"fb0dd554-a513-464a-8b12-a633cf00407d"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"867d2f6e-f70c-4366-83a8-86e8bd51c6bd","linkId":"867d2f6e-f70c-4366-83a8-86e8bd51c6bd","name":"Home 2","folder":null,"paths":{"en":"home-2","default":"home-2"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"1124080d-bd48-4651-abd7-f1dad1712c4d","sectionTitle":"Navbar Section","linkId":"1128acb1-c361-4622-9ed5-fe49acc9b0e0"},{"uid":"bfb239b4-5655-4ca9-8a6a-34724d95b8f2","sectionTitle":"Main Content","linkId":"9671d765-8cf1-474e-b999-67e5e9aada2c"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0ca7b557-88c9-4aa1-84a3-16f7235000d5","linkId":"0ca7b557-88c9-4aa1-84a3-16f7235000d5","name":"Notifications","folder":null,"paths":{"en":"notifications","default":"notifications"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"028a8ed6-fa57-4d86-87ed-c29aec909966","sectionTitle":"Section","linkId":"7d1338a4-6932-4918-bf19-0ee41ba9ac25"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"35cbeafe-0f58-45d7-b5d9-65a49ea884a2","linkId":"35cbeafe-0f58-45d7-b5d9-65a49ea884a2","name":"Settings","folder":null,"paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"90fdaa2d-be1d-4f49-8a5c-4fdc5f9b9438","sectionTitle":"Main Container","linkId":"53a45a97-3fb8-4ef3-9bdc-c1b4ade0679c"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d5032291-2062-44d3-b283-b00fdf56c465","linkId":"d5032291-2062-44d3-b283-b00fdf56c465","name":"Trading","folder":null,"paths":{"en":"trading","default":"trading"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a7e48882-4b2e-42e3-a0d9-3ad5f6c87963","sectionTitle":"Section","linkId":"8bf9ef70-b1c6-4216-b261-494ccaf0ef90"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c8958bb8-90c5-4272-9d37-5d40a58bb3d7","linkId":"c8958bb8-90c5-4272-9d37-5d40a58bb3d7","name":"Home 2 for phone","folder":null,"paths":{"en":"home-2-copy","default":"home-2-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f202fe36-9dff-4b42-82e8-cc8d403bde1e","sectionTitle":"Navbar Section","linkId":"297d2784-1d1f-48f1-99f5-9e1ef293cb9b"},{"uid":"6c57cb5a-8b3b-4557-a3bd-3dc99c11ec00","sectionTitle":"Main Content","linkId":"c783fecc-0b35-475b-8afd-7e346c22c6a5"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d55807fa-67bc-4d2c-829c-f739f2ac7d7a","linkId":"d55807fa-67bc-4d2c-829c-f739f2ac7d7a","name":"Settings (copy)","folder":null,"paths":{"en":"settings-copy","default":"settings-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"d1cdae2b-2c55-40df-a9a2-1ba31f02cf4e","sectionTitle":"Main","linkId":"6064ed98-a543-433f-8b6f-348e50d7c8a7"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"41f1f846-46e2-4e3e-9368-ebd488d69f59","linkId":"41f1f846-46e2-4e3e-9368-ebd488d69f59","name":"Settingshmi","folder":null,"paths":{"en":"settingshmi","default":"settingshmi"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"57cf8bc6-1bb9-4553-a7fc-779dce83a6bd","sectionTitle":"Main Container","linkId":"8de23ce3-5771-4a3b-afe3-5ee0c593adc5"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9521fa27-5477-49a7-9133-1148061410f2","linkId":"9521fa27-5477-49a7-9133-1148061410f2","name":"Login","folder":null,"paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a6875255-6001-4508-af0e-abda2f1da38a","sectionTitle":"Login section","linkId":"61459dda-34eb-492a-89ff-fb6b86b3abb8"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"96fedec9-e84b-4d3b-85e1-a443f5a722ee","linkId":"96fedec9-e84b-4d3b-85e1-a443f5a722ee","name":"Peakshave","folder":null,"paths":{"en":"peakshave","default":"peakshave"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"0f1cd29b-195b-45ec-93f6-cb1869b37c16","sectionTitle":"Section","linkId":"08c8f7cf-2952-4bfd-87f8-643ee3159092"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"66a79c98-70e7-4bc4-8859-20776b024ec2","name":"PWA","namespace":"pwa"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"6a64802c-52f8-4637-9932-580bf178aaa7","name":"WeWeb Auth","namespace":"wewebAuth"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 286;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
