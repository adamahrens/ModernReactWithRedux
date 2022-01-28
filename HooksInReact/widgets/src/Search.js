import React, { useEffect, useState } from 'react'
import { Grid, Search } from 'semantic-ui-react'
import DOMPurify from 'dompurify';
import './Search.css'

const DEFAULT_SELECTED_RESULT = { title: '', snippet: '', id: 0 };

const SearchWidget = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([])
    const [value, setValue] = useState('')
    const [selectedResult, setSelectedResult] = useState(DEFAULT_SELECTED_RESULT)

    // Use effect doesnt support async/await requests. It has to handle async code.
    useEffect(() => {
        setIsLoading(true)

        if (value.length === 0) {
            setIsLoading(false)
            setSelectedResult(DEFAULT_SELECTED_RESULT)
            setResults([])
            return
        }

        // Execute network request
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${value}`

        // Throttle requets
        const timerId = setTimeout(() => {
            fetch(url)
                .then(response => {
                    return response.json()
                }).then(json => {
                    const results = json.query.search.map((obj) => {
                        const { title, snippet } = obj
                        const id = obj.pageid
                        return { title, snippet, id }
                    })
                    setResults(results)
                }).finally(() => {
                    setIsLoading(false)
                })
        }, 500)

        return () => {
            clearTimeout(timerId)
        }

    }, [value])

    return (
        <Grid>
            <Grid.Column width={8}>
                <Search fluid
                    loading={isLoading}
                    results={results}
                    value={value}
                    onSearchChange={(e, { value }) => {
                        setValue(value)
                    }}
                    onResultSelect={(e, { result }) => {
                        setSelectedResult(result)
                    }}
                />
            </Grid.Column>
            <Grid.Column width={8}>
                <h1>{selectedResult.title}</h1>
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(selectedResult.snippet, {
                        USE_PROFILES: { html: true },
                    })
                }} />
                {selectedResult.id > 0 && <a href={`https://en.wikipedia.org?curid=${selectedResult.id}`}>View Page</a>}
            </Grid.Column>
        </Grid>
    )
}

export default SearchWidget