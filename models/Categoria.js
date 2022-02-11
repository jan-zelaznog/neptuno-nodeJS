const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema (
{
	idCategoria : { type: Number, required: true },
    NombreCategoria: { type: String, required: true },
    Descripcion: { type: String, required: true }
}, { collection: 'Categorias' }
);

mongoose.model ("Categoria", CategoriaSchema);