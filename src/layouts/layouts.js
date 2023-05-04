export const TabContainer = ({ children }) => {
    return <div className="px-4 sm:px-6 lg:px-8">
        {children}
    </div>
}

export const TabHeader = ({ left, right }) => {
    return (
        <div className="flex items-center justify-between">
            {left}
            {right}
        </div>
    )
}

export const TabTitle = ({ title, subtitle }) => {
    return (
        <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">{title}</h1>
            <p className="mt-2 text-sm text-gray-700">{subtitle}</p>
        </div>
    )
}

export const TabContent = ({ children }) => {
    return (
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle">
                    {children}
                </div>
            </div>
        </div>
    )
}