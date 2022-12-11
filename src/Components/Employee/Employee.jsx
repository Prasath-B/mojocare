import React,{useState,useEffect} from 'react'
import Content from './Content/Content.jsx'
import  "./Employee.css"
import SideBar from './Sidebar/SideBar'

const Employee = () => {
      const [category, setcategory] = useState({
        one:"Feeling Stressed",
        two:"Manage Burnout",
        three:"Relationship/People Problems",
        four:"Wish to Feel Good",
        five:"Not Sure what to talk about",
        six:"Need Mental Clarity"
    })
    const [categoryValue, setcategoryValue] = useState(category.one)
      const [mobview, setmobview] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])
    return (
        <>
        <section className='employee'>
          <div className={mobview < "1140" ? "container" : null} >
            <SideBar category={category} setcategory={setcategory} categoryValue={categoryValue} setcategoryValue={setcategoryValue} />  
            <Content  category={category} setcategory={setcategory} categoryValue={categoryValue} setcategoryValue={setcategoryValue} />
          </div>
          
          </section>
        </>
    )
}

export default Employee
