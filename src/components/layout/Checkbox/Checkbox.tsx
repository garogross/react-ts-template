import React, {ChangeEvent, FC, ReactNode} from 'react';
import styles from "./Checkbox.module.scss";
import {useSelector} from "react-redux";

interface CheckboxProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string,
    className?: string,
    name: string,
    children: string | ReactNode,
    checked?: boolean,
    disableLabel?: boolean
}

const Checkbox: FC<CheckboxProps> = ({onChange,value,className,name,children,checked,disableLabel}) =>  {
    return (
        <div className={className ? className : ''}>
            <input
                onChange={e => onChange(e)}
                value={value}
                id={value + name + 'Checkbox'}
                type="checkbox"
                checked={checked}
                className={styles['checkbox__input']}/>
            <label htmlFor={!disableLabel ? value + name + 'Checkbox' : undefined}
                   className={`${styles['checkbox__label']}`}>{children}</label>
        </div>
    );
}

export default Checkbox;