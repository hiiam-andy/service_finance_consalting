import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { TypesList, getTypes, setSelectedType } from "./TypeSlice";
import styles from "./styles/Type.module.css";

export default function TypesBar() {
  const types = useAppSelector(TypesList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      <strong>Выберите тип</strong>
      <ul>
        <li
          className={styles.type_link}
          onClick={() => dispatch(setSelectedType(null))}
        >
          Показать все
        </li>
        {types.map((el) => (
          <li
            key={el.id}
            className={styles.type_link}
            onClick={() => dispatch(setSelectedType(el.id))}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
