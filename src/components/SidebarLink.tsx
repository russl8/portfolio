interface SidebarLinkProps {
    href: string;
    text: string;
}

const SidebarLink : React.FC<SidebarLinkProps>= ({href,text}) => {
    return (
        <a href={href} >
           {text}
        </a>
    );
}

export default SidebarLink;