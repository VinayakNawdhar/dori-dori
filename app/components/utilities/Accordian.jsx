import React from 'react'

const Accordian = (props) => {
    return (
        <div className="border rounded-md mb-1">
            <button
                className="w-full p-4 text-left bg-pink-100  
                           hover:bg-pink-200 transition duration-300"
                onClick={props.toggleAccordion}
            >
                {props.title}
                <span className={`float-right transform ${props.isOpen ?
                    'rotate-180' : 'rotate-0'}  
                                 transition-all duration-300`}>
                    &#9660;
                </span>
            </button>
            {props.isOpen && (
                <div className="p-4 bg-white">
                    {props.data}
                </div>
            )}
        </div>
    )
}

export default Accordian