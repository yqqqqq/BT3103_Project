import Home from './components/Home.vue' 
import AddItem from './components/AddItem.vue' //same name as the create new task file
import Dashboard from './components/Dashboard.vue' //Same name as the dashboard file

export default [
    {path: '/', component: Home},
    {path: '/add', component: AddItem}, //change here
    {path: '/dashboard', component: Dashboard} //change here
]