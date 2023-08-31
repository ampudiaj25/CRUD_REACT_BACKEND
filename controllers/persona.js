const { response, request } = require('express');

const {Persona} = require('../models/persona')

const personaoPost = async (req= request, res=response) => {
   
    const {body} = req;

    try {

    const existePersona = await Persona.findOne({
        where: {
            cedula: body.cedula
        }
    }); 
    
    if(existePersona){
       return res.status(400).json({
            msg: `La persona con la cedula ${body.cedula} ya existe`
        });
    }   
        const persona = await Persona.create(body);
        persona.save();
        res.status(200).json(persona);

    } catch (error) {
        res.status(400).json({
            msg: 'Recurso no encontrado '
        });
    }
    
};

module.exports = {
    personaoPost
 }