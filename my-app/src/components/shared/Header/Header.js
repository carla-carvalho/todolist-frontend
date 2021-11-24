import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <nav className="navbar  navbar-expand-lg navbar-light bg-secondary w-100">
      <div className="container">
        <Link className="navbar-brand" to="/">Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <Link className="navbar-brand" to="/cadastro">Cadastrar tarefa
        </Link>
        </div>
      </div>
    </nav>
    )
}


export default Header;