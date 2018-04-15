/*
* HOTELS SERVER CONTROLLER
*/

import mongoose from 'mongoose';
import * as HotelService from '../services/HotelService'

export const getHotels = (req, res) => {
    HotelService.findHotels(req.query.name, req.query.stars).then(function(result){
        return res.json({ 'success': true, 'message': 'Hotels found successfully', 'hotels': result });
    }).catch(function(result){
        return res.json({ 'success': false, 'message': 'Some Error', 'error': result });
    });
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

        return res.json({ 'success': true, 'message': 'Updated successfully', hotel });
    })
}


export const deleteHotel = (req, res) => {
    HotelService.deleteHotel(req.params.id).then(function() {
        return res.json({ 'success': true, 'message': 'Hotel deleted successfully' });
    }).catch(function(result) {
        return res.json({ 'success': false, 'message': result, 'error': result });
    });
}