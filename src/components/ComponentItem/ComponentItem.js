import { Component } from "react";

export default class ComponentItem extends Component {

    handleDelete = ({target}) => {
        this.props.handleDelete(target.closest("li").id)
    }

    render() {
        return(
            <li id = {this.props.id} key = {this.props.id}>
                <img src = {"https://goiteens-dashboard.herokuapp.com/" + this.props.image} onClick = {this.props.openModal}></img>
                <br/>
                <span>{this.props.title}</span>
                <br/>
                <span>{this.props.description}</span>
                <br/>
                <button type = 'button' onClick = {this.handleDelete}>delete this app</button>
            </li>
        )
    }
}