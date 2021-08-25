import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchingData() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromBtnClick, setIdFromBtnClick] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
            .then(response => {
                console.log(response);
                setPost(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        return () => {
            
        }
    }, [idFromBtnClick])

    const handleClick = () => {
        setIdFromBtnClick(id);
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>Fetch Post</button>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}

            <p>{post.title}</p>
        </div>
    )
}

export default FetchingData
