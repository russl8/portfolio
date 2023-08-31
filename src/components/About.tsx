import PageDiv from "./PageDiv";

const About = () => {

    const languages = [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "HTML",
        "CSS",
        "SQL"
    ]

    const tools = [
        "React",
        "Node",
        "Express",
        "MaterialUI",
        "TailwindCSS",
        "MongoDB",
        "PostgreSQL"
    ]


    return (
        <>
            <PageDiv id="about">
                <h1 className="text-3xl font-bold">About Me!</h1>
                <h3 className="text-xl  text-center  my-2 w-full">I am interested in both client and server-side development! Technologies I am currently working with are:</h3>
                <div className="flex flex-row items-center justify-center">

                    <div className="flex flex-col mr-[250px]">
                        <h4 className="text-lg font-bold">Languages</h4>
                        <ul>
                            {languages.map(lang => <li>{lang}</li>)}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold">Developer Tools</h4>
                        <ul className="flex flex-col items-end">
                            {tools.map(tool => <li>{tool}</li>)}
                        </ul>
                    </div>
                </div>
                {/* <h3 className="text-xl mt-8"></h3> */}
            </PageDiv>
        </>

    );
}

export default About;
