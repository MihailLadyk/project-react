import { Component } from 'react';
import '../../components/Modal/Modal.css';

export default class Modal extends Component {
    render() {
        console.log(this.props)
        return(
            <div className={this.props.active ? 'Overlay active' : 'Overlay'} onClick = {this.props.closeModal}>
                <div className="Modal" onClick = {(e) => {e.stopPropagation()}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}