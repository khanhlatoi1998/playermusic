import { useEffect , useState} from "react" ; 
import { HashRouter as Router , Route , NavLink} from 'react-router-dom' ;

const Header = () => {
	
	const [styleScroll , setstyleScroll] = useState(true) ; /*co the sd useRef*/
	
	const changeBackground = () => {
		if(document.documentElement.scrollTop > 0) {
			if(styleScroll === true) {
				setstyleScroll(false) ; 
				return 0 ; 
			}
		}
		else { setstyleScroll(true) ; } 
	} ;
	
	const [hover_blogs , sethover_blogs] = useState(false) ; 
	const openMenuBlogs = () => { sethover_blogs(true) ;  }
	const closeMenuBlogs = () => { sethover_blogs(false) ; }
	
	const [hover_pages , sethover_pages] = useState(false) ; 
	const openMenuPages = () => { sethover_pages(true) ;  } ;
	const closeMenuPages = () => { sethover_pages(false) ; } ;
	
	const [showHeader , setshowHeader] = useState(true) ;
	const openclose_Header = () => { setshowHeader(!showHeader) ; } ; 
	
	const [dropdownPages , setdropdownPages] = useState(false) ; 
	const showdropdownPages = () => { setdropdownPages(!dropdownPages) ; } ; 
	
	const [dropdownBlogs , setdropdownBlogs] = useState(false) ; 
	const showdropdownBlogs = () => { setdropdownBlogs(!dropdownBlogs) ; } ;
	
	useEffect(() => {
		window.addEventListener('scroll' , changeBackground) ;		
		return () => window.removeEventListener('scroll' , changeBackground) ;
	} , [styleScroll]) ; 
	
	const width_showHeader = window.innerWidth ;  
	
	
	return (
		<header style={styleScroll === false ? {backgroundColor: "black"} : {backgroundColor : "transparent"}} >
			<nav >
				<div className="header" > 
					<div className="header-left" > 
						<a href="#" id="Paca" > Poca<i className="logo">.</i> </a>
					</div>
					<div className="humburger" onClick={openclose_Header} >
						<div className="line" ></div>
						<div className="line" ></div>
						<div className="line" ></div>
					</div>
					<div className={width_showHeader <= 414 ? "header-mobile" :"header-right"} style={showHeader === true  ? {} : {display : "block"}} > 
						<div className="controlClose" onClick={openclose_Header} ><i className="fas fa-times"></i></div>
						<div className="header-mainmenu" >
							<ul >
								<li > <a href="#"> Home </a> <div className="active_line"></div> </li>
								<li onClick={showdropdownPages} > 
									<a className="closeClick" href="#" onMouseEnter={openMenuPages} onMouseLeave={closeMenuPages} > Pages <i className="fas fa-chevron-down"></i>
									</a>  
									<div className={width_showHeader < 975 ? "listmenu_blogs" : "styleHeaderDectop"  } style={hover_pages === true || dropdownPages === true ? {display : "block" , position : "initial"} : {display : "none"}} >
										<ul className="ul-listmenu_pages" >
											<li ><a href="#"> Home </a> </li>
											<li ><a href="#"> Home </a> </li>
											<li ><a href="#"> Home </a> </li>
											<li ><a href="#"> Home </a> </li>
										</ul>
									</div>
								</li>
								<li > <NavLink to="Linkmusic"> Podcasts </NavLink>  </li>
								<li > <NavLink to="Linkmusic"> About </NavLink>  </li>
								<li onClick={showdropdownBlogs} > 
									<a className="closeClick" href="#" onMouseEnter={openMenuBlogs} onMouseLeave={closeMenuBlogs} > Blogs <i className="fas fa-chevron-down"></i> </a> 
									<div className={width_showHeader < 975 ? "listmenu_blogs" : "styleHeaderDectop"  } style={hover_blogs === true || dropdownBlogs === true ? {display : "block"} : {display : "none"}} >
										<ul >
											<li ><a href="#"> Home </a> </li>
											<li ><a href="#"> Home </a> </li>
											<li ><a href="#"> Home </a> </li>
											<li ><a href="#"> Home </a> </li>
										</ul>
									</div>
								</li>
								<li > <a href="#"> Contact </a> </li>
							</ul>
						</div>
						<form className="header_search" >
							<input type="text"  placeholder="Search and hit enter..." /> 
							<i className="fas fa-search" > </i>
						</form>
						<div className="header-social" > 
							<a href="#" ><i className="fab fa-facebook-f" id="face"></i></a>
							<a href="#" ><i className="fab fa-twitter" id="twiter"></i></a>
							<a href="#" ><i className="fab fa-pinterest" id="pinterest"></i></a>
							<a href="#" ><i className="fab fa-youtube" id="youtube"></i></a>
							<a href="#" ><i className="fab fa-instagram" id="instagram"></i></a>
						</div>
					</div>
				</div>
			</nav>	
		</header>
	) ; 
}

export default Header ; 