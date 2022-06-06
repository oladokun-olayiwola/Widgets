import React, { useEffect, useState } from 'react'
import axios from 'axios' 

const Convert = ({text, language}) => {

    const [translated, setTranslated] = useState('')



    useEffect(() => {
        const doTranslations = async () => {
            const {data} = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: text,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    },
                }
            );
            setTranslated(data.data.translations[0].translatedText)

            
        }
        if (text) {
          const timeoutId = setTimeout(() => {
            doTranslations();
          }, 500);
          return () => {
            clearTimeout(timeoutId);
          };
        }
    }, [text, language])

    return (
        <div>
            <div>
                <div>
                    <label>Output</label>
                    <div className='ui header'>{translated}</div>
                </div>
            </div>
        </div>
    )
}

export default Convert;