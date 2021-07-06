const Footer = () => {
	return (
		<footer>
			<div className="top-footer">
				<div className="block-top-footer" >
					<div className="content" >
						<h1> Sign Up To Newsletter </h1>
						<h5> Subscribe to receive info on our latest news and episodes </h5>
					</div>
					<form>
						<input placeholder="Your Email" />
						<button> SUBCRIBE </button>
					</form>
				</div>
			</div>
			<div className="bottom-footer">
				<div className="block" >
					<h3 > About Us </h3>
					<p>
						It is a long established fact that a reader will be distracted by the readable content.
					</p>
					<h5>
						© Copyright ©2021 All rights reserved | This template is made with  by Colorlib --- Downloaded from Themeslab
					</h5>
				</div>
				<div className="block">
					<h3> Categories </h3>
					<div className="link-footer" >
						<a href="#" > Entrepreneurship </a>
						<a href="#" > Media </a>
						<a href="#" > Tech </a>
						<a href="#" > Tutorials </a>
					</div>
				</div>
				<div className="block" >
					<h3 > Lastest Episodes </h3>
					<h6> DECEMBER 9, 2018 </h6>
					<a href="#" > Episodes 205 - See Ya In Three! </a>
					<hr />
					<h6> DECEMBER 9, 2018 </h6>
					<a href="#" > Episodes 205 - See Ya In Three! </a>
				</div>
				<div className="block" >
					<h3 > Follow Us </h3>
					<div className="icon-footer" >
						<a href="#" ><i className="fab fa-facebook-f" id="face"></i></a>
						<a href="#" ><i className="fab fa-twitter" id="twiter"></i></a>
						<a href="#" ><i className="fab fa-pinterest" id="pinterest"></i></a>
						<a href="#" ><i className="fab fa-youtube" id="youtube"></i></a>
						<a href="#" ><i className="fab fa-instagram" id="instagram"></i></a>
					</div>
					<div className="block-img" >
						<img src="./imges/app-store_opt.png" alt="" ></img>
						<img src="./imges/google-play-badge_opt.png" alt="" ></img>
					</div>
				</div>
			</div>
		</footer>
	) ; 
}

export default Footer ; 