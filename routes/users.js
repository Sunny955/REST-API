import express from 'express';
import {getUser,createUser,get_user_with_id,delete_user,update_user} from '../controllers/users.js';

const router = express.Router();


router.get('/',getUser);

router.post('/',createUser);

router.get('/:id',get_user_with_id);

router.delete('/:id',delete_user);

router.patch('/:id',update_user);

export default router;