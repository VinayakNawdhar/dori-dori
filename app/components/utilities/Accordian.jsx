import React from 'react'

const Accordian = (props) => {
    return (
        <div className="border-b-2 rounded-md mb-1">
            <button
                className="w-full p-4 text-left transition duration-300"
                onClick={props.toggleAccordion}
            >
                {props.title}
                <span className={`float-right transform ${props.isOpen ?
                    'rotate-180' : 'rotate-0'}  
                                 transition-all duration-300`}>
                    &#9660;
                </span>
            </button>

            <div className={`p-4 border-4 border-black bg-white transition-all duration-1000 ${props.isOpen == true ? "h-[100px]" :"h-0"}`}>
                {props.data}
            </div>

        </div>
    )
}

export default Accordian