/*
* ROUTES
*/

import express from 'express';
import * as hotelsController from '../controllers/hotels.server.controller';

const router = express.Router();

router.route('/')
    .get(hotelsController.getHotels)
    .post(hotelsController.addHotel)
    .put(hotelsController.updateHotel);
router.route('/:id')
    .get(hotelsController.getHotel)
    .delete(hotelsController.deleteHotel);
export default router;