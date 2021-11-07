import express from "express"
import path from "path"

const app = express()

app.use("/admin", express.static(path.join(__dirname, "../../admin")))
app.get("/*", (req, res) => {
    res.send("<div>Nuthin' 'ere</div>")
})

const port = 3002

app.listen(port, () => {
    console.log(`Started server on http://localhost:${port}.`)
})
