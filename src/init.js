import mongoose from "mongoose";
import config from "./config.json";
import initPhotos from "./photo/init";


//підключення до бази даних
const connectionUrl = config.db.url+config.db.name;
mongoose.connect (connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=>{
    //виклик ініціалізації списку photo
    initPhotos.run().then( ()=>{
        console.log(`Database was initialised`);  
    }); 
})
.catch(error=>{console.log(error)});