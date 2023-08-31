import SidebarLink from "./SidebarLink";

const Sidebar = () => {
    return (
        <div className="text-lightGray fixed bottom-4 right-4  flex-col items-end hidden md:flex lg:flex" >
            <SidebarLink href="#intro" text="Home"/>
            <SidebarLink href="#about" text="About"/>
            <SidebarLink href="#projects" text="My Projects"/>
        </div>
    );
}

export default Sidebar;