import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, setProductEdit } from "../Store/BTForm/Slice";

export const ProductTable = () => {
  const dispatch = useDispatch()
  const { productList } = useSelector((state) => state.btForm);
  console.log(productList)
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Desc</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <img src={product.image} width={100} height={100}/>
                </td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.productType}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => {
                    dispatch(deleteProduct(product.id))
                  }}>
                    <i className="fa-solid fa-trash-can" />
                  </button>
                  <button className="btn btn-success ms-3" onClick={() => {
                    dispatch(setProductEdit(product))
                  }}>
                    <i className="fa-solid fa-pen-to-square" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
