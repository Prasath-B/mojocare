import React,{useEffect,useState} from 'react'
// import { Carousel } from 'react-bootstrap'
import Carousel from "react-elastic-carousel"
import "./Content.css"

const Content = ({category,setcategoryValue,categoryValue}) => {

    const [mobview, setmobview] = useState(window.innerWidth)

       const breakPointNewsLetter = [
        {width:1, 
        itemsToShow:1},
        {width:350, itemsToShow:1},
        {width:450, itemsToShow:2},
         {width:605, itemsToShow:3}, 
    ]

    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])

    const handleCardClick = (e,captio) =>{
            e.preventDefault();
            setcategoryValue(captio)
    }


    const Card = ({imgSrc,caption}) =>{
        return(
            <div   className={ mobview > "1140" ? 'col-3 category-card container'  : null } onClick={(e)=>handleCardClick(e,caption)} >
                <img id={caption === categoryValue ? "selectedCard" : null} className={ mobview > "1140" ? 'category-img' : null } src={imgSrc} alt="" />
                <div>
                    <p>{caption}</p>
                    <i className="fas fa-long-arrow-alt-right"></i>
                </div>
            </div>
        )
    }

    const CardbStyle = {
            width:"231px", 
            position: "relative",
            textAlign: "center",
            background:"#fdf7ef",
            borderRadius:"18px",
            padding: "0"

    }

    const Cardb = ({date,title}) =>{
        return(
            <div  style={CardbStyle} className='employee-newsletter' >
                <img style={{width:"230px"}} src={`./images/category/newsletter.png`} alt="" />
                <div>
                    <p className={ mobview > "1140" ? 'newsletter-date' : 'newsletter-date' } >{date}</p>
                    <p  className={ mobview > "1140" ? 'newsletter-title' : 'newsletter-title' } >{title}</p>
                    <button>Read</button>
                </div>
            </div>
        )
    }
    
    

    return (
        <>
        <div  className={ mobview > "1150" ? 'health-issue-categories' : null } >
                    
        <div  className= 'row categories' style={mobview < "1140" ? {display:"none"}: null} >
        <h2 style={{color:"#252cff"}}>Take Charge of Your Mental Health</h2>
        <Card   imgSrc={`./images/category/one.png`}   caption={category.one}    />
        <Card  imgSrc={`./images/category/two.png`}   caption={category.two}     />
        <Card  imgSrc={`./images/category/three.png`} caption={category.three}    />
        <Card imgSrc={`./images/category/four.png`}  caption={category.four}      />
        <Card imgSrc={`./images/category/five.png`}  caption={category.five}       />
        <Card imgSrc={`./images/category/six.png`}   caption={category.six}       />
        </div>
          <div className='wellness-campaign' >
                <h2>Wellness Campaigns</h2>
                <Carousel breakPoints={ breakPointNewsLetter}>
                    
                          <Cardb date="Jan 2022" title="Why Mental illness" />
                        <Cardb date="Feb 2022" title="Manage Your Stress" />
                        <Cardb date="Feb 2022" title="Manage Your Stress" />
                         <Cardb date="Mar 2022" title="Declutter Your Minf" />
                    
                </Carousel>
          
            
           
        </div>
        </div>

      
        </>
    )
}

export default Content;
