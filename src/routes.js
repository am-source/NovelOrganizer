import HomeView from './components/views/HomeView'
import NovelListView from './components/views/NovelListView'

export default [
    { path: '/', component: HomeView},
    { path: '/novels', component: NovelListView},
]