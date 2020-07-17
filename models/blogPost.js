const mongoose = require('mongoose');



const Schema = mongoose.Schema;
const BlogPostSchema=new Schema({
    username: String,
    acıklama : String,
    email : String,
    phone : Number, 
    date: {
        type: String , 
        default:Date.now()
    }
});




const BlogPost= mongoose.model('BlogPost',BlogPostSchema    ) ;




module.exports=BlogPost ;
