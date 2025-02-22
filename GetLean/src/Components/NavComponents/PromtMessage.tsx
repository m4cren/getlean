import style from './PromptMessage.module.scss';
import { FaCheckCircle } from 'react-icons/fa';
import { MdError } from 'react-icons/md';

interface Props {
    isEmailSent: boolean;
    isEmailFailed: boolean;
}

const PromtMessage = ({ isEmailFailed, isEmailSent }: Props) => {
    return (
        <div className={style['main']}>
            <div>
                {isEmailSent && (
                    <span style={{ color: 'greenyellow' }}>
                        <FaCheckCircle />
                    </span>
                )}

                {isEmailFailed && (
                    <span style={{ color: 'red' }}>
                        <MdError />
                    </span>
                )}

                <h1>
                    {isEmailFailed && 'Something went wrong'}
                    {isEmailSent && 'Submmitted Successfully'}
                </h1>
            </div>
        </div>
    );
};

export default PromtMessage;
