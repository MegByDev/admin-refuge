import React, { Component } from 'react'
import Nav from "../components/Nav";
import MailList from "../components/MailList";

export default class Mail extends Component {
  render() {
    return (
      <div>
        <div className="mail-box">
            <aside className="sm-side">
                      <div className="user-head">

                          <a className="inbox-avatar" href="javascript:;">
                              <img  width="64" hieght="60" src=""/>
                          </a>

                          <div className="user-name">
                              <h5><a href="#">Alireza Zar</a></h5>
                              <span><a href="#">Info.Ali.Pci@Gmail.com</a></span>
                          </div>
                          <div className="btn-group">
                          <a data-toggle="dropdown" href="#">
                              <i className="fa fa-chevron-down"> </i>
                              
                          </a>
                          <ul className="dropdown-menu">
                                         <li><a href="#"> Profil</a></li>
                                         <li><a href="/#/home"> Déconnection</a></li>
                                         
                                </ul>
                          </div>
                      </div>
                        <Nav/>
                      <div className="inbox-body">
                          <a href="#myModal" data-toggle="modal"  title="Compose"    className="btn btn-compose">
                              Compose
                          </a>
                            {/** modal */}
                          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" className="modal fade" style={{display: "none"}}>
                              <div className="modal-dialog">
                                  <div className="modal-content">
                                      <div className="modal-header">
                                          <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                                          <h4 className="modal-title">Compose</h4>
                                      </div>
                                      <div className="modal-body">
                                          <form role="form" className="form-horizontal">
                                              <div className="form-group">
                                                  <label className="col-lg-2 control-label">To</label>
                                                  <div className="col-lg-10">
                                                      <input type="text" placeholder="" id="inputEmail1" className="form-control"/>
                                                  </div>
                                              </div>
                                              <div className="form-group">
                                                  <label className="col-lg-2 control-label">Cc / Bcc</label>
                                                  <div className="col-lg-10">
                                                      <input type="text" placeholder="" id="cc" className="form-control"/>
                                                  </div>
                                              </div>
                                              <div className="form-group">
                                                  <label className="col-lg-2 control-label">Subject</label>
                                                  <div className="col-lg-10">
                                                      <input type="text" placeholder="" id="inputPassword1" className="form-control"/>
                                                  </div>
                                              </div>
                                              <div className="form-group">
                                                  <label className="col-lg-2 control-label">Message</label>
                                                  <div className="col-lg-10">
                                                      <textarea rows="10" cols="30" className="form-control" id="" name=""></textarea>
                                                  </div>
                                              </div>

                                              <div className="form-group">
                                                  <div className="col-lg-offset-2 col-lg-10">
                                                      <span className="btn green fileinput-button">
                                                        <i className="fa fa-plus fa fa-white"></i>
                                                        <span>Attachment</span>
                                                        <input type="file" name="files[]" multiple=""/>
                                                      </span>
                                                      <button className="btn btn-send" type="submit">Send</button>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>
                                  </div>{ /*modal-content*/ }
                              </div> {/*modal-dialog*/}>
                          </div>{/*modal*/ }
                      </div>
                     

                      <div className="inbox-body text-center">
                          <div className="btn-group">
                              <a className="btn mini btn-primary" href="javascript:;">
                                  <i className="fa fa-plus"></i>
                              </a>
                          </div>
                          <div className="btn-group">
                              <a className="btn mini btn-success" href="javascript:;">
                                  <i className="fa fa-phone"></i>
                              </a>
                          </div>
                          <div className="btn-group">
                              <a className="btn mini btn-info" href="javascript:;">
                                  <i className="fa fa-cog"></i>
                              </a>
                          </div>
                      </div>
                  </aside>
              
                <MailList/>     
            
        </div>
      </div>
    )
  }
}
