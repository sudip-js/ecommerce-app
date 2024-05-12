import React from 'react'

const Button = ({ children, className = 'flex items-center space-x-3 w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600', ...props }) => {
    return (
        <button
            {...props}
            className={className}
        >
            {children}
        </button>
    )
}

export default Button