import Ailanguage from "./Ailanguage"
import Button from "./Button"


function Casestudy() {
  return (

    <div className=" bg-gray-100 text-center w-80 min-h-full" >
        <Button ButtonName = "New Chat"/>
      <p className=" mx-7 text-sm text-red-600">Choose one OR multiple between Laws, Past Court decisions, Biobliography and start chatting with Lawgic</p>
      <ul className="text-left ml-16 mt-6 text-s  text-red-700 ">
        <li> <input type="checkbox" id="myCheckbox1" name="myCheckbox" value="checkboxValue" />
        <label htmlFor="myCheckbox1" className="text-sm"> Lawsbr <p className=" text-xs ml-2 pb-2">(from 1990 to Mar 2024)</p></label></li>
        <li> <input type="checkbox" id="myCheckbox2" name="myCheckbox" value="checkboxValue" />
        <label htmlFor="myCheckbox2" className="text-sm" > Past Court Cases<p className=" text-xs ml-2  pb-2">(from 2000 to Mar 2023)</p></label></li>
        <li><input type="checkbox" id="myCheckbox3" name="myCheckbox" value="checkboxValue" />
        <label htmlFor="myCheckbox3" className="text-sm"> Bibliography<p className=" text-xs ml-2  pb-2">(various from 1990 to Mar 2024)</p></label></li>
      </ul>
      <Ailanguage/>

    
    
    </div>
  )
}

export default Casestudy
