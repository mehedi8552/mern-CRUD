const ProductsModel=require('../Model/ProductModel');

// C=Create
exports.CreateProduct=(req,res)=>{
   let reqBody= req.body;
    ProductsModel.create(reqBody)
        
           .then( data => res.status(200).json({status:"success",data:data}))
       
           .catch(err =>res.status(400).json({status:"fail",data:err} )) 
        }


// R=Read
exports.ReadProduct=(req,res)=>{
        ProductsModel.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}


// U=Update

exports.UpdateProduct=(req,res)=>{
   let id= req.params.id;
   let Query={_id:id};
   let reqBody=req.body;
   ProductsModel.updateOne(Query,reqBody)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}


// D=Delete
exports.DeleteProduct=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    ProductsModel.findByIdAndDelete(Query)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}