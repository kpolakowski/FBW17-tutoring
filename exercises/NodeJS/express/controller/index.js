const DCI_MODULES = ['HTML/CSS', 'JavaScript', 'DOM', 'NodeJS', 'Data Server', 'Fullstack Server', 'Final Project']

const handleJSON = (req,res)=>{
    res.send(DCI_MODULES);
}

const handleTEXT = (req,res)=>{
    res.send(DCI_MODULES.join(" / "));
}

const handleHTML = (req,res)=>{
    let list = "<ul>";
    DCI_MODULES.forEach(mod => list += `<li>${mod === "Data Server" ? `<b>${mod}</b>` : mod}</li>`);
    list += "</ul>";
    res.send(list);
}

module.exports = { handleJSON, handleTEXT, handleHTML }