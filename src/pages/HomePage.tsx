import React, {Suspense} from 'react';
import HomeMain from "../components/HomePage/HomeMain/HomeMain";

function HomePage() {

    return (
        <>
            <Suspense fallback={null}>
                <HomeMain/>
            </Suspense>

        </>
    );
}

export default HomePage;