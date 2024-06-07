import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./routes/book.route.js";
import userRouter from "./routes/user.route.js";
import connectDB from "./db/connect.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
const uri = process.env.MONGODB_URL;

app.get("/", (req, res) => {
    res.send("BookOf A BACKEND!!");
});

try {
    connectDB(uri);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}

app.use("/book", bookRoute);
app.use("/user", userRouter);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error.message);
    }
};

start();
