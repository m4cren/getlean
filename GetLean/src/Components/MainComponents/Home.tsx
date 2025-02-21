import style from './Home.module.scss';

const Home = () => {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <h1>Your Trusted Personal Trainier</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas doloribus nulla tenetur non aut, illo dolorum ipsa
                    consequatur fugiat. Eum inventore laudantium assumenda vero
                    similique, cupiditate ut consectetur! Praesentium,
                    quibusdam.
                </p>
            </div>
            <div className={style.hero}>
                <img
                    src="./../../../public/images/hero.png"
                    alt=""
                    className={style['hero-desktop']}
                />
                <img
                    src="./../../../public/images/phone_background.png"
                    alt=""
                    className={style['phone-hero']}
                />
            </div>
            <img
                src="./../../../public/images/overlay1.png"
                alt=""
                className={style['overlay']}
            />
        </div>
    );
};

export default Home;
