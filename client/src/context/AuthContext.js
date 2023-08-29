import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        "_id":  "64cf112334457d76bccbfd05",
        "username": "john",
        "email": "john@gmail.com",
        "password": "$2b$10$1y/IszVQZkOR7c9bj9QCeuF2KrC4wjsaBTjG676WTbLvWXNusQEte",
        "profilePicture": "person/9.jpeg",
        "coverPicture": "",
        "followings": [],
        "followers": [],
        "isAdmin": false,
        "createdAt": {"$date": {"$numberLong": "1691291939746"}},
        "updatedAt": {"$date": {"$numberLong": "1691372762823"}},
        "__v": {"$numberInt": "0"},
        "city": "Paris",
        "relationship": "1",
        "from": "france"
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            {children}

        </AuthContext.Provider>
    )

}