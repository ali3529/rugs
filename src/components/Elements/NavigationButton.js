import { MenuIcon } from '@heroicons/react/outline'

const NavigationButton = ({ className, props, setOpen }) => (
    <button
        type="button"
        className={`${className} bg-white p-2 rounded-md text-gray-400 lg:hidden`}
        {...props}
        onClick={() => setOpen(true)}>
        <span className="sr-only">Open menu</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
    </button>
)

export default NavigationButton
