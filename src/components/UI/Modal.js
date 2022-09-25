import { Fragment } from 'react';
import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';

const Backdrop =(props)=>{
    return <div onClick={props.showCartHandler} className={classes.backdrop}></div>
}
const Overlay =(props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal =(props)=>{
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop showCartHandler={props.showCartHandler}/>,document.getElementById('overlays'))}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('overlays'))}
    </Fragment>

}

export default Modal;