export default function Navigation() {
    return (
        <nav className="fixed w-full text-center">
            {/* LARGE WIDTH */}
            <div id="defaultNav" className="inline-flex items-center h-28" >
                <div id="navPointer"></div>
                <a href="#" className="rounded-md px-3 py-2 " aria-current="page">About Me</a>
                <a href="#" className="rounded-md px-3 py-2 " aria-current="page">Projects</a>
                <a href="#" className="rounded-md px-3 py-2 " aria-current="page">Contact Me</a>
            </div>

            
            {/* Dropdown Burger */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                </div>
            </div>
        </nav>
    )

}