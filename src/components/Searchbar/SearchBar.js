import { Component } from "react";

export default class SearchBar extends Component {

    render() {
        return(
            <form onSubmit = {this.props.onSubmit}>
                <input
                onChange = {this.props.onChange}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search App?"/>

                <button type="submit">
                    <span>Search</span>
                </button>
            </form>
        )
    }
}