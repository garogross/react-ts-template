import React, {FC} from 'react';
import {Helmet} from 'react-helmet';

interface HeadProps {
    keyword: string,
    ogKeyword?: string,
    title: string,
    ogTitle?: string,
    description: string,
    ogDescription?: string
}

const Head:FC<HeadProps> = ({keyword, ogKeyword, title, ogTitle, description, ogDescription}) => {
    return (
        <Helmet>

            <title>{title}</title>
            <meta property="og:title"
                  content={ogTitle} />

            <meta name="description"
                  content={description} />

            <meta property="og:description"
                  content={ogDescription} />

            <meta name="keyword"
                  content={keyword} />

            <meta property="og:Keyword"
                  content={ogKeyword} />
        </Helmet>
    );
}

 export default Head;
