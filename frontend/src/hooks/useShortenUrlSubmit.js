import { useState, useEffect, useCallback } from 'react';
import { validate } from '../services/urlValidator';

export function useShortenUrlSubmit() {
    const [isRequestLoading, setIsRequestLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [inputUrl, setInputUrl] = useState(null);
    const [isInputValid, setIsInputValid] = useState(null);

    const handleSubmit = useCallback((url) => {
        const isValid = validate(url);
        setIsInputValid(isValid);
        if (isValid) {
            setInputUrl(url);
        }
    }, []);

    useEffect(() => {
        console.log('is valid soo..')
        setResult(inputUrl);
    }, [inputUrl]);

    return [isRequestLoading, result, handleSubmit, isInputValid];
}