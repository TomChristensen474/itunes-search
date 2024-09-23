import React, { useState } from "react";
import ReactSearchBox from "react-search-box";
import styles from "./page.module.css";
import TextField from "@mui/material/TextField";
import SearchResults from "./search_results";

async function getSongData(searchQuery){
    console.log(searchQuery)
    const response = await fetch('https://itunes.apple.com/search?term=' + searchQuery + '&entity=song');
    // const response = await fetch('https://itunes.apple.com/search?term=' + searchQuery);
    const data = await response.json();
    return {props: {data}}
}

let typewatch = function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    }  
}();    


let handleInput = (event) => {
    console.log(event.target.value)

    let results = typewatch(() => {
        let results = getSongData(event.target.value).then((data) => {
            // let firstResult = data.props.data.results[0]
            // console.log(firstResult.artistName)
            // console.log(firstResult.trackName)
            // console.log(firstResult.collectionName)

            let firstFiveResults = data.props.data.results.slice(0, 5)
            
            console.log(firstFiveResults)
            // return firstFiveResults
            <SearchResults
                songData=firstFiveResults[0]
            ><SearchResults/>
            
        })

        // return results
    }, 1000)

    // return results
}

export default function Search() {
    const [results, setResults] = useState([]);

    return (
        <div >
            <main className={styles.main}>
                <h1>Search iTunes</h1>
                <TextField
                    id="search-bar"
                    onChange={handleInput}
                />
                {/* <SearchResults/> */}
            </main>
        </div>
    );
}