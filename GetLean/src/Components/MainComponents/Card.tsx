import style from './Card.module.scss';

interface Props {
    imgLink: string;

    title: string;
    content: string;
    caption: string;
}
const Card = ({ imgLink, title, content, caption }: Props) => {
    return (
        <main className={style['card-container']}>
            <div className={style['front-face']}>
                <div className={style['front-face-content']}>
                    <img src={imgLink} alt="" />
                    <h2>{title}</h2>

                    <p>{caption}</p>
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
