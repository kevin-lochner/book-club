module.exports = (sequelize, DataTypes) => {

    let PotentialBook = sequelize.define('PotentialBook', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }, authorFirstName: {
            type: DataTypes.STRING,
            allowNull: false
        }, authorLastName: {
            type: DataTypes.STRING,
            allowNull: false
        }, genre: {
            type: DataTypes.STRING,
        }
    })

    PotentialBook.sync({force: false}).then( () => {
        console.log('synced potential book table')
    })

    return PotentialBook

}