// import {store} from '../store.js'


function showAuthToastReducer(showAuthToast = {}, action) {

    if (action.type === 'SHOW_AUTH_TOAST_MESSAGE') {

        let showAuthtoastMessageCopy = Object.assign({}, showAuthToast);
        showAuthtoastMessageCopy = {
            toastTitle: action.payLoadData.toastTitle,
            toastMessage: action.payLoadData.toastMessage,
            isActive: action.payLoadData.isActive,
            messageType: action.payLoadData.messageType
        }
      
        return showAuthtoastMessageCopy;
    }

    return showAuthToast;
}

export default showAuthToastReducer;