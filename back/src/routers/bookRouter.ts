import Router from "express";
import passportJwt from "../middlewares/passportJwt";
import * as bookController from "../controllers/bookController";

const bookRouter = Router();

bookRouter.post("/", passportJwt, bookController.createBook);

bookRouter.get("/", passportJwt, bookController.getBookList);

bookRouter.put("/", passportJwt, bookController.updateCustomBook);

bookRouter.delete("/", passportJwt, bookController.deleteCustomBook);

bookRouter.get("/word", passportJwt, bookController.getBook);

bookRouter.post("/word", passportJwt, bookController.createCustomBookInWord);

bookRouter.put("/word", passportJwt, bookController.updateCustomBookInWord);

bookRouter.delete("/word", passportJwt, bookController.deleteCustomBookInWord);

export default bookRouter;
