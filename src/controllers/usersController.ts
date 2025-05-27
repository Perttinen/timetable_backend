// import bcrypt from "bcrypt";
import { Request, Response } from "express";

import User from "../models/user.js";

interface NewUserEntry {
  active: boolean;
  password: string;
  userlevel: string[];
  username: string;
}

interface updateUserEntry {
  active?: boolean;
  id: string;
  password?: string;
  userlevel?: string[];
  username?: string;
}

interface UserToReturn {
  active: boolean;
  userlevel: string[];
  username: string;
}

const createNewUser = async (
  req: Request<unknown, unknown, NewUserEntry>,
  res: Response<NewUserEntry>
) => {
  const newUser = await User.create(req.body);
  res.status(200).json(newUser);
};

const deleteUser = async (
  req: Request,
  res: Response<string | { message: string }>
) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  await user.deleteOne();
  res.json(`Username: ${user.username} with id: ${String(user._id)} deleted`);
};

const getAllUsers = async (_req: Request, res: Response<UserToReturn[]>) => {
  const users = (await User.find().select("-password")).map((u) => u.toJSON());
  res.json(users);
};

const getUser = async (req: Request, res: Response<UserToReturn>) => {
  const user = await User.findById(req.params.id);
  res.json(user?.toJSON());
};

const updateUser = async (
  req: Request<unknown, unknown, updateUserEntry>,
  res: Response<{ message: string }>
) => {
  console.log(req.body);

  const { active, id, password, userlevel, username } = req.body;
  const user = await User.findById(id);
  if (!user) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  if (username) user.username = username;
  if (userlevel) user.userlevel = userlevel;
  if (active) user.active = active;
  if (password) user.password = password;

  const updatedUser = await user.save();

  res.json({
    message: `User id: ${String(updatedUser.id)} succesfully updated`,
  });
};

export default {
  createNewUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
};
