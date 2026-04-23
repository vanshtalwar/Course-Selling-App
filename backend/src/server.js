import express from "express"
import authRoutes from "./routes/auth.routes.js"
import courseRoutes from "./routes/course.routes.js"
import MongoDb from "./lib/db.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT

app.use("/api/auth", authRoutes )
app.use("/api/course", courseRoutes )


app.listen(PORT, () => {
    console.log(`Backend working at http://localhost:${PORT}`);
    MongoDb()
})