import style from './About.module.scss';

const About = () => {
    return (
        <div className={style['main']}>
            <img src="/images/about.png" alt="" />
            <div>
                <h1>Push your limits achieve greatness through fitness</h1>
                <p>
                    Your journey won’t be easy. Laziness, peer pressure, busy
                    days, being sick, days with no motivation, all of that will
                    come to you once you started your journey, but I want y’all
                    to know that I’ve been there and now I’m still here pursuing
                    my goals and trying to inspire those who want to change for
                    the better. And since you’re here, that means that your one
                    of the few folks who wants to take a step and be better in
                    life.
                </p>
            </div>
        </div>
    );
};

export default About;
