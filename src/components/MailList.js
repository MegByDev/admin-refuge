import React, { Component } from 'react'

export default class MailList extends Component {
  render() {
    return (
      <div>
       <aside className="lg-side">   
                   
                  
         
        <div className="inbox-body">
           <div className="mail-option">
               <div className="chk-all">
                   <input type="checkbox" className="mail-checkbox mail-group-checkbox"/>
                   <div className="btn-group">
                       <a data-toggle="dropdown" href="#" className="btn mini all" aria-expanded="false">
                           All
                           <i className="fa fa-angle-down "></i>
                       </a>
                       <ul className="dropdown-menu">
                           <li><a href="#"> None</a></li>
                           <li><a href="#"> Read</a></li>
                           <li><a href="#"> Unread</a></li>
                       </ul>
                   </div>
               </div>

               <div className="btn-group">
                   <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" className="btn mini tooltips">
                      <i class="fa fa-refresh" aria-hidden="true"></i>
                   </a>
               </div>
               <div className="btn-group hidden-phone">
                   <a data-toggle="dropdown" href="#" className="btn mini blue" aria-expanded="false">
                       More
                       <i className="fa fa-angle-down "></i>
                   </a>
                   <ul className="dropdown-menu">
                       <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                       <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                       <li className="divider"></li>
                       <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                   </ul>
               </div>
               <div className="btn-group">
                   <a data-toggle="dropdown" href="#" className="btn mini blue">
                       Move to
                       <i className="fa fa-angle-down "></i>
                   </a>
                   <ul className="dropdown-menu">
                       <li><a href="#"><i className="fa fa-pencil"></i> Mark as Read</a></li>
                       <li><a href="#"><i className="fa fa-ban"></i> Spam</a></li>
                       <li className="divider"></li>
                       <li><a href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                   </ul>
               </div>
            
                <div>
                    <form action="#" className="pull-center position">
                        <div className="input-append">
                            <input type="text" className="sr-input" placeholder="Search Mail"/>
                            <button className="btn sr-btn" type="button"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
               <ul className="unstyled inbox-pagination">
                   <li><span>1-50 of 234</span></li>
                   <li>
                       <a className="np-btn" href="#"><i className="fa fa-angle-left  pagination-left"></i></a>
                   </li>
                   <li>
                       <a className="np-btn" href="#"><i className="fa fa-angle-right pagination-right"></i></a>
                   </li>
               </ul>
           </div>
            <table className="table table-inbox table-hover">
              <tbody>
                <tr className="unread">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message  dont-show">PHPClass</td>
                    <td className="view-message ">Added a new className: Login Class Fast Site</td>
                    <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message  text-right">9:27 AM</td>
                </tr>
                <tr className="unread">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Google Webmaster </td>
                    <td className="view-message">Improve the search presence of WebSite</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">March 15</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">JW Player</td>
                    <td className="view-message">Last Chance: Upgrade to Pro for </td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">March 15</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Tim Reid, S P N</td>
                    <td className="view-message">Boost Your Website Traffic</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">April 01</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">Freelancer.com <span className="label label-danger pull-right">urgent</span></td>
                    <td className="view-message">Stop wasting your visitors </td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">May 23</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">WOW Slider </td>
                    <td className="view-message">New WOW Slider v7.8 - 67% off</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">March 14</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">LinkedIn Pulse</td>
                    <td className="view-message">The One Sign Your Co-Worker Will Stab</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">Feb 19</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Drupal Community<span className="label label-success pull-right">megazine</span></td>
                    <td className="view-message view-message">Welcome to the Drupal Community</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">March 04</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Facebook</td>
                    <td className="view-message view-message">Somebody requested a new password </td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">June 13</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Skype <span className="label label-info pull-right">family</span></td>
                    <td className="view-message view-message">Password successfully changed</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">March 24</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">Google+</td>
                    <td className="view-message">alireza, do you know</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">March 09</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="dont-show">Zoosk </td>
                    <td className="view-message">7 new singles we think you'll like</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">May 14</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">LinkedIn </td>
                    <td className="view-message">Alireza: Nokia Networks, System Group and </td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">February 25</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="dont-show">Facebook</td>
                    <td className="view-message view-message">Your account was recently logged into</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">March 14</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Twitter</td>
                    <td className="view-message">Your Twitter password has been changed</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">April 07</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">InternetSeer Website Monitoring</td>
                    <td className="view-message">http://golddesigner.org/ Performance Report</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">July 14</td>
                </tr>
                <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star inbox-started"></i></td>
                    <td className="view-message dont-show">AddMe.com</td>
                    <td className="view-message">Submit Your Website to the AddMe Business Directory</td>
                    <td className="view-message inbox-small-cells"></td>
                    <td className="view-message text-right">August 10</td>
                </tr>
               
                    <tr className="">
                    <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox"/>
                    </td>
                    <td className="inbox-small-cells"><i className="fa fa-star"></i></td>
                    <td className="view-message dont-show">Facebook</td>
                    <td className="view-message view-message">Alireza Zare Login faild</td>
                    <td className="view-message inbox-small-cells"><i className="fa fa-paperclip"></i></td>
                    <td className="view-message text-right">feb 14</td>
                </tr>
            </tbody>
            </table>
        </div>
        </aside>
      </div>
    )
  }
}
