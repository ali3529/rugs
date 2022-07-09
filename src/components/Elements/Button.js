const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} text-md bg-gray-50 flex justify-center items-center px-4 py-2 border border-transparent rounded-md text-white hover:bg-opacity-50 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
)

export default Button
