import { useState } from "react"
import './Chatscreen.css'

function Chatscreen() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setNewMessage('');
    };

    return (
        <div className="  w-4/5  contianer">
            <div className="topbar flex justify-end">
                <i className="bi bi-gear p-4 text-xl"></i>
            </div>
            <div className=" h-96 w-11/12 m-auto    overflow-y-auto overflow-hidden chat-box ">
                <h1 className="text-sm font-bold p-2">New Chat</h1>
                <div className="p-2 space-y-2">
                    <div className="flex justify-start ">
                        <div className="flex-1 overflow-y-auto">
                            {messages.map((message, index) => (
                                <div key={index} className="flex justify-end mb-7 ">
                                    <div className=" text-white rounded-tl-lg rounded-bl-lg  rounded-tr-lg px-4 py-2 bg-black box-s shadow-md shadow-black">
                                        {message}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <form className=" m-auto mt-16 bg-gray-300 p-4 rounded-lg w-11/12 right-28 flex" >
                <input required type="text" placeholder="Type your message..." className="w-full border-gray-200  p-2     focus:outline-none  text-black" value={newMessage}
                    onChange={handleNewMessageChange} />
                <button className='text-black p-2 text-xl ' onClick={handleSendMessage}><i className="bi bi-send"></i></button>
            </form>
        </div>
    )
}

export default Chatscreen
