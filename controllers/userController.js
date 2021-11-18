const userModel = require("../models/user").User;

class User {
  static async register(req, res, next) {
    try {
      const { Users } = req.body;

      await userModel.create({
        Users,
      });

      res.status(201).json({
        status: "success",
        message: "New member registered!",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = User;
