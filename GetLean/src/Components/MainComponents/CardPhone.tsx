import style from './CardPhone.module.scss';

interface Props {
    imgLink: string;
    title: string;
    caption: string;
}

const CardPhone = ({ imgLink, title, caption }: Props) => {
    return (
        <main className={style['card-container']}>
            <div className={style['img-container']}>
                <img src={imgLink} alt="" />
            </div>
            <h1>{title}</h1>
            <p>{caption}</p>
        </main>
    );
};

export default CardPhone;
