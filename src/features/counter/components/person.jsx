import style from "./style.module.css";
const PersonInfo = ({ name, index, point }) => {
  return (
    <div className={style.personContainer}>
      <div className={style.rank}>
        {index + 1 === 1 ? (
          <p  className={style.personP} style={{color:"goldenrod"}}>{index + 1}</p>
        ) : (
          <p className={style.personP}>{index + 1}</p>
        )}
      </div>
      <div className={style.name}>
        <p className={style.personName}>{name}</p>
      </div>
      <div className={style.point}>
        <p className={style.personP}>{point}</p>
      </div>
    </div>
  );
};

export default PersonInfo;
