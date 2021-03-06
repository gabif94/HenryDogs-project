const {DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	return sequelize.define('dog', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		height: {
			type: DataTypes.INTEGER,
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		yearsoflife: {
			type: DataTypes.INTEGER,
		},
	});
};
