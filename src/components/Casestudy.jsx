import Ailanguage from "./Ailanguage"
import Button from "./Button"

function Casestudy() {
  return (
    <div>
      <div className=" bg-gray-100 text-center w-80 h-full">
        <Button ButtonName="New Case" />
        <p className=" mx-7 text-sm text-red-600">Please click the icon below to upload your case description with as many information about the case as possible</p>
        <p className="m-14">
        <i className="bi bi-file-earmark-arrow-up text-3xl text-red-700"></i>
        </p>

        <Ailanguage/>



      </div>
    </div>
  )
}

export default Casestudy
