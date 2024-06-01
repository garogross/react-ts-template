import { animated, useTransition } from 'react-spring'
import {FC, ReactNode} from "react";

export enum TransitionStyleTypes {
    opacity = "opacity",
    height = "height",
    rotateX = "rotateX",
    right = "right",
    translateX = "translateX",
}

interface TransitionProviderProps {
    style: TransitionStyleTypes,
    inProp: boolean,
    className?: string,
    duration?: number,
    height?: number,
    children: ReactNode
}

const TransitionProvider:FC<TransitionProviderProps> = ({style,inProp,className,duration,height,children}) => {
    const transDuration = duration ? duration : 300;


    const styles = {
        [TransitionStyleTypes.opacity]: {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        },
        [TransitionStyleTypes.height]: {
            from: { maxHeight: '0px', },
            enter: { maxHeight: height || '165px', },
            leave: { maxHeight: '0px', },
        },
        [TransitionStyleTypes.rotateX]: {
            from: { transform: 'rotateX(90deg)', },
            enter: { transform: 'rotateX(0deg)', },
            leave: { transform: 'rotateX(90deg)' },
        },

        [TransitionStyleTypes.right]: {
            from: {right: '-630px'},
            enter: {right: '0'},
            leave: {right: '-630px'},
        },
        [TransitionStyleTypes.translateX]: {
            from: {translateX: '100%'},
            enter: {translateX: '0%'},
            leave: {translateX: '100%'},
        }
    }

    const transition = useTransition(inProp, {...styles[style],config: {duration: transDuration}})


    return (
        <>
            {transition((style, item) => item ?
                <animated.div
                    style={style}
                    className={className ? className : ''}
                >{children}</animated.div> : '')}
        </>
    )
}

export default TransitionProvider