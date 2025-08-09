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
window.wwg_designInfo = {"id":"be7efb06-4d37-426d-bde5-5ddfe364ab26","homePageId":"acc2b93c-e180-4f14-a6e1-b135855a0b12","authPluginId":"6a64802c-52f8-4637-9932-580bf178aaa7","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[{"id":"ca4e13f6-78d2-4425-afc3-ae437fbc347c","actions":{"cbbac9df-9674-473d-abb6-0d13e1f79f50":{"id":"cbbac9df-9674-473d-abb6-0d13e1f79f50","args":{"method":"POST"},"type":"2bd1c688-31c5-443e-ae25-59aa5b6431fb-apiRequest"}},"trigger":"onload-app","firstAction":"cbbac9df-9674-473d-abb6-0d13e1f79f50"}],"pages":[{"id":"45866bf9-60fc-4e79-a298-f1cca6ebd03f","linkId":"45866bf9-60fc-4e79-a298-f1cca6ebd03f","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8018cc11-5ed1-4918-a421-1193bff0e16c","sectionTitle":"Section","linkId":"e6600241-ba9a-4629-a30f-35f3dbcf10b4"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6d34cda2-6fa8-47cf-8c21-718a4c467689","linkId":"6d34cda2-6fa8-47cf-8c21-718a4c467689","name":"Settings","folder":null,"paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"ea52d4a4-84e7-4bb3-824e-15d7c75af32f","sectionTitle":"Main","linkId":"ecbb4a8e-db12-49ce-9d8b-b9dab0ceabf9"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9b2af9eb-a41e-405a-9694-3445e387f03a","linkId":"9b2af9eb-a41e-405a-9694-3445e387f03a","name":"Home 2 for phone","folder":null,"paths":{"en":"home-2-copy","default":"home-2-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"3ed052b0-689a-4405-a87d-950d7e4347c2","sectionTitle":"Navbar Section","linkId":"297d2784-1d1f-48f1-99f5-9e1ef293cb9b"},{"uid":"cd20fde0-30e0-46c4-a6d5-f8cd7ae7583c","sectionTitle":"Main Content","linkId":"c783fecc-0b35-475b-8afd-7e346c22c6a5"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f4fcd689-d16a-4d85-b763-a584f2a3ec2a","linkId":"f4fcd689-d16a-4d85-b763-a584f2a3ec2a","name":"Trading","folder":null,"paths":{"en":"trading","default":"trading"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"c8493ae7-3490-4e29-ae77-b7a5d266f54e","sectionTitle":"Section","linkId":"8bf9ef70-b1c6-4216-b261-494ccaf0ef90"},{"uid":"73418476-8198-435e-9679-1949adb7b625","sectionTitle":"Section","linkId":"117f18b4-6a48-42db-9a70-a972afe75bb7"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a1b77025-08b2-4e6e-a3d2-27b7b2acda75","linkId":"a1b77025-08b2-4e6e-a3d2-27b7b2acda75","name":"Home 2","folder":null,"paths":{"en":"home-2","default":"home-2"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"68b39be6-99db-4da5-b308-fd897d641e28","sectionTitle":"Navbar Section","linkId":"1128acb1-c361-4622-9ed5-fe49acc9b0e0"},{"uid":"23d3fde1-69d0-4fa9-8607-771396e91bb0","sectionTitle":"Main Content","linkId":"9671d765-8cf1-474e-b999-67e5e9aada2c"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"acc2b93c-e180-4f14-a6e1-b135855a0b12","linkId":"acc2b93c-e180-4f14-a6e1-b135855a0b12","name":"Login","folder":null,"paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"3075e1d3-0e7c-4b7d-9e98-19b0d0b85aaa","sectionTitle":"Login section","linkId":"61459dda-34eb-492a-89ff-fb6b86b3abb8"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"6a64802c-52f8-4637-9932-580bf178aaa7","name":"WeWeb Auth","namespace":"wewebAuth"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 6;
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
