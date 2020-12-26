import { Component } from "react";
import { fetchAppsByQuery, deleteApp } from '../../services/appsApi';
import CreateAppForm from '../../components/CreateAppForm/CreateAppForm';
import Modal from '../../components/Modal/Modal'
import ComponentList from '../../components/ComponentList/ComponentList';
import SearchBar from '../../components/Searchbar/SearchBar';
import LoadMore from '../../components/LoadMore/LoadMore';

export default class Dashboard extends Component {
  state = {
    arrApp: [],
    query: 'car',
    filteredQuery: '',
    page: 1,
    active: false
  }

  componentDidMount() {
    this.requestApi()
  }

  requestApi = () => {
    fetchAppsByQuery(this.state.query, this.state.page)
    .then((res) => this.setState((prevState) => ({
      arrApp: [...prevState.arrApp, ...res.rows]
    })))
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.setState({
      arrApp: [],
      query: this.state.filteredQuery,
      page: 1
    }, this.requestApi)
  }

  onChange = ({target}) => {
    this.setState({
      filteredQuery: target.value
    })
  }

  handleDelete = (value) => {
    const filter = this.state.arrApp.filter(el => el.id !== Number(value))
    
    deleteApp(value)

    this.setState({
      arrApp: filter
    })
  }

  addContent = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }), this.requestApi)
  }

  openModal = () => {
    this.setState({
      active: true
    })
  }

  closeModal = () => {
    this.setState({
      active: false
    })
  }

  render() {
    const {arrApp, active} = this.state
    return (
      <div>
        <h1>Dashboard</h1>
        <SearchBar onChange = {this.onChange} onSubmit = {this.onSubmit}/>
        <br/>
        <Modal active = {active} closeModal = {this.closeModal}/>
        <br/>
        <ComponentList arrApp = {arrApp} handleDelete = {this.handleDelete} openModal = {this.openModal}/>
        <br/>
        <LoadMore addContent = {this.addContent}/>
      </div>
    )
  }
}