import { useState } from "react";
import { addType } from "../../components/typeBar/typesApi/typesApi";

export default function AddType() {
  const [type, setType] = useState("");
  return (
    <div>
      {" "}
      <input
        placeholder="название типа"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button
        onClick={() => {
          addType(type.toLowerCase());
          setType("");
        }}
      >
        Добавить тип
      </button>
    </div>
  );
}
