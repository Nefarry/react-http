import React, { Component } from 'react'
import axios from 'axios'

class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg: ''
      }
    }

    clickHandler = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState({
                posts: response.data
            })
        })
        .catch((error) => {
            this.setState({
                errorMsg: 'Unavaible to load data'
            })
        })
    }
    
    render() {
        const {posts, errorMsg} = this.state
        return (
        <div>
            JSON Fake API Data List
            <button onClick={this.clickHandler}>Generate List</button>
            {
                posts.length ?
                posts.map((post) => <div key={post.id}>{post.title}</div>) : null
            }
            {
                errorMsg ? <div>{errorMsg}</div> : ''
            }
        </div>
        )
    }
}

export default GetList
