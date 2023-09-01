import SidebarLink from "./SidebarLink";

const Sidebar = () => {
    return (
        <div className="text-lightGray fixed bottom-4 right-4  flex-col items-end hidden sm:flex md:flex lg:flex text-color font-bold" >
            <SidebarLink href="#intro" text="/Home"/>
            <SidebarLink href="#about" text="/About"/>
            <SidebarLink href="#projects" text="/My Projects"/>
        </div>
    );
}

export default Sidebar;