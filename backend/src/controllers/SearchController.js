const Dev = require('../models/Dev');
const parseSringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(request, response){
        const { latitude, longitude, techs } = request.query;
        
        const techsArray = parseSringAsArray(techs);

        const devs = await Dev.find({
            techs:{
              $in: techsArray,
            },
        });
        return response.json({ devs });
    }
}