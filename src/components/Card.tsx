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
        <div className="bg-cardbackground h-[300px]  w-[250px] rounded-xl p-4 hover:translate-y-2">
            <div className="text-darkGray flex flex-row justify-between font-bold text-xl ">
                <div className='cursor-default'>
                {proj.name}

                </div>
                <div className="flex flex-row bottom-0">

                    <a href={proj.githubLink}>
                        <GitHubIcon />
                    </a>
                    {proj.siteLink ? <a href={proj.siteLink} className="ml-2"><OpenInBrowserIcon /></a> : <></>}
                </div>
            </div>

            < div className="my-4 cursor-default">
                {proj.description}
            </div>

            <div className="text-xs cursor-default">
                {proj.stack}
            </div>




        </div>
    );
}

export default Card;
