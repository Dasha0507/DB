const ApiError = require('../errors/ApiError');
const {Subscriptions} = require('../models/models');

class SubscriptionsController {

    async create(req, res) {
        const {name, descriptions, price} = req.body;
        const type = await Subscriptions.create({name, descriptions, price});
        return res.json({type});
    }
    
    async getAll(req, res) {

    }

    async getOne(req, res) {
        
    }
}

module.exports = new SubscriptionsController()