// Route Paths - GPS waypoints for all routes
// Each route has waypoints representing major stops along the path
const ROUTE_PATHS = {
    '04': [ // Ben Omar route
        { lat: 36.7606, lon: 3.0553, name: '1er Mai' },
        { lat: 36.7650, lon: 3.0600, name: 'Belouizdad' },
        { lat: 36.7700, lon: 3.0750, name: 'Belcourt' },
        { lat: 36.7800, lon: 3.0900, name: 'Ben Omar' }
    ],
    '05': [ // Audin -> Martyrs
        { lat: 36.7700, lon: 3.0553, name: 'Place Audin' },
        { lat: 36.7770, lon: 3.0590, name: 'Rue Larbi Ben M\'hidi' },
        { lat: 36.7847, lon: 3.0625, name: 'Place des Martyrs' }
    ],
    '07': [ // Martyrs -> El Harrach
        { lat: 36.7847, lon: 3.0625, name: 'Place des Martyrs' },
        { lat: 36.7750, lon: 3.0700, name: 'Grande Poste' },
        { lat: 36.7606, lon: 3.0553, name: '1er Mai' },
        { lat: 36.7500, lon: 3.0900, name: 'Hussein Dey' },
        { lat: 36.7400, lon: 3.1100, name: 'El Harrach' }
    ],
    '10': [ // Bouzareah route
        { lat: 36.7606, lon: 3.0553, name: '1er Mai' },
        { lat: 36.7700, lon: 3.0500, name: 'Telemly' },
        { lat: 36.7800, lon: 3.0400, name: 'Bouzareah Lower' },
        { lat: 36.7900, lon: 3.0350, name: 'Bouzareah' }
    ],
    '16': [ // Kouba route
        { lat: 36.7606, lon: 3.0553, name: '1er Mai' },
        { lat: 36.7650, lon: 3.0600, name: 'Belouizdad' },
        { lat: 36.7700, lon: 3.0700, name: 'Mohamed Belouizdad' },
        { lat: 36.7400, lon: 3.0800, name: 'Kouba' }
    ],
    '27': [ // Palais de la Culture route
        { lat: 36.7606, lon: 3.0553, name: '1er Mai' },
        { lat: 36.7650, lon: 3.0600, name: 'Belouizdad' },
        { lat: 36.7550, lon: 3.0650, name: 'Palais de la Culture' }
    ],
    '31': [ // Audin <-> Hydra
        { lat: 36.7700, lon: 3.0553, name: 'Place Audin' },
        { lat: 36.7650, lon: 3.0500, name: 'Didouche Mourad' },
        { lat: 36.7550, lon: 3.0450, name: 'Ben Aknoun Junction' },
        { lat: 36.7472, lon: 3.0403, name: 'Hydra' }
    ],
    '33': [ // Kouba route
        { lat: 36.7700, lon: 3.0553, name: 'Place Audin' },
        { lat: 36.7750, lon: 3.0650, name: 'Rue Hassiba Ben Bouali' },
        { lat: 36.7650, lon: 3.0750, name: 'Belcourt' },
        { lat: 36.7400, lon: 3.0800, name: 'Kouba' }
    ],
    '34': [ // Birkhadem route
        { lat: 36.7606, lon: 3.0553, name: '1er Mai' },
        { lat: 36.7498, lon: 3.0489, name: 'El Mouradia' },
        { lat: 36.7350, lon: 3.0400, name: 'El Madania' },
        { lat: 36.7200, lon: 3.0350, name: 'Birkhadem' }
    ],
    '45': [ // Ben Aknoun route
        { lat: 36.7472, lon: 3.0403, name: 'Hydra' },
        { lat: 36.7498, lon: 3.0489, name: 'El Mouradia' },
        { lat: 36.7550, lon: 3.0350, name: 'El Biar' },
        { lat: 36.7800, lon: 3.0200, name: 'Ben Aknoun' }
    ],
    '48': [ // Ben Aknoun route
        { lat: 36.7606, lon: 3.0553, name: '1er Mai' },
        { lat: 36.7650, lon: 3.0500, name: 'Didouche Mourad' },
        { lat: 36.7700, lon: 3.0400, name: 'El Biar' },
        { lat: 36.7800, lon: 3.0200, name: 'Ben Aknoun' }
    ],
    '54': [ // Audin -> El Mouradia
        { lat: 36.7700, lon: 3.0553, name: 'Place Audin' },
        { lat: 36.7650, lon: 3.0520, name: 'Didouche Mourad' },
        { lat: 36.7498, lon: 3.0489, name: 'El Mouradia' }
    ],
    '58': [ // Chevalley route
        { lat: 36.7847, lon: 3.0625, name: 'Place des Martyrs' },
        { lat: 36.7750, lon: 3.0700, name: 'Grande Poste' },
        { lat: 36.7650, lon: 3.0800, name: 'Belcourt' },
        { lat: 36.7500, lon: 3.0950, name: 'Hussein Dey' },
        { lat: 36.7300, lon: 3.1200, name: 'Chevalley' }
    ],
    '65': [ // El Madania route
        { lat: 36.7606, lon: 3.0553, name: '1er Mai' },
        { lat: 36.7550, lon: 3.0500, name: 'Didouche Mourad' },
        { lat: 36.7450, lon: 3.0450, name: 'El Madania' }
    ],
    '67': [ // Ben Aknoun route
        { lat: 36.7847, lon: 3.0625, name: 'Place des Martyrs' },
        { lat: 36.7700, lon: 3.0553, name: 'Place Audin' },
        { lat: 36.7650, lon: 3.0400, name: 'El Biar' },
        { lat: 36.7800, lon: 3.0200, name: 'Ben Aknoun' }
    ],
    '88': [ // Bir Mourad Raïs route
        { lat: 36.7472, lon: 3.0403, name: 'Hydra' },
        { lat: 36.7400, lon: 3.0350, name: 'El Biar' },
        { lat: 36.7300, lon: 3.0300, name: 'Bir Mourad Raïs' }
    ],
    '89': [ // Vieux Kouba route
        { lat: 36.7606, lon: 3.0553, name: '1er Mai' },
        { lat: 36.7650, lon: 3.0650, name: 'Belouizdad' },
        { lat: 36.7550, lon: 3.0750, name: 'Belcourt' },
        { lat: 36.7450, lon: 3.0850, name: 'Vieux Kouba' }
    ],
    '90': [ // Birtouta route
        { lat: 36.7847, lon: 3.0625, name: 'Place des Martyrs' },
        { lat: 36.7750, lon: 3.0500, name: 'Port Said' },
        { lat: 36.7600, lon: 3.0300, name: 'Bab El Oued' },
        { lat: 36.7400, lon: 3.0100, name: 'Dely Ibrahim' },
        { lat: 36.7100, lon: 2.9800, name: 'Birtouta' }
    ],
    '91': [ // Chevalley route
        { lat: 36.7700, lon: 3.0553, name: 'Place Audin' },
        { lat: 36.7750, lon: 3.0650, name: 'Rue Hassiba Ben Bouali' },
        { lat: 36.7650, lon: 3.0800, name: 'Belcourt' },
        { lat: 36.7500, lon: 3.0950, name: 'Hussein Dey' },
        { lat: 36.7300, lon: 3.1200, name: 'Chevalley' }
    ],
    '99': [ // Aïn Benian / Airport route
        { lat: 36.7606, lon: 3.0553, name: '1er Mai' },
        { lat: 36.7750, lon: 3.0400, name: 'Telemly' },
        { lat: 36.7900, lon: 3.0200, name: 'Bouzareah' },
        { lat: 36.8100, lon: 3.0000, name: 'Aïn Benian' }
    ],
    '100': [ // Martyrs -> Airport
        { lat: 36.7847, lon: 3.0625, name: 'Place des Martyrs' },
        { lat: 36.7750, lon: 3.0700, name: 'Grande Poste' },
        { lat: 36.7600, lon: 3.0800, name: 'El Harrach' },
        { lat: 36.7200, lon: 3.1100, name: 'Dar El Beida' },
        { lat: 36.6910, lon: 3.2154, name: 'Aéroport' }
    ],
    '101': [ // Birtouta route
        { lat: 36.7847, lon: 3.0625, name: 'Place des Martyrs' },
        { lat: 36.7750, lon: 3.0500, name: 'Port Said' },
        { lat: 36.7600, lon: 3.0300, name: 'Bab El Oued' },
        { lat: 36.7400, lon: 3.0100, name: 'Dely Ibrahim' },
        { lat: 36.7100, lon: 2.9800, name: 'Birtouta' }
    ],
    '113': [ // Gare Routière Caroubier
        { lat: 36.7847, lon: 3.0625, name: 'Place des Martyrs' },
        { lat: 36.7750, lon: 3.0700, name: 'Grande Poste' },
        { lat: 36.7650, lon: 3.0750, name: 'Belcourt' },
        { lat: 36.7550, lon: 3.0800, name: 'Gare Routière Caroubier' }
    ]
};

// Calculate total distance for a route path
function calculateRouteDistance(waypoints) {
    let totalDistance = 0;
    for (let i = 0; i < waypoints.length - 1; i++) {
        totalDistance += getDistanceFromLatLonInKm(
            waypoints[i].lat, waypoints[i].lon,
            waypoints[i + 1].lat, waypoints[i + 1].lon
        );
    }
    return totalDistance;
}

// Find the closest waypoint to a station on a route
function findClosestWaypointIndex(stationLat, stationLon, waypoints) {
    let minDist = Infinity;
    let closestIndex = 0;

    waypoints.forEach((waypoint, index) => {
        const dist = getDistanceFromLatLonInKm(stationLat, stationLon, waypoint.lat, waypoint.lon);
        if (dist < minDist) {
            minDist = dist;
            closestIndex = index;
        }
    });

    return closestIndex;
}

// Calculate distance from start of route to a specific station
function calculateDistanceToStation(stationLat, stationLon, waypoints) {
    const closestIndex = findClosestWaypointIndex(stationLat, stationLon, waypoints);

    let distance = 0;
    for (let i = 0; i < closestIndex; i++) {
        distance += getDistanceFromLatLonInKm(
            waypoints[i].lat, waypoints[i].lon,
            waypoints[i + 1].lat, waypoints[i + 1].lon
        );
    }

    // Add distance from last waypoint to station
    if (closestIndex < waypoints.length) {
        distance += getDistanceFromLatLonInKm(
            waypoints[closestIndex].lat, waypoints[closestIndex].lon,
            stationLat, stationLon
        );
    }

    return distance;
}

const STATIONS = [
    {
        id: 'martyrs',
        name: 'Place des Martyrs',
        lat: 36.78646243864091,  // Main bus stop - Accurate from Google Maps
        lon: 3.0624237631875166,   // Main bus stop - Accurate from Google Maps
        address: 'Casbah, Algiers',
        image: 'images/station_placeholder.png',
        routes: [
            { number: '100', dest: 'Aéroport', interval: 60, startTime: '05:00', endTime: '23:00', totalDistance: 18.5 },
            { number: '101', dest: 'Birtouta', interval: 40, startTime: '06:00', endTime: '18:30', totalDistance: 15.0 },
            { number: '99', dest: 'Aéroport', interval: 60, startTime: '06:00', endTime: '00:50', totalDistance: 18.5 },
            { number: '58', dest: 'Chevalley', interval: 30, startTime: '06:00', endTime: '18:30', totalDistance: 12.0 },
            { number: '67', dest: 'Ben Aknoun', interval: 30, startTime: '06:00', endTime: '18:30', totalDistance: 8.5 },
            { number: '07', dest: 'El Harrach', interval: 25, startTime: '06:00', endTime: '18:30', totalDistance: 10.0 },
            { number: '90', dest: 'Birtouta', interval: 40, startTime: '06:00', endTime: '18:30', totalDistance: 15.0 },
            { number: '113', dest: 'Gare Routière Caroubier', interval: 30, startTime: '06:00', endTime: '18:30', totalDistance: 7.0 }
        ]
    },
    {
        id: 'audin',
        name: 'Place Maurice Audin',
        lat: 36.7692411,  // Updated to accurate position
        lon: 3.0549448,   // Updated to accurate position
        address: 'Alger Centre',
        image: 'images/station_placeholder.png',
        routes: [
            { number: '31', dest: 'Hydra', interval: 25, startTime: '06:00', endTime: '18:30', totalDistance: 4.2 },
            { number: '33', dest: 'Kouba', interval: 30, startTime: '06:00', endTime: '18:30', totalDistance: 6.5 },
            { number: '67', dest: 'Ben Aknoun', interval: 30, startTime: '06:00', endTime: '18:30', totalDistance: 7.0 },
            { number: '91', dest: 'Chevalley', interval: 35, startTime: '06:00', endTime: '18:30', totalDistance: 11.0 },
            { number: '54', dest: 'El Mouradia', interval: 20, startTime: '06:00', endTime: '18:30', totalDistance: 3.5 },
            { number: '05', dest: 'Place des Martyrs', interval: 20, startTime: '06:00', endTime: '18:30', totalDistance: 2.0 }
        ]
    },
    {
        id: '1mai',
        name: '1er Mai',
        lat: 36.76021973877917,  // Bus stop - Refined accurate position
        lon: 3.0566802899233463,   // Bus stop - Refined accurate position
        address: 'Sidi M\'Hamed',
        image: 'images/station_placeholder.png',
        routes: [
            { number: '04', dest: 'Ben Omar', interval: 35, startTime: '06:00', endTime: '18:30', totalDistance: 9.0 },
            { number: '10', dest: 'Bouzareah', interval: 30, startTime: '06:00', endTime: '18:30', totalDistance: 8.5 },
            { number: '12', dest: 'Dély Ibrahim', interval: 35, startTime: '06:00', endTime: '18:30', totalDistance: 10.0 },
            { number: '07', dest: 'El Harrach', interval: 25, startTime: '06:00', endTime: '18:30', totalDistance: 8.0 },
            { number: '16', dest: 'Kouba', interval: 25, startTime: '06:00', endTime: '18:30', totalDistance: 5.5 }
        ]
    },
    {
        id: 'hydra',
        name: 'Hydra',
        lat: 36.743512017412236,  // Accurate position from user
        lon: 3.0420763246892846,   // Accurate position from user
        address: 'Hydra Centre',
        image: 'images/station_placeholder.png',
        routes: [
            { number: '31', dest: 'Place Audin', interval: 25, startTime: '06:00', endTime: '18:30', totalDistance: 4.2 },
            { number: '88', dest: 'Bir Mourad Raïs', interval: 35, startTime: '06:00', endTime: '18:30', totalDistance: 6.0 },
            { number: '45', dest: 'Ben Aknoun', interval: 30, startTime: '06:00', endTime: '18:30', totalDistance: 5.5 }
        ]
    },
    {
        id: 'mouradia',
        name: 'El Mouradia',
        lat: 36.74820388941202,  // Accurate position from user
        lon: 3.051086539207291,   // Accurate position from user
        address: 'El Mouradia',
        image: 'images/station_placeholder.png',
        routes: [
            { number: '54', dest: 'Place Audin', interval: 20, startTime: '06:00', endTime: '18:30', totalDistance: 3.5 },
            { number: '34', dest: '1er Mai', interval: 30, startTime: '06:00', endTime: '18:30', totalDistance: 4.0 },
            { number: '45', dest: 'Ben Aknoun', interval: 30, startTime: '06:00', endTime: '18:30', totalDistance: 6.5 }
        ]
    }
];

// State
let currentStation = STATIONS[0]; // Default
let userLat = null;
let userLon = null;

// TESTING: Set to true to simulate being in Algiers (for testing from outside Algeria)
const USE_FAKE_LOCATION = false;
const FAKE_LOCATION = {
    lat: 36.7720000, // ~500m north of Place Audin (to show walking route)
    lon: 3.0560000
};

// DOM Elements
const timeDisplay = document.getElementById('algiers-time');
const stationNameEl = document.getElementById('station-name');
const stationAddrEl = document.getElementById('addr-text');
const stationImgEl = document.getElementById('current-station-img');
const routesListEl = document.getElementById('routes-list');
const btnNearest = document.getElementById('btn-nearest');
const btnList = document.getElementById('btn-list');

// --- Time Logic ---
function updateAlgiersTime() {
    const now = new Date();
    const options = { timeZone: 'Africa/Algiers', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
    timeDisplay.textContent = timeString;
}

setInterval(updateAlgiersTime, 1000);
updateAlgiersTime();

// --- Distance Logic ---
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function findNearestStation(lat, lon) {
    let minDist = Infinity;
    let nearest = STATIONS[0];

    STATIONS.forEach(station => {
        const dist = getDistanceFromLatLonInKm(lat, lon, station.lat, station.lon);
        if (dist < minDist) {
            minDist = dist;
            nearest = station;
        }
    });
    return nearest;
}

// --- Arrival Simulation ---
function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

function calculateArrivals(station) {
    const now = new Date();
    const algiersTime = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Algiers" }));
    const currentMinutes = algiersTime.getHours() * 60 + algiersTime.getMinutes();
    const currentHour = algiersTime.getHours();

    return station.routes.map(route => {
        const startMins = timeToMinutes(route.startTime);
        const endMins = timeToMinutes(route.endTime);

        // Status Check
        if (currentMinutes < startMins) {
            return { ...route, status: 'Not Started', message: `Starts ${route.startTime}` };
        }
        if (currentMinutes > endMins) {
            return { ...route, status: 'Ended', message: 'Service Ended' };
        }

        // GPS-BASED CALCULATION WITH ENHANCED ALGIERS TRAFFIC MODEL
        // Based on real Algiers traffic statistics:
        // - Average commute: 50 minutes
        // - Severe congestion: 3+ hours daily in traffic
        // - Peak rush hours: 7-9 AM, 4-7 PM

        // 1. Calculate where the bus is in its cycle
        const minutesSinceStart = currentMinutes - startMins;
        const cyclePosition = minutesSinceStart % route.interval;

        // 2. Determine speed based on Algiers traffic patterns
        const currentDay = algiersTime.getDay(); // 0 = Sunday, 6 = Saturday
        const isWeekend = currentDay === 5 || currentDay === 6; // Friday/Saturday
        let avgSpeed;

        if (isWeekend) {
            // Weekend: lighter traffic
            avgSpeed = 22; // km/h
        } else {
            // Weekday traffic patterns based on Algiers statistics
            if ((currentHour >= 7 && currentHour < 9) || (currentHour >= 16 && currentHour < 19)) {
                // Peak rush hour: Severe congestion (based on 3+ hours daily in traffic)
                avgSpeed = 8 + (parseInt(route.number) % 3); // 8-10 km/h (very slow)
            } else if (currentHour >= 12 && currentHour < 14) {
                // Lunch hour: Moderate traffic
                avgSpeed = 15; // km/h
            } else if (currentHour >= 9 && currentHour < 12) {
                // Mid-morning: Light-moderate traffic
                avgSpeed = 18; // km/h
            } else if (currentHour >= 14 && currentHour < 16) {
                // Afternoon: Moderate traffic
                avgSpeed = 16; // km/h
            } else if (currentHour >= 19 && currentHour < 21) {
                // Evening: Clearing up
                avgSpeed = 14; // km/h
            } else {
                // Early morning/late night: Light traffic
                avgSpeed = 25; // km/h
            }
        }

        // 3. Calculate total distance and journey time
        const totalDistance = route.totalDistance || 10; // km
        const baseJourneyTime = (totalDistance / avgSpeed) * 60; // minutes

        // 4. Operational delay (stops and boarding time only)
        // Traffic delays already accounted for in speed calculation above
        let operationalDelay;
        if ((currentHour >= 7 && currentHour < 9) || (currentHour >= 16 && currentHour < 19)) {
            // Rush hour: More passengers, longer boarding times
            operationalDelay = 8 + (parseInt(route.number) % 5); // 8-12 minutes
        } else {
            // Normal hours: Just boarding and stops
            const delayVariation = parseInt(route.number) % 3; // 0-2
            operationalDelay = 3 + delayVariation; // 3-5 minutes
        }
        const totalJourneyTime = baseJourneyTime + operationalDelay;

        // 5. Calculate arrival time
        if (cyclePosition < totalJourneyTime) {
            // Bus is currently on route
            const remainingJourneyTime = totalJourneyTime - cyclePosition;
            return {
                ...route,
                status: 'Active',
                minutes: Math.ceil(remainingJourneyTime)
            };
        } else {
            // Bus completed journey, waiting for next departure
            const waitTime = route.interval - cyclePosition;
            return {
                ...route,
                status: 'Active',
                minutes: Math.ceil(waitTime + totalJourneyTime)
            };
        }
    }).sort((a, b) => {
        // Sort: Active first (by time), then others
        if (a.status === 'Active' && b.status === 'Active') return a.minutes - b.minutes;
        if (a.status === 'Active') return -1;
        if (b.status === 'Active') return 1;
        return 0;
    });
}


// --- UI Updates ---
function renderStation(station) {
    stationNameEl.textContent = station.name;
    stationAddrEl.textContent = station.address;
    stationImgEl.src = station.image;

    // Update walking time
    updateWalkingTime(station);

    // Fade in effect for image
    stationImgEl.style.opacity = 0;
    setTimeout(() => {
        stationImgEl.style.opacity = 1;
    }, 200);

    renderRoutes(station);

    // Update map if it's initialized
    if (mapInitialized) {
        updateMap();
    }
}

function updateWalkingTime(station) {
    const walkTimeText = document.getElementById('walk-time-text');

    if (!userLat || !userLon) {
        walkTimeText.textContent = 'Location unavailable';
        return;
    }

    // Calculate straight-line distance to station
    const straightLineDistance = getDistanceFromLatLonInKm(userLat, userLon, station.lat, station.lon);

    // Apply route factor: actual walking routes in Algiers are ~2x longer than straight-line
    // This accounts for winding streets, stairs, and detours in hilly urban areas
    // Calibrated to match Google Maps walking times
    const routeFactor = 2.0;
    const actualWalkingDistance = straightLineDistance * routeFactor;

    // Average walking speed: 5 km/h
    const walkingSpeedKmh = 5;
    const walkingTimeHours = actualWalkingDistance / walkingSpeedKmh;
    const walkingTimeMinutes = Math.ceil(walkingTimeHours * 60);

    // Debug logging
    console.log('🚶 Walking Time Calculation:');
    console.log(`  Straight-line distance: ${straightLineDistance.toFixed(3)} km`);
    console.log(`  Route factor: ${routeFactor}x`);
    console.log(`  Actual walking distance: ${actualWalkingDistance.toFixed(3)} km`);
    console.log(`  Walking time: ${walkingTimeMinutes} minutes`);

    // Format the text
    if (walkingTimeMinutes < 1) {
        walkTimeText.textContent = 'Less than 1 min walk';
    } else if (walkingTimeMinutes === 1) {
        walkTimeText.textContent = '1 min walk';
    } else {
        walkTimeText.textContent = `${walkingTimeMinutes} min walk`;
    }
}

function renderRoutes(station) {
    const arrivals = calculateArrivals(station);
    routesListEl.innerHTML = '';

    arrivals.forEach(arrival => {
        const item = document.createElement('div');
        item.className = 'route-item';

        let timeDisplayHtml = '';
        if (arrival.status === 'Active') {
            timeDisplayHtml = `
                <div class="time-big">${arrival.minutes}</div>
                <div class="time-unit">min</div>
            `;
        } else {
            timeDisplayHtml = `
                <div class="route-status" style="color: var(--accent-color); font-weight: 600; font-size: 0.8rem;">
                    ${arrival.message}
                </div>
            `;
        }

        item.innerHTML = `
            <div class="route-info">
                <div class="route-number">${arrival.number}</div>
                <div class="route-dest">To ${arrival.dest}</div>
            </div>
            <div class="route-time">
                ${timeDisplayHtml}
            </div>
        `;
        routesListEl.appendChild(item);
    });
}

// --- Geolocation ---
function initGeolocation() {
    console.log('Attempting to get geolocation...');

    // Use fake location for testing (when developing from outside Algeria)
    if (USE_FAKE_LOCATION) {
        console.log('🧪 TESTING MODE: Using fake Algiers location');
        userLat = FAKE_LOCATION.lat;
        userLon = FAKE_LOCATION.lon;
        const nearest = findNearestStation(userLat, userLon);
        currentStation = nearest;
        renderStation(currentStation);
        return;
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('Geolocation success:', position.coords);
                userLat = position.coords.latitude;
                userLon = position.coords.longitude;
                const nearest = findNearestStation(userLat, userLon);
                currentStation = nearest;
                renderStation(currentStation);
            },
            (error) => {
                console.error('Geolocation error:', error.code, error.message);

                // Show user-friendly error message
                const walkTimeText = document.getElementById('walk-time-text');
                if (error.code === 1) {
                    // Permission denied
                    walkTimeText.textContent = 'Location permission denied';
                    console.log('User denied geolocation permission');
                } else if (error.code === 2) {
                    // Position unavailable
                    walkTimeText.textContent = 'Location unavailable';
                    console.log('Position unavailable');
                } else if (error.code === 3) {
                    // Timeout
                    walkTimeText.textContent = 'Location timeout';
                    console.log('Geolocation timeout');
                }

                // Fallback to default station
                renderStation(currentStation);
            },
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        console.error('Geolocation not supported');
        renderStation(currentStation);
    }
}

// --- Station Selector Modal ---
const stationModal = document.getElementById('station-modal');
const closeModalBtn = document.getElementById('close-modal');
const stationSearchInput = document.getElementById('station-search');
const stationListEl = document.getElementById('station-list');

function showStationSelector() {
    // Populate station list
    renderStationList(STATIONS);
    stationModal.classList.remove('hidden');
    stationSearchInput.value = '';
    stationSearchInput.focus();
}

function hideStationSelector() {
    stationModal.classList.add('hidden');
}

function renderStationList(stations) {
    stationListEl.innerHTML = '';
    stations.forEach(station => {
        const item = document.createElement('div');
        item.className = 'station-list-item';
        item.innerHTML = `
            <h4>${station.name}</h4>
            <p>${station.address} • ${station.routes.length} routes</p>
        `;
        item.addEventListener('click', () => {
            selectStation(station);
        });
        stationListEl.appendChild(item);
    });
}

function selectStation(station) {
    currentStation = station;
    renderStation(currentStation);
    hideStationSelector();
    btnNearest.classList.remove('active');
    btnList.classList.add('active');
}

// Search functionality
stationSearchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredStations = STATIONS.filter(station =>
        station.name.toLowerCase().includes(searchTerm) ||
        station.address.toLowerCase().includes(searchTerm)
    );
    renderStationList(filteredStations);
});

// Close modal handlers
closeModalBtn.addEventListener('click', hideStationSelector);
stationModal.addEventListener('click', (e) => {
    if (e.target === stationModal) {
        hideStationSelector();
    }
});

// --- Slider Functionality ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let map = null;
let mapInitialized = false;

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    dots.forEach(dot => dot.classList.remove('active'));

    // Add prev class to previous slide
    if (currentSlide < index) {
        slides[currentSlide].classList.add('prev');
    }

    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentSlide = index;

    // Initialize map when map slide is shown
    if (index === 1 && !mapInitialized) {
        initMap();
    } else if (index === 1 && mapInitialized) {
        updateMap();
    }
}

// Dot click handlers
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// --- Map Functionality ---
function initMap() {
    const mapContainer = document.getElementById('map-container');

    // Initialize Leaflet map
    map = L.map(mapContainer, {
        zoomControl: false,
        attributionControl: false
    }).setView([36.7700, 3.0553], 13); // Default to Algiers center

    // Add OpenStreetMap tiles (Detailed view with street names, buildings, landmarks)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    mapInitialized = true;
    updateMap();
}

function updateMap() {
    if (!map) return;

    // Clear existing layers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker || layer instanceof L.Polyline) {
            map.removeLayer(layer);
        }
    });

    const station = currentStation;
    const mapStationName = document.getElementById('map-station-name');
    const mapDistance = document.getElementById('map-distance');

    mapStationName.textContent = station.name;

    // Add station marker with blue bus icon (ETUSA blue color)
    const stationMarker = L.marker([station.lat, station.lon], {
        icon: L.divIcon({
            className: 'custom-marker',
            html: `<svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="14" rx="2" fill="#0066CC" stroke="white" stroke-width="1.5"/>
                <rect x="6" y="6" width="12" height="6" fill="#E6F2FF"/>
                <circle cx="8" cy="16" r="1.5" fill="white"/>
                <circle cx="16" cy="16" r="1.5" fill="white"/>
                <line x1="12" y1="6" x2="12" y2="12" stroke="#0066CC" stroke-width="1"/>
            </svg>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        })
    }).addTo(map);

    // If we have user location, add user marker and draw line
    if (userLat && userLon) {
        // Add user marker
        const userMarker = L.marker([userLat, userLon], {
            icon: L.divIcon({
                className: 'custom-marker',
                html: '<div style="background: #ff0055; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            })
        }).addTo(map);

        // Draw dashed blue line between user and station (walking route)
        const latlngs = [
            [userLat, userLon],
            [station.lat, station.lon]
        ];

        L.polyline(latlngs, {
            color: '#00d2ff',
            weight: 4,
            opacity: 0.7,
            dashArray: '10, 10', // Dashed line pattern
            lineCap: 'round'
        }).addTo(map);

        // Calculate and display distance
        const distance = getDistanceFromLatLonInKm(userLat, userLon, station.lat, station.lon);
        mapDistance.textContent = `📍 ${distance.toFixed(2)} km away`;

        // Fit map to show both markers
        const bounds = L.latLngBounds([[userLat, userLon], [station.lat, station.lon]]);
        map.fitBounds(bounds, { padding: [30, 30] });
    } else {
        // No user location, just center on station
        map.setView([station.lat, station.lon], 15);
        mapDistance.textContent = '📍 Location unavailable';
    }
}

// --- Event Listeners ---
btnNearest.addEventListener('click', () => {
    btnNearest.classList.add('active');
    btnList.classList.remove('active');
    if (userLat && userLon) {
        const nearest = findNearestStation(userLat, userLon);
        currentStation = nearest;
        renderStation(currentStation);
        if (mapInitialized) {
            updateMap();
        }
    } else {
        // Retry geo or just keep current
        initGeolocation();
    }
});

btnList.addEventListener('click', () => {
    showStationSelector();
});

// Init
initGeolocation();
// Refresh arrivals every minute
setInterval(() => renderRoutes(currentStation), 60000);
