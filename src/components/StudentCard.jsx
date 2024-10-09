import React, { useContext } from "react";
import { DeleteIcon, UpdateIcon } from "../assets/icons";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ student, index }) => {
  const { students, setStudents } = useContext(Context);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleUpdate = () => {
    navigate(`/students/${student.id}`);
  };

  return (
    <tr className="bg-[#ffffff]">
      <td className="py-4 px-3">{index + 1}</td>
      <td className="py-4 px-3 text-md font-normal leading-4 text-left">
        {student.firstName}
      </td>
      <td className="py-4 px-3 text-md font-normal leading-4 text-left">
        {student.lastName}
      </td>
      <td className="py-4 px-3 text-md font-normal leading-4 text-left">
        {student.email}
      </td>
      <td className="py-4 px-3 text-md font-normal leading-4 text-left">
        {student.phone}
      </td>
      <td className="py-4 px-3 text-md font-normal leading-4 text-left">
        {student.studentId}
      </td>
      <td className="py-4 px-3 relative overflow-hidden">
        <div className="flex items-center justify-center gap-3 h-full">
          <button onClick={handleUpdate}>
            <UpdateIcon />
          </button>
          <button onClick={() => handleDelete(student.id)}>
            <DeleteIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentCard;
