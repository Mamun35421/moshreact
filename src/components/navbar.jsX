import React, { Component } from 'react'



    const Navbar = () =>{
return (
            <Nav className="navbar navbar-light bg-light">
                <a className=" navbar-brand" href="HHH">
                    Navbar{}
                    <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounters}
                    </span>
                    </a>

                </Nav>
        );
    };
    
   export default Navbar;