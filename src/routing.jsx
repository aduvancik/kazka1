import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Appetizer from "./pages/Appetizer";
import Basket from "./pages/Basket";
import Beer from "./pages/Beer";
import CreamBase from "./pages/CreamBase";
import TomatoBase from "./pages/TomatoBase";
import MainCourse from "./pages/MainCourse";
import Pizza from "./pages/Pizza";
import Salads from "./pages/Salads";
import Sauces from "./pages/Sauces";
import Layout from "./components/Layout";
import LayoutHome from "./components/LayoutHome";
import Rules from "./pages/Rules";
import Services from "./pages/Services";
import Admin from "./pages/Admin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutHome />,
        children: [

            {
                index: true,
                element: <Home />
            },
            {
                path: "/",
                element: <Layout />,
                children: [

                    {
                        path: "/Закуски",
                        element: <Appetizer />
                    },
                    {
                        path: "/Кошик",
                        element: <Basket />
                    },
                    {
                        path: "/Пиво",
                        element: <Beer />
                    },
                    {
                        path: "/Піца/Вершкова-основа",
                        element: <CreamBase />
                    },
                    {
                        path: "/Піца/Томатна-основа",
                        element: <TomatoBase />
                    },
                    {
                        path: "/Основні-страви",
                        element: <MainCourse />
                    },
                    {
                        path: "/Піца",
                        element: <Pizza />
                    },
                    {
                        path: "/Салати",
                        element: <Salads />
                    },
                    {
                        path: "/Соуси",
                        element: <Sauces />
                    },
                    {
                        path: "/Додаткові-послуги",
                        element: <Services />
                    },
                    {
                        path: "/Наші-правила",
                        element: <Rules />
                    },
                    {
                        path: "/адмін",
                        element: <Admin />
                    },
                    ]
            },
            {
                path: "*",
                element: <Home />
            }
        ]
    }
])