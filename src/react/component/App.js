import {connect} from 'react-redux';
import React, {Component} from 'react';
import {fetchUsers} from '../actions/async.actions'
import { BrowserRouter as Router, Link , Route , Redirect } from 'react-router-dom'
import UserList from './UserList'
import UserInfo from './UserInfo'
import Home from "./Home"


class App extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.dispatch(fetchUsers());
    }


    render() {
        console.log('------------------------',this.props);
        return (
            <Router>
                <div>

                    <Route exact path='/' component={ Home }/>
                    <Route path='/userlist' render={ props => <UserList {...props} props={this.props} /> }/>
                    <Route path='/userinfo/:id' component={ UserInfo }/>
                </div>

            </Router>
    )
    }
}

const Appcontainer = connect(state => state)(App)
export default Appcontainer;