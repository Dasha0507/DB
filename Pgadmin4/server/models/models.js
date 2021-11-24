const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique:true},
    password: {type: DataTypes.STRING},
})

const Subscriptions = sequelize.define('subscriptions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false},
    descriptions: {type: DataTypes.STRING, allowNull:false},
    price: {type:DataTypes.INTEGER, allowNull: false}

})

const Categories = sequelize.define('categories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false}
})

const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    title: {type: DataTypes.STRING, unique:true, allowNull: false},
    descriptions: {type: DataTypes.STRING, allowNull:false},
    img: {type: DataTypes.STRING, allowNull: false},

})

const UserPost = sequelize.define('userpost', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    title: {type: DataTypes.STRING, unique:true, allowNull: false},
    descriptions: {type: DataTypes.STRING, allowNull:false},
    img: {type: DataTypes.STRING, allowNull: false},
})

User.hasOne(Subscriptions)
Subscriptions.belongsTo(User)

User.hasMany(UserPost)
UserPost.belongsTo(User)

Subscriptions.hasMany(Categories)
Categories.belongsTo(Subscriptions)

Categories.hasOne(News)
News.belongsTo(Categories)

Categories.hasOne(UserPost)
UserPost.belongsTo(Categories)

module.exports = {
    User,
    Subscriptions,
    Categories,
    News,
    UserPost
}
