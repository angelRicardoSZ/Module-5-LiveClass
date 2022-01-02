const { validationResult }=require("express-validator");

module.exports = {
    index: function(req,res){
        
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.render("index",{
                title: "El formulario tiene errores",
                errors:errors.errors,
            });
        }

        const { name, color, email,age} = req.body;

        if(req.body.remember_color){
            res.cookie("color", color, {maxAge: 60 * 1000});

        }


        res.render("index", {
            name, color, email, age, title: "title"
        })
    },
    color: function(req,res){
        res.render("color");
    },

    
}