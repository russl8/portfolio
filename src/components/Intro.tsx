import Typewriter from 'react-ts-typewriter';

//https://github.com/gerardmarquinarubio/ReactTypewriter
const Intro = () => {
    return (
        <div className="flex items-center justify-center h-[100vh]" id = "intro">
            <div className="flex flex-col text-lightGray">
                <h1 className='text-4xl'>
                    <Typewriter text="Hi, Russell here." speed={120} />
                </h1>
                <p>
                    I am a second-year student studying Computer Science at York University. 
                </p>
            </div>
            
        </div>
    );
}

export default Intro;