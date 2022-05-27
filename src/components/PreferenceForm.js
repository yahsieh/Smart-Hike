import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits } from "react-instantsearch-hooks-web";
import { TrailCard } from "./TrailCard";
import SearchBoxBasic from "./SearchBoxBasic";
import '../css/PreferenceCSS.scss';

function Handle({ hit }) {
    return (
        <TrailCard name={hit.name} img={hit.thumbURL} />
    );
}

const PreferenceForm = () => {
    const history = useLocation();
    const [historyFlag, updateHistoryFlag] = useState([]);
    const [initVal, updateInitVal] = useState('')
    useEffect(() => {
        if (history.state && historyFlag !== 'done') {
            updateInitVal(
                Object.values(history.state.data).find(v => v.length > 0)
            )
            updateHistoryFlag('done')
        }
    }, [historyFlag], [history])
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