import React from 'react'
import { Route} from 'react-router-dom'
import Admin from '../ui/admin/Admin'
import Customer from '../ui/customer/Customer'




export const Main = () => (

    <div>
        <Route exact path={"/"} component={Customer}/>
        <Route exact path={"/admin"} component={Admin}/>
    </div>

)