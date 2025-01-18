const mongoose=require('mongoose');
const {Schema} = mongoose;

const MenteesSchema = new Schema({
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
    branch : { 
        type : String,
        require : true
    },
    colleage : { 
        type : String,
        require : true
    },
    date : { 
        type : Date,
        default : Date.now
    },
    
  });
   
  const Mentees = mongoose.model('mentees',MenteesSchema);

  module.exports = Mentees;