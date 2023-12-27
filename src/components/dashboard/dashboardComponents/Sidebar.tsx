import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { PlusCircle } from "lucide-react"
import path from "path"


const SidebarOptions = [
    {
        path: "/catalogue",
        name: "All Products",
    },
    {
        path: "/products",
        name: "Products",
    },
    {
        path: "/settings",
        name: "Settings",
    }
]

const Sidebar = () => {
    return (
        <div className="space-y-4 flex flex-col items-center h-full text-primary w-full bg-slate-300 mt-[56px] dark:bg-[#1E1F22] py-3">
            <button className="mt-5">
                <PlusCircle className="w-8 h-8 text-zinc-600 hover:text-zinc-700 transition-all duration-100 ease-in-out cursor-pointer dark:text-white dark:hover:text-zinc-400" />
            </button>
            <Separator className="h-[2px] bg-zinc-700 dark:bg-zinc-400 rounded-md w-[100px] mx-auto" />
            <ScrollArea className="flex-1">
                <div className="flex flex-col items-center justify-center space-y-2">
                    {/* Todo: routing */}
                    {SidebarOptions.map((option, index) => (
                        <Button
                            key={index}
                            className="w-full justify-start"
                            variant="ghost"
                            size="lg"
                            color="primary"
                            onClick={() => {
                                window.location.href = path.join("/dashboard", option.path)
                            }}
                        >
                            {option.name}
                        </Button>
                    ))}
                </div>
            </ScrollArea>
            <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
                <ModeToggle />
            </div>
        </div>
    )
}

export default Sidebar