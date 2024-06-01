import HomePage from "../pages/HomePage";
import {ReactElement} from "react";
import PrivateRoute from "./PrivateRoute";
import AboutPage from "../pages/AboutPage";

export const homePagePath = '/'
export const aboutPagePath = '/about'

interface IRoute {
    path: string,
    component: ReactElement<any, any>,
    children?: Omit<IRoute, "children">[]
}

export const routes:IRoute[] = [
    {
        path: homePagePath,
        component: <HomePage/>
    },
    {
        path: homePagePath,
        component: <PrivateRoute element={<AboutPage/>}/>
    },

    // example with children
    // {
    //     path: createEmployeePagePath,
    //     component: <PrivateRoute
    //         element={
    //             <PrivateRoute element={<CreateEmployeePage/>} roles={[tenant]}/>
    //         }
    //     />,
    //     children: [
    //         {
    //             path: ":id",
    //             component: <PrivateRoute element={<CreateEmployeePage/>} roles={[admin,moderator]}/>
    //         }
    //     ]
    // },
]