import React, { useRef } from "react";

const Form = (props) => {
    const searchRef = useRef("");

    const submitForm = (e) => {
        e.preventDefault();
        props.onSubmit(searchRef);
    };

    return (
        <form onSubmit={submitForm}>
            <label>
                <h2>Search for a Gif!</h2>
                <input
                    placeholder="type a keyword"
                    text="text"
                    ref={searchRef}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
