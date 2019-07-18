function isCategoryLoadingReducer(isCategoryLoading = false, action) {
    if(action.type === "FETCH_CATEGORES") {
        isCategoryLoading = true;
    }
    if(action.type === "CATERGORIES_LOADED") {
        isCategoryLoading = false;
    }
    return isCategoryLoading;
}
export default isCategoryLoadingReducer;