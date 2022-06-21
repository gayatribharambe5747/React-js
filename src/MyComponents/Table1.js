import React, { Component }  from 'react';
import getUsers from '../services/UserService';
class Table1 extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount()
    {
        getUsers().then((response) => {
            this.setState({users:response.data})
        });
    }
    render()
    {
        return(
            <div>
                <h1  className='text-center'>User List</h1>
                <table className='table table-striped' style={{border : "1px solid #000"}}>
                    <thead >
                        <tr>
                            <td style={{border : "1px solid #000"}}>User ID</td>
                            <td style={{border : "1px solid #000"}}>User First Name</td>
                            <td style={{border : "1px solid #000"}}>User Last Name</td>
                            <td style={{border : "1px solid #000"}}>User Email Id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td style={{border : "1px solid #000"}}>{user.id}</td>
                                    <td style={{border : "1px solid #000"}}>{user.firstName}</td>
                                    <td style={{border : "1px solid #000"}}>{user.lastname}</td>
                                    <td style={{border : "1px solid #000"}}>{user.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table1