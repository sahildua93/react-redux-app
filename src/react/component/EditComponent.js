import React from "react"

export class EditComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            email: '',
        }
    }

    componentWillMount() {
        console.log("-----------Component Mounted !!!-------------")
        this.setState({id: this.props.userId, name: this.props.userName, email: this.props.userEmail})
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value}, console.log("async setState------", this.state.email))
    }


    render() {

        return (
            <div>
                <table>
                    <thead>

                    <tr>
                        <th>ID</th>
                        <td><input type="text" className="col-xs-4 form-control" value={this.props.userId}
                                   disabled="true"/></td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td><input type="text" className="form-control" name="name" defaultValue={this.state.name}
                                   onChange={this.changeHandler.bind(this)}/></td>
                    </tr>
                    <tr>
                        <th>Email ID</th>
                        <td><input type="text" className="form-control" name="email" defaultValue={this.state.email}
                                   onChange={this.changeHandler.bind(this)}/></td>
                    </tr>


                    <input type="button" className="btn btn-success" value="Save"
                           onClick={() => this.props.updateuser(this.state)}/>
                    </thead>
                </table>
            </div>
        )
    }
}
