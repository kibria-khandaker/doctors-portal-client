import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className=' font-bold'> Manage Doctor </h2>
            <p>Total Doctors are {doctors.length}</p>

            {/* xxxxxxxxxxxxxxxxxxxxxxxxx */}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>

                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                refetch={refetch}
                                setDeleteDoctor={setDeleteDoctor}
                            ></DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>
            {/* yyyyyyyyyyyyyyyyyyyyyyyyy */}

            {deleteDoctor &&  <DeleteConfirmModal
            deleteDoctor={deleteDoctor}
            refetch={refetch}
            setDeleteDoctor={setDeleteDoctor}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;