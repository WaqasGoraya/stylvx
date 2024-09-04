import { useState, useEffect } from "react";
import axios from "axios";
import Spiner from "../../../components/Loader/Spiner";
import "./Products.css";
import toast from "react-hot-toast";
import confirmDelete from "../../../components/alert/ConfirmDelete";
import { useNavigate } from "react-router-dom";
import ShowImage from "../../../components/Images/ShowImage";
import EditProduct from "./EditProduct";
import { createPortal } from "react-dom";
import AddProduct from "./AddProduct";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  // Edit product modal
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Add product modal
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  const navigate = useNavigate();
  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products`,
        { withCredentials: true }
      );
      // console.log(res.data)
      if (res.data) {
        setProducts(res.data);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const handleEdit = (productId) => {
    setSelectedProductId(productId);
    setIsProductModalOpen(true);
  };
  const handleUpdate = () => {
    // Refetch the products to update the list
    getProducts();
  };
  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProductId(null);
  };
  const handleDelete = async (productId) => {
    const isConfirmed = await confirmDelete();
    if (isConfirmed) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BASE_URL}/products/delete/${productId}`,
          { withCredentials: true }
        );
        if (response.data) {
          // Update the state to remove the deleted user from the list
          setProducts(products.filter((product) => product._id !== productId));
          toast.success("Product deleted successfully!");
        } else {
          toast.error("Failed to delete product.");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the product.");
      }
    }
  };
  if (loading) {
    return <Spiner />;
  }
  return (
    <>
      <div className="col-lg-9">
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-sm-between gy-4 pt-5">
          <h5 className="fw-bold text-uppercase">Product Management</h5>
          <div className="position-relative">
            <input
              className="border-0 rounded-0 border-bottom border border-dark form-control"
              type="search"
              placeholder="Search Products"
            />
            <span className="position-absolute fa fa-search "></span>
          </div>
        </div>
        <div className="right-content mt-3 mb-5">
          <div className="bg-white user-management">
            <button
              className="px-3 py-1 border-0  rounded-2 bg-black text-white m-3 fs-6"
              onClick={() => setIsAddProductModalOpen(true)}
            >
              Add Product
            </button>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr className="bg-gray">
                    <th>image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products ? (
                    products.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <ShowImage
                            imagePath={product.image}
                            className={"img-fluid me-2"}
                            width={"22px"}
                            height={"auto"}
                            alt={product.name}
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.category.name}</td>
                        <td>
                          <span
                            onClick={() => handleEdit(product._id)}
                            style={{ cursor: "pointer" }}
                            data-bs-toggle="modal"
                            data-bs-target="#EditModal"
                          >
                            <img
                              className="img-fluid me-2"
                              src="/images/bxs_edit.png"
                              width="22px"
                              height="auto"
                              alt=""
                            />
                          </span>
                          <span
                            onClick={() => handleDelete(product._id)}
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              className="img-fluid"
                              src="/images/delete-icon.png"
                              width="22px"
                              height="auto"
                              alt=""
                            />
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: "center" }}>
                        No Product Data Available!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isProductModalOpen &&
        createPortal(
          <EditProduct close={closeProductModal} id={selectedProductId} onUpdate={handleUpdate} />,
          document.body
        )}
      {isAddProductModalOpen &&
        createPortal(<AddProduct close={closeAddProductModal} onUpdate={handleUpdate} />, document.body)}
    </>
  );
};

export default Products;
