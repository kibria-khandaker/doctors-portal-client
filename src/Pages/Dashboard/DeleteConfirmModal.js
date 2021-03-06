import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
    console.log(deleteDoctor);
    const { name,email } = deleteDoctor;

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} is successfully Deleted`)
                    setDeleteDoctor(null)
                    refetch()
                }
            })
    }



    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500"> Are you sure delete to {name} </h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs  btn-error">
                            Delete
                        </button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs font-bold text-green-500"> No </label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DeleteConfirmModal;