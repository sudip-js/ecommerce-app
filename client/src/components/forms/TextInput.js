import React, { forwardRef } from 'react'

const TextInput = forwardRef(({ label = '', error = null, ...props }, ref) => {
    return (
        <div>
            {label && <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>}
            <div className="mt-2">
                <input
                    ref={ref}
                    {...props}
                    id={label}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {error && <span className='text-red-500'>{error}</span>}
            </div>
        </div>
    )
})

export default TextInput