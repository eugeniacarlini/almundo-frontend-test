/*
* ROUTES
*/

import express from 'express';
import * as hotelsController from '../controllers/hotels.server.controller';

const router = express.Router();

router.route('/')
    .get(hotelsController.getHotels)
    .post(hotelsController.addHotel);

router.route('/:id')
    .put(hotelsController.updateHotel)
    .delete(hotelsController.deleteHotel);

export default router;