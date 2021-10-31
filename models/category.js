const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const categorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  totalsales: {
    type: String,
    required: true
  },
  targetsales: {
    type: String,
    required: true
  },
  percentage: {
    type: String,
    required: true
  },
  color:{
    type:String,
    required:true
  },
  paretnId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ]
});

module.exports = mongoose.model('Category', categorySchema);
