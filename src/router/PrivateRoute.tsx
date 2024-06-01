import React, {FC, ReactElement} from 'react'
import { Navigate } from 'react-router-dom';
import {lsProps} from "../utils/lsProps";
import {getLSItem} from "../utils/functions/localStorage";

interface PrivateRouteProps {
   element: ReactElement<any, any>,
   noAuth?: boolean,
   roles?: string[]
}

const PrivateRoute:FC<PrivateRouteProps> = ({element,noAuth,roles}) => {
   const token = getLSItem(lsProps.token)
   const user = getLSItem<{role: string}>(lsProps.user,true) // set generic User type/interface
   const isAuthenticated = !token || !user
   const statement = noAuth ?
       !isAuthenticated :
       isAuthenticated  || roles && !roles.includes(user.role)
   let navigateTo = "/" // loginPagePath

   if(!isAuthenticated) {
      navigateTo =  "/"// mainPagePath
   } else {
      if(noAuth) {
         navigateTo = "/" // mainPagePath
      }
   }

   return (
       statement ? <Navigate to={navigateTo} replace={true} /> : element
   )
}

export default PrivateRoute