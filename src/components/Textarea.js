import React, { useState } from 'react';

export default function Textarea(props) {
    const [text, setText] = useState('');

    const onChangeEvent = (event) => {
        setText(event.target.value);
    };

    const changeToUppercase = () => {
        setText(text.toUpperCase());
    };

    const changeToLowercase = () => {
        setText(text.toLowerCase());
    };

    const handleCopyToClipBoard = () => {
        navigator.clipboard.writeText(text);
    };

    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    };
    return (
        <>
            <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                < h1 > Enter your text here </h1>
                <textarea
                    className={`form-control mb-3 bg-${props.mode === 'light' ? 'light' : 'secondary'}`}
                    placeholder="write your text here"
                    id="box"
                    value={text}
                    rows="8"
                    onChange={onChangeEvent}
                ></textarea>

                <button className="btn btn-primary me-3" disabled={text === ''} onClick={changeToUppercase}>
                    convert To Uppercase
                </button>

                <button className="btn btn-primary me-3" disabled={text === ''} onClick={changeToLowercase}>
                    convert To Lowercases
                </button>

                <button className="btn btn-primary me-3" disabled={text === ''} onClick={handleCopyToClipBoard}>
                    copy Text to ClipBoard
                </button>
                <button className="btn btn-primary" disabled={text === ''} onClick={removeExtraSpace}>
                    remove Extra Space
                </button>

                <div className="container my-4">
                    <h2>total word summary</h2>
                    <p>
                        {text.split(/\s+/).filter((e) => e !== '').length} words and{' '}
                        {text.length} characters
                    </p>
                </div>
                <div className="container mt-3">
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div >
        </>
    );
}
