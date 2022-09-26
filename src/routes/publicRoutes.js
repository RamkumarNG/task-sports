import View from "../components/app/View"
import Create from "../components/app/Create"
import Info from "../components/app/Info"

const appRoutes = [
    {
        path:"/:currPage",
        component: View
    },
    {
        path:"/:currPage/createPlayer",
        component: Create
    },
    {
        path:"/:currpage/createTeam",
        component: Create
    },
    {
        path:"/:currPage/:id",
        component: Info
    }
]

export default appRoutes;