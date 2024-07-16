const {
    getAllCitiesHandler,
    getCityByIdHandler,
    addCityHandler,
    updateCityHandler,
    deleteCityHandler,
    getDestinationByIdHandler,
    addDestinationHandler,
    updateDestinationHandler,
    deleteDestinationHandler,
} = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/cities',
        handler: getAllCitiesHandler,
    },
    {
        method: 'GET',
        path: '/cities/{id}',
        handler: getCityByIdHandler,
    },
    {
        method: 'POST',
        path: '/cities',
        handler: addCityHandler,
    },
    {
        method: 'PUT',
        path: '/cities/{id}',
        handler: updateCityHandler,
    },
    {
        method: 'DELETE',
        path: '/cities/{id}',
        handler: deleteCityHandler,
    },
    {
        method: 'GET',
        path: '/cities/{cityId}/destinations/{destId}',
        handler: getDestinationByIdHandler,
    },
    {
        method: 'POST',
        path: '/cities/{cityId}/destinations',
        handler: addDestinationHandler,
    },
    {
        method: 'PUT',
        path: '/cities/{cityId}/destinations/{destId}',
        handler: updateDestinationHandler,
    },
    {
        method: 'DELETE',
        path: '/cities/{cityId}/destinations/{destId}',
        handler: deleteDestinationHandler,
    },
];

module.exports = routes;
