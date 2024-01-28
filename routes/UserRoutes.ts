import express from "express";
import { createUser } from "../controllers/UserControllers";
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

export default userRouter;
