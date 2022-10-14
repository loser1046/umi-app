export default [
    {
        path: '/login',
        component: '@/layouts/login',
        // layout:false
        routes: [
            {
                path: '/login',
                component: 'login'
            }
        ]
    },
    {
        path: '/',
        component: '@/layouts/index',
        wrappers: [
            "@/wrappers/auth"
        ],
        routes: [{
            path: '/',
            component: 'index'
        },
        {
            path: '/about',
            component: 'about'
        },
        {
            path: '/info/:id',
            component: 'info'
        }]
    },
    { path: '*', component: '404' }
]