const capitalizeName = (req,res,next) => {
    //console.log("This is my middleware");
    req.body.firstname = req.body.firstname[0].toLocaleUpperCase() + req.body.firstname.slice(1)
    req.body.lastname = req.body.lastname[0].toLocaleUpperCase() + req.body.lastname.slice(1)
    next()
}
const toFullName = (req,res, next)=> {
    req.fullname = `${req.body.firstname} ${req.body.lastname}`
    next()
}

module.exports = { capitalizeName, toFullName }