import React, {FC, memo, ReactNode} from 'react';

import styles from "./MainBtn.module.scss"

interface MainBtnProps extends React.ButtonHTMLAttributes<any> {
    className: string,
    children: ReactNode
}

const MainBtn: FC<MainBtnProps> = memo(({className, children, ...properties}) => {
    return (
        <button
            className={`${styles['mainBtn']} ${className ? className : ''}`}
            {...properties}
        >{children}</button>
    );
})

export default MainBtn;