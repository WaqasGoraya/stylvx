import { useState, useEffect } from "react";
import { useFormik } from "formik";
import Spiner from "../../../components/Loader/Spiner";
import axios from "axios";
import { AddProductSchema } from "../../../formValidations/Schema";
import toast from "react-hot-toast";

const AddProduct = ({ close, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [categories,setcategories] = useState([]);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("main-modal")) {
      close();
    }
  };
  useEffect(()=>{
      const getAllCategory = async()=>{
        setLoading(true);
        try {
          const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/category`,{withCredentials:true});
          if(data.status === 'success'){
            setcategories(data.category);
          }
        } catch (error) {
          toast.error('Unable to fetch Categories');
        }finally{
          setLoading(false)
        }
      }
      getAllCategory();
  },[])
  const initialValues = {
    name: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  };
  const { values, errors, touched,handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialValues,
    validationSchema: AddProductSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("stock", values.stock);
      formData.append("category", values.category);
      if (values.image) {
        formData.append("image", values.image);
      }
       try {
        setLoading(true);
        const { data } = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/products/add`,
          formData,
          { withCredentials: true }
        );
        if (data) {
          toast.success("Product Added Successfully!");
          onUpdate();
          close();
        } else {
          toast.error("Unable to Add product");
        }
      } catch (error) {
        console.log(error)
        toast.error("Something went wrong!");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    },
  });
  if(loading){
    return <Spiner/>
  }
  return (
    <>
      <div className="role-permission-section">
        <div className="container">
          <div
            className="modal show main-modal"
            id="AddProductModal"
            style={{ display: "block" }}
            onClick={handleOutsideClick}
          >
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content w-100">
                <div className="modal-header bg-light">
                  <h4 className="modal-title">Add product</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    onClick={close}
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="py-3 text-center">
                    <form onSubmit={handleSubmit}>
                      <div className="row gy-4 justify-content-center align-items-center justify-content-between p-2">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                          <label htmlFor="">Name</label>
                          <input
                            className="form-control w-100 py-2 rounded-3 px-3"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.name && touched.name ?(
                            <div className="text-sm text-danger">
                              {errors.name}
                            </div>
                          ):''}
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                          <label htmlFor="">Category</label>
                          <select
                            className="form-select form-select-sm py-2"
                            aria-label=".form-select-sm example"
                            name="category"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option disabled selected>Select Category</option>
                            {categories?.map((category)=>(
                              <option value={category._id} key={category._id}>{category.name}</option>
                            ))}
                          </select>
                          {errors.category && touched.category ?(
                            <div className="text-sm text-danger">
                              {errors.category}
                            </div>
                          ):''}
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                          <label htmlFor="">Price</label>
                          <input
                            className="form-control w-100 py-2 rounded-3 px-3"
                            type="number"
                            name="price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.price && touched.price?(
                            <div className="text-sm text-danger">
                              {errors.price}
                            </div>
                          ):''}
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                          <label htmlFor="">Stock</label>
                          <input
                            className="form-control w-100 py-2 rounded-3 px-3"
                            type="number"
                            name="stock"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.stock && touched.price?(
                            <div className="text-sm text-danger">
                              {errors.stock}
                            </div>
                          ):''}
                        </div>
                        <div className="col-12 col-lg-12 col-md-6 col-sm-12 text-start">
                          <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                              Upload Imge
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              name="image"
                              onBlur={handleBlur}
                              onChange={(event) => {
                                setFieldValue(
                                  "image",
                                  event.currentTarget.files[0]
                                );
                              }}
                            />
                          </div>
                          {errors.image && touched.image?(
                            <div className="text-sm text-danger">
                              {errors.image}
                            </div>
                          ):''}
                        </div>
                      </div>
                      <div className="user-detail-submit-button text-center py-3">
                        <button
                          className="bg-black border-0  px-5 py-2 text-white"
                          type="submit"
                          disabled={loading}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
