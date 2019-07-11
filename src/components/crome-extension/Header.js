import React from 'react'
import '../header.css'

class Header extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light head-color">
                    <a className="navbar-brand text-white" href="/#">CheckList</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

            
                </nav>


            </div>
        )
    }
}
export default Header;