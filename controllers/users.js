const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

module.exports.fetchAllUsers = async(req, res, next) => {
   try {
      const users = await User.find();
      res.status(200).json({
         success: true,
         users
      })
   } catch (err) {
      next(err);
   }
}

module.exports.fetchUser = async(req, res, next) => {
   const { userId } = req.params;
   console.log(req.params);
   try {
      const user = await User.findById(userId);
      if (!user) return next(new ErrorResponse("Error fetching user.", 400));

      res.status(200).json({
         success: true,
         user
      })
   } catch (err) {
      next(err);
   }
}

module.exports.createUser = async(req, res, next) => {
   const { firstname, lastname, gender, phone, email } = req.body;
   console.log(req.body);
   try {
      const emailExists = await User.findOne({ email });
      if (emailExists) return next(new ErrorResponse("Email already exists.", 400));

      const newUser = await User.create({
         firstname,
         lastname,
         gender,
         phone,
         email
      })
      res.status(201).json({
         success: true,
         newUser
      })
   } catch (err) {
      console.log(err);
   }
}

module.exports.updateUser = async(req, res, next) => {
   const { userId } = req.params;
   const userDetails = req.body;
   try {
      const updateUser = await User.findByIdAndUpdate(userId, userDetails);

      if(!updateUser) return next(new ErrorResponse("Error updating user.", 400));

      res.status(200).json({
         success: true,
         message: "User updated successfully"
      })
   } catch (err) {
      next(err);
   }
}

module.exports.deleteUser = async(req, res, next) => {
   const { userId } = req.params;
   try {
      const deleteUser = await User.findByIdAndDelete(userId);
      if(!deleteUser) return next(new ErrorResponse("Error deleting user.", 400));
      
      res.status(200).json({
         success: true,
         message: "User deleted successfully."
      })
   } catch (err) {
      next(err);
   }
}