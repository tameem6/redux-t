import React from 'react';

class PostForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state= {
            title: '',
            body: ''
        };
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    render() {
        return (
        <div>
            <h1>Post Form</h1>
            <form onSubmit= {this.onSubmit}>
                <div>
                    <label>Title</label><br />
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                </div>
                <br />
                <div>
                    <label>Body</label><br />
                    <textarea name="body" onChange={this.onChange} value={this.state.body} />
                </div>
                <br />
                <button type="submit">SUbmit</button>
            </form>
        </div>
  );
    }
}

export default PostForm