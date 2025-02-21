import style from './CardPhone.module.scss';
const CardPhone = () => {
    return (
        <main className={style['card-container']}>
            <div className={style['img-container']}>
                <img src="../../../public/images/cat.jpg" alt="" />
            </div>
            <h1>Program</h1>
            <p>Click for more information</p>
        </main>
    );
};

export default CardPhone;
