import Ailanguage from "./Ailanguage"
import Button from "./Button"


function ContractCreation() {
  return (
    <div>
    <div className=" bg-gray-100 text-center w-80 min-h-full">
      <Button ButtonName="New Contract" />
      <p className=" mx-7 text-sm text-red-600">Please click the icons below to upload your sample contract and the customers details for the new contract.</p>
      <p className="m-6">
        <label htmlFor="sample" className=" text-xs text-red-700">Sample Contract</label><br />
      <i className="bi bi-file-earmark-arrow-up text-3xl text-red-700" id="sample"></i>
      <br />
      <br />
      <label htmlFor="sample" className=" text-xs text-red-700">Customers Contract Details</label><br />
      <i className="bi bi-file-earmark-arrow-up text-3xl text-red-700" id="sample"></i>
      </p>

      <Ailanguage/>



    </div>
  </div>
  )
}

export default ContractCreation
