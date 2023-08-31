import Card from "./Card";
import PageDiv from "./PageDiv";

const Projects = () => {
    const projects = [
        {
            name: "BeGrate!",
            description: "A blog app allowing authenticated users to create, edit, update, and delete posts.",
            stack: "MongoDB, Node.js (Express.js), React (JavaScript), MaterialUI, Passport.js",
            githubLink: "https://github.com/russl8/BeGrate",
            siteLink: "https://super-moonbeam-3b61d6.netlify.app/"
        },

        {
            name: "YorkRMC",
            description: "A Chrome extension that displays data from ratemycourses.io onto York University's course information ipages.",
            stack: "JavaScript, Node.js (Express.js), Puppeteer",
            githubLink: "https://github.com/russl8/YorkRMC",
            siteLink: "https://chrome.google.com/webstore/detail/yorkrmc/idmpighcjfjokifedbmlnmlfdjedidfb"
        },

        {
            name: "Portfolio",
            description: "A website showcasing my software creations.",
            stack: "React (TypeScript), TailwindCSS",
            githubLink: "G",
        },
        {
            name: "Portfolio",
            description: "My portfolio website!",
            stack: "React (TypeScript), TailwindCSS",
            githubLink: "G",
        }
    ]
    return (
        <PageDiv id="projects">
            <h1 className="text-3xl font-bold">My Projects!</h1>

            <div className="grid xl:grid-cols:3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10 my-2">
                {projects.map(proj => <Card proj={proj} />)}
            </div>
        </PageDiv>
    );
}

export default Projects;