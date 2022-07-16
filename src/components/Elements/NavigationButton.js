import { MenuIcon } from '@heroicons/react/outline'

const NavigationButton = ({ className, props, setOpen,bigScreen }) => (
    <button
        type="button"
        className={`${className} bg-white p-2 rounded-md text-gray-400 ${bigScreen?'lg:flex hidden':'flex lg:hidden'}`}
        {...props}
        onClick={() => setOpen(true)}>
        <span className="sr-only">Open menu</span>
        <MenuIcon className={`${bigScreen?'h-8 w-8 hover:text-hovercolor-500':'h-6 w-6'}`} aria-hidden="true" />
    </button>
)

export default NavigationButton
