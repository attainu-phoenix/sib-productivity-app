const HEADERS = {
      "X-Parse-Application-Id": "checklist",
      "Content-Type": "application/json"           
                 }
function fetchtododata(store,action){
      let TodoId =action.payLoadData;
      let params = encodeURI(`where={"category_id":"${TodoId}"}`);
      let url = `http://localhost:1337/parse/classes/todos?${params}`;
      fetch(url, {
        method:"get",
        headers:HEADERS
                  })
      .then(data => data.json())
      .then(json => {
            store.dispatch({
                type:"DISPLAY_TODO_DATA",
                toDoData:json
                            })
                     })
      .catch(err => console.log(err));
                        }
export {fetchtododata};                       
