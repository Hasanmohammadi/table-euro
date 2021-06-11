import { useEffect, useState } from "react";
import PersonInfo from "./person";
import style from "./style.module.css";
const members = [
  {
    name: "عمه حمیده",
    point: 0,
    id: 1,
  },
  {
    name: "عمه حسنه",
    point: 5,
    id: 2,
  },
  {
    name: "عمه رجا",
    point: 5,
    id: 3,
  },
  {
    name: "عمه نجمه",
    point: 5,
    id: 4,
  },
  {
    name: "عمه نجلا",
    point: 5,
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
    point: 5,
    id: 8,
  },
  {
    name: "مریم (عمان)",
    point: 5,
    id: 9,
  },
  {
    name: "منصور",
    point: 5,
    id: 10,
  },
  {
    name: "علی",
    point: 5,
    id: 11,
  },
  {
    name: "فائزه ",
    point: 5,
    id: 12,
  },
  {
    name: "جواد",
    point: 5,
    id: 13,
  },
  {
    name: "یاسمین",
    point: 5,
    id: 14,
  },
  {
    name: "محمد",
    point: 5,
    id: 15,
  },
  {
    name: "حسن",
    point: 5,
    id: 16,
  },
  {
    name: "کوثر",
    point: 5,
    id: 17,
  },
  {
    name: "مریم (ایران)",
    point: 0,
    id: 18,
  },
  {
    name: "ریحانه",
    point: 5,
    id: 19,
  },
  {
    name: "مهدی",
    point: 0,
    id: 20,
  },
  {
    name: "علی کانادا",
    point: 5,
    id: 20,
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
