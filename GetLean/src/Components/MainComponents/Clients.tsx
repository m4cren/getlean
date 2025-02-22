import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import style from './Client.module.scss';
import { useState } from 'react';

const Clients = () => {
    const [selectedImage, setSelectedImage] = useState<number>(0);

    let reverse_style = selectedImage === 0 ? 'restricted' : 'not-restricted';
    let next_style = selectedImage === 1 ? 'restricted' : 'not-restricted';

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
                        <img src="/images/client_sample.jpg" alt="" />
                    ) : selectedImage === 1 ? (
                        <img src="/images/client_sample2.jpg" alt="" />
                    ) : (
                        <p>NOne</p>
                    )}
                </div>
                {selectedImage === 0 ? (
                    <div className={style['description']}>
                        <h1>Rainier Reyes</h1>
                        <p>3 months transformation</p>
                    </div>
                ) : selectedImage === 1 ? (
                    <div className={style['description']}>
                        <h1>Mico Adao</h1>
                        <p>11 months transformation</p>
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
                    </ul>
                ) : selectedImage === 1 ? (
                    <ul>
                        <li></li>
                        <li className={style['selected']}></li>
                    </ul>
                ) : (
                    <p>NOne</p>
                )}

                <button
                    onClick={() => {
                        if (selectedImage == 1) {
                            setSelectedImage(1);
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
