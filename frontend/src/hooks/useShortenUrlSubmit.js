import { useState, useEffect, useCallback } from 'react';
import { validate } from '../services/urlValidator';

export function useShortenUrlSubmit() {
    const [isRequestLoading, setIsRequestLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [inputUrl, setInputUrl] = useState(null);
    const [isInputValid, setIsInputValid] = useState(null);
    const [resultMessage, setResultMessage] = useState({type: false, text: ''});

    const handleSubmit = useCallback((url) => {
        const isValid = validate(url);
        setIsInputValid(isValid);
        if (isValid) {
            setInputUrl(url);
        }
    }, []);

    useEffect(() => {
        setIsRequestLoading(true);

        fetch(getRequest(), getRequestOptions(inputUrl))
            .then(response => response.json())
            .then(data => {
                if (data.shortenedUrl) {
                    setResult(data.shortenedUrl);
                    setResultMessage('Url has been shortened and returned.');
                } else if (data.error) {
                    setResultMessage(data.error);
                } else {
                    setResultMessage('There was an error!');
                }
            })
            .catch(error => setResultMessage(error))
            .finally(() => setIsRequestLoading(false));
    }, [inputUrl]);

    return [isRequestLoading, result, handleSubmit, isInputValid, resultMessage];
}

const getRequest = () => (
    ''
);

const getRequestOptions = (inputUrl) => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: inputUrl })
});