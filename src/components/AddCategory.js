import React from 'react';
import UniqueId from 'react-html-id';
import ListComponent from './ListCategory.js';
import './list.css';



class AddCategoryComponent extends React.Component {

    constructor(props){
        super(props);
        // UniqueId.enableUniqueIds(this);
        this.categoryID = 0;
       this.state = {
            categories: [],
            id:"",
           categoryName:""    
        };
        
    
    }

    categoryName = (event) => {
        this.setState ({
            categoryName: event.target.value
        });
    }

    addCategory = () => {
        this.id = this.categoryID + 1;
        const copyCategories=Object.assign([], this.state.categories);
        copyCategories.push({
            id: this.categoryID,
                name: this.state.categoryName
        })

        this.setState({
            categories: copyCategories
        })
        
    }

    
   


    


    deleteCategory = (index, e) => {
        const categories= Object.assign([], this.state.categories);
        categories.splice(index, 1);
        this.setState({
            categories: categories
        })
    }
    

    render() {      
        return (
            <div className="card">
                <div className="card-body">

                <h6>Add Category here</h6><p></p>
                <form>
                    
                        <div className="form-row">
                            <div className="col-6">
                <input type="text" className="form-control" onChange={this.categoryName}></input>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="col">
                <button type="button" onClick={this.addCategory} className="btn btn-secondary">
                    <span className="oi oi-plus"></span>
                </button>
                </div>
                </div>
                
                
                </form>
                    
                <ul className="list-group list-group-flush">
                    {
                        this.state.categories.map((category, index)=>{

                           return(
                               <ListComponent 
                               key= {category.id}
                             id= {category.id}
                              name= {category.name}
                              delete= {this.deleteCategory} 
                               
                               />
                           );
                           
                        })

                           
                
            } 
                </ul>
                </div>
            </div> 
                );
                
        }                   
    }    
            export default AddCategoryComponent;
