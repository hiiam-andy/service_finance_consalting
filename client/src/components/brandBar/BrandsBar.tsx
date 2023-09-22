// import { useEffect } from "react";

// import {
//   BrandsList,
//   getBrands,
//   setSelectedBrand,
// } from "./brandsApi/brandSlice";
// import styles from "./styles/Brand.module.css";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";

// export default function BrandsBar() {
//   const brands = useAppSelector(BrandsList);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(getBrands());
//   }, [dispatch]);

//   return (
//     <div>
//       <strong>Выберите бренд</strong>
//       <ul>
//         <li
//           className={styles.brand_link}
//           onClick={() => dispatch(setSelectedBrand(null))}
//         >
//           Показать все
//         </li>
//         {brands.map((el) => (
//           <li
//             key={el.id}
//             className={styles.brand_link}
//             onClick={() => dispatch(setSelectedBrand(el.id))}
//           >
//             {el.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  BrandsList,
  getBrands,
  setSelectedBrand,
} from "./brandsApi/brandSlice";

export default function BrandsBar() {
  const brands = useAppSelector(BrandsList);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<number | string>("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(getBrands());
    if (value === "") {
      dispatch(setSelectedBrand(null));
    } else {
      dispatch(setSelectedBrand(Number(value)));
    }
  }, [dispatch, value]);

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-label">Выбрать бренд</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Тип товара"
          value={value}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={""}>Показать все</MenuItem>
          {brands.map((el) => (
            <MenuItem value={Number(el.id)} key={el.id}>
              {el.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
