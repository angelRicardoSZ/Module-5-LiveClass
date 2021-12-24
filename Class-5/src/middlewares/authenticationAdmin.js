function authentication(req,res,next){
    const usrName = req.query.name;
    let AdminUsers = ["Tim", "Ada", "Greta", "Vim"];
    const UserStatus = AdminUsers.find(item => item == usrName);
    if(UserStatus){
        req.user = usrName;
        next();

    } else {
        res.send("No cuentas con permisos para acceder");
    }
}

module.exports = authentication;