import { useState } from "react"

const Search = ({ search, Searching, setUpdate }) => {
    let count = 0;
    const [tag, setTag] = useState('')
    function searchOnchange(e) {
        setTag(e.target.value);
    }
    function add() {
        count += 1;
        search(function (props) {
            return [...props, tag]
        })
        Searching(function (props) {

            return [...props, tag]
        })
        setUpdate(tag)

    }

    return (<div className="search"><input className="search_input" type='text' onChange={searchOnchange}></input><button onClick={add}>Search</button></div>)
}
export default Search