/**
 * Created by sahil-dua on 27/4/17.
 */


import React from "react"
import {deleteUsers, editUsers} from '../actions/async.actions'
import {connect} from 'react-redux'
import {EditComponent} from './EditComponent'
//import {divStyle} from '../../css/style'
import '../../css/style.css'



 class UserInfo extends React.Component{

    constructor(props){
        super(props)

        this.state = {

            edit: false,
            name:'',
            email:'',

        }
    }

    deleteUser =() => {
        this.props.dispatch(deleteUsers(this.props.match.params.id))
        this.props.history.push('/')
    }


     editUserState =(items) => {
        this.setState({
                       edit:true,
                       name:items.name,
                       email:items.email
                    })

     }
     updateUser = (userData) => {
        this.props.dispatch(editUsers(userData))
          this.props.history.push('/userList')
     }

    render(){

        const params = this.props.match.params.id;
        const usersList = this.props.users
        return(
            <div>
                {

                    (this.state.edit)
                    ?
                    <EditComponent userName={this.state.name} userEmail={this.state.email} userId={params} updateuser={this.updateUser}/>
                    :
                    usersList.map((items) => {
                        if (items._id==params)
                            return <div>
                                <h4>User Details</h4>
                                <table className="table table-bordered">
                                   <thead>
                                       <tr className="success">
                                           <th>ID</th>
                                            <td>{items._id}</td>
                                       </tr>
                                       <tr className="danger">
                                            <th>Name</th>
                                            <td>{items.name}</td>
                                       </tr>
                                       <tr className="info">
                                            <th>Email ID</th>
                                            <td>{items.email}</td>
                                       </tr>
                                   </thead>
                                </table>
                                <input type="submit" value="DELETE"  className="btn btn-danger buttonsuccess1" onClick={this.deleteUser.bind(this)} />
                                <input type="submit" value="EDIT"  className="btn btn-warning buttonsuccess2"onClick={this.editUserState.bind(this,items)}/>
                            </div>

                    })
                }
            </div>
        )
    }
}

const UserInfocontainer = connect(state => state)(UserInfo)
export default UserInfocontainer;


