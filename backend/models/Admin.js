// const { type } = require('@testing-library/user-event/dist/type');
const mongoose=require('mongoose');
const {Schema} = mongoose;

const adminSchema = new Schema({
    name : { 
        type : String,
        require : true
    },
    email : { 
        type : String,
        require : true,
        unique : true 
    },
    password : { 
        type : String,
        require : true
    },
    role : { 
        type : String,
        require : true
    },
    date : { 
        type : Date,
        default : Date.now
    },
    
  });
   
  const Admin = mongoose.model('admin',adminSchema);
//   Admin.createIndexes();
  module.exports = Admin;