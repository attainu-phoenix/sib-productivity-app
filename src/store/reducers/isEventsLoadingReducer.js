

function isEventLoadingReducer(isEventLoading = false,action){
    
    if(action.type === 'FETCH_EVENTS'){
        isEventLoading = true;
    }
    if(action.type === 'EVENTS_LOADED'){
        isEventLoading = false;
    }
    
    return isEventLoading;
}

export default isEventLoadingReducer;