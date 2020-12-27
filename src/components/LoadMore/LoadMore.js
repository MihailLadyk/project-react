import { Component } from "react";
import styles from '../LoadMore/LoadMore.module.css'

export default class LoadMore extends Component {

    render() {
        return(
            <div className = {styles.container}>
                <button className = {styles.loadMoreButton} type = 'button' onClick = {this.props.addContent}>Load More</button>
            </div>
        )
    }
}