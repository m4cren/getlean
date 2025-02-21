import { useState } from 'react';
import Card from './Card';
import CardPhone from './CardPhone';
import style from './Programs.module.scss';
import ProgramCardPhone from './ProgramCardPhone';

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
                        imgLink="/images/cat.jpg"
                        target={['fef']}
                        title="Program 1"
                        content="lorem lorem"
                    />
                    <Card
                        imgLink="/images/cheetah.jpg"
                        target={['fef', 'scs']}
                        title="Program 2"
                        content="blah"
                    />
                </div>
                <div className={style['line']}>
                    <Card
                        imgLink="/images/gorilla.jpg"
                        target={['fef', 'scs']}
                        title="Program 3"
                        content="blah"
                    />
                    <Card
                        imgLink="/images/cat.jpg"
                        target={['fef', 'scs']}
                        title="Program 4"
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
                            <CardPhone
                                imgLink="/images/cat.jpg"
                                title="Program 1"
                                content="lorem lorem"
                            />
                        </div>
                        <div
                            className="card-phone-container"
                            onClick={() => {
                                setIsCard(false);
                                setProgramTwo(true);
                            }}
                        >
                            <CardPhone
                                imgLink="/images/cheetah.jpg"
                                title="Program 2"
                                content="lorem lorem"
                            />
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
                            <CardPhone
                                imgLink="/images/gorilla.jpg"
                                title="Program 3"
                                content="lorem lorem"
                            />
                        </div>
                        <div
                            className="card-phone-container"
                            onClick={() => {
                                setIsCard(false);
                                setProgramFour(true);
                            }}
                        >
                            <CardPhone
                                imgLink="/images/cat.jpg"
                                title="Program 4"
                                content="lorem lorem"
                            />
                        </div>
                    </div>
                </div>
            )}

            {isProgramOne && (
                <ProgramCardPhone
                    title="Program 1"
                    content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet doloribus fuga quo iste dolor odit commodi natus suscipit quis, ex nisi rerum facilis dolores eveniet dolorum ducimus maiores delectus!"
                    setIsCard={setIsCard}
                    setProgramFour={setProgramFour}
                    setIsProgramOne={setIsProgramOne}
                    setProgramThree={setProgramThree}
                    setProgramTwo={setProgramTwo}
                />
            )}
            {isProgramTwo && (
                <ProgramCardPhone
                    title="Program 2"
                    content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet doloribus fuga quo iste dolor odit commodi natus suscipit quis, ex nisi rerum facilis dolores eveniet dolorum ducimus maiores delectus!"
                    setIsCard={setIsCard}
                    setProgramFour={setProgramFour}
                    setIsProgramOne={setIsProgramOne}
                    setProgramThree={setProgramThree}
                    setProgramTwo={setProgramTwo}
                />
            )}
            {isProgramThree && (
                <ProgramCardPhone
                    title="Program 3"
                    content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet doloribus fuga quo iste dolor odit commodi natus suscipit quis, ex nisi rerum facilis dolores eveniet dolorum ducimus maiores delectus!"
                    setIsCard={setIsCard}
                    setProgramFour={setProgramFour}
                    setIsProgramOne={setIsProgramOne}
                    setProgramThree={setProgramThree}
                    setProgramTwo={setProgramTwo}
                />
            )}
            {isProgramFour && (
                <ProgramCardPhone
                    title="Program 4"
                    content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet doloribus fuga quo iste dolor odit commodi natus suscipit quis, ex nisi rerum facilis dolores eveniet dolorum ducimus maiores delectus!"
                    setIsCard={setIsCard}
                    setProgramFour={setProgramFour}
                    setIsProgramOne={setIsProgramOne}
                    setProgramThree={setProgramThree}
                    setProgramTwo={setProgramTwo}
                />
            )}
        </>
    );
};

export default Programs;
