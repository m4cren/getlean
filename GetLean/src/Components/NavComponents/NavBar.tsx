import { SetStateAction, useRef, useState } from 'react';
import style from './NavBar.module.scss';
import { FaArrowLeft } from 'react-icons/fa';

import { Dispatch } from 'react';
import emailjs from '@emailjs/browser';
import PromtMessage from './PromtMessage';

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
    const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
    const [isEmailFailed, setIsEmailFailed] = useState<boolean>(false);

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_nqt8ych',
                'template_chf2vzc',
                form.current!,
                'eJlgYIa4kspBOrunu'
            )
            .then(
                (result) => {
                    console.log('Email sent:', result.text);
                    form.current?.reset();
                    setIsEmailSent(true);

                    setTimeout(() => {
                        setIsEmailSent(false);
                    }, 2950);
                },
                (error) => {
                    console.log('Error:', error.text);
                    setIsEmailFailed(true);
                    setTimeout(() => {
                        setIsEmailFailed(false);
                    }, 2950);
                }
            );
        setIsContactShown(false);
    };

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
                            <h2>Send me an email</h2>
                        </div>
                        <div className={style['contact-information']}>
                            <form ref={form} onSubmit={sendEmail}>
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="Your Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder="Your Email"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <div className={style['prompt']}>
                {isEmailSent && (
                    <PromtMessage
                        isEmailFailed={isEmailFailed}
                        isEmailSent={isEmailSent}
                    />
                )}
                {isEmailFailed && (
                    <PromtMessage
                        isEmailFailed={isEmailFailed}
                        isEmailSent={isEmailSent}
                    />
                )}
            </div>
        </nav>
    );
};

export default NavBar;
