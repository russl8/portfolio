import { twMerge } from "tailwind-merge";

interface IconLinkProps {
    children: React.ReactNode;
    link: string;
    className?: string
}


const IconLink: React.FC<IconLinkProps> = ({ children, link, className }) => {
    return (

        <a href={link} className={twMerge("hover:text-maintext", className)}>
            {children}
        </a>
    );
}

export default IconLink;