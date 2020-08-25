import { useCallback, useState } from 'react';

export function useInputState(initialValue) {
    const [inputValue, setInputValue] = useState(initialValue ?? '');
    const handleInputChange = useCallback(
        (event) => setInputValue(event.target.value),
        []
    );

    return [inputValue, handleInputChange];
}