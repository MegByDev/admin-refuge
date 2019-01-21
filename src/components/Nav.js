import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Nav extends Component {
  render() {
    return (
        <div>
    
                <li className="active">
                    <a  href="#"><i className="fa fa-inbox"></i> Inbox <span classNme="label label-danger pull-right"></span></a>
                 </li>  
        <div className="btn-group">
            <a href="#" ><i className="fa fa-chevron-down"> </i></a>

        <ul className="inbox-nav inbox-divider">

        <ul className="dropdown-menu">
        
        <li>
            <a href="#"><i className="fa fa-envelope-o"></i> Sent Mail</a>
        </li>
        <li>
            <a href="#"><i className="fa fa-bookmark-o"></i> Important</a>
        </li>
        <li>
            <a href="#"><i className=" fa fa-external-link"></i> Drafts <span classNme="label label-info pull-right">30</span></a>
        </li>
        <li>
            <a href="#"><i className=" fa fa-trash-o"></i> corbeille</a>
        </li>
        </ul>
    </ul>
    </div>
    <ul className="nav nav-pills nav-stacked labels-info inbox-divider">
        <li> <h4>Labels</h4> </li>
        <li> <a href="#"> <i className=" fa fa-sign-blank text-danger"></i> Work </a> </li>
        <li> <a href="#"> <i className=" fa fa-sign-blank text-success"></i> Design </a> </li>
        <li> <a href="#"> <i className=" fa fa-sign-blank text-info "></i> Family </a>
        </li><li> <a href="#"> <i className=" fa fa-sign-blank text-warning "></i> Friends </a>
        </li><li> <a href="#"> <i className=" fa fa-sign-blank text-primary "></i> Office </a>
        </li>
    </ul>
    <ul className="nav nav-pills nav-stacked labels-info ">
        <li> <h4>online</h4> </li>
        <li> <a href="#"> <i className=" fa fa-circle text-success"></i>---</a>  </li>
        <li> <a href="#"> <i className=" fa fa-circle text-danger"></i></a> </li>
        <li> <a href="#"> <i className=" fa fa-circle text-muted "></i></a>
      </li>
    </ul>
    </div> 
    )
  }
}
