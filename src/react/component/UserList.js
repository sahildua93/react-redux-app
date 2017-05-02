import React, {Component} from 'react';
import  { Pagination } from 'react-bootstrap'
import {Link,BrowserRouter as Router, Route, Redirect } from "react-router-dom"

export default class UserList extends Component {

    constructor(props){
        super(props)
        this.state ={
            matchValue:'',
        }
    }
    matchingValue = (event) => {
        console.log(event.target.value)
        //this.setState({matchValue : event.target.value})
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
                               <div className="form-group">
                                   <label for="inputsm">SEARCH </label>
                                   <input className="form-control input-sm" onChange={this.matchingValue} id="inputsm" type="text" />
                               </div>
                               <ul className="list-group">{
                                   users.users.map(items => {
                                       console.log(items.name)
                                       return (
                                            <li className="list-group-item list-group-item-danger" key={items._id}>
                                                   <Link to={`/userInfo/${items._id}`}><h4>
                                                       {items.name}
                                                       </h4>
                                                   </Link>
                                            </li>
                                           )
                                   })
                               }
                               </ul>

                               <Pagination className="users-pagination pull-right" bsSize="medium"
                                    maxButtons={10} first last next prev boundaryLinks
                                    items={pages} activePage={current_page} onSelect={this.changePage} />
                           </div>
                           :
                           <div>No Users Present</div>
               }
           </div>

       )
    }
}



