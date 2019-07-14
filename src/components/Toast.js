import React from 'react';
import { store, stateMapper } from '../store/store'
import { connect } from 'react-redux'


const style = {

    placement: {
        position: 'relative',
        minHeight: '200px',
      

    },
    placementToast: {
        position: 'absolute',
        top: '10%',
        right: '9%',
        zIndex:'1',
        minWidth: '300px'


    },
    toastTitle:{
        color:'white'
    }

}

class ToastComponent extends React.Component {

    constructor(props) {
        super(props)

        this.closeToast = this.closeToast.bind(this);
        this.toast = React.createRef();

    }

    componentDidMount() {
        

    }
    shouldComponentUpdate(){
        if(this.props.showToast.isActive){
            let $ = window.$;
            let toast = this.toast.current;
            $(toast).toast('show')
            return true;
        }
        return false;
    }
    closeToast() {
        store.dispatch({
            type: "SHOW_TOAST_MESSAGE",
            payLoadData: {
                toastTitle: "",
                toastMessage: "",
                isActive: false,
                messageType:""
            }
        })
    }

    render() {
        let toastHeaderClassName;
        if(this.props.showToast.messageType === 'Success'){
            toastHeaderClassName = 'bg-success'
        }
        if(this.props.showToast.messageType === 'Error'){
            toastHeaderClassName = 'bg-danger'
        }
        if(this.props.showToast.messageType === ''){
            toastHeaderClassName = ''
        }
        return (

            <div ref={this.toast} className="toast " style={style.placementToast} data-autohide="false">
                <div className={`toast-header  ${toastHeaderClassName}`}>
                    <img src="" className="rounded mr-2" alt="" />
                    <strong className="mr-auto" style={style.toastTitle}>{this.props.showToast.toastTitle}</strong>

                    <button onClick={this.closeToast} type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    {/* {this.props.showToast.toastMessage} */}
                    <p>{this.props.showToast.toastMessage}</p>
                </div>
            </div>

        )
    }
}
let Toast = connect(stateMapper)(ToastComponent)
export default Toast;