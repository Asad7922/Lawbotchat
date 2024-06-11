

function Ailanguage() {
  return (
    <div>
       <hr className="bg-slate-600 " />
      <p className=" mx-7 text-sm text-red-600 mt-6 ml-12">Choose a language model for the analysis and the chat.</p>

      <ul className="text-left ml-16 mt-12 text-s  text-red-700  ">
        <li>
          <input type="checkbox" id="myCheckbox4" name="myCheckbox" value="checkboxValue" />
          <label htmlFor="myCheckbox4" className="text-sm">
            Claude Opus</label>
        </li>
        <li>
          <input type="checkbox" id="myCheckbox5" name="myCheckbox" value="checkboxValue" />
          <label htmlFor="myCheckbox5" className="text-sm" > Claude Sonnet</label>
        </li>
        <li>
          <input type="checkbox" id="myCheckbox6" name="myCheckbox" value="checkboxValue" />
          <label htmlFor="myCheckbox6" className="text-sm">Claude Haiku</label>
        </li>
        <li>
          <input type="checkbox" id="myCheckbox7" name="myCheckbox" value="checkboxValue" />
          <label htmlFor="myCheckbox7" className="text-sm">Chat GPT Turbo</label>
        </li>
        <li>
          <input type="checkbox" id="myCheckbox8" name="myCheckbox" value="checkboxValue" />
          <label htmlFor="myCheckbox8" className="text-sm"> Gemini Pro</label>
        </li>
      </ul> 
    </div>
  )
}

export default Ailanguage
