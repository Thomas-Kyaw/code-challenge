import { Router } from 'express';
import * as resourceController from '../controllers/resource';

const router = Router();

router.post('/', resourceController.create);
router.get('/', resourceController.list);
router.get('/:id', resourceController.get);
router.put('/:id', resourceController.update);
router.delete('/:id', resourceController.remove);

export default router;
