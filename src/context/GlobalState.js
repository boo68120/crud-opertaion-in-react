import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    users: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addUser = (user) => {
        dispatch({
            type: 'add_user',
            payload: user
        })
    }

    const removeUser = (id) => {
        dispatch({
            type: 'remove_user',
            payload: id
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'edit_user',
            payload: user
        })
    }

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}