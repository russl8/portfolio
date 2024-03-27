import FadeInSection from "./FadeInSection";
import SidebarLink from "./SidebarLink";

const links = [
    <SidebarLink href="#intro" text="home" />,
    <SidebarLink href="#about" text="about" />,
    <SidebarLink href="#projects" text="my projects" />
]
const Navbar = () => {
    return (
        <FadeInSection delay={`100ms`}>
            <div className="w-full flex justify-center z-1000 items-center mt-4 px-10 sm:hidden">
                <div className=" fixed  w-[450px] py-2 text-color bg-[#000000] rounded-lg flex justify-around items-center mt-8 mx-4">
                    {links.map((link, i) => (
                        <div className="">
                            {link}
                        </div>
                    ))}
                </div>
            </div>
        </FadeInSection>

    );
}

export default Navbar;