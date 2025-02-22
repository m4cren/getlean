import style from './FooterPhone.module.scss';
import { FaHome } from 'react-icons/fa';
import { IoIosInformationCircle } from 'react-icons/io';
import { AiFillProduct } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { SetStateAction } from 'react';
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
const FooterPhone = ({
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
    return (
        <div className={style['footer-container']}>
            <button
                onClick={() => {
                    window.location.href = '#home';
                    setIsSelected(1);
                    setAbout(false);
                    setClient(false);
                    setProgram(false);
                }}
                className={
                    isSelected === 1 || isHome ? `${style.touched}` : 'none'
                }
            >
                <FaHome />
            </button>
            <button
                onClick={() => {
                    window.location.href = '#about';
                    setIsSelected(2);
                    setHome(false);
                    setClient(false);
                    setProgram(false);
                }}
                className={
                    isSelected === 2 || isAbout ? `${style.touched}` : 'none'
                }
            >
                <IoIosInformationCircle />
            </button>
            <button
                onClick={() => {
                    window.location.href = '#programs';
                    setIsSelected(3);
                    setHome(false);
                    setClient(false);
                    setAbout(false);
                }}
                className={
                    isSelected === 3 || isProgram ? `${style.touched}` : 'none'
                }
            >
                <AiFillProduct />
            </button>
            <button
                onClick={() => {
                    window.location.href = '#clients';
                    setIsSelected(4);
                    setHome(false);
                    setProgram(false);
                    setAbout(false);
                }}
                className={
                    isSelected === 4 || isClient ? `${style.touched}` : 'none'
                }
            >
                <BsPeopleFill />
            </button>
        </div>
    );
};

export default FooterPhone;
