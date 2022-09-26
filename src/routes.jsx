import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/app/Home";
import appRoutes from "./routes/publicRoutes"

const MainRoute = () => {

    useEffect(() => {
        console.log(window.location.pathname)
    })
    return (
        <Routes>
            <Route exact path='/' element = {<Home />}/>
            {appRoutes.map(pr => {
                const path = pr.path;
                const Component = pr.component;
                return(
                    <Route exact path={path} element={< Component />}/>
                )
            })}
        </Routes>
    )
}

export default MainRoute