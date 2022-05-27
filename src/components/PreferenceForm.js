import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits } from "react-instantsearch-hooks-web";
import { TrailCard } from "./TrailCard";
import SearchBoxBasic from "./SearchBoxBasic";
import {ReactComponent as Heart} from "../assets/favorite_FILL1_wght400_GRAD0_opsz48.svg";
import '../css/PreferenceCSS.scss';

const PreferenceForm = () => {
    const history = useLocation();
    const [historyFlag, updateHistoryFlag] = useState([]);
    const [initVal, updateInitVal] = useState('')
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (history.state && historyFlag !== 'done') {
            updateInitVal(
                Object.values(history.state.data).find(v => v.length > 0)
            )
            updateHistoryFlag('done')
        }
    }, [historyFlag], [history], [])

    const conditionalQuery = {
        search(query) {
            console.debug(query)
            if (
                query.every(({ params }) => !params.query) ||
                query.every(({ params }) => params.query === ' ')
            ) {
                console.log("empty query")
                return Promise.resolve({
                    results: query.map(() => ({
                        hits: [],
                        nbHits: 0,
                        nbPages: 0,
                        processingTimeMS: 0,
                    })),
                })
            } else {
                const searchClient = algoliasearch(
                    process.env.REACT_APP_SEARCH_APP_ID,
                    process.env.REACT_APP_SEARCH_API_KEY
                )
                return searchClient.search(query)
            }
        }
    }

    
    const addUserFavorites = (e) => {
        setFavorites([...favorites, e]);
    }

    const removeFavorites = (e) => {
        setFavorites(favorites.filter(name => name != e));
    }

    function Handle({ hit }) {
        return (
            <div>
                <TrailCard name={hit.name} img={hit.thumbURL} />
                {favorites.includes(hit.name) ? 
                    <Heart fill="red" onClick={() => removeFavorites(hit.name)}/> : 
                    <Heart fill="grey"onClick={() => addUserFavorites(hit.name)}/>}
            </div>
        );
    }

    return (
        <div>
            <InstantSearch
                indexName="smarthike"
                searchClient={conditionalQuery}
            >
                <SearchBoxBasic initText={initVal} />
                <Hits hitComponent={Handle} />
            </InstantSearch>
        </div>
    )
}
export default PreferenceForm;