export default function MobileMenu({
    visible
}: {
    visible?: boolean
}) {
    if (!visible) {
        return null
    }
    return (
        <div className="bg-black w-56 absolute top-8 left-0 py-5
        flex-col border-2 border-gray-800 flex">
            <ul className="flex flex-col gap-4">
                <li className="px-4 text-center text-white">
                    Home
                </li>
                <li className="px-4 text-center text-white">
                    TV Shows
                </li>
                <li className="px-4 text-center text-white">
                    Movies
                </li>
                <li className="px-4 text-center text-white">
                    New & Popular
                </li>
                <li className="px-4 text-center text-white">
                    My List
                </li>
                <li className="px-4 text-center text-white">
                    Browse by Languages
                </li>
            </ul>
        </div>
    )
}