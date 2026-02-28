import { SquareKanban, SquareStop, Settings } from "lucide-react";
import { AvatarBadge, AvatarFallback, AvatarImage, Avatar} from "./ui/avatar";

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

function MenuItem({ icon, label, active = false }: MenuItemProps) {
    const activeClass = active ? "bg-slate-400 text-black" : "text-slate-600";

    return (
           <div className="group w-10 h-10 text-center flex flex-col items-center justify-center">
                        <div className={`mb-1 p-2 w-8 h-8 ${activeClass} rounded group-hover:bg-gray-200 transition-all duration-300`}>
                            {icon}
                        </div>
                        
                        <span className="text-xs group-hover:text-zinc-900">{label}</span>
            </div>
    )
}
function MainSidebar() {
    return (
        <aside className="w-16 border-r border-black-200 flex flex-col items-center justify-between py-4">
                {/* Main menu */}
            <div id="MainMenu">
                 <div className="brand w-10 h-10 bg-slate-600 rounded-lg mb-8"></div>
                 <nav className="flex flex-col items-center justify-center space-y-6">
                    <MenuItem icon={<SquareKanban className="w-4 h-4" />} label="Projects" active  />
                    <MenuItem icon={<SquareStop className="w-4 h-4" />} label="Wiki" />
                    <MenuItem icon={<SquareKanban className="w-4 h-4" />} label="Pi" />
                 </nav>
            </div>

            {/* End Main Menu */}
           <div id="use-menu" className="felx flex-col justify-center item-center space-y-4">
                 
                 <div id="Setting">
                    {/* <nav className="flex flex-col items-center justify-center space-y-6">
                        <MenuItem icon={<Settings className="w-4 h-4" />} label="" />
                    </nav> */}
                    <Settings />

                 </div>
{/* 
                <div className="brand w-10 h-10 bg-slate-600 rounded-full">
                    <AvatarFallback className="w-full h-full text-sm">JD</AvatarFallback> */}

                <div id="avatar">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                    </Avatar>
                </div>
            </div>
        </aside>
    )
}

export default MainSidebar;