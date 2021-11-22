
export default {

    name: 'daybook',
    component: () => import(/* webpackChunkMame: "daybook" */  '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkMame: "daybook-no-entry" */  '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkMame: "daybook-entry" */  '@/modules/daybook/views/EntryView.vue'),
        }
    ]

}