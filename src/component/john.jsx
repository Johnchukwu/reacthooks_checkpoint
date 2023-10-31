import bill from '../assets/bill.png'
import { useState } from "react";

const John = () => {
    const [show, setShow] = useState(false)
    return (
        < >
            <div style={{ textAlign: 'center', backgroundColor: 'alicebluenpm'}}><button onClick={() => setShow(!show)} >
                <h4>Show</h4></button></div>
            {show ?
                <div className="container">
                    <div className='image'>
                        <img src={bill} alt="" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <h3> John chukwu</h3>
                        <p> Hi welcome to my word of tech where innovation meets class and quality</p>
                        <button>Show</button>
                    </div>
                    
                </div> 
                :
                <div style={{ textAlign:'center' }}>
                    <h1>no profiles for now</h1>

                    </div >
            }
    
                      
        </ >
            
  )
}


export default John;