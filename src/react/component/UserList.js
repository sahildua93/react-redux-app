import React, {Component} from 'react';
import {Link,BrowserRouter as Router, Route, Redirect } from "react-router-dom"


export default class UserList extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const users = this.props.props;

       return(

           <div>

               {
                   (users.loading)
                       ?
                       <div>LOADING DATA .......</div>
                       :
                       (users.users.length)
                           ?
                           <div>
                               <ul className="list-group" >{
                                   users.users.map(items => {
                                       return (<li className="list-group-item list-group-item-danger" key={items._id}>
                                           <Link to={`/userInfo/${items._id}`}><h4> {items.name} </h4></Link>
                                       </li>)
                                   })
                               }
                               </ul>
                           </div>
                           :
                           <div>No Users Present</div>
               }
           </div>

       )
    }
}



