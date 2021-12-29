const existsSpeciesQuery = (name) => {
    
    return `SELECT EXISTS(SELECT id_species FROM t_species WHERE name = '${name}') as \`exists\` ;`
};

const insertSpecieQuery =  "INSERT INTO t_species SET ?"
    
const getSpecieQuery = "SELECT * FROM t_species;"

exports.existsSpeciesQuery = existsSpeciesQuery;
exports.insertSpecieQuery = insertSpecieQuery;
exports.getSpecieQuery = getSpecieQuery;