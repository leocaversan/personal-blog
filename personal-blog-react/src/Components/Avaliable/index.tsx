import React, { useState, useEffect } from "react";
import './index.css';
import { realizePrediction, getAcuracy } from "../../Services/api";
import { propsPredicttion, propsAcuracy } from "../../Props/props";

const Avaliable = () => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setAvaliable('');
            getResponseAPI();
        }
    };
    const acuracy = async () => {
        const response = await getAcuracy();
        setAcuracyNow(response);
    };

    useEffect(() => {
        acuracy();
    }, []);
    const getResponseAPI = async () => {
        const response = await realizePrediction(avaliable)
        if (response != null) {
            setPredictAPI(response);
            setSpanVisibility(true);
        }
    };

    const [predictAPI, setPredictAPI] = useState<propsPredicttion>();
    const [spanVisibility, setSpanVisibility] = useState(false)
    const [avaliable, setAvaliable] = useState('');
    const [acuracyNow, setAcuracyNow] = useState<propsAcuracy>();

    return (
        <div className="avaliable__container">
            <div>
                Escreva uma avaliação em português do que achou do blog, utilizaremos seu comentario para treinamento de um algoritimo. A acuracia deste algoritimo no momento é de {
                    acuracyNow?.Acuracy
                } %
            </div>
            <div className="avaliable__input-container">
                <input
                    className="avaliable__input-coment"
                    value={avaliable}
                    type="text"
                    placeholder="Coment a value"
                    onChange={e => setAvaliable(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onClick={() => setSpanVisibility(false)}
                />

            </div>
            <div className="avaliable__message-predict">
                {
                    spanVisibility && (
                        <span>
                            <h1>
                                {predictAPI?.message}
                            </h1>
                        </span>
                    )
                }
            </div>
        </div>


    )
};

export default Avaliable;