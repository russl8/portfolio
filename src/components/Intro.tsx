import Typewriter from 'react-ts-typewriter';
import PageDiv from './PageDiv';

//https://github.com/gerardmarquinarubio/ReactTypewriter
const Intro = () => {
    return (
        <PageDiv id="intro" className="h-[100vh]">
            <div className="flex flex-col">
                <h1 className='text-3xl font-bold'>
                    <Typewriter text="Hi, I'm Russell!" speed={140} />
                </h1>
                <p>
                    I'm a second-year Computer Science student at York University.
                </p>
            </div>
        </PageDiv>
    );
}

export default Intro;