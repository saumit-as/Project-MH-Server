import express from "express";
import {
  createUser,
  getUser,
  updateScore,
} from "../controllers/UserControllers";
const userRouter = express.Router();

userRouter.post("/create", async (req, res) => {
  const body = req.body;
  console.log(body);
  const user = await createUser({
    email: body.email,
    userId: body.userId,
    username: body.username,
  });

  res.send(user);
});

userRouter.post("/setScore", async (req, res) => {
  const body = req.body;
  const update = await updateScore({ ...body });
  res.send(update);
});

userRouter.get("/get/:email", async (req, res) => {
  const email = req.params.email;

  const task = await getUser(email);
  console.log(task);
  res.send(task);
});
export default userRouter;
