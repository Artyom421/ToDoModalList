import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export const ImagesList = () => {

    const [state,setState] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => setState(res.data))
    }, [])

    const album_1 = state.filter((item) => item.albumId === 1)

    console.log(album_1);

    return (
        <div>
            <h1>This Is ImagesList</h1>
            <div className="imagesDiv">
                {
                    album_1.map((item) => (
                        <div key={item.id}>
                            <span>{item.id}</span>
                            <p>{item.title.substring(0,20)}</p>
                            <img src={item.thumbnailUrl} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}