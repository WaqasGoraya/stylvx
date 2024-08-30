import rolesModel from "../models/roles.js";
import permissionsModel from "../models/permissions.js";

class rolesController {
  static allRoles = async (req, res) => {
    try {
      const roles = await rolesModel.find({}).populate({ path: "permissions" });
      if (roles) {
        return res.status(200).json({
          status: "success",
          roles,
        });
      } else {
        return res.status(404).json({
          status: "failed",
          message: "unable to get data",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "Something went wrong!",
        error: error,
      });
    }
  };
  static addRole = async (req, res) => {
    try {
      const { roleName, permissions } = req.body;
      const newRole = new rolesModel({
        name: roleName,
        permissions: permissions, // Array of permissions
      });

      const savedRole = await newRole.save();
      res.status(201).json({ status: "success", data: savedRole });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "Something went wrong!",
        error: error,
      });
    }
  };
  static roleDetail = async (req, res) => {
    try {
      const role = await rolesModel.findById(req.params.id);
      if (!role) {
        return res
          .status(404)
          .json({ status: "error", message: "Role not found" });
      }
      res.status(200).json({ status: "success", data: role });
    } catch (error) {
      console.error("Error fetching role details:", error);
      res
        .status(500)
        .json({ status: "error", message: "Failed to fetch role details" });
    }
  };
  static updateRole = async (req, res) => {
    const { roleName, permissions } = req.body;
    try {
      const updatedRole = await rolesModel.findByIdAndUpdate(
        req.params.id,
        { name: roleName, permissions: permissions },
        { new: true, runValidators: true }
      );
      if (!updatedRole) {
        return res
          .status(404)
          .json({ status: "error", message: "Role not found" });
      }
      res.status(200).json({ status: "success", data: updatedRole });
    } catch (error) {
      console.error("Error updating role:", error);
      res
        .status(500)
        .json({ status: "error", message: "Failed to update role" });
    }
  };
  static deleteRole = async (req, res) => {
    try {
      const deletedRole = await rolesModel.findByIdAndDelete(req.params.id);
      if (!deletedRole) {
        return res
          .status(404)
          .json({ status: "error", message: "Role not found" });
      }
      res
        .status(200)
        .json({ status: "success", message: "Role deleted successfully" });
    } catch (error) {
      console.error("Error deleting role:", error);
      res
        .status(500)
        .json({ status: "error", message: "Failed to delete role" });
    }
  };
}

export default rolesController;
