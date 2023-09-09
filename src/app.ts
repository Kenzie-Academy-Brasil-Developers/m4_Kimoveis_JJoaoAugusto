import "reflect-metadata";
import "express-async-errors";
import express from "express";
import {
  categoryRouter,
  realEstateRouter,
  scheduleRouter,
  sessionRouter,
  userRouter,
} from "./routers";
import middlewares from "./middlewares";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoryRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", scheduleRouter);

app.use(middlewares.handleErrors);

export default app;

// Rotas que precisam de token

// get /users - admin obrigatório
// patch /users/:id - admin obrigatório ou dono da conta
// post /categories - admin obrigatório
// post /realEstate - admin obrigatório
// post /schedules - admin opcional
// get /schedules/realEstate/:id - admin obrigatório
