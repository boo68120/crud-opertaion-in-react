import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

export const UserList = () => {
    const { users, removeUser} = useContext(GlobalContext);
    return (
        <ListGroup className="mt-4">
            {users.length > 0 ? (
                <>
                    {users.map(user => (
                        <ListGroupItem className="d-flex" key={user.id}>
                            <strong>{user.name}</strong>
                            <div className="ml-auto">
                                <Link to={`/edit/${user.id}`} className="btn btn-warning mr-1">Edit</Link>
                                <Button className="btn btn-danger mr-1" onClick={() => removeUser(user.id)}>Delete</Button>
                            </div>
                        </ListGroupItem>            
                    ))}
                </>
            ) : (
                <h4 className="text-center">No User</h4>
            )}
        </ListGroup>
    )
}
