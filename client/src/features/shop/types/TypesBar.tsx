import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { TypesList, getTypes } from "./TypeSlice";

export default function TypesBar() {
  const types = useAppSelector(TypesList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <ul>
      {types.map((el) => (
        <li key={el.id} style={{ border: "1px solid gray", cursor: "pointer" }}>
          {el.name}
        </li>
      ))}
    </ul>
  );
}
