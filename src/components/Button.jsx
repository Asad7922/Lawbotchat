
function Button(props) {
    return (
        <div>
            <button className="border-2 px-10 py-4 text-xl  font-semibold text-white border-red-700 bg-red-700 rounded-full outline-none mt-6 mb-4">{props.ButtonName}</button>
        </div>
    )
}

export default Button
