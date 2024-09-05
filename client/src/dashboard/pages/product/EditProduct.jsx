import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import Spiner from "../../../components/Loader/Spiner";
import { EditProductSchema } from "../../../formValidations/Schema";

const EditProduct = ({ close, id, onUpdate }) => {
  const [initialValues, setInitialValues] = useState(null);
  const [categories, setcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("main-modal")) {
      close();
    }
  };
  useEffect(() => {
    const getProductAndCategories = async () => {
      setLoading(true);
      try {
        const [productRes, categoryRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BASE_URL}/products/detail/${id}`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BASE_URL}/category`, {
            withCredentials: true,
          }),
        ]);
        if (productRes.data && categoryRes.data.status === "success") {
          const productData = productRes.data;
          setInitialValues({
            name: productData.name || "",
            price: productData.price || "",
            stock: productData.stock || "",
            category: productData.category._id || "", // Corrected key from 'role' to 'category'
            image: productData.image,
          });
          setcategories(categoryRes.data.category);
        }
      } catch (error) {
        console.error("Error fetching product or categories:", error);
      } finally {
        setLoading(false);
      }
    };
  
    getProductAndCategories();
  }, [id]);
  

  const formik = useFormik({
    initialValues: initialValues || {
      name: "",
      price: "",
      stock: "",
      category: "",
      image: "",
    },
    enableReinitialize: true,
    enableDebug: true,
    validationSchema: EditProductSchema,
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
        const { data } = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/products/update/${id}`,
          formData,
          { withCredentials: true }
        );
        if (data) {
          toast.success("Product Updated Successfully!");
          onUpdate();
          close();
        } else {
          toast.error("Unable to update product");
        }
      } catch (error) {
        toast.error("Something went wrong!");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    },
  });

  if (loading || !initialValues) {
    return <Spiner />;
  }
  return (
    <>
      <div className="role-permission-section">
        <div className="container">
          <div
            className="modal show main-modal"
            id="EditModal"
            style={{ display: "block" }}
            onClick={handleOutsideClick}
          >
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content w-100">
                {/* <!-- Modal Header --> */}
                <div className="modal-header bg-light">
                  <h4 className="modal-title">Edit product</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    onClick={close}
                  ></button>
                </div>

                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <div className="py-3 text-center">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="row gy-4 justify-content-center align-items-center justify-content-between p-2">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                          <label htmlFor="">Name</label>
                          <input
                            className="form-control w-100 py-2 rounded-3 px-3"
                            type="text"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                               {formik.errors.name && (
                          <div className="text-sm text-danger">
                            {formik.errors.name}
                          </div>
                        )}
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                          <label htmlFor="">Category</label>
                          <select
                            className="form-select form-select-sm py-2"
                            aria-label=".form-select-sm example"
                            name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          >
                            <option disabled>Select Category</option>
                            {categories?.map((category) => (
                              <option value={category._id} key={category._id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                          {formik.errors.category && (
                            <div className="text-sm text-danger">
                              {formik.errors.category}
                            </div>
                          )}
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                          <label htmlFor="">Price</label>
                          <input
                            className="form-control w-100 py-2 rounded-3 px-3"
                            type="number"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.price && (
                            <div className="text-sm text-danger">
                              {formik.errors.price}
                            </div>
                          )}
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start">
                          <label htmlFor="">Stock</label>
                          <input
                            className="form-control w-100 py-2 rounded-3 px-3"
                            type="number"
                            name="stock"
                            value={formik.values.stock}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.stock && (
                            <div className="text-sm text-danger">
                              {formik.errors.stock}
                            </div>
                          )}
                        </div>
                        <div className="col-12 col-lg-12 col-md-6 col-sm-12 text-start">
                          <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                              Upload Image
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              name="image"
                              onChange={(event) => {
                                formik.setFieldValue(
                                  "image",
                                  event.currentTarget.files[0]
                                );
                              }}
                              onBlur={formik.handleBlur}
                            />
                          </div>
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

export default EditProduct;
