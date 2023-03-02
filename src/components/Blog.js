import React , {Component} from "react";
import axios from "axios";
class Blog extends Component{

    state = {
        users:[]
    }

    componentDidMount(){
        console.log(this.props);
        // axios.get("https://jsonplaceholder.typicode.com/users")
        axios.get("users.json")
        
        .then(res=>{
            this.setState({
            users:res.data
            })
        })
    }

    render(){
        const {users} = this.state;
        const userList = users.map(user =>{
            return (
                <div key={user.id}>
                    <div className="content">
                        <div>Name : {user.name}</div>
                        <div>User Name : {user.username}</div>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <h2>blog</h2>
                <p>this is home section</p>
                <div>
                    {userList}
                    {/* {this.state.users.map(user=><div key={user.id}>{user.name}</div>)} */}
                </div>
            </div>
        )
    }
}

export default Blog;