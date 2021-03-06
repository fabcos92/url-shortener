import React from 'react';
import './styles.css';
import PageTitle from '../PageTitle';
import TextInput from '../TextInput';
import SubmitButton from '../SubmitButton';
import ShortenUrlResult from '../ShortenUrlResult';
import { useInputState } from '../../hooks/useInputState';
import { useShortenUrlSubmit } from '../../hooks/useShortenUrlSubmit';
import Feedback from '../Feedback';

const MainPage = (props) => {
    const [inputValue, handleInputChange] = useInputState();
    const [isRequestLoading, result, handleSubmit, isInputValid, resultMessage] = useShortenUrlSubmit();

    return (
        <div className={`MainPage ${props.className ?? ''}`}>
            <PageTitle
                title="Url shortener"
                className="MainPage__PageTitle"
            />
            <div className="MainPage__content">
                <TextInput
                    placeholder="Enter your link"
                    invalid={inputValue && !isInputValid}
                    onChange={handleInputChange}
                />
                <SubmitButton
                    onClick={() => handleSubmit(inputValue)}
                    disabled={isRequestLoading}
                    text="Shorten"
                />
            </div>
            <ShortenUrlResult result={result} />
            <Feedback message={resultMessage.text} />
        </div>
    );
}

export default MainPage