const ButtonProductSize = ({
    type = 'submit',
    item,
    selected,
    className,
    onChangeProductSize,
    ...props
}) => (
    <button
        type={type}
        className={`${className} ${
            item.id == selected ? 'bg-gray-900 text-white' : 'text-gray-900'
        } text-md bg-gray-50 flex justify-center items-center px-4 py-2 border rounded-md whitespace-nowrap hover:bg-opacity-50 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25 transition ease-in-out duration-150 border-gray-900`}
        {...props}
        onClick={() => onChangeProductSize(item.id)}>
        {item.label}
    </button>
)

export default ButtonProductSize
