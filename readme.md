# API Documentation: Areas
## Endpoints

### 1. Get all areas
- **URL:** `/areas`
- **Method:** `GET`
- **Description:** Mengambil daftar semua area.
- **Response:** Mengembalikan array dari semua area dengan status kode HTTP 200.

### 2. Get area by ID

- **URL:** `/areas/{areaId}`
- **Method:** `GET`
- **Description:** Mengambil informasi area berdasarkan ID.
- **Path Parameters:**
  - `{areaId}` (integer): ID dari area yang diinginkan.
- **Response:** Mengembalikan objek area dengan status kode HTTP 200.

### 3. Get all cities by area ID

- **URL:** `/areas/{areaId}/cities`
- **Method:** `GET`
- **Description:** Mengambil daftar semua kota dalam sebuah area.
- **Path Parameters:**
  - `{areaId}` (integer): ID dari area yang ingin diambil kota-kotanya.
- **Response:** Mengembalikan array dari semua kota dalam area dengan status kode HTTP 200.

### 4. Get city by ID

- **URL:** `/areas/{areaId}/cities/{cityId}`
- **Method:** `GET`
- **Description:** Mengambil informasi kota berdasarkan ID.
- **Path Parameters:**
  - `{areaId}` (integer): ID dari area yang berisi kota yang diinginkan.
  - `{cityId}` (integer): ID dari kota yang diinginkan.
- **Response:** Mengembalikan objek kota dengan status kode HTTP 200.

### 5. Get all destinations by city ID

- **URL:** `/areas/{areaId}/cities/{cityId}/destinations`
- **Method:** `GET`
- **Description:** Mengambil daftar semua destinasi dalam sebuah kota.
- **Path Parameters:**
  - `{areaId}` (integer): ID dari area yang berisi kota yang destinasi-dibutuhkan.
  - `{cityId}` (integer): ID dari kota yang destinasi-dibutuhkan.
- **Response:** Mengembalikan array dari semua destinasi dalam kota dengan status kode HTTP 200.

## Response Format

Contoh format respons sukses untuk endpoint `Get all destinations by city ID`:

```json
[
  {
    "id": 1,
    "name": "Destination Name 1",
    "description": "Description of Destination 1",
    "rating": 4.5
  },
  {
    "id": 2,
    "name": "Destination Name 2",
    "description": "Description of Destination 2",
    "rating": 4.8
  }
]


## Modify
### Add a new area

- **URL:** `/areas`
- **Method:** `POST`
- **Description:** Add a new area with cities and their tourist destinations.
- **Request Body:**
  ```json
  {
    "cities": [
      {
        "id": "integer",
        "name": "string",
        "image": "string (URL)",
        "description": "string",
        "destination": [
          {
            "id": "integer",
            "name": "string",
            "image": "string (URL)",
            "description": "string",
            "address": "string"
          }
        ]
      }
    ]
  }
  
### Update Area
- **URL:** `/areas/{areaId}`
- **Method:** `PUT`
- **Description:** Update details of a specific area.
- **Path Parameters:**
  - `areaId` (integer): ID of the area to update.
- **Request Body:** JSON object containing the updated fields of the area.
  - Example Request Body:
    ```json
    {
      "name": "Updated Area Name",
      "description": "Updated area description."
    }
    ```
- **Response:** Returns the updated area object with HTTP status code 200.
  - Example Response:
    ```json
    {
      "id": 1,
      "name": "Updated Area Name",
      "description": "Updated area description.",
      "createdAt": "2024-07-16T12:00:00Z",
      "updatedAt": "2024-07-16T13:30:00Z"
    }
    ```
- **Error Responses:** Returns appropriate error responses if the area ID is not found or if there are validation errors with HTTP status codes 404 and 400, respectively.

### Delete City

- **URL:** `/cities/{id}`
- **Method:** `DELETE`
- **Description:** Delete a specific city by its ID.
- **Path Parameters:**
  - `cityId` (integer): ID of the city to delete.
- **Response:** Returns HTTP status code 204 (No Content) upon successful deletion.
- **Error Responses:** Returns HTTP status code 404 if the city ID is not found.

### Delete Destination by City Name

- **URL:** `/name/city/{cityName}`
- **Method:** `DELETE`
- **Description:** Delete all destinations associated with a specific city.
- **Path Parameters:**
  - `cityName` (string): Name of the city whose destinations will be deleted.
- **Response:** Returns HTTP status code 204 (No Content) upon successful deletion.
- **Error Responses:** Returns HTTP status code 404 if the city name or associated destinations are not found.
