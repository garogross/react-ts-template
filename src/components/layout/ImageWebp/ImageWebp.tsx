import React, {FC} from 'react';

interface ImageWebpProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    srcSet: string;
    pictureClass?: string;
    forwardedRef?: React.Ref<HTMLImageElement>;
    alt: string;
}

const ImageWebp: FC<ImageWebpProps> = ({srcSet,pictureClass,forwardedRef,alt,...properties}) =>  {
    return (
        <picture className={pictureClass ? pictureClass : ''}>
            <source srcSet={srcSet} type="image/webp"/>
            <img
                alt={alt}
                ref={forwardedRef}
                {...properties}
            />
        </picture>
    );
}

export default ImageWebp;