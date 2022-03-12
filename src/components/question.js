///title,score,is_answered,view_count,profile_image,display_name

import _axios from 'axios'
import React, { useState, useEffect } from 'react';
const Question = ({ select, searchTag }) => {
    const [posts, setPosts] = useState([])
    console.log(select)
    useEffect(() => {
        _axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow').then(res => {

            console.log(res.data.items.length);
            setPosts(res.data.items)
        })
            .catch(err => {
                console.log(err);
            })
    }, [])///slice(0, 20)


    useEffect(() => {
        // setPosts(select)
        // console.log(select)
    }, [])
    return (
        <div className='question'>

            {
                posts.filter(tag => {
                    for (let j = 0; j < select.length; j++) {
                        for (let i = 0; i < tag.tags.length; i++) {

                            if (tag.tags[i] == select[j]) {
                                console.log("q")
                                return tag.tags

                            }
                        }

                    }

                }).map(post => (

                    < div className='question_item' >

                        <div className='title'><h2><a href={post.link} target="_blank">{post.title}</a></h2></div>

                        <div className='content'>
                            <div className='score'><h4>Score</h4><h4 className='score_content'>{post.score}</h4></div>{post.answer_count == 0
                                ? < div className='answer_count'><h4>Answers</h4><h4 className='answer_count_content'>{post.answer_count}</h4></div>
                                : post.is_answered
                                    ? < div className='answer_count'><h4>Answers</h4><h4 className='answer_count_content_accept'>{post.answer_count}</h4></div>
                                    : <div className='answer_count'><h4>Answers</h4><h4 className='answer_count_content_negative'>{post.answer_count}</h4></div>


                            }



                            <div className='view_count'><h4>Views</h4>{post.view_count}</div>
                            <div className='profile'>
                                <div className='profile_image'>
                                    <img src={post.owner.profile_image}></img></div>
                                <div className='display_name'>{post.owner.display_name}</div>
                            </div>


                        </div>

                    </div>
                ))
            }
        </div >
    )
}
export default Question