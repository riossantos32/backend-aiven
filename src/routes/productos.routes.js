import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import {  obtenerProductos, obtenerProducto, registrarProducto, actualizarProducto, eliminarProducto} from '../controllers/productos.controller.js';

// Configuración de multer para guardar archivos en /uploads
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.resolve('uploads'));
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
		cb(null, uniqueSuffix + '-' + file.originalname);
	}
});

const upload = multer({ storage: storage });

const router = Router();

// Ruta para obtener todos los productos
router.get('/productos', obtenerProductos);

// Ruta para obtener un produto por su ID
router.get('/producto/:id', obtenerProducto);

router.post('/registrarproducto', upload.single('imagen'), registrarProducto);

router.put('/actualizarproducto/:id', actualizarProducto);

router.delete('/eliminarproducto/:id', eliminarProducto);

export default router;
