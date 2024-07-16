// src/scripts/handler.js

const { nanoid } = require('nanoid');
let areas = require('./areas');

// Get all cities
const getAllCitiesHandler = (request, h) => {
    return h.response(areas).code(200);
};

// Get city by ID
const getCityByIdHandler = (request, h) => {
    const { id } = request.params;
    const city = areas.find((c) => c.id === parseInt(id, 10));

    if (!city) {
        return h.response({ message: 'City not found' }).code(404);
    }

    return h.response(city).code(200);
};

// Add new city
const addCityHandler = (request, h) => {
    const { name, image, description, destination } = request.payload;
    const id = nanoid();

    const newCity = {
        id,
        name,
        image,
        description,
        destination: destination || [],
    };

    areas.push(newCity);

    return h.response(newCity).code(201);
};

// Update city
const updateCityHandler = (request, h) => {
    const { id } = request.params;
    const { name, image, description, destination } = request.payload;

    const index = areas.findIndex((c) => c.id === parseInt(id, 10));

    if (index === -1) {
        return h.response({ message: 'City not found' }).code(404);
    }

    areas[index] = {
        ...areas[index],
        name,
        image,
        description,
        destination,
    };

    return h.response(areas[index]).code(200);
};

// Delete city
const deleteCityHandler = (request, h) => {
    const { id } = request.params;
    const index = areas.findIndex((c) => c.id === parseInt(id, 10));

    if (index === -1) {
        return h.response({ message: 'City not found' }).code(404);
    }

    areas = areas.filter((c) => c.id !== parseInt(id, 10));

    return h.response({ message: 'City deleted successfully' }).code(200);
};

// Get destination by ID
const getDestinationByIdHandler = (request, h) => {
    const { cityId, destId } = request.params;
    const city = areas.find((c) => c.id === parseInt(cityId, 10));

    if (!city) {
        return h.response({ message: 'City not found' }).code(404);
    }

    const destination = city.destination.find((d) => d.id === parseInt(destId, 10));

    if (!destination) {
        return h.response({ message: 'Destination not found' }).code(404);
    }

    return h.response(destination).code(200);
};

// Add new destination
const addDestinationHandler = (request, h) => {
    const { cityId } = request.params;
    const { name, image, description, address } = request.payload;
    const id = nanoid();

    const city = areas.find((c) => c.id === parseInt(cityId, 10));

    if (!city) {
        return h.response({ message: 'City not found' }).code(404);
    }

    const newDestination = {
        id,
        name,
        image,
        description,
        address,
    };

    city.destination.push(newDestination);

    return h.response(newDestination).code(201);
};

// Update destination
const updateDestinationHandler = (request, h) => {
    const { cityId, destId } = request.params;
    const { name, image, description, address } = request.payload;

    const city = areas.find((c) => c.id === parseInt(cityId, 10));

    if (!city) {
        return h.response({ message: 'City not found' }).code(404);
    }

    const destinationIndex = city.destination.findIndex((d) => d.id === parseInt(destId, 10));

    if (destinationIndex === -1) {
        return h.response({ message: 'Destination not found' }).code(404);
    }

    city.destination[destinationIndex] = {
        ...city.destination[destinationIndex],
        name,
        image,
        description,
        address,
    };

    return h.response(city.destination[destinationIndex]).code(200);
};

// Delete destination
const deleteDestinationHandler = (request, h) => {
    const { cityId, destId } = request.params;

    const city = areas.find((c) => c.id === parseInt(cityId, 10));

    if (!city) {
        return h.response({ message: 'City not found' }).code(404);
    }

    city.destination = city.destination.filter((d) => d.id !== parseInt(destId, 10));

    return h.response({ message: 'Destination deleted successfully' }).code(200);
};

module.exports = {
    getAllCitiesHandler,
    getCityByIdHandler,
    addCityHandler,
    updateCityHandler,
    deleteCityHandler,
    getDestinationByIdHandler,
    addDestinationHandler,
    updateDestinationHandler,
    deleteDestinationHandler,
};
