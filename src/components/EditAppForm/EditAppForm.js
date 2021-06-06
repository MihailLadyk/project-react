import { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import styles from "../CreateAppForm/CreateAppForm.module.css";
import { fetchAppDetails, editApp } from "../../services/appsApi";
import placeholder from "../../images/FormPlaceHolder.jpg";

export default class EditAppForm extends Component {
  static propTypes = {
    appId: PropTypes.number.isRequired,
    onSuccess: PropTypes.func.isRequired,
  };

  state = {
    title: "",
    link: "",
    description: "",
    image: null,
    loading: false,
  };

  componentDidMount() {
    fetchAppDetails(this.props.appId).then((res) =>
      this.setState({
        title: res.title,
        description: res.description,
        link: res.link,
        image: res.image,
      })
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { title, image, link, description } = this.state;

    const obj = {
      title: title,
      image: image,
      link: link,
      description: description,
    };

    this.setState({
      loading: true,
    });

    editApp(this.props.appId, obj)
      .then((res) => this.props.onSuccess(res))
      .catch((error) => {
        toast.error(error.message);
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    const { title, image, link, description, loading } = this.state;
    const imageUrl = image ? image : placeholder;

    return (
      <form onSubmit={this.handleFormSubmit} className={styles.container}>
        <div className={styles.col1}>
          <img alt="preview" src={imageUrl} className={styles.preview} />
        </div>
        <div className={styles.col2}>
          <h2 className={styles.title}>Редактировать</h2>
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
            Сохранить
          </button>
        </div>
      </form>
    );
  }
}
