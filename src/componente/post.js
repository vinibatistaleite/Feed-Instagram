import React, { Component } from 'react';
import '../style.css';
import Comentario from './Comentario';
class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            newCommentText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        });

        this.setState({ newCommentText: '' })

        e.preventDefault();
    }

    handleTextChange(e) {
        this.setState({ newCommentText: e.target.value })
    }

    render() {
        return (
            <div className="box">
                <h2>
                    {this.props.title}
                </h2>
                <img className="imagem" src={this.props.src} />
                <p>
                    {this.props.text}
                </p>
                <form onSubmit={this.handleSubmit}>
                    <input
                     placeholder="Comente aqui!"
                      value={this.state.newCommentText} 
                      onChange={this.handleTextChange}
                    />
                    <button type="submit" >Enviar</button>
                </form>
                {this.state.comments.map(
                    (comment, index)=> {return (
                    <Comentario key={index} text={comment.text} />)
                })}
            </div>
        );
    }
}

export default Post;