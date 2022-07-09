const ButtonProductColor = ({
    main_color,
    image,
    onChangeProductColor,
    ...props
}) => (
    <img
        className={`w-14 h-14 border-2 border-green-500 shadow cursor-pointer ${
            main_color == image.main_color ? 'border-2' : 'border-none'
        }`}
        src={image.url}
        onClick={() => onChangeProductColor(image)}
        {...props}
    />
)

export default ButtonProductColor
