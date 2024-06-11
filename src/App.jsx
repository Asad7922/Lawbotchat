
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Lawbot from "./components/Lawbot"
import Layout from "./Layout/Layout"
import Casestudy from "./components/Casestudy"
import ContractCreation from "./components/ContractCreation"
import ChatHistory from "./components/ChatHistory"



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Lawbot />} />
            <Route path="/Casestudy" element={<Casestudy />} />
            <Route path="/ContractCreation" element={<ContractCreation />} />
            <Route path="/ChatHistory" element={<ChatHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
