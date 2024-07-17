# API Documentation

## Base URL
https://be-caps.vercel.app

## Endpoints

### City Routes

#### Get All Cities
* **URL:** /city
* **Method:** GET
* **Response:**
```json
  {
    "status": "success",
    "data": {
      {
        "id": "k7zd70ah55wwflud",
        "name": "Medan",
        "image": "https://unsplash.com/photos/two-people-in-a-canoe-paddling-down-a-river-cSMLZHhfFUw",
        "description": "Kota terbesar di Sumatera Utara dengan keragaman budaya yang kaya.",
        "destination": [
            {
                "id": "325v05gzy924yg0l",
                "name": "Danau Toba",
                "image": "https://unsplash.com/photos/green-grass-field-near-body-of-water-under-white-clouds-during-daytime-SfYWS5iIXDg",
                "description": "Istana kerajaan yang menjadi ikon kota Medan.",
                "address": "Parapat, Sumatera Utara"
            },
            {
                "id": "w6bcjzwgh48mrk63",
                "name": "Masjid Raya Medan",
                "image": "https://unsplash.com/photos/white-concrete-tower-under-blue-sky-and-white-clouds-during-daytime-v2aR1agU4E0",
                "description": "Masjid besar dengan arsitektur yang megah.",
                "address": "Jl. Sisingamangaraja, Medan"
            }
        ]
    },
    {
        "id": "f1iucu2yaze3bfck",
        "name": "Bali",
        "image": "https://unsplash.com/photos/brown-and-green-temple-near-body-of-water-under-blue-and-white-cloudy-sky-during-daytime-bnMPFPuSCI0",
        "description": "Pulau Dewata yang terkenal dengan pantai dan budayanya.",
        "destination": [
            {
                "id": "8wxbvy86u3ll49i2",
                "name": "Pantai Kuta",
                "image": "https://unsplash.com/photos/silhouette-of-man-holding-surfboard-walking-on-beach-during-sunset-NSwlVl6lMwo",
                "description": "Pantai yang terkenal dengan pasir putih dan ombak yang cocok untuk berselancar.",
                "address": "Kuta, Bali"
            },
            {
                "id": "103jotenny02weoj",
                "name": "Ubud",
                "image": "https://unsplash.com/photos/green-grass-field-photography-7hww7t6NLcg",
                "description": "Pusat seni dan budaya dengan pemandangan sawah yang indah.",
                "address": "Ubud, Bali"
            },
            {
                "id": "kva18ok56t6ag9u1",
                "name": "Gianyar",
                "image": "https://unsplash.com/photos/green-rice-field--2WlTWZLnRc",
                "description": "Sebuah wilayah kabupaten yang terletak di provinsi Bali, Indonesia",
                "address": "TKec. Gianyar, Kabupaten Gianyar, Bali"
            }
        ]
    }
}
```
  
#### Get a city by ID
* **URL:** /city/{cityID}
* **Method:** GET
* **Response:**
```json
{
    "status": "success",
    "data": {
        "city": {
            "id": "u49ahxtef26jpi40",
            "name": "Bandung",
            "image": "https://pixabay.com/photos/bandung-the-home-office-2556400/",
            "description": "Kota kembang yang terkenal dengan keindahan alam dan kulinernya.",
            "destination": [
                {
                    "id": "dzfsas0v8wc18cai",
                    "name": "Tangkuban Perahu",
                    "image": "https://pixabay.com/photos/mountain-tangkuban-parahu-bandung-3734554/",
                    "description": "Gunung berapi aktif yang menawarkan pemandangan yang spektakuler.",
                    "address": "Lembang, Bandung, Jawa Barat"
                },
                {
                    "id": "6tv9tw63r1ii17gz",
                    "name": "Kawah Putih",
                    "image": "https://pixabay.com/photos/ijen-indonesia-kawah-mine-volcano-4297397/",
                    "description": "Danau kawah dengan air berwarna putih kehijauan.",
                    "address": "Ciwidey, Bandung, Jawa Barat"
                },
                {
                    "id": "zy1hmrclkwy0ucmh",
                    "name": "Trans Studio Bandung",
                    "image": "https://pixabay.com/photos/man-microphone-music-musician-1845432/",
                    "description": "Taman bermain indoor terbesar di Indonesia.",
                    "address": "Jl. Gatot Subroto No. 289, Bandung, Jawa Barat"
                },
                {
                    "id": "is7z5mi24q48e6sy",
                    "name": "Dago Dreampark",
                    "image": "https://pixabay.com/photos/maribaya-bandung-jawa-2509392/",
                    "description": "Taman hiburan dengan berbagai atraksi menarik.",
                    "address": "Jl. Dago Giri Km. 2.2, Bandung, Jawa Barat"
                },
                {
                    "id": "bndgygokxvaq71y6",
                    "name": "Farm House Lembang",
                    "image": "https://pixabay.com/photos/cukul-tea-plantation-pengalengan-7911922/",
                    "description": "Tempat wisata bertema Eropa yang populer.",
                    "address": "Jl. Raya Lembang No. 108, Lembang, Bandung, Jawa Barat"
                }
            ]
        }
    }
}
```
#### Get all destination by cityid
* **URL:** /city/{cityID}/destination
* **Method:** GET
* **Response:**
```json
{
    "status": "success",
    "data": {
        "destinations": [
            {
                "id": "dzfsas0v8wc18cai",
                "name": "Tangkuban Perahu",
                "image": "https://pixabay.com/photos/mountain-tangkuban-parahu-bandung-3734554/",
                "description": "Gunung berapi aktif yang menawarkan pemandangan yang spektakuler.",
                "address": "Lembang, Bandung, Jawa Barat"
            },
            {
                "id": "6tv9tw63r1ii17gz",
                "name": "Kawah Putih",
                "image": "https://pixabay.com/photos/ijen-indonesia-kawah-mine-volcano-4297397/",
                "description": "Danau kawah dengan air berwarna putih kehijauan.",
                "address": "Ciwidey, Bandung, Jawa Barat"
            },
            {
                "id": "zy1hmrclkwy0ucmh",
                "name": "Trans Studio Bandung",
                "image": "https://pixabay.com/photos/man-microphone-music-musician-1845432/",
                "description": "Taman bermain indoor terbesar di Indonesia.",
                "address": "Jl. Gatot Subroto No. 289, Bandung, Jawa Barat"
            },
            {
                "id": "is7z5mi24q48e6sy",
                "name": "Dago Dreampark",
                "image": "https://pixabay.com/photos/maribaya-bandung-jawa-2509392/",
                "description": "Taman hiburan dengan berbagai atraksi menarik.",
                "address": "Jl. Dago Giri Km. 2.2, Bandung, Jawa Barat"
            },
            {
                "id": "bndgygokxvaq71y6",
                "name": "Farm House Lembang",
                "image": "https://pixabay.com/photos/cukul-tea-plantation-pengalengan-7911922/",
                "description": "Tempat wisata bertema Eropa yang populer.",
                "address": "Jl. Raya Lembang No. 108, Lembang, Bandung, Jawa Barat"
            }
        ]
    }
}
```
#### Get a destination by destiantion Id
* **URL:** /city/{cityID}/destination/destinationId
* **Method:** GET
* **Response:**
```json
{
    "status": "success",
    "data": {
        "destination": {
            "id": "dzfsas0v8wc18cai",
            "name": "Tangkuban Perahu",
            "image": "https://pixabay.com/photos/mountain-tangkuban-parahu-bandung-3734554/",
            "description": "Gunung berapi aktif yang menawarkan pemandangan yang spektakuler.",
            "address": "Lembang, Bandung, Jawa Barat"
        }
    }
}
```