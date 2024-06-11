
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [bordercolor1, setbordercolor1] = useState("White")
    const [bordercolor2, setbordercolor2] = useState("White")
    const [bordercolor3, setbordercolor3] = useState("White")
    const [bordercolor4, setbordercolor4] = useState("White")
    const Lawbot = () => {
      setbordercolor1("red")
      setbordercolor2("White")
      setbordercolor3("White")
      setbordercolor4("White")
    }
    const Casestudy = () => {
    setbordercolor1("white")
    setbordercolor2("red")
    setbordercolor3("White")
    setbordercolor4("White")
      }
      const contrat = () => {
        setbordercolor1("White")
        setbordercolor2("White")
        setbordercolor3("red")
        setbordercolor4("White")
      }
      const ChatHistory = () => {
        setbordercolor1("white")
        setbordercolor2("White")
        setbordercolor3("White")
        setbordercolor4("red")
      }
    

    return (
        <>
            <div className=" min-h-full w-32 bg-gray-200 text-center">
                <div>
                    <img src="/miniLogo.png" alt="logo-img" className="p-2" />
                </div>
                <ul className="mt-6  font-serif">
                    <Link  to="/" onClick={Lawbot}> <li className= {`border-r-4 border-${bordercolor1}-950 p-4 mt-2`}>Lawbot</li></Link>
                    <Link to="/Casestudy" onClick={Casestudy} > <li className={`border-r-4 border-${bordercolor2}-950 p-4 mt-2`}>Case <br />Study</li></Link>
                    <Link to="/ContractCreation" onClick={contrat}><li className={`border-r-4 border-${bordercolor3}-950 p-4 mt-2`}>Contract <br /> Creation</li></Link>
                    <Link to="/ChatHistory" onClick={ChatHistory}> <li className={`border-r-4 border-${bordercolor4}-950 p-4 mt-2`}>Chat <br /> History</li></Link>
                </ul>
                <div className="  border-r-4 border-red-950 font-serif  mt-24 pb-2" >User</div>




            </div>

        </>
    )
}

export default Sidebar

