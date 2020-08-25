import {useState, useEffect, useCallback} from "react";

export function useShortenUrlSubmit() {
    const [isRequestLoading, setIsRequestLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [inputUrl, setInputUrl] = useState(null);
    const [isInputValid, setIsInputValid] = useState(null);

    const handleSubmit = useCallback((url) => {
        //validate
        setInputUrl(url);
    }, []);

    useEffect(() => {
        setResult(inputUrl);
    }, [inputUrl]);

    return [isRequestLoading, result, handleSubmit, isInputValid];
}