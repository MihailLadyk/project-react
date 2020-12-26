import { Component } from "react";
import ComponentItem from '../../components/ComponentItem/ComponentItem'

export default class ComponentList extends Component {

    render() {
        const { arrApp } = this.props
        return(
        <ul>
          {arrApp.map(el => <ComponentItem id = {el.id} image = {el.image} title = {el.title} description = {el.description} handleDelete = {this.props.handleDelete} openModal = {this.props.openModal}/>)}
        </ul>
        )   
    }
}