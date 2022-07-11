export default function SearchBar ({getQuery}) {

    const onSubmitClick = (e) => {
        e.preventDefault()

        getQuery(e.target.elements.searchQuery.value)
        e.target.reset()
    }
    return(
        <form onSubmit={onSubmitClick}>
            <input name='searchQuery'></input>
            <button type="submit">Search</button>
        </form>
    )
}