const ApplicationLogo = props => (
    <div className="flex-shrink-0 flex items-center mx-4 lg:mx-0" {...props}>
        <img
            className="block sm:hidden w-40 h-full"
            // src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            src="/images/logo_or.webp"
            alt="Workflow"
        />
        <img
            className="hidden sm:block w-96"
            // src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"/
            src="/images/logo_or.webp"
            alt="Workflow"
        />
    </div>
)

export default ApplicationLogo
