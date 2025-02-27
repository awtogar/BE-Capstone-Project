const { nanoid } = require('nanoid');
const cityData = require('./Data');

const baseURLHandler = async (request, h) => {
    return h.response({
        status: 'success',
        message: 'API berhasil dipanggil',
    }).code(200);
};

const getCityByIdHandler = async (request, h) => {
    const { cityId } = request.params;

    const city = cityData.find((city) => city.id.toString() === cityId);

    if (!city) {
        return h.response({
            status: 'fail',
            message: 'Kota tidak ditemukan',
        }).code(404);
    }

    return h.response({
        status: 'success',
        data: {
            city,
        },
    }).code(200);
};


const getAllCityHandler = async (request, h) => {
    return h.response({
        status: 'success',
        data: {
            cities: cityData,
        },
    }).code(200);
};

const addCityHandler = async (request, h) => {
    const {
        name, image, description, destination
    } = request.payload;

    if (!name) {
        return h.response({
            status: 'fail',
            message: 'Gagal menambahkan kota. Mohon isi nama kota',
        }).code(400);
    }

    if (!destination || destination.length === 0) {
        return h.response({
            status: 'fail',
            message: 'Gagal menambahkan kota. Destination tidak boleh kosong',
        }).code(400);
    }

    const id = nanoid(16);

    const newCity = {
        id, name, image, description, destination
    };

    cityData.push(newCity);

    return h.response({
        status: 'success',
        message: 'Kota berhasil ditambahkan',
        data: {
            cityId: id,
        },
    }).code(201);
};

const editCityByIdHandler = async (request, h) => {
    const { cityId } = request.params;
    const { name, image, description, destination } = request.payload;

    const index = cityData.findIndex((city) => city.id.toString() === cityId);

    if (index === -1) {
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui kota. Id tidak ditemukan',
        }).code(404);
    }

    cityData[index] = {
        ...cityData[index],
        name,
        image,
        description,
        destination,
    };

    return h.response({
        status: 'success',
        message: 'Kota berhasil diperbarui',
    }).code(200);
};

const deleteCityByIdHandler = async (request, h) => {
    const { cityId } = request.params;

    const index = cityData.findIndex((city) => city.id.toString() === cityId);

    if (index === -1) {
        return h.response({
            status: 'fail',
            message: 'Kota gagal dihapus. Id tidak ditemukan',
        }).code(404);
    }

    cityData.splice(index, 1);

    return h.response({
        status: 'success',
        message: 'Kota berhasil dihapus',
    }).code(200);
};

const getDestinationByIdHandler = async (request, h) => {
    const { cityId, destinationId } = request.params;

    const city = cityData.find((city) => city.id.toString() === cityId);

    if (!city) {
        return h.response({
            status: 'fail',
            message: 'Kota tidak ditemukan',
        }).code(404);
    }

    const destination = city.destination.find((dest) => dest.id.toString() === destinationId);

    if (!destination) {
        return h.response({
            status: 'fail',
            message: 'Destinasi tidak ditemukan',
        }).code(404);
    }

    return h.response({
        status: 'success',
        data: {
            destination,
        },
    }).code(200);
};

// Add new destination
const addDestinationHandler = async (request, h) => {
    const { cityId } = request.params;
    const { name, image, description, address } = request.payload;

    const city = cityData.find((city) => city.id.toString() === cityId);

    if (!city) {
        return h.response({
            status: 'fail',
            message: 'Kota tidak ditemukan',
        }).code(404);
    }

    const destinationId = nanoid(16);

    const newDestination = {
        id: destinationId,
        name,
        image,
        description,
        address,
    };

    city.destination.push(newDestination);

    return h.response({
        status: 'success',
        message: 'Destinasi berhasil ditambahkan',
        data: {
            destinationId,
        },
    }).code(201);
};


const updateDestinationHandler = async (request, h) => {
    const { cityId, destinationId } = request.params;
    const { name, image, description, address } = request.payload;

    const city = cityData.find((city) => city.id.toString() === cityId);

    if (!city) {
        return h.response({
            status: 'fail',
            message: 'Kota tidak ditemukan',
        }).code(404);
    }

    const destinationIndex = city.destination.findIndex((dest) => dest.id.toString() === destinationId);

    if (destinationIndex === -1) {
        return h.response({
            status: 'fail',
            message: 'Destinasi tidak ditemukan',
        }).code(404);
    }

    city.destination[destinationIndex] = {
        ...city.destination[destinationIndex],
        name,
        image,
        description,
        address,
    };

    return h.response({
        status: 'success',
        message: 'Destinasi berhasil diperbarui',
    }).code(200);
};

const deleteDestinationHandler = async (request, h) => {
    const { cityId, destinationId } = request.params;

    const city = cityData.find((city) => city.id.toString() === cityId);

    if (!city) {
        return h.response({
            status: 'fail',
            message: 'Kota tidak ditemukan',
        }).code(404);
    }

    const destinationIndex = city.destination.findIndex((dest) => dest.id.toString() === destinationId);

    if (destinationIndex === -1) {
        return h.response({
            status: 'fail',
            message: 'Destinasi tidak ditemukan',
        }).code(404);
    }

    city.destination.splice(destinationIndex, 1);

    return h.response({
        status: 'success',
        message: 'Destinasi berhasil dihapus',
    }).code(200);
};
const getAllDestinationsHandler = async (request, h) => {
    const { cityId } = request.params;

    const city = cityData.find((city) => city.id.toString() === cityId);

    if (!city) {
        return h.response({
            status: 'fail',
            message: 'Kota tidak ditemukan',
        }).code(404);
    }

    return h.response({
        status: 'success',
        data: {
            destinations: city.destination,
        },
    }).code(200);
};

module.exports = {
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
};
