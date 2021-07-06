import { HashRouter as Router , Route , NavLink} from 'react-router-dom' ;
const Welcome = () => {
	return (
		<section className="welcome" > 
			<div className="welcome-contains" > 
				<div className="welcome-title" >
					<h2 > Subscribe Today </h2>
					<h5 > Please schedule a podcast post, to make it visible here.</h5>
					<div className="subscribe" > 
						<a href="#" id="itunes"> SUBSCRIBE WITH ITUNES </a>
						<a href="#" id="rss"> SUBSCRIBE WITH RSS </a>
					</div>
				</div>
				<div  className="welcome-main" > 
					<img src="./imges/josh-garcia-_87wQoFZDPA-unsplash_opt.jpg" alt="" />
					<div className="welcome-content" >
						<NavLink to="Linkmusic" >
							<i className="fas fa-fast-forward" id="next" style={{display : "none"}}></i>
							<p > DECEMBER 6, 2021 </p>
							<h1 > Episode 203 - The Last Blockbuster </h1>
							<div className="admin" > 
								<span id="by"> BY ADMIN </span>
								<span id="tutorial"> | TUTORIALS | </span> 
								<span id="time"> 00:02:56 </span>
							</div>
							<audio controls >
								<source type="audio/mpeg" src="./music\KhongPhaiDangVuaDau-SonTungMTP-3753840.mp3" />
								<source type="audio/mpeg" src="./music\VachNgocNga-AnhRong-6984991.mp3" />
							</audio>
						</NavLink>
						<div className="link-share-down" >
							<a href="#" > <i className="fas fa-heart"></i> Like(29) </a>
							<span className="share-down" > 
								<a href="#" > <i className="fas fa-share"></i> Share(11) </a>
								<a href="#" > <i className="fas fa-download"></i> Down(59) </a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	) ; 
}

export default Welcome ; 