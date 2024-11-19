import { app } from "./connections";
import routes from "./routes/routes"


app.use(routes)

app.listen(3000, ()=>{
    console.log("Server started at http://localhost:3000") 
})