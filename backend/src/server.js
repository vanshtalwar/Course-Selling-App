import express from "express"
import userRoutes from "./routes/user.routes.js"
import courseRoutes from "./routes/course.routes.js"
import adminRoutes from "./routes/admin.routes.js"
import MongoDb from "./lib/db.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT

app.use("/api/user", userRoutes )
app.use("/api/admin", adminRoutes )
app.use("/api/course", courseRoutes )



app.listen(PORT, () => {
    console.log(`Backend working at http://localhost:${PORT}`);
    MongoDb()
})