import React from 'react'


const style = {
    headerColor: {
        backgroundColor: '#ca3e47'
    },

    anchorTag: {
        color: 'white'
    },

    profileContent: {
        display: 'none'
    },

    searchBar: {
        borderRadius: '2px 0px 0px 2px'
    },

    searchButton: {
        borderRadius: '0px 2px 2px 0px'
    },
    avtar:{
        marginBottom:'100%'
    }




};

class Header extends React.Component {


    constructor(props) {
        super(props)

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        console.log("search button clicked ...")
    }


    render() {

        return (

            <nav className="navbar fixed-top navbar-expand-lg navbar-light " style={style.headerColor}>
                <a className="navbar-brand" href="#/" style={style.anchorTag}>CheckList</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">

                    <div className="navbar-nav ">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-light" type="button" id="button-addon2">
                                        <span className="oi oi-magnifying-glass"></span>
                                    </button>
                                </div>
                            </div>
                        <a className="nav-item nav-link" href="/#" style={style.anchorTag}>SignUp <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/#" style={style.anchorTag}>LogIn</a>
                        <a className="navbar brand" href="/#" style={style.anchorTag}>
                            <span className="oi oi-person"
                                data-container="body"
                                data-toggle="popover"
                                data-placement="bottom"
                                title="Profile"
                                data-content=""
                                style={style.avtar}
                                >
                                <div id="popover_content_wrapper" style={style.profileContent}>
                                    <div>

                                        <a className="nav-item nav-link" href="/#">Logout</a>
                                        <a className="nav-item nav-link" href="/#">Setting</a>
                                    </div>
                                </div>
                            </span>
                        </a>

                    </div>
                </div>
            </nav>

        )
    }
}

export default Header;