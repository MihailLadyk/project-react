import { Component } from "react";
import styles from "../ComponentItem/ComponentItem.module.css";
import noImg from "./notfound.png";

export default class ComponentItem extends Component {
  handleDelete = ({ target }) => {
    this.props.handleDelete(target.closest("li").id);
  };

  // makeEditAppVisible даёт id для взаимодействия editApp мэбэ глупо написал надо проверять

  makeEditAppVisible = ({ target }) => {
    this.props.makeEditAppVisible(target.closest("li").id);
  };

  render() {
    return (
      <li className={styles.item} id={this.props.id}>
        <img
          className={styles.image}
          width="175"
          height="175"
          src={this.props.image !== null ? this.props.image : noImg}
          onClick={this.makeEditAppVisible}
        ></img>
        <a className={styles.link} href={this.props.link}>
          <span>{this.props.title}</span>
        </a>
        <span className={styles.title}>{this.props.description}</span>
        <button
          className={styles.pressedButton}
          type="button"
          onClick={this.handleDelete}
        >
          delete this app
        </button>
      </li>
    );
  }
}
