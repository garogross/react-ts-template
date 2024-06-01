import {Route, Routes} from 'react-router-dom';
import Head from '../global/Head/Head'

import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";

import {
    aboutPagePath,
    homePagePath,
} from "../../router/path";
import AppRouter from "../../router/AppRouter";

// const Footer = lazy(() => import("../global/Footer/Footer"));

function App() {

    return (
        <>
            {/*<Head*/}
            {/*    keyword={'web technologies, web development'}*/}

            {/*    title={'Custom-built Websites and Mobile/Desktop Applications | KHG tec'}*/}
            {/*    ogTitle={'Custom-built Websites and Mobile/Desktop Applications | KHG tec'}*/}

            {/*    description={'We provide convenient UX/UI design, secure software development, effective SEO strategies, reliable technical support, and more. '}*/}
            {/*    ogDescription={'We provide convenient UX/UI design, secure software development, effective SEO strategies, reliable technical support, and more. '}*/}
            {/*/>*/}
            <AppRouter/>
            {/*<Suspense fallback={null}>*/}
            {/*    <Footer/>*/}
            {/*</Suspense>*/}
        </>
    );
}

export default App;