import style from './CardPhone.module.scss';

interface Props {
    imgLink: string;
    title: string;
    content: string;
}

const CardPhone = ({ imgLink, title, content }: Props) => {
    return (
        <main className={style['card-container']}>
            <div className={style['img-container']}>
                <img src={imgLink} alt="" />
            </div>
            <h1>{title}</h1>
            <p>{content}</p>
        </main>
    );
};

export default CardPhone;
