import { Component } from "react";
import styles from "../Searchbar/SearchBar.module.css";
import image from "../../images/search-icon.svg";

export default class SearchBar extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className={styles.form}>
        <input
          className={styles.search}
          onChange={this.props.onChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search App?"
        />

        <button className={styles.searchBTN} type="submit">
          <img src={image} alt="" />
        </button>
      </form>
    );
  }
}
