import Card from "./Card";
import FadeInSection from "./FadeInSection";
import PageDiv from "./PageDiv";

const Projects = () => {
    const projects = [
        {
            name: "BeGrate!",
            description: "A blog app allowing authenticated users to create, edit, update, and delete posts.",
            stack: "MongoDB (Mongoose), Node.js (Express.js), React (JavaScript), MaterialUI, Passport.js",
            githubLink: "https://github.com/russl8/BeGrate",
            siteLink: "https://super-moonbeam-3b61d6.netlify.app/"
        },

        {
            name: "YorkRMC",
            description: "A Chrome extension that displays data from ratemycourses.io onto York University's course information page.",
            stack: "JavaScript, Node.js (Express.js), Puppeteer",
            githubLink: "https://github.com/russl8/YorkRMC",
            siteLink: "https://chrome.google.com/webstore/detail/yorkrmc/idmpighcjfjokifedbmlnmlfdjedidfb"
        },

        {
            name: "Portfolio Site",
            description: "A website showcasing my software creations.",
            stack: "React (TypeScript), TailwindCSS, MaterialUI",
            githubLink: "https://github.com/russl8/portfolio",
        },
        {
            name: "Live Chat Room",
            description: "A local real-time chat application that retains chat history, letting users engage in live conversations using sockets.",
            stack: "Python (Flask), PostgreSQL (SQLAlchemy), JavaScript, HTML, CSS",
            githubLink: "https://github.com/russl8/flaskchat",
        },

    ]
    return (
        <FadeInSection>

            <PageDiv id="projects">
                <h1 className="text-3xl font-bold">My Projects!</h1>

                <div className="grid xl:grid-cols:3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-5 my-4">
                    {projects.map((proj, i) => (
                        <FadeInSection delay={`${i + 5}00ms`}>
                            <Card proj={proj} />
                        </FadeInSection>
                    ))}
                </div>
            </PageDiv>
        </FadeInSection>

    );
}

export default Projects;