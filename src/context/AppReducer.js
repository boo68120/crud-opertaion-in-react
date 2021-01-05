import { UserList } from "../Components/UserList"

export default (state, action) => {
    switch(action.type) {
        case 'add_user':
            return {
                users: [action.payload, ...state.users]
            }
        
        case 'edit_user':
            const updateUser = action.payload;

            const updateUsers = state.users.map(user => {
                if(user.id === updateUser.id) {
                    return updateUser;
                }
                return user;
            })
        
            return {
                users: updateUsers
            }

        case 'remove_user':
            return {
                users: state.users.filter(user => {
                    return user.id != action.payload
                })
            }

        default:
            return state
    }
}