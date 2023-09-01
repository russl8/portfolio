import SidebarLink from "./SidebarLink";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconLink from "./IconLink";

const Sidebar = () => {
    return (
        <div className="text-lightGray fixed bottom-8 right-8  flex-col items-end hidden sm:flex md:flex lg:flex text-color font-bold text-sm"  >
            <SidebarLink href="#intro" text="home" />
            <SidebarLink href="#about" text="about" />
            <SidebarLink href="#projects" text="my projects" />

            <div className="mt-4">
                <IconLink link="https://github.com/russl8">
                    <GitHubIcon />
                </IconLink>
                <IconLink link="mailto:russl8@my.yorku.ca" className="mx-1">
                    <EmailIcon />
                </IconLink>
                <IconLink link="https://www.linkedin.com/in/russell-liu-850901257/">
                    <LinkedInIcon />
                </IconLink>
            </div>
        </div>
    );
}

export default Sidebar;