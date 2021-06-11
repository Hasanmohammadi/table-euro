import { useEffect, useState } from "react";
import PersonInfo from "./person";
import style from "./style.module.css";
const members = [
  {
    name: "Hamide",
    point: 0,
    id: 1,
  },
  {
    name: "Hasine",
    point: 5,
    id: 2,
  },
  {
    name: "Raja",
    point: 5,
    id: 3,
  },
  {
    name: "Najmeh",
    point: 5,
    id: 4,
  },
  {
    name: "Najla",
    point: 5,
    id: 5,
  },
  {
    name: "Vafa",
    point: 0,
    id: 6,
  },
  {
    name: "Zohre",
    point: 0,
    id: 7,
  },
  {
    name: "Shima",
    point: 5,
    id: 8,
  },
  {
    name: "Maryam (Oman)",
    point: 5,
    id: 9,
  },
  {
    name: "Mansour",
    point: 5,
    id: 10,
  },
  {
    name: "Ali",
    point: 5,
    id: 11,
  },
  {
    name: "Faezeh ",
    point: 5,
    id: 12,
  },
  {
    name: "Javad",
    point: 5,
    id: 13,
  },
  {
    name: "Yasamin",
    point: 5,
    id: 14,
  },
  {
    name: "Mohammad",
    point: 5,
    id: 15,
  },
  {
    name: "Hassan",
    point: 5,
    id: 16,
  },
  {
    name: "Kowsar",
    point: 5,
    id: 17,
  },
  {
    name: "Maryam (Iran)",
    point: 0,
    id: 18,
  },
  {
    name: "Reyhane",
    point: 5,
    id: 19,
  },
  {
    name: "Mehdi",
    point: 0,
    id: 20,
  },
  {
    name: "Ali Canada",
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
