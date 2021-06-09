import { useEffect, useState } from "react";
import PersonInfo from "./person";
import style from "./style.module.css";
const members = [
  {
    name: "عمو مصطفی",
    point: 0,
    id: 1,
  },
  {
    name: "عمه حسنه",
    point: 0,
    id: 2,
  },
  {
    name: "عمه رجا",
    point: 0,
    id: 3,
  },
  {
    name: "عمه نجمه",
    point: 0,
    id: 4,
  },
  {
    name: "عمه نجلا",
    point: 0,
    id: 5,
  },
  {
    name: "عمه وفا",
    point: 0,
    id: 6,
  },
  {
    name: "خاله زهره",
    point: 0,
    id: 7,
  },
  {
    name: "شیما",
    point: 0,
    id: 8,
  },
  {
    name: "مریم (عمان)",
    point: 0,
    id: 9,
  },
  {
    name: "منصور",
    point: 0,
    id: 10,
  },
  {
    name: "علی",
    point: 0,
    id: 11,
  },
  {
    name: "فائزه ",
    point: 0,
    id: 12,
  },
  {
    name: "جواد",
    point: 0,
    id: 13,
  },
  {
    name: "یاسمین",
    point: 0,
    id: 14,
  },
  {
    name: "محمد",
    point: 0,
    id: 15,
  },
  {
    name: "حسن",
    point: 0,
    id: 16,
  },
  {
    name: "کوثر",
    point: 0,
    id: 17,
  },
  {
    name: "مریم (ایران)",
    point: 0,
    id: 18,
  },
  {
    name: "ریحانه",
    point: 0,
    id: 19,
  },
];

const Table = () => {
  const membersSorted = members.sort((a, b) => b.point - a.point);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    setPersons(membersSorted);
  }, [membersSorted]);

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <p className={style.p}>Abadan City</p>
      </div>
      <div className={style.tabeleContainer}>
        {persons.map((person, index) => (
          <PersonInfo
            key={person.id}
            name={person.name}
            index={index}
            point={person.point}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
