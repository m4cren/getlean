import style from './ProgramCardPhone.module.scss';
import { FaArrowLeft } from 'react-icons/fa6';

interface Props {
    setProgramFour: React.Dispatch<React.SetStateAction<boolean>>;
    setProgramThree: React.Dispatch<React.SetStateAction<boolean>>;
    setProgramTwo: React.Dispatch<React.SetStateAction<boolean>>;
    setIsProgramOne: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCard: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    content: string;
}

const ProgramCardPhone = ({
    setProgramFour,
    setProgramThree,
    setProgramTwo,
    setIsProgramOne,
    setIsCard,
    title,
    content,
}: Props) => {
    return (
        <div>
            <div className={style['program-content']}>
                <div className={style['head']}>
                    <button
                        onClick={() => {
                            setProgramFour(false);
                            setProgramThree(false);
                            setProgramTwo(false);
                            setIsProgramOne(false);
                            setIsCard(true);
                        }}
                    >
                        <FaArrowLeft />
                    </button>
                    <h1>{title}</h1>
                </div>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default ProgramCardPhone;
