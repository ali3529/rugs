const Select = ({ className, itemClassName, items, ...props }) => (
    <select
        {...props}
        className={`${className} rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base w-full`}>
        {items.map((item, index) => (
            <option
                className={`${itemClassName} `}
                key={index}
                name={item.name}>
                {item.value}
            </option>
        ))}
    </select>
)

export default Select
