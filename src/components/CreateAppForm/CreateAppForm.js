import { Component } from "react";
import placeholder from "../../components/images/FormPlaceHolder.jpg";
import styles from "./CreateAppForm.module.css";
import { toast } from "react-toastify";
import { createApp } from "../../services/appsApi";

export default class CreateAppForm extends Component {
  state = {
    image: null,
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

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCreateApp = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("link", this.state.link);
    formData.append("image", this.state.image);

    this.setState({
      loading: true,
    });

    createApp(formData)
      .then((res) => this.props.onCreate(res))
      .catch((error) => {
        toast.error(error.message);
        this.setState({
          loading: false,
        });
      });
    // .finally(() => this.setState({
    //   loading: false
    // }))
  };

  render() {
    const { title, errors, link, description, loading, image } = this.state;

    const imageUrl = image ? URL.createObjectURL(image) : placeholder;

    return (
      <form onSubmit={this.handleCreateApp} className={styles.container}>
        <div className={styles.col1}>
          <img alt="preview" src={imageUrl} className={styles.preview} />
          <input className={styles.imageInput}
            type="file"
            accept="image/*"
            onChange={this.handleImageChange}
            required
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
