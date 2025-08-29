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
window.wwg_designInfo = {"id":"91360dec-d376-4bde-b5b6-af804c854d83","homePageId":"6c3af507-9fca-453b-b6a8-35a0257c66d1","authPluginId":"6a64802c-52f8-4637-9932-580bf178aaa7","baseTag":{},"defaultTheme":"dark","langs":[{"lang":"en","default":true}],"background":{"backgroundColor":"var(--6ef70be1-13f1-46bf-b544-813aec37df45,#ffffff)","backgroundOrder":"col,grad,img"},"workflows":[{"id":"ca4e13f6-78d2-4425-afc3-ae437fbc347c","actions":{"cbbac9df-9674-473d-abb6-0d13e1f79f50":{"id":"cbbac9df-9674-473d-abb6-0d13e1f79f50","args":{"method":"POST"},"type":"2bd1c688-31c5-443e-ae25-59aa5b6431fb-apiRequest"}},"trigger":"onload-app","firstAction":"cbbac9df-9674-473d-abb6-0d13e1f79f50"}],"pages":[{"id":"6c3af507-9fca-453b-b6a8-35a0257c66d1","linkId":"6c3af507-9fca-453b-b6a8-35a0257c66d1","name":"Home 2 for phone","folder":null,"paths":{"en":"home-2-copy","default":"home-2-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"41cf2f9f-12b1-4905-950c-61a129751394","sectionTitle":"Navbar Section","linkId":"297d2784-1d1f-48f1-99f5-9e1ef293cb9b"},{"uid":"05a09b32-f173-4daf-b8b9-ff7ffddee9ea","sectionTitle":"Main Content","linkId":"c783fecc-0b35-475b-8afd-7e346c22c6a5"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ee63b3f2-1064-4b04-afe4-86db0b385286","linkId":"ee63b3f2-1064-4b04-afe4-86db0b385286","name":"Home 2","folder":null,"paths":{"en":"home-2","default":"home-2"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6a74c159-9a21-4179-867e-0de8cef219df","sectionTitle":"Navbar Section","linkId":"1128acb1-c361-4622-9ed5-fe49acc9b0e0"},{"uid":"038f247c-bdc5-4583-b22a-b423e029e119","sectionTitle":"Main Content","linkId":"9671d765-8cf1-474e-b999-67e5e9aada2c"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fe3d669d-51ab-4974-88df-03dab88fc9be","linkId":"fe3d669d-51ab-4974-88df-03dab88fc9be","name":"Login","folder":null,"paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b6e0e34-edf4-40d6-b23f-9cd2282bd1d3","sectionTitle":"Login section","linkId":"61459dda-34eb-492a-89ff-fb6b86b3abb8"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"20ffd7c6-0823-44ce-85e0-3b24c740255e","linkId":"20ffd7c6-0823-44ce-85e0-3b24c740255e","name":"test page","folder":null,"paths":{"en":"test-page","default":"test-page"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4e7241c5-620d-40c9-bd5c-b39ceb28ff30","sectionTitle":"Section","linkId":"9ca32010-1b54-417c-b569-2d348cfe0e01"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"97a088c2-e20c-41a1-be2f-ec26470b3bbe","linkId":"97a088c2-e20c-41a1-be2f-ec26470b3bbe","name":"Signup","folder":null,"paths":{"en":"signup","default":"signup"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"bac1a2f7-b7f9-4cde-8f2d-e664c53acf57","sectionTitle":"Section","linkId":"8ff4d364-4b4b-4e33-9645-f556aeff8efa"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"7a272434-7c72-4656-81f6-1b3c90339735","linkId":"7a272434-7c72-4656-81f6-1b3c90339735","name":"Trading","folder":null,"paths":{"en":"trading","default":"trading"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"c5e5ee4f-c371-4623-96a0-41511d07a48e","sectionTitle":"Section","linkId":"8bf9ef70-b1c6-4216-b261-494ccaf0ef90"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"820c3de9-18db-4018-8567-6a9632514c96","linkId":"820c3de9-18db-4018-8567-6a9632514c96","name":"Notifications","folder":null,"paths":{"en":"notifications","default":"notifications"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"351528bd-aac5-431b-aba7-dbbe99965906","sectionTitle":"Section","linkId":"7d1338a4-6932-4918-bf19-0ee41ba9ac25"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d8385363-78a7-49ab-a2a4-c3a80bfbeb36","linkId":"d8385363-78a7-49ab-a2a4-c3a80bfbeb36","name":"Settings (copy)","folder":null,"paths":{"en":"settings-copy","default":"settings-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"7ebbd486-e571-428f-8392-6ee165731669","sectionTitle":"Main","linkId":"6064ed98-a543-433f-8b6f-348e50d7c8a7"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1fc6dcbe-7b47-48a6-b5aa-b544d688d27d","linkId":"1fc6dcbe-7b47-48a6-b5aa-b544d688d27d","name":"Peakshave","folder":null,"paths":{"en":"peakshave","default":"peakshave"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2f3066d2-1be2-473e-93b0-a51d6e2197fc","sectionTitle":"Section","linkId":"08c8f7cf-2952-4bfd-87f8-643ee3159092"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fc22fe85-f7e9-4ca1-b1ea-e3ee419400d4","linkId":"fc22fe85-f7e9-4ca1-b1ea-e3ee419400d4","name":"Settingshmi","folder":null,"paths":{"en":"settingshmi","default":"settingshmi"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"27c49385-ac86-4719-808e-486ee45d5488","sectionTitle":"Main Container","linkId":"8de23ce3-5771-4a3b-afe3-5ee0c593adc5"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"869d817c-26cd-4089-8840-b2de816b57e5","linkId":"869d817c-26cd-4089-8840-b2de816b57e5","name":"Server settings","folder":null,"paths":{"en":"serversettings","default":"serversettings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"c4210cfe-000f-4244-845d-30aaaaf6f920","sectionTitle":"Main Container","linkId":"fb0dd554-a513-464a-8b12-a633cf00407d"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3f498f52-8d18-49e8-ac97-4974a952e795","linkId":"3f498f52-8d18-49e8-ac97-4974a952e795","name":"Settings","folder":null,"paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"99b4988c-6278-4aef-bcd2-0c6439871f9f","sectionTitle":"Main Container","linkId":"53a45a97-3fb8-4ef3-9bdc-c1b4ade0679c"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"66a79c98-70e7-4bc4-8859-20776b024ec2","name":"PWA","namespace":"pwa"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"6a64802c-52f8-4637-9932-580bf178aaa7","name":"WeWeb Auth","namespace":"wewebAuth"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 14;
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
