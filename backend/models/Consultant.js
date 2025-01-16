// const { type } = require('@testing-library/user-event/dist/type');
const mongoose=require('mongoose');
const {Schema} = mongoose;

const ConsultantSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name : { 
        type : String,
        require : true
    },
    email : { 
        type : String,
        require : true,
        unique : true 
    },
    role : { 
        type : String,
        require : true
    },
    company : { 
        type : String,
        require : true
    },
    date : { 
        type : Date,
        default : Date.now
    },
    
  });
   
  const Consultant = mongoose.model('consultant',ConsultantSchema);

  module.exports = Consultant;