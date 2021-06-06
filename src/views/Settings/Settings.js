import React, { Component } from "react";
import styles from "./Settings.module.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import "../../index.css";
import { gradients, font, classEdit, body, html } from "../../services/styles";

export default class Settings extends Component {
  state = {
    size: localStorage.getItem('size'),
    open: false,
    value: "lato",
  };

  componentDidUpdate(prevProps, prevState) {
    if(this.state.size !== Number(localStorage.getItem('size'))) {
      localStorage.setItem('size', this.state.size)
    }
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    console.log(localStorage.getItem('size'))
    return (
      <div>
        <h1>Settings:</h1>
        <br />
        <div className={styles.line}></div>
        <br />
        <h1>Themes:</h1>
        <br/>
        <div className={styles.container}>
          {gradients.map((el) => {
            return (
              <button
                className={`${styles.btn} ${el.key}`}
                onClick={({ target }) => {
                  classEdit(gradients, html, target.value);
                }}
                value={el.key}
              />
            );
          })}
        </div>
        <br />
        <h1>Font:</h1>
        <br />
        <FormControl className={styles.forma}>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            onChange={(e) => {
              this.setState({
                value: e.target.value,
              });
              classEdit(font, body, e.target.value);
            }}
            value={this.state.value}
          >
            {font.map((el) => (
              <MenuItem value={el.key}>{el.key}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <h1>Size control:</h1>
        <br />
        <div className={styles.wrapper}>
          <input
          className = {styles.range}
            onChange={({ target }) => {
              this.setState({
                size: Number(target.value),
              });

              body.style.setProperty("--font-size", `${this.state.size}px`);
            }}
            type="range"
            min="12"
            max="36"
            value={this.state.size}
          />
          <h1>{this.state.size}</h1>
        </div>
      </div>
    );
  }
}
