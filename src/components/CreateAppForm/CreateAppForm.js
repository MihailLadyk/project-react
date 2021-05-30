import { Component } from "react";
import placeholder from "../../components/images/FormPlaceHolder.jpg";
import styles from "./CreateAppForm.module.css";
import { toast } from "react-toastify";
import { createApp } from "../../services/appsApi";

export default class CreateAppForm extends Component {
  state = {
    image: "",
    title: "",
    link: "",
    description: "",
    loading: false,
    errors: {
      title: null,
      link: null,
      description: null,
    },
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCreateApp = (e) => {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    const { image, title, link, description } = this.state;

    const appData = {
      image,
      title,
      link,
      description,
    };
    createApp(appData)
      .then((res) => this.props.onCreate(res))
      .catch((error) => {
        toast.error(error.message);
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    const { title, link, description, loading, image } = this.state;

    const imageUrl = image || placeholder;

    return (
      <form onSubmit={this.handleCreateApp} className={styles.container}>
        <div className={styles.col1}>
          <img
            width="300"
            height="300"
            alt="preview"
            src={imageUrl}
            className={styles.preview}
          />
        </div>
        <div className={styles.col2}>
          <h2 className={styles.title}>Добавить ссылку</h2>
          <div className={styles.formItem}>
            <label className={styles.label}>
              <span className={styles.labelText}>Название</span>
              <input
                className={styles.input}
                type="text"
                name="title"
                onChange={this.handleChange}
                value={title}
                placeholder="Title"
                required
              />
            </label>
          </div>

          <div className={styles.formItem}>
            <label className={styles.label}>
              <span className={styles.labelText}>Ссылка</span>
              <input
                className={styles.input}
                type="text"
                name="link"
                onChange={this.handleChange}
                value={link}
                placeholder="Link"
                required
              />
            </label>
          </div>
          <div className={styles.formItem}>
            <label className={styles.label}>
              <span className={styles.labelText}>Фотогрфия</span>
              <input
                className={styles.input}
                type="url"
                name="image"
                onChange={this.handleChange}
                value={image}
                placeholder="image"
                required
              />
            </label>
          </div>

          <div className={styles.formItem}>
            <label className={styles.label}>
              <span className={styles.labelText}>Описание</span>
              <textarea
                className={styles.input}
                name="description"
                onChange={this.handleChange}
                value={description}
                placeholder="description"
                required
              ></textarea>
            </label>
          </div>

          <button className={styles.submitBTN} disabled={loading} type="submit">
            Создать
          </button>
        </div>
      </form>
    );
  }
}
