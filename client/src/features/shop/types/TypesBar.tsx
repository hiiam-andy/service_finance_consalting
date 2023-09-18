import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { TypesList, getTypes, setSelectedType } from "./TypeSlice";

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
          style={{ border: "1px solid gray", cursor: "pointer" }}
          onClick={() => dispatch(setSelectedType(null))}
        >
          Показать все
        </li>
        {types.map((el) => (
          <li
            key={el.id}
            style={{ border: "1px solid gray", cursor: "pointer" }}
            onClick={() => dispatch(setSelectedType(el.id))}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
