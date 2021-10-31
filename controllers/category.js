const Category = require("../models/category");

function colorbar(total, target) {
  percent = Math.trunc((total / target) * 100);
  if (percent <= 33) return "red";
  else if (percent > 33 && percent <= 66) return "yellow";
  else return "green";
}

exports.createCategory = async (req, res, next) => {

  const total = req.body.totalsales;
  const target = req.body.targetsales;
  const title = req.body.title;
  const parentId = null;
  allParents = [];
  if(req.body.parentId){
    parentId = req.body.parentId;
    const parentCategory = Category.find(parentId).parentId;
    allParents = [...parentCategory, parentId];
  }
  const category = new Category({
    title: title,
    targetsales: target,
    totalsales: total,
    percentage: Math.trunc((total / target) * 100),
    color: colorbar(total, target),
    parentId: allParents
  });

  try {
   category.save().then(category =>{
     categoryId = category.ObjectId;
     if(req.body.parentId){
       Category.findByIdAndUpdate({id: parentId},{children: {...children,ObjectId}} );
     }
   });

    res.status(201).json({
      message: "category created successfully!",
      category: category
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.relatedParents = async (req, res, next) => {
  realated = [];
  const categoryId = req.body.categoryId;
  
  try {
    const categoryParents = Category.find(categoryId).parentId;
    for(parent in categoryParents){
      const cur = Category.find(parent);
      if(cur){
        related.push(cur);
      }
    }
    return related;
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.relatedChild = async (req, res, next) => {
  realated = [];
  const categoryId = req.body.categoryId;
  const levels = req.body.level;
  try {
   
    
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


