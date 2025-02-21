import style from './Card.module.scss';

interface Props {
    imgLink: string;
    target: string[];
    title: string;
    content: string;
}
const Card = ({ imgLink, title, content, target }: Props) => {
    return (
        <main className={style['card-container']}>
            <div className={style['front-face']}>
                <div className={style['front-face-content']}>
                    <img src={imgLink} alt="" />
                    <h2>{title}</h2>
                    <div className={style['target-muscle']}>
                        {target.map((x, index) => (
                            <li key={index}>{x}</li>
                        ))}
                    </div>
                    <p>Avail now</p>
                </div>
            </div>
            <div className={style['back-face']}>
                <div>
                    <div className={style['back-title']}>
                        <h2>{title}</h2>
                    </div>
                    <p>{content}</p>
                </div>
            </div>
        </main>
    );
};

export default Card;
