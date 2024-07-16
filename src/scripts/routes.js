const {
    getAllCityHandler,
    getCityByIdHandler,
    addCityHandler,
    editCityByIdHandler,
    deleteCityByIdHandler,
    getDestinationByIdHandler,
    addDestinationHandler,
    updateDestinationHandler,
    deleteDestinationHandler,
} = require('./handler');

const routes = [
    // Routes for city
    {
        method: 'POST',
        path: '/city',
        handler: addCityHandler,
    },
    {
        method: 'GET',
        path: '/city',
        handler: getAllCityHandler,
    },
    {
        method: 'GET',
        path: '/city/{cityId}',
        handler: getCityByIdHandler,
    },
    {
        method: 'PUT',
        path: '/city/{cityId}',
        handler: editCityByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/city/{cityId}',
        handler: deleteCityByIdHandler,
    },

    // Routes for destinations
    {
        method: 'GET',
        path: '/city/{cityId}/destinations/{destinationId}',
        handler: getDestinationByIdHandler,
    },
    {
        method: 'POST',
        path: '/city/{cityId}/destinations',
        handler: addDestinationHandler,
    },
    {
        method: 'PUT',
        path: '/city/{cityId}/destinations/{destinationId}',
        handler: updateDestinationHandler,
    },
    {
        method: 'DELETE',
        path: '/city/{cityId}/destinations/{destinationId}',
        handler: deleteDestinationHandler,
    },
];

module.exports = routes;
