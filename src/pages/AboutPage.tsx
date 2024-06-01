import AboutHeader from '../components/About/AboutHeader/AboutHeader';

import {FC, lazy, Suspense} from "react";
import Head from '../components/global/Head/Head'

const AboutMain = lazy(() => import('../components/About/AboutMain/AboutMain'));


const AboutPage:FC = () => {
    return (
        <>

            <Head
                keyword={'web and mobile development company, full-cycle development, website development, web development,mobile development, scrum masters, Agile Scrum for web development, Agile software development, quality control and testing, website security, DevOps services, website launch and support'}
                ogKeyword={'web and mobile development company, full-cycle development, website development, web development,mobile development, scrum masters, Agile Scrum for web development, Agile software development, quality control and testing, website security, DevOps services, website launch and support'}

                title={'Full-service web and mobile app development company | KHG tec'}
                ogTitle={'Full-service web and mobile app development company | KHG tec'}

                description={'As a beginning-to-end software development provider, we follow Agile Methodology to deliver high-quality, secure websites and apps.'}
                ogDescription={'As a beginning-to-end software development provider, we follow Agile Methodology to deliver high-quality, secure websites and apps.'}
            />

            <AboutHeader/>
            <Suspense fallback={null}>
                <AboutMain/>
            </Suspense>
        </>
    );
}

export default AboutPage;