/*
* HOTELS SERVER CONTROLLER
*/

import mongoose from 'mongoose';
import * as HotelService from '../services/HotelService';

export const getHotels = (req, res) => {
    HotelService.findHotels(req.query.name, req.query.stars).then(function(result){
        return res.json({ 'success': true, 'message': 'Hotels found successfully', 'hotels': result });
    }).catch(function(result){
        return res.json({ 'success': false, 'message': 'Some Error', 'error': result });
    });
};

export const addHotel = (req, res) => {
    HotelService.insertHotel(req.body).then(function() {
        return res.json({ 'success': true, 'message': 'Hotel created successfully' });
    }).catch(function(err) {
        return res.json({ 'success': false, 'message': 'Some Error', 'error': err });
    });
};

export const updateHotel = (req, res) => {
    HotelService.updateHotel(req.body).then(function() {
        return res.json({ 'success': true, 'message': 'Hotel updated successfully' });
    }).catch(function(err) {
        return res.json({ 'success': false, 'message': 'Some Error', 'error': err });
    });
};

export const deleteHotel = (req, res) => {
    HotelService.deleteHotel(req.params.id).then(function() {
        return res.json({ 'success': true, 'message': 'Hotel deleted successfully' });
    }).catch(function(result) {
        return res.json({ 'success': false, 'message': result, 'error': result });
    });
};