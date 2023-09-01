
import { twMerge } from "tailwind-merge";

interface PageDivProps {
    children: React.ReactNode;
    id: string;
    className?: string;

}

const PageDiv: React.FC<PageDivProps> = ({ children, id, className }) => {
    return (
        <div className={twMerge(`flex flex-col items-center justify-center  mx-8 text-maintext py-8`, className)} id={id}>
            {children}
        </div>
    );
}

export default PageDiv;