import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

// styles
import '../css/app.css'
import '@/utils/theme.scss' // keep ONE theme import

// ✅ Ziggy named export (matches your installed version)
import { route } from 'ziggy-js'

const appName = import.meta.env.VITE_APP_NAME || 'ChessSpace'

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(`./pages/${name}.vue`, import.meta.glob('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Link', Link)

        // make route() available everywhere (uses window.Ziggy from @routes)
        app.config.globalProperties.$route = (...args) => route(...args)
        window.route = (...args) => route(...args)

        app.mount(el)
    },
})
