export const Button = (props) => {
    const { variant, children, ...other } = props
    const className = variant === 'primary' ?
        "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        : "rounded-md bg-white px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-gray-100"
    return (
        <button className={className} {...other}>
            {children}
        </button>
    )
}