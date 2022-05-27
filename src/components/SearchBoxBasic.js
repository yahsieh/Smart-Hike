import { useEffect, useState } from 'react'
import { useSearchBox } from 'react-instantsearch-hooks-web'
import useDebounce from './useDebounce'

/**
 * https://www.algolia.com/doc/api-reference/widgets/search-box/react/
 * https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
 */

const SearchBoxBasic = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 1000)
    const { query, refine, isSearchStalled } = useSearchBox(props)

    useEffect(() => {
        if (debouncedSearchTerm) {
            if (searchTerm.length !== 0) {
                refine(searchTerm)
            }
        } else {
            refine('')
        }
    }, [debouncedSearchTerm])

    return (
        <form noValidate action="" role="search">
            <input
                type="search"
                onChange={e => setSearchTerm(e.target.value)}
            />
            {/* <button onClick={() => refine('')}>Reset query</button> */}
            {/* <p>{isSearchStalled ? 'stalling' : 'search....'} </p> */}
        </form>
    )
}

export default SearchBoxBasic;