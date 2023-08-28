import Typewriter from 'react-ts-typewriter';

//https://github.com/gerardmarquinarubio/ReactTypewriter
const Intro = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold underline'>
                <Typewriter text="Hi, Russell Here." speed={120} />
            </h1>
        </div>
    );
}

export default Intro;