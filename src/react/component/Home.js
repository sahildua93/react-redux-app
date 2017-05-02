/**
 * Created by sahil-dua on 27/4/17.
 */

import React, { Component } from"react"
import {Link} from "react-router-dom"



export default class Home extends Component{

    render(){

        return(
            <div>
                <div className="mainDiv">
                <Link to="/userList"><input className="btn btn-primary mainDiv" type="button" value="userlist"/></Link>

                </div>
            </div>

        )
    }
}