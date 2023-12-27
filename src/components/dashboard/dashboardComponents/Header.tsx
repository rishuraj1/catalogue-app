import { UserButton } from "@clerk/clerk-react"

const Header = () => {
    return (
        <div className="hidden md:flex justify-between bg-slate-300 dark:bg-[#1E1F22] p-3">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            <UserButton />
        </div>
    )
}

export default Header