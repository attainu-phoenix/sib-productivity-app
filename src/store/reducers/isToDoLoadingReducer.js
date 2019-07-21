
function isToDoLoadingReducer(isToDoLoading=false,action){
    if(action.type === 'FETCH_TODOS_BY_CATEGORY_ID'){
        isToDoLoading = true;
    }
    if(action.type === 'TODOS_LOADED'){
     
     isToDoLoading = false;
    }
    return isToDoLoading;
}

export default isToDoLoadingReducer