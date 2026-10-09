<?php

/**
 * MULTI BUSINESS SARL - Configuration Officielle & Source Unique de Vérité
 * Coordonnées GPS réelles : Immeuble Express Union, Dakar, Douala, Cameroun
 */

return [
    'name' => env('COMPANY_NAME', 'Multi Business SARL'),
    'city' => env('COMPANY_CITY', 'Douala'),
    'country' => env('COMPANY_COUNTRY', 'Cameroun'),
    'district' => env('COMPANY_DISTRICT', 'Dakar'),
    'building' => env('COMPANY_BUILDING', 'Immeuble Express Union, 1er niveau'),
    'address' => env('COMPANY_ADDRESS', 'Dakar (Douala), près du commissariat du 8ᵉ arrondissement, Immeuble Express Union, 1er niveau'),

    // Coordonnées GPS réelles
    'latitude' => (float) env('COMPANY_LAT', 4.0300055),
    'longitude' => (float) env('COMPANY_LNG', 9.7370284),
    'zoom' => (float) env('COMPANY_MAPS_ZOOM', 17.5),

    // Fiche Google Maps & Liens de Navigation GPS
    'google_maps_url' => env('COMPANY_MAPS_URL', 'https://www.google.com/maps/place/multibusiness/@4.0299706,9.7367761,52m/data=!3m1!1e3!4m6!3m5!1s0x4ba9e03f6fac8b13:0x36fdaca035b5355b!8m2!3d4.0300055!4d9.7370284!16s%2Fg%2F11tp937fdl'),
    
    'directions' => [
        'google' => env('COMPANY_DIRECTIONS_GOOGLE', 'https://www.google.com/maps/dir/?api=1&destination=4.0300055,9.7370284'),
        'apple' => env('COMPANY_DIRECTIONS_APPLE', 'https://maps.apple.com/?daddr=4.0300055,9.7370284'),
        'waze' => env('COMPANY_DIRECTIONS_WAZE', 'https://waze.com/ul?ll=4.0300055,9.7370284&navigate=yes'),
    ],

    'phones' => [
        'orange' => env('COMPANY_PHONE_ORANGE', '(+237) 690 84 34 97'),
        'mtn' => env('COMPANY_PHONE_MTN', '(+237) 671 46 17 91'),
        'whatsapp' => env('COMPANY_WHATSAPP', '(+237) 651 55 94 11'),
    ],

    'email' => env('COMPANY_EMAIL', 'contacts@multibusiness.cm'),
    'hours' => env('COMPANY_HOURS', 'Lundi – Vendredi : 08h00 – 17h00 | Samedi : 08h00 – 14h00'),
];
