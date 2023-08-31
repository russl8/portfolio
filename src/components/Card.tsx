import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
interface CardProps {
    proj: {
        name: string;
        description: string;
        stack: string;
        githubLink: string;
        siteLink?: string;
    }
}


const Card: React.FC<CardProps> = ({ proj }) => {
    return (
        <div className="bg-gray h-[300px]  w-[250px] rounded-xl cursor-pointer p-4">
            <div className="text-darkGray flex flex-row justify-between font-bold text-xl ">
                {proj.name}
                <div className="flex flex-row bottom-0">

                    <a className="" href={proj.githubLink}>
                        <GitHubIcon />
                    </a>
                    {proj.siteLink ? <a href={proj.siteLink}><OpenInBrowserIcon /></a> : <></>}
                </div>
            </div>

            < div className="my-4">
                {proj.description}
            </div>

            <div className="text-xs">
                {proj.stack}
            </div>




        </div>
    );
}

export default Card;
