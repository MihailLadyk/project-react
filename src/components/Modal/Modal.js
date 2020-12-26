import { Component } from 'react';
import '../../components/Modal/Modal.css';
import EditAppForm from '../../components/EditAppForm/EditAppForm'

export default class Modal extends Component {
    render() {
        return(
            <div className={this.props.active ? 'Overlay active' : 'Overlay'} onClick = {this.props.closeModal}>
                <div className="Modal" onClick = {(e) => {e.stopPropagation()}}>
                    <EditAppForm/>
                </div>
            </div>
        )
    }
}