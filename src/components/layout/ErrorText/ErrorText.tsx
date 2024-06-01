import React, {FC} from 'react';

import styles from './ErrorText.module.scss'

interface ErrorTextProps {
    errorProp: string | undefined,
    className?: string
}

const ErrorText:FC<ErrorTextProps> = ({errorProp,className}) =>  {
    return (
        <>
                <p className={`${styles["errorText"]} ${errorProp ? styles["errorText_visible"] : ''} ${className ? className : ''}`}>{errorProp}</p>
        </>
    );
}

export default ErrorText;