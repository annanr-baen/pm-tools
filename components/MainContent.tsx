import { Button } from "./ui/button";
// import { Input } from "./ui/input";
import { SquarePen, Search, House, Inbox, Briefcase, Users2, Ellipsis, Layers, Circle, Wifi, Rocket, AlarmClockCheck } from "lucide-react";
import menus from "@/data/menus.json";
import KanbanBoard from "@/components/Kanban/KanbanBoard";

interface MenuItemPropsMC {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

function MenuItemMc({ icon, label, active = false } : MenuItemPropsMC) {
    const activeClass = active ? "bg-slate-100 text-black rounded-md" : "text-slate-600 ";

    return (
        <div className={`group w-full h-10 text-left flex flex-row justify-start space-x-1 items-center ${activeClass} group-hover:bg-gray-200 transition-all duration-300`}>
            <div className={`w-8 h-8 flex items-center justify-center`}>{icon}</div>
            <span className="text-sm flex justify-center items-center space-y-2">{label}</span>
        </div>
    )
}

function MainContent() {
     const { main } = menus;

    return(
        <main className="flex w-full bg-white rounded-lg shadow-lg">
            <div id="Menu" className="w-65 h-full border-r bg-white rounded-lg shadow-lg p-4 flex flex-col space-y-3">
                <h1 className="font-bold font-sans">Projects</h1>

                <div id="search" className="flex items-center relative space-x-1">
                    {/* <Input type="search" placeholder="       New work Item" /> */}
                    <Button variant={"outline"} className="bg-white w-45">
                        <p className="text-sm font-sans font-normal space-x-1">New work item</p>
                    </Button>
                    <SquarePen className="w-4 h-4 absolute left-3" />
                    <Button variant={"outline"} className="bg-white">
                        <Search className="w-4 h-4" />
                    </Button>
                </div>

                <div id="anotherMenu" className="flex flex-col space-y-1">
                    {/* {main.map((menu) => (
                        <MenuItemMc key={menu.name} icon={menu.icon} label={menu.name} />
                    ))} */}
                    <MenuItemMc icon={<House className="w-5 h-5" />} label="Home" />
                    <MenuItemMc icon={<Inbox className="w-5 h-5" />} label="Inbox" />
                    <MenuItemMc icon={<Briefcase className="w-5 h-5" />} label="Projects" />
                    <MenuItemMc icon={<Users2 className="w-5 h-5" />} label="Teamspaces" />
                    <MenuItemMc icon={<Ellipsis className="w-5 h-5" />} label="More" />
                    {/* <MenuItemMc icon={<House className="w-5 h-5" />} label="Home" />
                    <MenuItemMc icon={<House className="w-5 h-5" />} label="Home" />
                    <MenuItemMc icon={<House className="w-5 h-5" />} label="Home" /> */}
                </div>

                <br />

                <div id="teamSpace" className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold text-gray-500">Teamspaces</p>
                    <MenuItemMc icon={<Search className="w-5 h-5" />} label="Marketing" />
                </div>

                <br />

                <div id="Projects" className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-500">Projects</p>
                    <MenuItemMc icon={<Rocket className="w-5 h-5" />} label="Auto-campaigns launch" />

                        <div id="hover" className="flex flex-col space-y-1 p-2">
                            <MenuItemMc icon={<Wifi className="w-5 h-5" />} label="Overview" />
                            <MenuItemMc icon={<Layers className="w-5 h-5" />} label="Work items" active />
                            <MenuItemMc icon={<Circle className="w-5 h-5" />} label="Cycles" />
                        </div>

                    <MenuItemMc icon={<AlarmClockCheck className="w-5 h-5" />} label="Home" />
                </div>

            </div>

            <div id="Content" className="w-full h-full bg-gray-200 flex-1 shadow-lg">
                <KanbanBoard />
            </div>
        </main>
    );
}

export default MainContent;