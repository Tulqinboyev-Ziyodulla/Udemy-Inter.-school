import React, { useContext } from "react";
import { DeleteIcon, UpdateIcon } from "../assets/icons";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const TeacherCard = ({ teacher, index }) => {
  const { teachers, setTeachers } = useContext(Context);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  const handleUpdate = () => {
    navigate(`/teachers/${teacher.id}`);
  };

  return (
    <tr className="bg-[#ffffff]">
      <td className="py-4 px-3">{index + 1}</td>
      <td className="py-4 px-3 text-md font-normal leading-4 text-left">
        {teacher.fullName}
      </td>
      <td className="py-4 px-3 text-md font-normal leading-4 text-left">
        {teacher.subject}
      </td>
      <td className="py-4 px-3 text-md font-normal leading-4 text-left">
        {teacher.teacherClass}
      </td>
      <td className="py-4 px-3 text-md font-normal leading-4 text-left">
        {teacher.email}
      </td>
      <td className="py-4 px-3 text-md font-normal leading-4 text-left">
        {teacher.gender}
      </td>
      <td className="py-4 px-3 relative overflow-hidden">
        <div className="flex items-center justify-center gap-3 h-full">
          <button onClick={handleUpdate}>
            <UpdateIcon />
          </button>
          <button onClick={() => handleDelete(teacher.id)}>
            <DeleteIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TeacherCard;
