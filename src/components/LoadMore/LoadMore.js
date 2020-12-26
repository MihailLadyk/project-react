import { Component } from "react";

export default class LoadMore extends Component {

    render() {
        return(
            <button type = 'button' onClick = {this.props.addContent}>Load More</button>
        )
    }
}