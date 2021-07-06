import React from 'react' ; 
import {useEffect , useRef , useState} from 'react' ; 

import axios from 'axios' ; 

const LinkMusic = () => {
	
	const refInput = useRef() ; 
	const selectBtn = useRef() ; 
	const selectValue = useRef() ; 
	const Timemusic =  useRef() ;
	const animationRef = useRef() ; 
	
	const [PlayPause , setPlayPause] = useState(true) ;
	
	const [duration , setduration] = useState(0) ; 
	
	const [currentTime , setcurrentTime] = useState(0) ; 
	
	const [IndexMusic , setIndexMusic] = useState(0) ;
	
	const [dataMusic, setdataMusic] = useState([
		{	
			namemusic : "Ngo Quoc Khanh" , 
			namesinger : "Khong Phai Dang Vua Dau" ,
			img : "./imges/josh-garcia-_87wQoFZDPA-unsplash_opt.jpg" , 
			img2 : "./imges/josh-garcia-_87wQoFZDPA-unsplash_opt.jpg" ,
			music : "./music/KhongPhaiDangVuaDau-SonTungMTP-3753840.mp3" , 
		} ,
	]) ; 
	
	useEffect(() => {
		const firstnumberTime = Math.floor(Timemusic.current.duration) ;
		setduration(firstnumberTime) ;
		refInput.current.max = firstnumberTime ; 
		callData() ;
		window.addEventListener('hashchange' , function(){
			Timemusic.current.pause() ; 
			cancelAnimationFrame(animationRef.current) ;  
		}) ;
	} , [Timemusic?.current?.loadedmetadate, Timemusic?.current?.readyState, PlayPause , IndexMusic] ) ; 
	
	const updateTime = (secs) => {
		let minutes = Math.floor(secs/60) ; 
		let returnminute = minutes < 10 ? '0' + minutes.toString() : minutes.toString() ; 
		const seconds = Math.floor(secs%60) ; 
		const returnseconds = seconds <  10 ? '0' + seconds.toString() : seconds.toString() ;
		return  returnminute + ":" + returnseconds  ; 
	} ; 
	
	const changePlayPause = () => {
		console.log("234") ; 
		const TrueFalse = PlayPause ; 
		setPlayPause(!TrueFalse) ; 
		if(PlayPause === true) {
			Timemusic.current.play() ; 
			animationRef.current = requestAnimationFrame(whilePlaying) ; 
		}
		else { 
			Timemusic.current.pause() ; 
			cancelAnimationFrame(animationRef.current) ; 
		}
	} ; 
	
	const whilePlaying = () => {
		refInput.current.value = Timemusic.current.currentTime ;
		ChangePlayerCurrentTime() ;  
		animationRef.current = requestAnimationFrame(whilePlaying) ; 
	} ; 

	const changeInput = () => {  
		ChangePlayerCurrentTime() ;  
	} ; 
	
	const ChangePlayerCurrentTime = () => {
		selectBtn.current.style.width = (refInput.current.value/Timemusic.current.duration)*100 + "%" ; 
		selectValue.current.style.left = (refInput.current.value/Timemusic.current.duration)*85 + "%" ;
		setcurrentTime(refInput.current.value) ;
	} ; 
	
	const ChangePlayMusic = (index) => {
		setIndexMusic(index) ; 
		setPlayPause(true) ; 
	}
	
	const nextmusic = () => {
		if(IndexMusic >= dataMusic.length - 1) { setIndexMusic(0) ; }
		else{ setIndexMusic(IndexMusic => IndexMusic + 1) } ; 
		setPlayPause(true) ;
	} ; 
	
	const prevmusic = () => {
		if(IndexMusic === 0) { setIndexMusic(dataMusic.length - 1) ; }
		else{ setIndexMusic(IndexMusic => IndexMusic - 1) } ;
		setPlayPause(true) ;
	} ; 
	const callData = () => {
		axios({
			method : 'GET' , 
			url : 'https://60d8372d6f13520017a681c8.mockapi.io/api/DataMusics' , 
			data : null , 
		})  
			.then(response => {	
				setdataMusic(response.data) ;				
			})
			.catch(err => { console.log(err) ; }) ; 
	} ; 
	
	return (
		<div className="linkmusic" style={window.location.hash != "#/Linkmusic" ? {height : "0", overflow : "hidden"} : {}}>
			<div className="block" >
				<div className="content-music">
					<h4  > {dataMusic[IndexMusic].namemusic} </h4>
					<h2  > {dataMusic[IndexMusic].namesinger} </h2>
				</div>
				<div className="img" >
					<img src={dataMusic[IndexMusic].img} alt="" />
				</div>
				<div className="block-control" >
					<div className="input-range" >
						<audio src={dataMusic[IndexMusic].music} ref={Timemusic} >
							
						</audio>
						<input onChange={changeInput} type="range" ref={refInput} defaultValue="0" id="volume" name="volume" />
						<div className="support-input" >
							<div id="selectValue" ref={selectBtn} ></div>
							<div className="selectBtn" ref={selectValue}>{updateTime(currentTime)}/{isNaN(duration) ? "04:15" : updateTime(duration)}</div>
						</div>
					</div>
					<div className="control" >
						<i className="fas fa-arrows-alt-h"  ></i>
						<i onClick={prevmusic} className="fas fa-step-backward" ></i>
						<i onClick={changePlayPause} className={PlayPause === true ? "far fa-play-circle" : "far fa-pause-circle"} id="play" ></i>
						<i onClick={nextmusic} className="fas fa-step-forward" ></i>
						<i className="fas fa-redo-alt"  ></i>
					</div>
					<div className="bottom-control" >
						<p className="far fa-heart"></p>
						<div >
							<p id="listmusic"> DANH SACH PHAT  </p> <p className="fas fa-music"></p>
						</div>
					</div>
				</div>
				{ 
					dataMusic.map((item , index) => {
						return (
							<div key={index} className="block-listmusic" onClick={() => ChangePlayMusic(index)} style={IndexMusic === index ? {backgroundColor : "#337ab787"} : {}}>
								<div className="singer-music" >
									<div className="left-singer-music" >
										<img src={item.img2} alt="" />
										<div className="content-music">
											<p id="namemusic" > {item.namemusic} </p>
											<p id="namesinger" > {item.namesinger} </p>
										</div>
									</div>
									<div className="humburger-music" >
										<div className="line" ></div>
										<div className="line" ></div>
										<div className="line" ></div>
									</div>
								</div>
							</div>
						)
					})
				}
				
				
			</div>
		</div>
	) ; 
}

export default LinkMusic ; 