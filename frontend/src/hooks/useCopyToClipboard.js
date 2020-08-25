import { useState, useEffect, useCallback } from "react";
import copy from "copy-to-clipboard";

const RESET_INTERVAL_MS = 4000;
export function useCopyToClipboard(resetInterval = RESET_INTERVAL_MS) {
    const [isCopied, setCopied] = useState(false);

    const handleCopy = useCallback((text) => {
            copy(text.toString());
            setCopied(true);
    }, []);

    useEffect(() => {
        let timeout;
        if (isCopied && resetInterval) {
            timeout = setTimeout(() => setCopied(false), resetInterval);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [isCopied, resetInterval]);

    return [isCopied, handleCopy];
}