import React from 'react'
import './styles.css'
import SubmitButton from "../SubmitButton";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";

const ShortenUrlResult = (props) => {
    const [isCopied, handleCopy] = useCopyToClipboard();

    if (!props.result) {
        return null;
    }
    return (
        <div className={`ShortenUrlResult ${props.className ?? ''}`}>
            <span className="ShortenUrlResult__short-link">
                {props.result}
            </span>
            <SubmitButton
                onClick={() => handleCopy(props.result)}
                text={isCopied ? "Copied" : "Copy"}
            />
        </div>
    );
}

export default ShortenUrlResult