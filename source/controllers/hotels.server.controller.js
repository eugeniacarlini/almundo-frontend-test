/*
* HOTELS SERVER CONTROLLER
*/

import mongoose from 'mongoose';

//import models
import Hotel from '../models/hotel.server.model';
import { hotels } from '../data/data';

export const getHotels = (req, res) => {
    return res.json({ 'success': true, 'message': 'Hotels fetched successfully', hotels });
}

export const addHotel = (req, res) => {
    const newHotel = new Hotel(req.body);
    newHotel.save((err, hotel) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error' });
        }
        return res.json({ 'success': true, 'message': 'Hotel added successfully', hotel });
    })
}

export const updateHotel = (req, res) => {
    Hotel.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }, (err, hotel) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error', 'error': err });
        }
        console.log(hotel);
        return res.json({ 'success': true, 'message': 'Updated successfully', hotel });
    })
}

export const getHotel = (req, res) => {
    Hotel.find({ _id: req.params.id }).exec((err, hotel) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error' });
        }
        if (hotel.length) {
            return res.json({ 'success': true, 'message': 'Hotel fetched by id successfully', hotel });
        }
        else {
            return res.json({ 'success': false, 'message': 'Hotel with the given id not found' });
        }
    })
}

export const deleteHotel = (req, res) => {
    Hotel.findByIdAndRemove(req.params.id, (err, hotel) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error' });
        }
        return res.json({ 'success': true, 'message': hotel.name + ' deleted successfully' });
    })
}