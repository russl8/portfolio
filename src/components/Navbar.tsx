import FadeInSection from "./FadeInSection";
import SidebarLink from "./SidebarLink";

const links = [
    <SidebarLink href="#intro" text="home" />,
    <SidebarLink href="#about" text="about" />,
    <SidebarLink href="#projects" text="my projects" />
];

const Navbar = () => {
    return (
        <div className="fixed  z-50 w-full text-color">
            <FadeInSection delay={`100ms`}>
                <div className=" w-[450px]flex justify-center items-center mt-4 px-10 sm:hidden">
                    <div className="w-450 py-2 bg-[#000000] rounded-lg flex justify-around items-center mt-8 mx-4">
                        {links.map((link, i) => (
                            <div key={i} className="mx-2">
                                {link}
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
};

export default Navbar;
