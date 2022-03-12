import _axios from 'axios'
import React, { useState, useEffect } from 'react';


const Trend = ({ select, searchTag, update }) => {
    const [count, setCount] = useState(0)
    const [posts, setPosts] = useState([])
    const [tag, SetTag] = useState([])
    console.log(searchTag)
    function TagSelected(e) {

        if (e.target.style.backgroundColor == "aqua") {
            e.target.style.backgroundColor = ""

            // select = select.filter(function (item) {
            //     return item != e.target.value
            // })
            select(function (props) {

                props = props.filter(function (item) {
                    return item != e.target.value
                })

                return props
            })
        }
        else if (e.target.style.backgroundColor == "") {
            e.target.style.backgroundColor = "aqua"
            select(function (props) {
                return [...props, e.target.value]
            })

        }
        console.log(select)

    }




    useEffect(() => {
        setCount(count + 1);
        console.log(count)
        if (count > 0) {
            document.querySelectorAll('.trend_item')[count + 9].style.backgroundColor = "aqua"
        }

    }, [searchTag])



    useEffect(() => {

        _axios.get('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow').then(res => {

            setPosts(res.data.items)

        })
            .catch(err => {
                console.log(err);
            })


    }, [])

    // console.log(posts[0])




    return (
        <div className='trend'>

            <ul>

                {posts.slice(0, 10).map(post => (

                    <button className='trend_item' onClick={TagSelected} value={post.name}>{post.name}</button>
                ))}

                {
                    searchTag.map(post => (<button className='trend_item' onClick={TagSelected} value={post}>{post}</button>))
                }
            </ul>
        </div>
    )
}


export default Trend