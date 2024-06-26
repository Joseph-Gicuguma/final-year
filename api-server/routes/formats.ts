import express from 'express';
import {
  getFormats,
  getFormatById,
  createFormat,
  updateFormat,
  deleteFormat,
} from '../controllers/formats.js';
import auth from '../middleware/auth.js';
import adminAuth from '../middleware/admin-auth.js';
import boundary from '../utils/error-boundary.js';
import validate from '../utils/validation.js';
import { createUpdateSchema, getManySchema } from '../validation/formats-themes.js';

const router = express.Router();

router.get('/', validate(getManySchema, 'query'), boundary(getFormats));
router.get('/:id', boundary(getFormatById));

router.use(auth);
router.use(adminAuth);

router.post('/', validate(createUpdateSchema), boundary(createFormat));
router.put('/:id', validate(createUpdateSchema), boundary(updateFormat));
router.delete('/:id', boundary(deleteFormat));

export default router;
