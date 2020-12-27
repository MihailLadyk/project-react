import { Component } from "react";
import styles from '../Searchbar/SearchBar.module.css'

export default class SearchBar extends Component {

    render() {
        return(
            <form onSubmit = {this.props.onSubmit}>
                <input
                className = {styles.search}
                onChange = {this.props.onChange}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search App?"/>

                <button className = {styles.searchBTN} type="submit"></button>
            </form>
        )
    }
}