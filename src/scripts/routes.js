const {
    baseURLHandler,
    getAllDestinationsHandler,
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
    {
        method: 'GET',
        path: '/',
        handler: baseURLHandler,
    },
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
        path: '/city/{cityId}/destination/{destinationId}',
        handler: getDestinationByIdHandler,
    },
    {
        method: 'GET',
        path: '/city/{cityId}/destination',
        handler: getAllDestinationsHandler, 
    },
    {
        method: 'POST',
        path: '/city/{cityId}/destination',
        handler: addDestinationHandler,
    },
    {
        method: 'PUT',
        path: '/city/{cityId}/destination/{destinationId}',
        handler: updateDestinationHandler,
    },
    {
        method: 'DELETE',
        path: '/city/{cityId}/destination/{destinationId}',
        handler: deleteDestinationHandler,
    },
];

module.exports = routes;
