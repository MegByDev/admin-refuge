import React, { Component } from 'react'

export default class Reset extends Component {
  render() {
    return (

<div id="login" className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
            <div className="text-center">
            <h3><i className="fa fa-lock fa-4x"></i></h3>
                  <h2 className="text-center">Mot de passe oublier?</h2>
				
				
			</div>
			<div className="card-body">
				<form action="#">
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input id="email" name="email" placeholder="email address" className="form-control"  type="email"/>
					</div>

					
					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn"/>
					</div>
				</form>
			</div>
			</div>
		</div>
	</div>
</div>

   
    )
  }
}
