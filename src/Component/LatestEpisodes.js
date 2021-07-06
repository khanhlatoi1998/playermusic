import {DataLastestEpisodes} from "./DataLastestEpisodes.js" ; 

const LatestEpisodes = () => {
	return (
		<section className="LatestEpisodes"> 
			<div className="contains-LE" >
				<div className="title-LE" > 
					<h1 > Latest Episodes <div></div> </h1>
				</div>
				<div className="menu-LE" >
					<ul > 
						<li > <a href="#" > All<div></div></a></li>
						<li > <a href="#" > Entrepreneurship<div></div></a></li>
						<li > <a href="#" > Media<div></div></a></li>
						<li > <a href="#" > Tech<div></div></a></li>
						<li > <a href="#" > Tutorials<div></div></a></li>
					</ul>
				</div>
				<div className="content-LE" >
					{ DataLastestEpisodes.map((item , index) => {
						return (
							<div className="block-LE" key={index}>
								<img src={item.img} alt=""/>
								<div className="content-block" >
									<p > {item.time} </p>
									<h1 > {item.title} </h1>
									<div className="admin" > 
										<span id="by"> BY ADMIN </span>
										<span id="tutorial"> | TUTORIALS | </span> 
										<span id="time"> 00:02:56 </span>
									</div>
									<audio controls >
										<source type="audio/mpeg" src="./music\KhongPhaiDangVuaDau-SonTungMTP-3753840.mp3" />
										<source type="audio/mpeg" src="./music\VachNgocNga-AnhRong-6984991.mp3" />
									</audio>
									<div className="link-share-down" >
										<a href="#" > <i className="fas fa-heart"></i> Like({item.like}) </a>
										<span className="share-down" > 
											<a href="#" > <i className="fas fa-share"></i> Share({item.share}) </a>
											<a href="#" > <i className="fas fa-download"></i> Down({item.share}) </a>
										</span>
									</div>
								</div>
							</div>
						)
					})}
				</div>
				<div className="loadmore" >
					<a href="#" > LOAD MORE </a>
				</div>
			</div>
		</section>
	) ; 
}

export default LatestEpisodes ; 