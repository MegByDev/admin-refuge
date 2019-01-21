import {Link} from "react-router-dom"
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="inbox-head">
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <Link to="login">Se connecter</Link>
                </li>
                <li class="nav-item">
                    <Link to="subscib">Inscription</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                </li>
            </ul>
        </div> 
      </div>
    )
  }
}
