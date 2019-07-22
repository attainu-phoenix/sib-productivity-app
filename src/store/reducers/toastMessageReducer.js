// import {store} from '../store.js'


function showToastReducer(toastMessage = {}, action) {

    if (action.type === 'SHOW_TOAST_MESSAGE') {

        let toastMessageCopy = Object.assign({}, toastMessage);
        toastMessageCopy = {
            toastTitle: action.payLoadData.toastTitle,
            toastMessage: action.payLoadData.toastMessage,
            isActive: action.payLoadData.isActive,
            messageType: action.payLoadData.messageType
        }
      
        return toastMessageCopy;
    }

    return toastMessage;
}

export default showToastReducer;