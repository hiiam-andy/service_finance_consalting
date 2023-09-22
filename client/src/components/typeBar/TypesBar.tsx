import { useEffect, useState } from "react";

import { TypesList, getTypes, setSelectedType } from "./TypeSlice";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function TypesBar() {
  const types = useAppSelector(TypesList);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<number | string>("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getTypes());
    if (value === "") {
      dispatch(setSelectedType(null));
    } else {
      dispatch(setSelectedType(Number(value)));
    }
  }, [dispatch, value]);

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Выбрать тип
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Тип товара"
          value={value}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={""}>Показать все</MenuItem>
          {types.map((el) => (
            <MenuItem value={Number(el.id)} key={el.id}>
              {el.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
