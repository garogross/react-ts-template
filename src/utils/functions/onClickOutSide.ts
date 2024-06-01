import {RefObject} from "react";

type funcType = (ref: RefObject<HTMLElement>[], onCloseState: () => void, state: boolean) => void

export const onClickOutSide: funcType = (ref, onCloseState, state) => {
    const checkIfClickedOutside = (e: MouseEvent) => {
        const el = e.target as HTMLElement
        const isRef = ref.every(value => value.current
            && !value.current.contains(el)
        )
        if (state && isRef) {
            onCloseState()
        }
    }
    document.addEventListener('click', checkIfClickedOutside)

    return () => {
        document.removeEventListener('click', checkIfClickedOutside)
    }
}