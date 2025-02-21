import { SetStateAction, useState } from 'react';
import style from './NavBar.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { Dispatch } from 'react';

interface Props {
    isHome: boolean;
    setHome: Dispatch<SetStateAction<boolean>>;
    isAbout: boolean;
    setAbout: Dispatch<SetStateAction<boolean>>;
    isProgram: boolean;
    setProgram: Dispatch<SetStateAction<boolean>>;
    isClient: boolean;
    setClient: Dispatch<SetStateAction<boolean>>;
    setIsSelected: Dispatch<SetStateAction<number>>;
    isSelected: number;
}
const NavBar = ({
    isHome,
    setHome,
    isAbout,
    setAbout,
    isProgram,
    setProgram,
    isClient,
    setClient,
    setIsSelected,
    isSelected,
}: Props) => {
    const [isContactShown, setIsContactShown] = useState<boolean>(false);

    return (
        <nav className={style['nav-bar']}>
            <h1>
                Get<span>Lean</span>
            </h1>

            <button
                className={style['phone-toggle']}
                onClick={() => {
                    setIsContactShown(true);
                }}
            >
                Get in touch
            </button>

            <ul className={style['list-container']}>
                <li
                    onClick={() => {
                        setIsSelected(1);
                        setAbout(false);
                        setClient(false);
                        setProgram(false);
                    }}
                    className={
                        isSelected === 1 || isHome
                            ? `${style.selected}`
                            : 'none'
                    }
                >
                    <a href="#home" className={style.link}>
                        Home
                    </a>
                </li>
                <li
                    onClick={() => {
                        setIsSelected(2);
                        setHome(false);
                        setClient(false);
                        setProgram(false);
                    }}
                    className={
                        isSelected === 2 || isAbout
                            ? `${style.selected}`
                            : 'none'
                    }
                >
                    <a href="#about" className={style.link}>
                        About
                    </a>
                </li>
                <li
                    onClick={() => {
                        setIsSelected(3);
                        setHome(false);
                        setClient(false);
                        setAbout(false);
                    }}
                    className={
                        isSelected === 3 || isProgram
                            ? `${style.selected}`
                            : 'none'
                    }
                >
                    <a href="#programs" className={style.link}>
                        Programs
                    </a>
                </li>
                <li
                    onClick={() => {
                        setIsSelected(4);
                        setHome(false);
                        setProgram(false);
                        setAbout(false);
                    }}
                    className={
                        isSelected === 4 || isClient
                            ? `${style.selected}`
                            : 'none'
                    }
                >
                    <a href="#clients" className={style.link}>
                        Clients
                    </a>
                </li>

                <li className={style['contact-btn']}>
                    <a
                        onClick={(
                            event: React.MouseEvent<HTMLAnchorElement>
                        ) => {
                            event.preventDefault();
                            setIsContactShown(true);
                        }}
                    >
                        Get in touch
                    </a>
                </li>
            </ul>
            {isContactShown && (
                <div className={style['contact-popup']}>
                    <div className={style['contact-container']}>
                        <div className={style['head-contact']}>
                            <button
                                onClick={() => {
                                    setIsContactShown(false);
                                }}
                            >
                                <FaArrowLeft />
                            </button>
                            <h2>Contact Information</h2>
                        </div>
                        <div className={style['contact-information']}>
                            <ul>
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
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
