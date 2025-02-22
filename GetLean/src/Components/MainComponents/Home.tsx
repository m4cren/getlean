import style from './Home.module.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Home = () => {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <h1>You're The Sculptor of Your Body</h1>
                <p className={style['caption']}>
                    Ciao! Welcome to my website! I'm Rovict Danielle, a
                    dedicated personal fitness trainer committed helping you
                    your health and fitness goal. Whether you're looking to
                    build strength, lose weight, or improve overall welness, I
                    provide personalized training programs tailored to your
                    needs. Let's take your fitness journey to the next level,
                    start today!
                </p>
                <p className={style['caption-phone']}>
                    Look good & feel good, train with coach victtt!
                </p>

                <ul>
                    <div className={style['animate-this']}></div>
                    <li
                        onClick={() => {
                            window.open(
                                'https://www.instagram.com/rovictttt?igsh=ZXZhaHg2dXZ3OXIz&utm_source=qr',
                                '_blank'
                            );
                        }}
                    >
                        <a>
                            <span>
                                <FaInstagram />
                            </span>
                            <p>@rovictttt</p>
                        </a>
                    </li>
                    <li
                        onClick={() => {
                            window.open(
                                'https://www.tiktok.com/@rovictttt?_r=1&_d=secCgYIASAHKAESPgo8D%2Fp%2BO7X%2BY%2BC2%2BBXwxjgx4FP9SiH3ta5obleFgZXuECSvhy%2FCUpA8AoNW9kFTdCTcIHU8i1xojKYgVrQMGgA%3D&checksum=b5a33192f02f85c037d9bc819e923afe833d9cde597c594360273c757f765da5&sec_uid=MS4wLjABAAAAnM69uo85MS5DVBX8MAyXLliHY_rrG0_a1k4aL9EvftzltPRNZ12hOhmIBz72uR0Z&sec_user_id=MS4wLjABAAAAnM69uo85MS5DVBX8MAyXLliHY_rrG0_a1k4aL9EvftzltPRNZ12hOhmIBz72uR0Z&share_app_id=1180&share_author_id=6673015864420058113&share_link_id=325BC112-4A6C-4E20-9956-ABA23073091A&sharer_language=en&social_share_type=4&source=h5_t&timestamp=1738079595&tt_from=copy&u_code=d5bbicmibei9ef&ug_btm=b8727%2Cb0&user_id=6673015864420058113&utm_campaign=client_share&utm_medium=ios&utm_source=copy',
                                '_blank'
                            );
                        }}
                    >
                        <a>
                            <span>
                                <FaTiktok />
                            </span>
                            <p>yovictt</p>
                        </a>
                    </li>
                    <li
                        onClick={() => {
                            window.open(
                                'http://m.me/rovict.balagtas?hash=AbYaYFb70OGhWMve&source_id=6946816',
                                '_blank'
                            );
                        }}
                    >
                        <a>
                            <span>
                                <FaFacebook />
                            </span>
                            <p>Rovict Daniel Balagtas</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={style.hero}>
                <img
                    src="/images/hero.png"
                    alt=""
                    className={style['hero-desktop']}
                />
                <img
                    src="/images/phone_background.png"
                    alt=""
                    className={style['phone-hero']}
                />
            </div>
            <img
                src="/images/overlay1.png"
                alt=""
                className={style['overlay']}
            />
        </div>
    );
};

export default Home;
