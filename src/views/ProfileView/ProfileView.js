import { Component } from "react";
import { fetchMyAppsByQuery, deleteApp } from "../../services/appsApi";
import styles from "../Dashboard/Dashboard.module.css";
import Modal from "../../components/Modal/Modal";
import ComponentList from "../../components/ComponentList/ComponentList";
import SearchBar from "../../components/Searchbar/SearchBar";
import LoadMore from "../../components/LoadMore/LoadMore";
import EditAppForm from "../../components/EditAppForm/EditAppForm";
import CreateAppForm from "../../components/CreateAppForm/CreateAppForm";
import { connect } from "react-redux";

class ProfileView extends Component {
  state = {
    arrApp: [],
    query: "",
    filteredQuery: "",
    page: 1,
    active: false,
    createAppVisible: false,
    editAppVisible: false,
    appId: null,
  };

  // при получение данных выводятся в суе

  componentDidMount() {
    this.requestApi();
  }

  // запрос ---- тут может быть проблема из-за чего при получение новых данных при изменение или добавление оно не перерендривается

  requestApi = () => {
    fetchMyAppsByQuery(this.state.query, this.state.page).then((res) =>
      this.setState((prevState) => ({
        arrApp: [...prevState.arrApp, ...res.apps],
      }))
    );
  };

  // просто сабмит

  onSubmit = (e) => {
    e.preventDefault();

    this.setState(
      {
        arrApp: [],
        query: this.state.filteredQuery,
        page: 1,
      },
      this.requestApi
    );
  };

  // чендж

  onChange = ({ target }) => {
    this.setState({
      filteredQuery: target.value,
    });
  };

  //делит работает видимо не так как нужно

  handleDelete = (value) => {
    const filter = this.state.arrApp.filter((el) => el.id !== Number(value));

    deleteApp(value);

    this.setState({
      arrApp: filter,
    });
  };

  // добавление конетнта

  addContent = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      this.requestApi
    );
  };

  // закрытие модалки

  closeModal = () => {
    this.setState({
      active: false,
      editAppVisible: false,
      createAppVisible: false,
    });
  };

  // часть структуры компонента EditApp

  makeEditAppVisible = (value) => {
    this.setState({
      editAppVisible: true,
      active: true,
      appId: Number(value),
    });
  };

  onCreate = (value) => {
    this.setState(
      (prevState) => ({
        arrApp: [value, ...prevState.arrApp],
      }),
      this.closeModal
    );
  };

  onSuccess = (value) => {
    this.closeModal();
    this.setState((prevState) => ({
      arrApp: prevState.arrApp.map((el) => (el.id === value.id ? value : el)),
    }));
  };

  render() {
    const { arrApp, active, createAppVisible, editAppVisible, appId } =
      this.state;

    return (
      <div>
        <h1>Profile</h1>
        <div className={styles.dashBoard}>
          <button
            className={styles.CreateAppButton}
            onClick={() =>
              this.setState({ createAppVisible: true, active: true })
            }
          >
            create app
          </button>
        </div>
        <SearchBar onChange={this.onChange} onSubmit={this.onSubmit} />
        {createAppVisible && (
          <Modal
            children={<CreateAppForm onCreate={this.onCreate} />}
            createAppVisible={createAppVisible}
            active={active}
            closeModal={this.closeModal}
          />
        )}
        {editAppVisible && (
          <Modal
            children={<EditAppForm onSuccess={this.onSuccess} appId={appId} />}
            editAppVisible={editAppVisible}
            active={active}
            closeModal={this.closeModal}
          />
        )}
        <ComponentList
          arrApp={arrApp}
          handleDelete={this.handleDelete}
          makeEditAppVisible={this.makeEditAppVisible}
          allowDelete={true}
          allowChange={true}
        />
        <LoadMore addContent={this.addContent} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ arrApp: state.arrApp });

export default connect(mapStateToProps)(ProfileView);
