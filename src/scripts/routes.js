const {
    addAreasHandler,
    getAllAreasHandler,
    getAreasByIdHandler,
    editAreasByIdHandler,
    deleteAreasByIdHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/areas',
        handler: addAreasHandler,
    },
    {
        method: 'GET',
        path: '/areas',
        handler: getAllAreasHandler,
    },
    {
        method: 'GET',
        path: '/areas/{areaId}',
        handler: getAreasByIdHandler,
    },
    {
        method: 'PUT',
        path: '/areas/{areaId}',
        handler: editAreasByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/areas/{areaId}',
        handler: deleteAreasByIdHandler,
    },
];

module.exports = routes;
