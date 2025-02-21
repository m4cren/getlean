import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import style from './Client.module.scss';
import { useState } from 'react';

const Clients = () => {
    const [selectedImage, setSelectedImage] = useState<number>(0);

    let reverse_style = selectedImage === 0 ? 'restricted' : 'not-restricted';
    let next_style = selectedImage === 3 ? 'restricted' : 'not-restricted';

    return (
        <div className={style['main']}>
            <img
                src="/images/overlay3.png"
                alt=""
                className={style['overlay']}
            />
            <div className={style['main-container']}>
                <div className={style['img-container']}>
                    {selectedImage === 0 ? (
                        <img src="/images/calisthenics.jpg" alt="" />
                    ) : selectedImage === 1 ? (
                        <img src="/images/leg.jpg" alt="" />
                    ) : selectedImage === 2 ? (
                        <img src="/images/pushday.jpg" alt="" />
                    ) : selectedImage === 3 ? (
                        <img src="/images/pullday.jpg" alt="" />
                    ) : (
                        <p>NOne</p>
                    )}
                </div>
                {selectedImage === 0 ? (
                    <div className={style['description']}>
                        <h1>Client 1</h1>
                        <p>Client 1's description</p>
                    </div>
                ) : selectedImage === 1 ? (
                    <div className={style['description']}>
                        <h1>Client 2</h1>
                        <p>Client 2's description</p>
                    </div>
                ) : selectedImage === 2 ? (
                    <div className={style['description']}>
                        <h1>Client 3</h1>
                        <p>Client 3's description</p>
                    </div>
                ) : selectedImage === 3 ? (
                    <div className={style['description']}>
                        <h1>Client 4</h1>
                        <p>Client 4's description</p>
                    </div>
                ) : (
                    <p>NOne</p>
                )}
            </div>
            <div className={style['control-container']}>
                <button
                    onClick={() => {
                        if (selectedImage == 0) {
                            setSelectedImage(0);
                        } else {
                            setSelectedImage(selectedImage - 1);
                        }
                    }}
                    className={style[reverse_style]}
                >
                    <FaLessThan />
                </button>

                {selectedImage === 0 ? (
                    <ul>
                        <li className={style['selected']}></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                ) : selectedImage === 1 ? (
                    <ul>
                        <li></li>
                        <li className={style['selected']}></li>
                        <li></li>
                        <li></li>
                    </ul>
                ) : selectedImage === 2 ? (
                    <ul>
                        <li></li>
                        <li></li>
                        <li className={style['selected']}></li>
                        <li></li>
                    </ul>
                ) : selectedImage === 3 ? (
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li className={style['selected']}></li>
                    </ul>
                ) : (
                    <p>NOne</p>
                )}

                <button
                    onClick={() => {
                        if (selectedImage == 3) {
                            setSelectedImage(3);
                        } else {
                            setSelectedImage((prev) => prev + 1);
                        }
                    }}
                    className={style[next_style]}
                >
                    <FaGreaterThan />
                </button>
            </div>
        </div>
    );
};

export default Clients;
