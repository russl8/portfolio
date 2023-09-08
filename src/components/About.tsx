import FadeInSection from "./FadeInSection";
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
        "Flask",
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
                <FadeInSection>

                    <h1 className="text-3xl font-bold text-center">About Me!</h1>
                    <h3 className="text-xl  text-center  my-2 w-full">I am interested in both client and server-side development! Technologies I am currently working with are:</h3>
                </FadeInSection>

                
                <FadeInSection>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col mr-[100px]">
                            <h4 className="text-lg font-bold">Languages</h4>
                            <ul>
                                {languages.map(lang => <li>{lang}</li>)}
                            </ul>
                        </div>

                        <div >
                            <h4 className="text-lg font-bold text-end">Developer Tools</h4>
                            <ul className="flex flex-col items-end">
                                {tools.map(tool => <li>{tool}</li>)}
                            </ul>
                        </div>

                    </div>
                </FadeInSection>

                {/* <h3 className="text-xl mt-8"></h3> */}
            </PageDiv >
        </>

    );
}

export default About;
