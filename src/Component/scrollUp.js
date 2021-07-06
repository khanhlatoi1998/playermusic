import {useState , useEffect} from 'react' ; 

const ScrollUp = () => {
	
	const [actionScroll , setactionScroll] = useState(false) ; 
	
	const changeScroll = () => {
		if(document.documentElement.scrollTop > 400) {
			if(actionScroll === false) { 
				setactionScroll(true) ; 
			} 
		}
		else { setactionScroll(false) }
	} ; 
	
	const ScrollUP = () => {
		window.scrollTo({
			top : 0 , 
			behavior : 'smooth' , 
		}) ; 
	}
	
	useEffect(() => {
		window.window.addEventListener('scroll' , changeScroll) ;		
		return () => window.removeEventListener('scroll' , changeScroll) ;
	 } , [actionScroll]) ; 
	
	return (
		<section>
			<div className="scrollUp" onClick={ScrollUP}style={actionScroll === true  ? {display : "block"} : {display : "none"}}>
				<i className="fas fa-chevron-up" ></i>
			</div> 
		</section>
	) ; 
} ; 

export default ScrollUp ; 