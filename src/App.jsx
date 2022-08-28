import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import ShowGiphy from "./components/ShowGiphy";

function App() {
    const [giphy, setGiphy] = useState("");
    const giphyApiKey = "gl5eYYrwTQOFuN9PRTvCvMj78IxSiN6f";

    // API call of random giphy that returns giphy URL
    const fetchRandomGiphy = async () => {
        const giphyRandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}`;
        const giphyRandom = await axios.get(giphyRandomUrl);
        setGiphy(giphyRandom.data.data.images.original.url);
    };

    // calling of Giphy API once, calling function fetchGiphyUrl() and setting state
    useEffect(() => {
        fetchRandomGiphy();
    }, []);

    // API call of giphy with a searchText
    const fetchSearchGiphy = async (searchText) => {
        const giphySearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchText.current.value}`;
        const giphySearch = await axios.get(giphySearchUrl);
        setGiphy(giphySearch.data.data[0].images.original.url);
    };

    return (
        <div className="App">
            <h1>Giphyyy</h1>
            <Form onSubmit={fetchSearchGiphy} />
            <ShowGiphy gif={giphy} />
        </div>
    );
}

export default App;
