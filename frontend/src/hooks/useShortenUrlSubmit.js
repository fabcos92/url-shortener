import { useState, useEffect, useCallback } from 'react';
import { validate } from '../services/urlValidator';

export function useShortenUrlSubmit() {
    const [isRequestLoading, setIsRequestLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [inputUrl, setInputUrl] = useState(null);
    const [isInputValid, setIsInputValid] = useState(null);
    const [resultMessage, setResultMessage] = useState({success: false, text: ''});

    const handleSubmit = useCallback((url) => {
        const isValid = validate(url);
        setIsInputValid(isValid);
        if (isValid) {
            setInputUrl(url);
        }
    }, []);

    useEffect(() => {
        if (inputUrl) {
            setIsRequestLoading(true);
            fetch(getRequestUrl(), getRequestOptions(inputUrl))
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.shortUrl) {
                        setResult(data.shortUrl);
                        setResultMessage({
                            success: true,
                            text: 'Url has been shortened and returned.',
                        });
                    } else if (data.error) {
                        setResultMessage(data.error);
                        setResultMessage({
                            success: false,
                            text: data.error,
                        });
                    } else {
                        setResultMessage({
                            success: false,
                            text:'There was an error!',
                        });
                    }
                })
                .catch(error => setResultMessage(error))
                .finally(() => setIsRequestLoading(false));
        }
    }, [inputUrl]);

    return [isRequestLoading, result, handleSubmit, isInputValid, resultMessage];
}

const getRequestUrl = () => (
    'http://localhost:8001/url/shorten'
);

const getRequestOptions = (inputUrl) => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: inputUrl })
});