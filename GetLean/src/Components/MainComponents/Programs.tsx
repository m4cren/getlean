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
                        title="Project Cat"
                        content="This training plan will help you achieve a well-proportioned, aesthetically appealing body shape. Want a model physique? This work-out is for you. (Recommended for girls)"
                        caption='Dm "cat" to avail '
                    />
                    <Card
                        imgLink="/images/cheetah.jpg"
                        title="Project Cheetah"
                        caption='Dm "cheetah" to avail '
                        content="A training methodology that combines different types of fitness disciplines such as strength training, endurance training, and mobility work, to develop a well-rounded athletic ability. The goal is to achieve lean physique and to improve multiple physical attributes simultaneously rather than specializing in just one. Think you can do it all? Hybrid training is for you."
                    />
                </div>
                <div className={style['line']}>
                    <Card
                        imgLink="/images/gorilla.jpg"
                        title="Project Gorilla"
                        caption='Dm "cheetah" to avail '
                        content="A workout that is focused on building strength and muscle mass, it’s made for those who want to be huge and strong. (I recommend this for those who want to be massive.) "
                    />
                    <Card
                        imgLink="/images/monkey.jpg"
                        title="Project Monkey"
                        caption='Dm "monkey" to avail '
                        content="It is a full training plan that only requires you to use your bodyweight in order to gain muscle, strength, endurance, and flexibility. (This training is for those who can’t or doesn’t want to go to the gym.) "
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
                                title="Project Cat"
                                caption='Dm "cat" to avail '
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
                                title="Project Cheetah"
                                caption='Dm "cheetah" to avail '
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
                                title="Project Gorilla"
                                caption='Dm "cheetah" to avail '
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
                                imgLink="/images/monkey.jpg"
                                title="Project Monkey"
                                caption='Dm "monkey" to avail '
                            />
                        </div>
                    </div>
                </div>
            )}

            {isProgramOne && (
                <ProgramCardPhone
                    title="Project Cat"
                    content="This training plan will help you achieve a well-proportioned, aesthetically appealing body shape. Want a model physique? This work-out is for you. (Recommended for girls)"
                    setIsCard={setIsCard}
                    setProgramFour={setProgramFour}
                    setIsProgramOne={setIsProgramOne}
                    setProgramThree={setProgramThree}
                    setProgramTwo={setProgramTwo}
                />
            )}
            {isProgramTwo && (
                <ProgramCardPhone
                    title="Project Cheetah"
                    content="A training methodology that combines different types of fitness disciplines such as strength training, endurance training, and mobility work, to develop a well-rounded athletic ability. The goal is to achieve lean physique and to improve multiple physical attributes simultaneously rather than specializing in just one. Think you can do it all? Hybrid training is for you."
                    setIsCard={setIsCard}
                    setProgramFour={setProgramFour}
                    setIsProgramOne={setIsProgramOne}
                    setProgramThree={setProgramThree}
                    setProgramTwo={setProgramTwo}
                />
            )}
            {isProgramThree && (
                <ProgramCardPhone
                    title="Project Gorilla"
                    content="A workout that is focused on building strength and muscle mass, it’s made for those who want to be huge and strong. (I recommend this for those who want to be massive.) "
                    setIsCard={setIsCard}
                    setProgramFour={setProgramFour}
                    setIsProgramOne={setIsProgramOne}
                    setProgramThree={setProgramThree}
                    setProgramTwo={setProgramTwo}
                />
            )}
            {isProgramFour && (
                <ProgramCardPhone
                    title="Project Monkey"
                    content="It is a full training plan that only requires you to use your bodyweight in order to gain muscle, strength, endurance, and flexibility. (This training is for those who can’t or doesn’t want to go to the gym.) "
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
