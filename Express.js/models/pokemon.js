'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let pokemonSchema = new Schema({
    id: Number,
    nombre: String,
    descripcion: String,
    precio:Number,
    img:String
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema, "Videojuegos");

module.exports = Pokemon;