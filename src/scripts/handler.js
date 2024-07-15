const { nanoid } = require('nanoid');
let areas = require('./myData');

const addAreasHandler = (request, h) => {
    const { name, description, image, cities } = request.payload;
    const id = nanoid(16);
    const newArea = {
        id,
        name,
        description,
        image,
        cities: cities || []
    };
    areas.push(newArea);
    const response = h.response({
        status: 'success',
        message: 'Area added successfully',
        data: {
            areaId: id
        }
    });
    response.code(201);
    return response;
};

const getAllAreasHandler = (request, h) => {
    const response = h.response({
        status: 'success',
        data: {
            areas
        }
    });
    response.code(200);
    return response;
};

const getAreasByIdHandler = (request, h) => {
    const { areaId } = request.params;
    const area = areas.find((a) => a.id === areaId);
    if (area) {
        return {
            status: 'success',
            data: {
                area
            }
        };
    }
    const response = h.response({
        status: 'fail',
        message: 'Area not found'
    });
    response.code(404);
    return response;
};

const editAreasByIdHandler = (request, h) => {
    const { areaId } = request.params;
    const { name, description, image, cities } = request.payload;
    const index = areas.findIndex((area) => area.id === areaId);
    if (index !== -1) {
        areas[index] = {
            ...areas[index],
            name,
            description,
            image,
            cities
        };
        const response = h.response({
            status: 'success',
            message: 'Area updated successfully'
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Area not found'
    });
    response.code(404);
    return response;
};

const deleteAreasByIdHandler = (request, h) => {
    const { areaId } = request.params;
    const index = areas.findIndex((area) => area.id === areaId);
    if (index !== -1) {
        areas.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Area deleted successfully'
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Area not found'
    });
    response.code(404);
    return response;
};

module.exports = {
    addAreasHandler,
    getAllAreasHandler,
    getAreasByIdHandler,
    editAreasByIdHandler,
    deleteAreasByIdHandler,
};
