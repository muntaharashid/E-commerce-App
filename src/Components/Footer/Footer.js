import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <div>
        <div className="container">
  <div className="row">
    	<div className="col-md-12">
    	    <footer className="footer rounded mt-4">				
		<div className="container">
			<div className="row">
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						About us
					</div>	
					<p className="white-text">
					E-Commerce website that allows you to buy and sell tangible goods, digital products or services online.
					</p>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Our Products
					</div>	
					<div className="footer-links">
						<a href="#">
							Electronic Gadgets
						</a>
						<a href="#">
							Men's Wear
						</a>
						<a href="#">
							Women's Wear
						</a>
						<a href="#">
							Home Appliances 
						</a>
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
					HELP
					</div>	
					<div className="footer-links">
						<a href="#">
							Payments
						</a>
						<a href="#">
							Shipping
						</a>
						<a href="#">
							Cancellation & Returns
						</a>
						<a href="#">
							FAQ
						</a>
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						POLICY
					</div>	
					<div className="footer-links">
						<a href="#">
							Return Policy
						</a>
						<a href="#">
							Login
						</a>
						<a href="#">
							Privacy
						</a>
						<a href="#">
							Terms Of Use
						</a>
					</div>
					<div className="footer-social-links m-t-30">
						<li>
							<a href="#">
								<i className="bi bi-facebook" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i className="bi bi-twitter" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i className="bi bi-linkedin" aria-hidden="true"></i>
							</a>
							<a href="#">
								<i className="bi bi-youtube" aria-hidden="true"></i>
							</a>
						</li>
					</div>
				</div>
			</div>
		</div>
	</footer>
    
	<div className="footer-bottom">
		Copyright © 2007, All Rights Reserved
	</div>
    	</div>
	</div>
</div>
    </div>
  )
}

export default Footer