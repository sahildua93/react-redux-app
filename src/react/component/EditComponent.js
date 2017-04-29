
import React from "react"
import {connect} from 'react-redux'

export class EditComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id:'',
            name:'',
            email:'',
        }
    }
    componentWillMount(){
        console.log("-----------Component Mounted !!!-------------")
        this.setState({id:this.props.userId, name:this.props.userName, email:this.props.userEmail})
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value},console.log("async setState------",this.state.email))
    }




    render() {

        return (
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email ID</th>
                    </tr>
                    <tr>
                        <td>{this.props.userId}</td>
                        <td><input type="text" name="name" defaultValue={this.state.name} onChange={this.changeHandler.bind(this)}/></td>
                        <td><input type="text" name="email" defaultValue={this.state.email} onChange={this.changeHandler.bind(this)}/></td>
                        <td><input type="button" value="Save" onClick={() => this.props.updateuser(this.state)}/></td>
                    </tr>
                </table>
            </div>
        )
    }
}
