import {createPortal} from "react-dom";
import {FC, ReactChildren, ReactNode} from "react";

interface NewPortalProvider {
    id?: string,
    children: ReactNode
}

const NewPortalProvider:FC<NewPortalProvider> = (props) => {
    const portalId = props.id ? props.id : 'modals'
    return (
        createPortal(props.children, document.getElementById(portalId) as Element)
    )
}

export default NewPortalProvider