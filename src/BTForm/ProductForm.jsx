import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../Store/BTForm/Slice";
export const ProductForm = () => {
  const [formValue, setFormValue] = useState({
    id: "",
    image: "",
    name: "",
    productType: "",
    price: "",
    description: "",
  });

  const [formErr, setFormErr] = useState({
    id: "",
    image: "",
    name: "",
    productType: "",
    price: "",
    description: "",
  });

  const dispatch = useDispatch();

  const { productEdit, productList } = useSelector((state) => state.btForm);
 

  const validation = (name, value, productEdit) => {
    console.log("productEdit:",productEdit)
   if(!productEdit){
    switch (name) {
      case "id":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else if(productList.findIndex((item) => item.id === value) !== -1){
          return 'Ma san pham da ton tai';
        } else {
          return "";
        }
      case "name":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else {
          return "";
        }
      case "price":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else if (!value.match(new RegExp("^[0-9]*$"))) {
          return "Vui long nhap so";
        } else {
          return "";
        }
      case "image":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else if (
          !value.match(
            new RegExp("^https?://[a-zA-Z0-9.-]+.[a-z]{2,}(/[^]*)?$")
          )
        ) {
          return "Vui long nhap dung duong dan hinh anh";
        } else {
          return "";
        }
      case "productType":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else {
          return "";
        }
      case "description":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else {
          return "";
        }
      default:
        return "";
    }
   } else {
    switch (name) {
      
      case "name":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else {
          return "";
        }
      case "price":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else if (!value.match(new RegExp("^[0-9]*$"))) {
          return "Vui long nhap so";
        } else {
          return "";
        }
      case "image":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else if (
          !value.match(
            new RegExp("^https?://[a-zA-Z0-9.-]+.[a-z]{2,}(/[^]*)?$")
          )
        ) {
          return "Vui long nhap dung duong dan hinh anh";
        } else {
          return "";
        }
      case "productType":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else {
          return "";
        }
      case "description":
        if (value === "") {
          return "Vui long nhap thong tin";
        } else {
          return "";
        }
      default:
        return "";
    }
   }
  };
  const handleOnChange = (ev) => {
    const {name, value} = ev.target
    setFormErr({ ...formErr, [name]: validation(name, value, productEdit)});
    setFormValue({ ...formValue, [name]: value });
  };
  useEffect(() => {
    if (productEdit) {
      setFormErr({formErr});
      setFormValue(productEdit);
    }
  }, [productEdit]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const validationError = {}
        Object.keys(formValue).forEach((name) => {
          const error = validation(name, formValue[name], productEdit);
          console.log(error)
          if(error && error.length > 0) {
            validationError[name] = error;
          }
        });
        if (Object.keys(validationError).length > 0) {
          setFormErr({ ...validationError });
          return;
        }
        if (productEdit) {
          dispatch(updateProduct(formValue));
        } else {
          dispatch(addProduct(formValue));
        }

        setFormValue({
          id: "",
          image: "",
          name: "",
          productType: "",
          price: "",
          description: "",
        });
      }}
    >
      <div className="row">
        <h2 className="p-3 bg-dark text-warning">Product Info</h2>
        <div className="col-6">
          <div className="mt-3" style={{height:90}}>
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              name="id"
              id="id"
              onChange={handleOnChange}
              disabled={formValue.id === productEdit?.id}
              value={formValue?.id}
            />
            {formErr.id && (
              <p>
                <small className="text-danger">{formErr.id}</small>
              </p>
            )}
          </div>
          <div className="mt-3" style={{height:90}}>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={formValue?.name}
              onChange={handleOnChange}
            />
            {formErr.name && (
              <p>
                <small className="text-danger">{formErr.name}</small>
              </p>
            )}
          </div>
          <div className="mt-3" style={{height:90}}>
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              id="price"
              value={formValue?.price}
              onChange={handleOnChange}
            />
            {formErr.price && (
              <p>
                <small className="text-danger">{formErr.price}</small>
              </p>
            )}
          </div>
        </div>
        <div className="col-6">
          <div className="mt-3" style={{height:90}}>
            <label>Image</label>
            <input
              type="text"
              className="form-control"
              name="image"
              id="image"
              value={formValue?.image}
              onChange={handleOnChange}
            />
            {formErr.image && (
              <p>
                <small className="text-danger">{formErr.image}</small>
              </p>
            )}
          </div>
          <div className="mt-3" style={{height:90}}>
            <label>Product Type</label>
            <input
              type="text"
              className="form-control"
              name="productType"
              id="productType"
              value={formValue?.productType}
              onChange={handleOnChange}
            />
            {formErr.productType && (
              <p>
                <small className="text-danger">{formErr.productType}</small>
              </p>
            )}
          </div>
          <div className="mt-3" style={{height:90}}>
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              value={formValue?.description}
              onChange={handleOnChange}
            />
            {formErr.description && (
              <p>
                <small className="text-danger">{formErr.description}</small>
              </p>
            )}
          </div>
          <div className="col-12 text-end mt-4">
            {productEdit ? (
              <button className="btn btn-success ms-3" type="submit">
                UPDATE
              </button>
            ) : (
              <button className="btn btn-primary" type="submit">
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
