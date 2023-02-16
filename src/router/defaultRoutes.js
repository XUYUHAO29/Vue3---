import layout from "../layout"
const recommend = () => import("../views/recommend")
let defaultRoutes = [
    {
        path:"/",
        component: layout,
        name:"layout",
        children:[
            {
                path:"/",
                component: recommend,
                name:"recommend",
            }
        ]
    }
]
export default defaultRoutes