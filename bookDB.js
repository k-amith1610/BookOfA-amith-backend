import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import Book from "./model/book.model.js"
import BookJson from "./books.json" assert { type: "json" };

dotenv.config();

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Book.create(BookJson);
        console.log("created");
    } catch(error) {
        console.log(error);
    }
}

start();
