import { useState } from 'react';
import Card from './Card';
import CardPhone from './CardPhone';
import style from './Programs.module.scss';
import { FaArrowLeft } from 'react-icons/fa6';
const Programs = () => {
    const [isProgramOne, setIsProgramOne] = useState<boolean>(false);
    const [isProgramTwo, setProgramTwo] = useState<boolean>(false);
    const [isProgramThree, setProgramThree] = useState<boolean>(false);
    const [isProgramFour, setProgramFour] = useState<boolean>(false);
    const [isCard, setIsCard] = useState<boolean>(true);
    return (
        <>
            <div className={style['container-desktop']}>
                <div className={style['line']}>
                    <Card
                        imgLink="../../../public/images/cat.jpg"
                        target={['fef']}
                        title="Program"
                        content="lorem lorem"
                    />
                    <Card
                        imgLink="../../../public/images/cheetah.jpg"
                        target={['fef', 'scs']}
                        title="Program"
                        content="blah"
                    />
                </div>
                <div className={style['line']}>
                    <Card
                        imgLink="../../../public/images/gorilla.jpg"
                        target={['fef', 'scs']}
                        title="Program"
                        content="blah"
                    />
                    <Card
                        imgLink="../../../public/images/cat.jpg"
                        target={['fef', 'scs']}
                        title="Program"
                        content="blah"
                    />
                </div>
            </div>

            {isCard && (
                <div className={style['container-phone']}>
                    <div className={style['line-phone']}>
                        <div
                            className="card-phone-container"
                            onClick={() => {
                                setIsCard(false);
                                setIsProgramOne(true);
                            }}
                        >
                            <CardPhone />
                        </div>
                        <div
                            className="card-phone-container"
                            onClick={() => {
                                setIsCard(false);
                                setProgramTwo(true);
                            }}
                        >
                            <CardPhone />
                        </div>
                    </div>
                    <div className={style['line-phone']}>
                        <div
                            className="card-phone-container"
                            onClick={() => {
                                setIsCard(false);
                                setProgramThree(true);
                            }}
                        >
                            <CardPhone />
                        </div>
                        <div
                            className="card-phone-container"
                            onClick={() => {
                                setIsCard(false);
                                setProgramFour(true);
                            }}
                        >
                            <CardPhone />
                        </div>
                    </div>
                </div>
            )}

            {isProgramOne && (
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
                        <h1>Title Program 1</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa amet doloribus fuga quo iste dolor odit commodi
                        natus suscipit quis, ex nisi rerum facilis dolores
                        eveniet dolorum ducimus maiores delectus!
                    </p>
                </div>
            )}
            {isProgramTwo && (
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
                        <h1>Title Program 2</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa amet doloribus fuga quo iste dolor odit commodi
                        natus suscipit quis, ex nisi rerum facilis dolores
                        eveniet dolorum ducimus maiores delectus!
                    </p>
                </div>
            )}
            {isProgramThree && (
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
                        <h1>Title Program 3</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa amet doloribus fuga quo iste dolor odit commodi
                        natus suscipit quis, ex nisi rerum facilis dolores
                        eveniet dolorum ducimus maiores delectus!
                    </p>
                </div>
            )}
            {isProgramFour && (
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
                        <h1>Title Program 4</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa amet doloribus fuga quo iste dolor odit commodi
                        natus suscipit quis, ex nisi rerum facilis dolores
                        eveniet dolorum ducimus maiores delectus!
                    </p>
                </div>
            )}
        </>
    );
};

export default Programs;
