import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch , setDeleteDoctor}) => {
    const { _id, name, email, specialty, img } = doctor;



    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={()=>setDeleteDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs  btn-error"> Delete modal</label>
                
            </td>
        </tr>
    );
};

export default DoctorRow;