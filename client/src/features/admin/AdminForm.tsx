import AddType from "./AddType";
import AddBrand from "./AddBrand";
import AddProduct from "./AddProduct";

export default function AdminForm() {
  // name, price, info, quantity, brandId, typeId

  return (
    <div>
      <div>
        <AddType />
        <AddBrand />
      </div>
      <AddProduct />
    </div>
  );
}
