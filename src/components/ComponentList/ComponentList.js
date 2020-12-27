import { Component } from "react";
import ComponentItem from '../../components/ComponentItem/ComponentItem'
import styles from '../ComponentList/ComponentList.module.css'

export default class ComponentList extends Component {

    render() {
        return(
        <ul className = {styles.list}>
          {this.props.arrApp.map(el => <ComponentItem key = {el.id} id = {el.id} image = {el.image} title = {el.title} description = {el.description} link = {el.link} handleDelete = {this.props.handleDelete} makeEditAppVisible = {this.props.makeEditAppVisible}/>)}
        </ul>
        )   
    }
}