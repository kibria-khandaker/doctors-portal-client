import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error(`You Han't Power to make  Admin`)
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully to make Admin`)
                    // console.log(data);
                }
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td> {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs"> Make Admin </button>} </td>
            <td><button className="btn btn-xs"> Remove User </button></td>
        </tr>
    );
};

export default UsersRow;