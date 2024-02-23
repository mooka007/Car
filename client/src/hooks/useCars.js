import { PostContext  } from "../context/CarsContext";
import { useContext  } from "react";

export const usePostsContext = () => {
    const context = useContext(PostContext)

    if(!context){
        throw Error('Must be Used inside a postsContextProvider')
    }

    return context
}