import imgMara from '../../assets/images/leonard-von-bibra-L4-BDd01wmM-unsplash.jpg';
import imgAmboseli from '../../assets/images/neil-and-zulma-scott-hjv3VO-jpnc-unsplash.jpg';
import imgNorthernKenya from '../../assets/images/polina-koroleva-36DSACYDey0-unsplash.jpg';
import imgDiani from '../../assets/images/ezekiel-kilimo-m_06_L3cKY0-unsplash.jpg';

import imgMara1 from '../../assets/images/ahmed-galal-8fH4JwxbAyw-unsplash.jpg';
import imgMara2 from '../../assets/images/ahmed-galal-GMO1Jq3Ajfo-unsplash.jpg';
import imgAmb1 from '../../assets/images/ana-singh-1vOBJZ6228U-unsplash.jpg';
import imgAmb2 from '../../assets/images/birger-strahl-r3l0EazQLR4-unsplash.jpg';
import imgSam1 from '../../assets/images/giusi-borrasi-XlqCl5NO0SM-unsplash.jpg';
import imgLewa1 from '../../assets/images/helena-pfisterer-mvzxKoxJz_w-unsplash.jpg';
import imgDiani1 from '../../assets/images/polina-koroleva-g-Jcvkxx0NE-unsplash.jpg';
import imgDiani2 from '../../assets/images/lukasz-lu8BMgAs64Q-unsplash.jpg';

export const DESTINATION_DETAILS = {
  mara: {
    name: 'Maasai Mara National Reserve',
    location: 'Narok County, Kenya · Elevation 1,500m',
    tagline: 'The ancestral theater of the Great Migration and Africa’s densest predator territories.',
    image: imgMara,
    bestTime: 'July to October (River Crossings) & January–March (Lions & Calving)',
    stay: 'Angama Mara, Mara Plains, Governors’ IL Moran & Mara North Tented Bush Camps',
    overview: 'Spanning over 1,500 square kilometers, the Maasai Mara ecosystem is an untamed sanctuary of rolling savannah, acacia woodlands, and the life-giving Mara River. Beyond the core national reserve lie exclusive community-owned conservancies (Mara North, Olare Motorogi, and Naboisho) where strict vehicle limits and off-road tracking guarantee authentic wilderness solitude.',
    highlights: [
      { title: 'The Great Migration Crossings', desc: 'Over 1.5 million wildebeest and zebras navigating crocodile-filled Mara River currents.' },
      { title: 'Big Cat Coalitions', desc: 'Renowned Marsh and Topi lion prides, solitary leopards along riverine loops, and cheetah coalitions on the plains.' },
      { title: 'Indigenous Maasai Naturalists', desc: 'Interpretive tracking and cultural immersion guided by lifelong indigenous community guardians.' },
      { title: 'Dawn Hot Air Ballooning', desc: 'Silent morning flights across the Mara triangle followed by an open-savannah bush champagne breakfast.' }
    ],
    itineraries: [
      {
        id: 'mara-7day-grand',
        image: imgMara1,
        title: '7-Day Grand Savannah: Amboseli, Great Rift Valley & Maasai Mara',
        badge: 'Top Rated Classic',
        duration: '7 Days / 6 Nights',
        tagline: 'Kenya’s golden wildlife trinity: Kilimanjaro super-tuskers, Great Rift Valley lakes, and the predator-dense Mara savannah.',
        tourType: 'Private 4x4 Safari (Daily departures)',
        vehicle: 'Custom 4x4 Land Cruiser with Pop-Up Roof',
        comfort: 'Luxury Tented Camps & Lodges',
        startLocation: 'Nairobi',
        endLocation: 'Nairobi',
        priceGuide: 'From $1,950 / person',
        routeStops: ['Nairobi', 'Amboseli NP', 'Lake Naivasha', 'Maasai Mara', 'Nairobi'],
        highlights: [
          'Iconic elephant herds framed against snow-capped Mount Kilimanjaro',
          'Boat safari & Crescent Island walking safari alongside wildlife on Lake Naivasha',
          '3 full days tracking big cats and Great Migration river crossings in Maasai Mara',
          'Exclusive private 4x4 Land Cruiser with dedicated licensed KPSGA driver-guide'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Nairobi to Amboseli National Park — Beneath Kilimanjaro',
            transfer: 'Drive approx. 4 hrs (240 km)',
            narrative: 'Depart Nairobi early morning, descending across the Athi and Kapiti savannah plains. Arrive at Amboseli National Park with Mount Kilimanjaro towering above the acacia canopy. Savor lunch at your luxury tented camp before heading into the Enkongo Narok marshlands for an afternoon game drive tracking habituated elephant dynasties and plains game.',
            wildlife: ['Super-Tuskers', 'Lions', 'Cheetahs', 'Cape Buffalos', 'Giraffes', 'Hippos'],
            activities: 'Scenic savannah transfer, Afternoon 4x4 game drive, Sunset sundowner',
            accommodation: 'Tortilis Camp / Ol Tukai Lodge (Luxury Tented Camp)',
            meals: 'Lunch & Dinner Included · Bottled Mineral Water in Vehicle'
          },
          {
            dayNumber: 2,
            title: 'Full Day in Amboseli National Park — Swamps & Observation Hill',
            transfer: 'Full day wildlife circuit in park',
            narrative: 'Embark on a crisp dawn game drive when Kilimanjaro is cloudless for premier wildlife photography. Explore seasonal dry lake pans and permanent freshwater springs. Ascend Observation Hill for panoramic picnic lunch vistas across wallowing hippos, pelicans, and roaming zebra herds before a late afternoon predator stakeout.',
            wildlife: ['Ancient Big Tuskers', 'Hyenas', 'Wildebeests', 'African Fish Eagles', 'Hippos'],
            activities: 'Dawn game drive, Observation Hill vista, Golden hour predator stakeout',
            accommodation: 'Tortilis Camp / Ol Tukai Lodge',
            meals: 'Breakfast, Bush Picnic Lunch & Dinner'
          },
          {
            dayNumber: 3,
            title: 'Amboseli to Lake Naivasha & Crescent Island Sanctuary',
            transfer: 'Drive approx. 5.5 hrs (310 km) via Great Rift Valley',
            narrative: 'Journey north through the scenic Great Rift Valley escarpment. Arrive at freshwater Lake Naivasha for lunch. Board a private boat safari observing hippo pods and fish eagles, followed by a guided walking safari on Crescent Island where you walk freely alongside giraffes, zebras, and waterbucks with zero predator danger.',
            wildlife: ['Hippos', 'Black-and-White Colobus', 'Fish Eagles', 'Giraffes on foot', 'Waterbucks'],
            activities: 'Rift Valley descent, Motorized boat safari, Crescent Island walking safari',
            accommodation: 'Chui Lodge / Enashipai Resort & Spa (Boutique Lodge)',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 4,
            title: 'Lake Naivasha to Maasai Mara National Reserve',
            transfer: 'Drive approx. 4.5 hrs (230 km)',
            narrative: 'Ascend through Maasai pastoralist country into the world-renowned Maasai Mara ecosystem. Check in at your luxury tented camp nestled along the riverbank in time for lunch. As the afternoon sun softens, set out for your first Mara game drive tracking resident lion prides and scanning acacia branches for leopards.',
            wildlife: ['Lions', 'Leopards', 'Cheetahs', 'Topis', 'Thomson’s Gazelles'],
            activities: 'Afternoon 4x4 game drive, Riverbank sundowner drinks',
            accommodation: 'Mara Plains Camp / Governors’ IL Moran / Mara North Bush Camp',
            meals: 'Breakfast, Lunch & 3-Course Dinner'
          },
          {
            dayNumber: 5,
            title: 'Maasai Mara — Predator Tracking & River Crossing Stakeout',
            transfer: 'Full day savannah & river circuit',
            narrative: 'A full day dedicated to wildlife tracking with a packed bush picnic lunch. Your private guide navigates open savannah trails toward the Mara River, epic stage of the Great Migration (July–Oct) where massive wildebeest herds brave giant Nile crocodiles. Track cheetah coalitions across the Talek plains and explore riverine loops for leopards.',
            wildlife: ['The Big Five', 'Nile Crocodiles', 'Wildebeest Herds', 'Vultures', 'Serval Cats'],
            activities: 'Full-day game drive with bush picnic, Mara River crossing stakeout',
            accommodation: 'Mara Plains Camp / Governors’ IL Moran',
            meals: 'Breakfast, Picnic Bush Lunch & Dinner'
          },
          {
            dayNumber: 6,
            title: 'Maasai Mara — Private Conservancies & Cultural Bush Walk',
            transfer: 'Conservancy territory & nature trails',
            narrative: 'Optional sunrise hot air balloon safari drifting over the savannah followed by a champagne bush breakfast. Explore exclusive community conservancy lands away from tourist traffic. Participate in an interpretive bush walk with an indigenous Maasai warrior learning traditional spoor tracking and botany, followed by an evening night game drive.',
            wildlife: ['Black Rhinos', 'Bat-eared Foxes', 'Aardwolves', 'Nocturnal Predators', 'Lions'],
            activities: 'Optional Sunrise Balloon Safari, Guided bush walk, Conservancy night game drive',
            accommodation: 'Mara Plains Camp / Governors’ IL Moran',
            meals: 'Breakfast, Lunch & Starlit Bush Dinner'
          },
          {
            dayNumber: 7,
            title: 'Maasai Mara to Nairobi Wilson & Departure',
            transfer: 'Scenic 45-min bush flight or 5.5 hrs drive',
            narrative: 'Final dawn game drive capturing the first rays of sunlight over the Mara grasslands. After a leisurely breakfast on the camp terrace, transfer to the airstrip for your scenic 45-minute flight to Nairobi Wilson Airport (or private 4x4 drive) in time for international flight connections.',
            wildlife: ['Elephants', 'Giraffes', 'Plains Antelopes in dawn light'],
            activities: 'Dawn game drive, Bush flight/drive transfer to Nairobi',
            accommodation: 'End of Safari (Day room or airport transfer)',
            meals: 'Breakfast & Light Lunch'
          }
        ],
        inclusions: [
          'All National Park & Conservancy entrance fees (for non-residents)',
          'Exclusive private 4x4 Land Cruiser with pop-up roof & unlimited game drive mileage',
          'Licensed Silver/Gold KPSGA Professional Driver-Guide throughout',
          '6 Nights luxury tented camp & boutique lodge accommodation',
          'Full board meals (Breakfast, Lunch & Dinner as detailed in day schedule)',
          'Lake Naivasha motorized boat safari & Crescent Island walking sanctuary fee',
          'Pick-up and drop-off in Nairobi (Airport or hotel)',
          'AMREF Flying Doctors 24/7 Emergency Medical Evacuation cover',
          'Unlimited bottled mineral drinking water in safari vehicle',
          'Cruiser equipped with high-power binoculars, animal field guides & USB charging ports'
        ],
        exclusions: [
          'International flights to/from Nairobi (Jomo Kenyatta - NBO)',
          'Kenya Electronic Travel Authorization (eTA entry visa)',
          'Optional Hot Air Balloon Safari with champagne breakfast (~$450–$480 pp)',
          'Optional Maasai Cultural Village (Boma) visit (~$30 pp)',
          'Driver-guide & camp staff gratuities / tips (customary $15–$25 per day)',
          'Personal travel, baggage, and medical insurance',
          'Premium alcoholic spirits, vintage wines & personal laundry items'
        ]
      },
      {
        id: 'mara-4day-flyin',
        image: imgMara2,
        title: '4-Day Mara Classic & Migration Trail (Fly-In Safari)',
        badge: 'Premier Fly-In',
        duration: '4 Days / 3 Nights',
        tagline: 'Direct 45-minute bush flight into exclusive private conservancies with intensive predator tracking.',
        tourType: 'Fly-In Bush Safari',
        vehicle: 'Custom Open-Sided 4x4 Safari Cruiser',
        comfort: 'Ultra-Luxury Tented Bush Camp',
        startLocation: 'Nairobi Wilson (WIL)',
        endLocation: 'Nairobi Wilson (WIL)',
        priceGuide: 'From $2,150 / person',
        routeStops: ['Nairobi Wilson', 'Mara Musiara Airstrip', 'Mara North Conservancy', 'Nairobi Wilson'],
        highlights: [
          '45-minute scheduled scenic bush flight avoiding long road journeys',
          'Off-road tracking privileges & night drives in private conservancies',
          'Intensive predator tracking during peak dawn and golden-hour periods',
          'Bush champagne breakfast & sundowners overlooking the plains'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Nairobi Wilson Bush Flight to Maasai Mara',
            transfer: 'Flight 45 mins from Wilson Airport (WIL)',
            narrative: 'Board your morning scheduled bush flight from Wilson Airport, soaring over the Great Rift Valley before touching down on a Mara bush runway. Met by your dedicated private guide with an open-sided 4x4 cruiser. Immediate game drive en route to your luxury tented camp. Afternoon game drive in private conservancy lands.',
            wildlife: ['Lions', 'Elephants', 'Cheetahs', 'Giraffes', 'Zebras'],
            activities: 'Bush flight transfer, Afternoon conservancy game drive, Campfire dinner',
            accommodation: 'Governors’ IL Moran / Mara Plains Camp',
            meals: 'Lunch & Dinner Included'
          },
          {
            dayNumber: 2,
            title: 'Full Day Mara Big Cat Coalition Tracking',
            transfer: 'Full day core savannah exploration',
            narrative: 'Full day of dawn-to-dusk wildlife tracking. Your guide positions the cruiser at prime river crossing sites and open savannah corridors. Watch the famous Marsh Pride lions and cheetah coalitions stalk gazelles. Unwind with an open-savannah picnic lunch beneath an acacia tree before an afternoon drive.',
            wildlife: ['Lions', 'Leopards', 'Cheetahs', 'Crocodiles', 'Hippos'],
            activities: 'Dawn game drive, Bush picnic, Mara river crossing stakeout',
            accommodation: 'Governors’ IL Moran / Mara Plains Camp',
            meals: 'Breakfast, Picnic Lunch & Dinner'
          },
          {
            dayNumber: 3,
            title: 'Private Conservancy Solitude & Night Game Drive',
            transfer: 'Private conservancy loops',
            narrative: 'Enjoy uncrowded conservancy wilderness where vehicles are strictly limited. Optional early morning hot air balloon safari. In the afternoon, embark on an off-road tracking excursion, pause for scenic sundowners on a volcanic ridge, and continue with spotlight night tracking for elusive nocturnal wildlife like leopards, genets, and bushbabies.',
            wildlife: ['Nocturnal Predators', 'Black Rhinos', 'Leopards', 'Spotted Hyenas'],
            activities: 'Off-road tracking, Conservancy sundowners, Spotlight night drive',
            accommodation: 'Governors’ IL Moran / Mara Plains Camp',
            meals: 'Breakfast, Lunch & Starlit Bush Dinner'
          },
          {
            dayNumber: 4,
            title: 'Morning Game Drive & Bush Flight to Nairobi',
            transfer: 'Flight 45 mins to Wilson Airport (WIL)',
            narrative: 'Enjoy a final sunrise game drive tracking predators returning from nighttime hunts. Return to camp for a hearty farewell breakfast. Transfer to the airstrip for your return flight to Nairobi Wilson, connecting seamlessly with your evening outbound flight.',
            wildlife: ['Dawn herbivores', 'Elephants', 'Predator coalitions'],
            activities: 'Sunrise game drive, Airstrip transfer, Bush flight to Nairobi',
            accommodation: 'End of Safari',
            meals: 'Breakfast & Light Refreshments'
          }
        ],
        inclusions: [
          'Roundtrip scheduled flights Nairobi Wilson ↔ Maasai Mara airstrips',
          'All Mara National Reserve & Private Conservancy entry fees',
          'Exclusive open-sided 4x4 safari cruiser with dedicated KPSGA guide',
          '3 Nights luxury tented camp accommodation',
          'Full-board dining with chef-prepared meals',
          'Conservancy off-road tracking and spotlight night game drives',
          'AMREF Flying Doctors emergency medical evacuation cover',
          'Airstrip transfers and unlimited bottled mineral water'
        ],
        exclusions: [
          'International airfares & Kenyan eTA visa',
          'Optional Hot Air Balloon Safari with champagne breakfast',
          'Driver-guide and lodge staff gratuities',
          'Personal travel & baggage insurance',
          'Premium alcoholic drinks & champagne'
        ]
      }
    ],
    logistics: {
      flightTime: '45 mins scheduled flight from Nairobi Wilson Airport (WIL)',
      roadTransfer: '5 to 6 hours scenic private drive via the Great Rift Valley Escarpment',
      conservancies: 'Private conservancies allow off-road tracking, night game drives, and guided bush walks not permitted inside the public reserve.',
      packingTip: 'Neutral earth tones (khaki, olive, tan). Pack a warm fleece for 06:00 AM open-cruiser departures; daytime temperatures rise to 28°C.'
    }
  },
  amboseli: {
    name: 'Amboseli National Park',
    location: 'Kajiado County, Kenya · Mt. Kilimanjaro Foothills',
    tagline: 'Iconic snow-capped Kilimanjaro silhouettes framed by free-roaming giant elephant dynasties.',
    image: imgAmboseli,
    bestTime: 'June to October & January to February (Clear mountain vistas and dry pan crossings)',
    stay: 'Tortilis Camp, Ol Tukai Lodge, Amboseli Serena & Satao Elerai Conservancy',
    overview: 'Nestled directly in the northern shadow of Mount Kilimanjaro (Africa’s highest peak at 5,895m), Amboseli is celebrated worldwide for its ancient elephant populations, studied continuously for over 50 years. Underground meltwater springs from Kilimanjaro feed permanent green marshes (Enkongo Narok and Olokenya), drawing hippos, buffalo, pelicans, and waterbirds in striking contrast to the surrounding arid plains.',
    highlights: [
      { title: 'Kilimanjaro Sunrise Backdrops', desc: 'Crystal-clear early morning photography with Africa’s highest snow-capped peak dominating the horizon.' },
      { title: 'Ancient Big Tuskers', desc: 'Habituated multi-generational elephant herds featuring some of the continent’s last remaining super-tuskers.' },
      { title: 'Observation Hill Vantage', desc: 'Panoramic volcanic ridge lookout offering 360-degree vistas across active wetlands and dust-devil plains.' },
      { title: 'Wetland Bird Sanctuary', desc: 'Over 400 species including Goliath herons, African fish eagles, kingfishers, and migratory marsh fowl.' }
    ],
    itineraries: [
      {
        id: 'amboseli-4day-giants',
        image: imgAmb1,
        title: '4-Day Kilimanjaro Giants & Chyulu Foothills Expedition',
        badge: 'Mountain Safari',
        duration: '4 Days / 3 Nights',
        tagline: 'Track legendary elephant dynasties beneath the majestic snow peak of Mount Kilimanjaro.',
        tourType: 'Private 4x4 Safari (Fly-In or Drive)',
        vehicle: 'Custom 4x4 Land Cruiser with Pop-Up Roof',
        comfort: 'Luxury Tented Camps & Lodges',
        startLocation: 'Nairobi',
        endLocation: 'Nairobi',
        priceGuide: 'From $1,480 / person',
        routeStops: ['Nairobi', 'Amboseli NP', 'Observation Hill', 'Kitirua Conservancy', 'Nairobi'],
        highlights: [
          'Africa’s highest concentration of habituated elephants studied over 50 years',
          'Crystal-clear sunrise photography with snow-capped Mount Kilimanjaro',
          'Panoramic wetland vistas and picnic lunch atop volcanic Observation Hill',
          'Guided walking safari with indigenous Maasai elders in private conservancy'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Nairobi to Amboseli — Kilimanjaro Approaches',
            transfer: 'Drive approx. 4 hrs (240 km) or 35 mins flight',
            narrative: 'Depart south from Nairobi across the Athi Kapiti plains toward the Tanzania border. Enter Amboseli National Park with Mount Kilimanjaro looming large. Arrive at camp in time for lunch. In the afternoon, explore the Enkongo Narok swamps where elephants immerse themselves up to their bellies feeding on marsh grass.',
            wildlife: ['Elephant Herds', 'Lions', 'Buffalos', 'Zebras', 'Waterfowl'],
            activities: 'Scenic transfer, Afternoon wetland game drive, Mountain view sundowners',
            accommodation: 'Tortilis Camp / Ol Tukai Lodge',
            meals: 'Lunch & Dinner Included'
          },
          {
            dayNumber: 2,
            title: 'Amboseli National Park — Super Tuskers & Observation Hill',
            transfer: 'Full day park game drive',
            narrative: 'Dawn departure to capture Kilimanjaro’s glaciers illuminated in morning gold. Track the park’s famous super-tuskers—elephants with ivory sweeping to the ground. Ascend Observation Hill for panoramic views of dust devils across the dry lake bed. Afternoon game drive in the acacia woodlands.',
            wildlife: ['Super-Tuskers', 'Cheetahs', 'Spotted Hyenas', 'Goliath Herons', 'Flamingos'],
            activities: 'Sunrise game drive, Observation Hill walk, Acacia woodland tracking',
            accommodation: 'Tortilis Camp / Ol Tukai Lodge',
            meals: 'Breakfast, Bush Picnic Lunch & Dinner'
          },
          {
            dayNumber: 3,
            title: 'Private Conservancy Walking Safari & Ridge Sundowner',
            transfer: 'Conservancy game trails',
            narrative: 'Step outside the vehicle on an exclusive guided walking safari led by Maasai trackers in the private conservancy bordering the park. Learn spoor identification, traditional bush medicine, and local folklore. In the afternoon, enjoy an off-road game drive followed by sundowners on a scenic volcanic ridge.',
            wildlife: ['Giraffes on foot', 'Elephants', 'Lesser Kudu', 'Bat-eared Foxes'],
            activities: 'Guided bush walk, Conservancy game drive, Ridge sundowners',
            accommodation: 'Tortilis Camp / Satao Elerai Camp',
            meals: 'Breakfast, Lunch & Starlit Dinner'
          },
          {
            dayNumber: 4,
            title: 'Morning Game Drive & Return to Nairobi',
            transfer: 'Drive approx. 4 hrs (240 km) or 35 mins flight',
            narrative: 'A final morning game drive around the Olokenya swamp. Savor breakfast with panoramic mountain views before beginning your journey back to Nairobi. Drop-off at your hotel or Jomo Kenyatta International Airport.',
            wildlife: ['Elephants', 'Zebras', 'Gazelles'],
            activities: 'Dawn game drive, Transfer to Nairobi',
            accommodation: 'End of Safari',
            meals: 'Breakfast & Light Lunch'
          }
        ],
        inclusions: [
          'All Amboseli National Park and private conservancy entrance fees',
          'Exclusive private 4x4 Land Cruiser with pop-up roof & unlimited mileage',
          'Licensed Silver/Gold KPSGA Professional Driver-Guide',
          '3 Nights luxury tented camp accommodation',
          'Full-board meal plan (Breakfast, Lunch, Dinner)',
          'Guided bush walking safari with Maasai naturalists',
          'Nairobi hotel/airport pick-up and drop-off',
          'AMREF Flying Doctors 24/7 emergency medical evacuation cover',
          'Complimentary bottled drinking water in vehicle'
        ],
        exclusions: [
          'International flights & Kenya eTA entry authorization',
          'Driver-guide and camp staff gratuities',
          'Personal travel and medical insurance',
          'Premium alcoholic beverages and laundry'
        ]
      },
      {
        id: 'amboseli-6day-southern',
        image: imgAmb2,
        title: '6-Day Southern Wilderness: Amboseli, Chyulu Hills & Tsavo West',
        badge: 'Volcanic Expedition',
        duration: '6 Days / 5 Nights',
        tagline: 'Big tuskers, rhino sanctuaries, natural crystal springs, and dramatic black lava landscapes.',
        tourType: 'Private 4x4 Expedition',
        vehicle: 'Custom 4x4 Land Cruiser with Pop-Up Roof',
        comfort: 'Luxury Safari Lodges & Camps',
        startLocation: 'Nairobi',
        endLocation: 'Nairobi (or Mombasa / Diani)',
        priceGuide: 'From $2,250 / person',
        routeStops: ['Nairobi', 'Amboseli NP', 'Chyulu Hills', 'Tsavo West (Mzima Springs)', 'Nairobi'],
        highlights: [
          'Snow-capped Kilimanjaro vistas paired with Tsavo West volcanic lava cones',
          'Mzima Springs submerged glass viewing chamber with wallowing hippos and crocodiles',
          'Rhino tracking in the protected Ngulia Rhino Sanctuary',
          'Option to continue directly to Mombasa or Diani Beach for a coastal extension'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Nairobi to Amboseli National Park',
            transfer: 'Drive approx. 4 hrs (240 km)',
            narrative: 'Morning drive to Amboseli. Check-in at luxury tented camp beneath Mount Kilimanjaro. Afternoon game drive in search of free-roaming elephant herds and wetland bird species.',
            wildlife: ['Elephants', 'Buffalos', 'Waterfowl', 'Cheetahs'],
            activities: 'Afternoon game drive, Mountain terrace dinner',
            accommodation: 'Tortilis Camp / Ol Tukai Lodge',
            meals: 'Lunch & Dinner Included'
          },
          {
            dayNumber: 2,
            title: 'Full Day Amboseli Wildlife Tracking',
            transfer: 'Full day park game drive',
            narrative: 'Sunrise game drive across Amboseli’s soda lake bed. Picnic lunch atop Observation Hill with views over the marshes. Afternoon predator drive tracking lion prides and hyena clans.',
            wildlife: ['Super-Tuskers', 'Lions', 'Hyenas', 'Flamingos'],
            activities: 'Full day game drive, Observation Hill picnic',
            accommodation: 'Tortilis Camp / Ol Tukai Lodge',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 3,
            title: 'Amboseli to Tsavo West National Park via Shetani Lava Flow',
            transfer: 'Drive approx. 3 hrs (160 km)',
            narrative: 'Depart Amboseli heading east toward Tsavo West. Traverse the dramatic Shetani Lava Flow—a massive 8-kilometer black basalt flow formed by volcanic eruptions. Afternoon game drive in Tsavo West.',
            wildlife: ['Red Elephants of Tsavo', 'Leopards', 'Klipspringers', 'Giraffes'],
            activities: 'Shetani Lava walk, Afternoon game drive',
            accommodation: 'Kilaguni Serena Safari Lodge / Finch Hattons',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 4,
            title: 'Mzima Springs & Ngulia Rhino Sanctuary',
            transfer: 'Tsavo West circuit',
            narrative: 'Visit Mzima Springs, where 50 million gallons of crystal-clear water gush daily from Chyulu Hills through volcanic rock. Descend into the sunken glass hide to watch hippos walking underwater. In the evening, enter the heavily protected Ngulia Rhino Sanctuary to track endangered black rhinos.',
            wildlife: ['Black Rhinos', 'Hippos underwater', 'Nile Crocodiles', 'Fish Eagles'],
            activities: 'Mzima Springs walk, Ngulia Rhino sanctuary tracking',
            accommodation: 'Kilaguni Serena Safari Lodge / Finch Hattons',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 5,
            title: 'Chyulu Hills Wilderness & Poacher’s Lookout',
            transfer: 'Chyulu Hills scenic loops',
            narrative: 'Ascend to Poacher’s Lookout for panoramic vistas stretching from Tsavo to Kilimanjaro. Game drive through ancient baobab valleys tracking Tsavo’s famed dust-red elephant herds.',
            wildlife: ['Lions', 'Lesser Kudu', 'Gerenuk', 'Elephants'],
            activities: 'Poacher’s Lookout hike, Baobab valley game drive',
            accommodation: 'Kilaguni Serena Safari Lodge / Finch Hattons',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 6,
            title: 'Tsavo West to Nairobi (or Diani Beach Extension)',
            transfer: 'Drive approx. 4.5 hrs to Nairobi (or SGR train to Coast)',
            narrative: 'Final early morning game drive before breakfast. Scenic drive back to Nairobi or optional transfer to Mtito Andei railway station for the Madaraka Express train to Mombasa / Diani Beach.',
            wildlife: ['Plains game in morning light'],
            activities: 'Morning game drive, Return transfer or coastal connection',
            accommodation: 'End of Safari',
            meals: 'Breakfast & Lunch'
          }
        ],
        inclusions: [
          'Park entrance fees for Amboseli & Tsavo West National Parks',
          'Exclusive 4x4 Land Cruiser with pop-up roof and fuel',
          'Licensed Silver/Gold KPSGA Driver-Guide',
          '5 Nights luxury lodge accommodation',
          'Full-board meals throughout',
          'Mzima Springs guided nature walk & Ngulia Rhino entry',
          'AMREF Flying Doctors medical evacuation cover',
          'Unlimited mineral drinking water in vehicle'
        ],
        exclusions: [
          'International flights & Kenya eTA',
          'Gratuities for driver-guide & lodge staff',
          'Personal travel insurance',
          'Optional SGR train tickets for coastal extension'
        ]
      }
    ],
    logistics: {
      flightTime: '35 mins scheduled flight from Wilson Airport (WIL) to Amboseli Airstrip',
      roadTransfer: '3.5 to 4 hours scenic private drive south via Namanga / Emali highway',
      conservancies: 'Bordering Kitirua and Selenkay conservancies provide private wilderness walking safaris with local Maasai warriors.',
      packingTip: 'Dust protection for cameras (fine volcanic ash pans). 70-200mm lens is ideal for elephants framed against Kilimanjaro.'
    }
  },
  'northern-kenya': {
    name: 'Northern Kenya & Samburu',
    location: 'Samburu & Laikipia Plateau · Northern Frontier',
    tagline: 'A rugged, ancient wilderness frontier home to sacred mountains and endemic northern wildlife.',
    image: imgNorthernKenya,
    bestTime: 'Year-Round (Optimal dry game viewing June–October & December–March)',
    stay: 'Saruni Samburu, Sasaab, Segera Retreat, Lewa Wilderness & Ol Pejeta Bush Camp',
    overview: 'North of Mount Kenya lies one of Africa’s greatest conservation success stories. From the red-earth savannahs of Samburu and Buffalo Springs bisected by the Ewaso Ng’iro River, to the vast private conservancies of Laikipia and Lewa, this frontier offers unmatched wilderness privacy, black rhino sanctuaries, and rare desert-adapted species found nowhere else in southern East Africa.',
    highlights: [
      { title: 'The Samburu Special Five', desc: 'Gerenuk (giraffe gazelle), Grevy’s zebra, reticulated giraffe, beisa oryx, and the blue-shanked Somali ostrich.' },
      { title: 'Lewa & Ol Pejeta Rhino Solitude', desc: 'Home to the planet’s largest populations of endangered black rhinos and the world’s last remaining Northern White Rhinos.' },
      { title: 'Dramatic Sacred Landscapes', desc: 'Striking granite inselbergs, red-clay gorges, Mt. Ololokwe sacred monolith, and riverbank doum palms.' },
      { title: 'Walking & Camel Expeditions', desc: 'Tracking wildlife on foot with Samburu and Pokot trackers; open-night skies beneath the equator.' }
    ],
    itineraries: [
      {
        id: 'samburu-5day-special5',
        image: imgSam1,
        title: '5-Day Northern Frontier & Samburu Special Five',
        badge: 'Endemic Wildlife',
        duration: '5 Days / 4 Nights',
        tagline: 'Track rare desert-adapted species and explore sacred red-earth kopjes along the Ewaso Ng’iro River.',
        tourType: 'Private 4x4 or Fly-In Safari',
        vehicle: 'Custom 4x4 Land Cruiser with Pop-Up Roof',
        comfort: 'Luxury Boutique Tented Camp',
        startLocation: 'Nairobi',
        endLocation: 'Nairobi',
        priceGuide: 'From $1,750 / person',
        routeStops: ['Nairobi', 'Mount Kenya Escarpment', 'Samburu Reserve', 'Kalama Conservancy', 'Nairobi'],
        highlights: [
          'Track the Samburu Special 5: Grevy’s zebra, gerenuk, reticulated giraffe, beisa oryx, Somali ostrich',
          'Ewaso Ng’iro river game drives with bathing elephant herds beneath doum palms',
          'High-kopje sundowners overlooking sacred Mount Ololokwe',
          'Authentic cultural immersion with indigenous Samburu naturalists'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Nairobi to Samburu National Reserve',
            transfer: 'Drive approx. 5.5 hrs (320 km) or 50 mins flight',
            narrative: 'Journey north crossing the equator and skirting the lush slopes of Mount Kenya before descending into the semi-arid red-earth country of Samburu. Arrive at luxury camp in time for lunch. Late afternoon game drive along the life-giving Ewaso Ng’iro river.',
            wildlife: ['Reticulated Giraffes', 'Elephants', 'Gerenuks', 'Crocodiles'],
            activities: 'Equator crossing stop, Afternoon river game drive',
            accommodation: 'Saruni Samburu / Sasaab Lodge (Luxury Boutique Camp)',
            meals: 'Lunch & Dinner Included'
          },
          {
            dayNumber: 2,
            title: 'Samburu Special Five Safari Circuit',
            transfer: 'Full day reserve game drive',
            narrative: 'Dedicate the day to tracking Samburu’s endemic wildlife. Spot gerenuks standing upright on hind legs feeding on high acacia thorns, rare Grevy’s zebras with pinstripe coats, and herds of beisa oryx. Lunch at camp or riverbank picnic. Sunset sundowner overlooking the river gorge.',
            wildlife: ['Grevy’s Zebra', 'Beisa Oryx', 'Somali Ostrich', 'Leopards', 'Lions'],
            activities: 'Endemic wildlife tracking, Riverbank picnic, Sunset kopje sundowners',
            accommodation: 'Saruni Samburu / Sasaab',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 3,
            title: 'Kalama Conservancy & Sacred Kopjes',
            transfer: 'Kalama Conservancy loops',
            narrative: 'Venture into the exclusive Kalama Conservancy where vehicle density is minimal. Guided morning walk up granite inselbergs with local Samburu warriors who explain ancient rock art and medicinal flora. Afternoon game drive targeting elusive northern leopards resting in riverine figs.',
            wildlife: ['Leopards', 'Wild Dogs (Lycaon)', 'Elephants', 'Dik-diks'],
            activities: 'Rock kopje hiking, Samburu naturalist walk, Twilight game drive',
            accommodation: 'Saruni Samburu / Sasaab',
            meals: 'Breakfast, Lunch & Starlit Dinner'
          },
          {
            dayNumber: 4,
            title: 'Ewaso Ng’iro River & Big Cat Tracking',
            transfer: 'River loops & Buffalo Springs',
            narrative: 'Full morning exploring the natural clear springs of Buffalo Springs Reserve where wildlife gathers in the heat of the day. Afternoon relaxing by the camp plunge pool, followed by an evening game drive tracking lion prides along the riverbank.',
            wildlife: ['Lions', 'Cheetahs', 'Water Monitors', 'Vulturine Guineafowl'],
            activities: 'Springs game drive, Riverbank birding, Bush campfire dinner',
            accommodation: 'Saruni Samburu / Sasaab',
            meals: 'Breakfast, Lunch & Bush Dinner'
          },
          {
            dayNumber: 5,
            title: 'Samburu to Nairobi Wilson & Departure',
            transfer: 'Drive approx. 5.5 hrs or 50 mins flight',
            narrative: 'Early morning game drive as the desert wildlife awakens. Farewell camp breakfast overlooking the red hills. Scenic flight or private 4x4 transfer back to Nairobi.',
            wildlife: ['Dawn herbivores', 'Elephants'],
            activities: 'Dawn game drive, Transfer to Nairobi',
            accommodation: 'End of Safari',
            meals: 'Breakfast & Lunch'
          }
        ],
        inclusions: [
          'Samburu National Reserve and Kalama Conservancy entry fees',
          'Exclusive 4x4 Land Cruiser with pop-up roof & unlimited mileage',
          'Licensed Silver/Gold KPSGA Professional Driver-Guide',
          '4 Nights luxury boutique camp accommodation',
          'Full-board meals and picnic lunches',
          'Guided rock kopje walk with indigenous Samburu naturalists',
          'AMREF Flying Doctors 24/7 medical evacuation cover',
          'Bottled mineral drinking water in vehicle'
        ],
        exclusions: [
          'International flights & Kenya eTA entry authorization',
          'Gratuities for driver-guide and camp staff',
          'Personal travel & baggage insurance',
          'Premium alcoholic beverages'
        ]
      },
      {
        id: 'lewa-8day-conservation',
        image: imgLewa1,
        title: '8-Day Conservation Pioneer: Lewa Rhino Sanctuary, Laikipia & Maasai Mara',
        badge: 'Premier Sky Safari',
        duration: '8 Days / 7 Nights',
        tagline: 'The ultimate luxury conservation journey: endangered rhino tracking, private ranches, and big cats of the Mara.',
        tourType: 'Sky Safari / Private 4x4 Circuit',
        vehicle: 'Custom 4x4 Land Cruiser & Bush Flight',
        comfort: 'Ultra-Luxury Conservation Retreats',
        startLocation: 'Nairobi',
        endLocation: 'Nairobi',
        priceGuide: 'From $3,450 / person',
        routeStops: ['Nairobi', 'Lewa Wildlife Conservancy', 'Laikipia Plateau', 'Maasai Mara', 'Nairobi'],
        highlights: [
          'Track endangered Black and White rhinos in Lewa Wildlife Conservancy',
          'Horseback safari and camel trekking across private Laikipia ranches',
          'Big cats and river crossings in Maasai Mara National Reserve',
          'Direct bush flights connecting private conservancies'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Nairobi to Lewa Wildlife Conservancy',
            transfer: 'Bush flight 50 mins to Lewa Downs',
            narrative: 'Fly directly from Nairobi Wilson to Lewa Wildlife Conservancy, nestled against the northern foothills of Mount Kenya. Afternoon rhino tracking drive across rolling acacia hills.',
            wildlife: ['Black Rhinos', 'White Rhinos', 'Grevy’s Zebras', 'Lions'],
            activities: 'Bush flight transfer, Afternoon rhino tracking drive',
            accommodation: 'Lewa Wilderness / Sirikoi Camp',
            meals: 'Lunch & Dinner Included'
          },
          {
            dayNumber: 2,
            title: 'Lewa Rhino Conservation Experience',
            transfer: 'Full day Lewa circuit',
            narrative: 'Spend the day with Lewa’s dedicated anti-poaching trackers and research teams. Morning game drive witnessing large rhino crash populations and cheetahs hunting on the open plains.',
            wildlife: ['Rhinos', 'Cheetahs', 'Wild Dogs', 'Elephants'],
            activities: 'Conservation tracking, Evening campfire dinner',
            accommodation: 'Lewa Wilderness / Sirikoi Camp',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 3,
            title: 'Lewa to Laikipia Plateau Wilderness',
            transfer: 'Short scenic transfer approx. 1.5 hrs',
            narrative: 'Travel deeper into the Laikipia Plateau. Experience private conservancy seclusion with optional horseback safari or guided riverbank walking expeditions.',
            wildlife: ['Reticulated Giraffes', 'Leopards', 'Elephants'],
            activities: 'Horseback safari or walking expedition, Sundowners',
            accommodation: 'Segera Retreat / Ol Pejeta Bush Camp',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 4,
            title: 'Laikipia Wildlife & Northern White Rhinos',
            transfer: 'Laikipia private conservancy loops',
            narrative: 'Visit the world’s last remaining Northern White Rhinos in Ol Pejeta with private armed rangers. Track chimpanzees at the Sweetwaters Sanctuary followed by starlit night tracking.',
            wildlife: ['Northern White Rhinos', 'Chimpanzees', 'Lions', 'Aardwolves'],
            activities: 'Private ranger encounter, Spotlight night drive',
            accommodation: 'Segera Retreat / Ol Pejeta Bush Camp',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 5,
            title: 'Laikipia Flight to Maasai Mara',
            transfer: 'Scheduled bush flight 1 hr 10 mins',
            narrative: 'Board a private bush flight from Laikipia directly to the Maasai Mara. Settle into your luxury riverside camp and embark on an afternoon big cat game drive.',
            wildlife: ['Lions', 'Leopards', 'Cheetahs', 'Elephants'],
            activities: 'Bush flight, Afternoon predator drive',
            accommodation: 'Mara Plains Camp / Governors’ IL Moran',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 6,
            title: 'Full Day Maasai Mara Big Cat Stakeout',
            transfer: 'Mara River & Talek plains circuit',
            narrative: 'Full day tracking resident prides, cheetah coalitions, and Mara River crossings with packed gourmet bush picnic lunch.',
            wildlife: ['The Big Five', 'Wildebeest Herds', 'Crocodiles'],
            activities: 'Full day game drive, River crossing stakeout',
            accommodation: 'Mara Plains Camp / Governors’ IL Moran',
            meals: 'Breakfast, Picnic Lunch & Dinner'
          },
          {
            dayNumber: 7,
            title: 'Private Conservancy Solitude & Guided Bush Walk',
            transfer: 'Mara North territory',
            narrative: 'Explore private conservancy territory with guided bush walk led by indigenous Maasai elders and an evening sundowner drive.',
            wildlife: ['Endangered Black Rhinos', 'Leopards', 'Plains Game'],
            activities: 'Guided bush walk, Ridge sundowners',
            accommodation: 'Mara Plains Camp / Governors’ IL Moran',
            meals: 'Breakfast, Lunch & Starlit Dinner'
          },
          {
            dayNumber: 8,
            title: 'Maasai Mara Flight to Nairobi & Departure',
            transfer: 'Bush flight 45 mins to Wilson Airport',
            narrative: 'Sunrise farewell game drive before boarding your return flight to Nairobi Wilson, connecting with your international flight home.',
            wildlife: ['Dawn herbivores in morning light'],
            activities: 'Sunrise game drive, Bush flight to Nairobi',
            accommodation: 'End of Journey',
            meals: 'Breakfast Included'
          }
        ],
        inclusions: [
          'All bush flights (Nairobi → Lewa → Mara → Nairobi)',
          'All conservancy and national reserve entrance fees',
          'Luxury conservation retreat accommodation for 7 nights',
          'Full-board dining with premium drinks included at select camps',
          'Dedicated KPSGA guide & open 4x4 cruisers',
          'Rhino sanctuary visits and anti-poaching team briefing',
          'AMREF Flying Doctors emergency medical evacuation cover'
        ],
        exclusions: [
          'International flights & Kenya eTA',
          'Staff gratuities & personal expenses',
          'Personal travel insurance'
        ]
      }
    ],
    logistics: {
      flightTime: '55 mins scheduled bush flight from Nairobi Wilson (WIL) to Samburu/Lewa airstrips',
      roadTransfer: '5 to 6 hours scenic drive passing Mt. Kenya and crossing the equator',
      conservancies: 'Community-led conservancies fund schools and healthcare while providing guests with completely crowd-free private wilderness.',
      packingTip: 'Light breathable linen during warm daytime hours; polariser filter for vibrant red-earth landscape contrast.'
    }
  },
  diani: {
    name: 'Diani Beach & Coastal Reefs',
    location: 'Kwale County, Kenya · Indian Ocean Swahili Coast',
    tagline: 'Pristine powder-white sands, coral lagoon diving, and the timeless rhythm of the Swahili Coast.',
    image: imgDiani,
    bestTime: 'October to April (Warm turquoise sea waters, calm winds & optimal visibility)',
    stay: 'Alfajiri Villas, The Sands at Nomad, AfroChic Diani & WaterLovers Beach Resort',
    overview: 'Voted Africa’s leading beach destination for consecutive years, Diani Beach is the quintessential grand finale to an East African bush safari. Located 30 kilometers south of Mombasa, Diani’s dazzling white coral sand is protected by an offshore coral barrier reef, creating calm, crystal-clear turquoise lagoons ideal for swimming, kite surfing, and private dhow excursions.',
    highlights: [
      { title: 'Powder-White Sand & Warm Ocean', desc: 'Uninterrupted 17-kilometer stretch of soft coral beach kissed by the balmy waters of the Indian Ocean.' },
      { title: 'Kisite-Mpunguti Marine Safari', desc: 'Traditional wooden dhow cruise to marine parks for wild dolphin encounters and snorkeling alongside sea turtles.' },
      { title: 'Sunset Dhow & Seafood Swahili Dining', desc: 'Sailing along the coast with tamarind sundowners followed by freshly grilled Indian Ocean lobster.' },
      { title: 'Shimba Hills Coastal Rainforest', desc: 'Day excursion into coastal rainforest to track rare sable antelopes, forest elephants, and visit Sheldrick Falls.' }
    ],
    itineraries: [
      {
        id: 'diani-4day-reset',
        image: imgDiani1,
        title: '4-Day Post-Safari Swahili Coast & Kisite Marine Escape',
        badge: 'Barefoot Luxury',
        duration: '4 Days / 3 Nights',
        tagline: 'The quintessential post-safari reset: powder-white sands, wild dolphin dhow cruise, and oceanfront villa dining.',
        tourType: 'Luxury Beach Escape',
        vehicle: 'Private Air-Conditioned Van / Dhow',
        comfort: 'Boutique Beachfront Villa / Resort',
        startLocation: 'Nairobi / Mara',
        endLocation: 'Diani (Ukunda) to Nairobi',
        priceGuide: 'From $980 / person',
        routeStops: ['Ukunda Airstrip', 'Diani Beachfront', 'Kisite-Mpunguti Marine Park', 'Wasini Island'],
        highlights: [
          '17 kilometers of continuous white coral sand and calm turquoise reef lagoons',
          'Traditional wooden dhow cruise to Kisite Marine Park with wild dolphin pods',
          'Fresh seafood lunch on Wasini Island featuring Swahili crab and coconut rice',
          'Barefoot luxury relaxation in private plunge pool villas'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Bush Airstrip / Nairobi to Diani Beach',
            transfer: 'Direct flight 1 hr 10 mins to Ukunda Airstrip (UKA)',
            narrative: 'Fly directly from the Maasai Mara or Nairobi Wilson to Ukunda Airstrip, located just 10 minutes from Diani’s powder-white beachfront. Check into your boutique villa. Spend your afternoon unwinding on shaded daybeds overlooking the turquoise Indian Ocean with a fresh coconut sundowner.',
            wildlife: ['Colobus Monkeys in coastal canopy', 'Tropical shorebirds'],
            activities: 'Seamless fly-in arrival, Oceanfront relaxation, Swahili seafood dinner',
            accommodation: 'Alfajiri Villas / The Sands at Nomad (Luxury Beachfront)',
            meals: 'Dinner Included'
          },
          {
            dayNumber: 2,
            title: 'Kisite-Mpunguti Marine Park Dolphin Safari & Dhow Cruise',
            transfer: 'Transfer to Shimoni harbor & dhow sail',
            narrative: 'Morning transfer to Shimoni fishing harbor. Board an authentic Arabian-style motorized wooden dhow. Cruise through the coral islands of Kisite-Mpunguti Marine Park, swimming alongside playful bottlenose dolphins and snorkeling vibrant coral reefs teeming with sea turtles and tropical fish. Enjoy a traditional Swahili seafood lunch on Wasini Island before sailing back at sunset.',
            wildlife: ['Wild Bottlenose Dolphins', 'Green Sea Turtles', 'Manta Rays', 'Parrotfish', 'Coral Gardens'],
            activities: 'Traditional Dhow cruise, Coral reef snorkeling, Wasini seafood feast',
            accommodation: 'Alfajiri Villas / The Sands at Nomad',
            meals: 'Breakfast, Wasini Seafood Lunch & Dinner'
          },
          {
            dayNumber: 3,
            title: 'Shimba Hills Coastal Rainforest or Barefoot Ocean Relaxation',
            transfer: 'Local coastal transfers',
            narrative: 'Relax with beachfront spa treatments, kite-surfing, or stand-up paddleboarding on calm lagoon waters. Alternatively, take an optional morning excursion to nearby Shimba Hills National Reserve to trek through coastal rainforest to Sheldrick Falls and spot rare sable antelopes. Conclude your day with a sunset dhow cocktail cruise.',
            wildlife: ['Sable Antelopes (optional Shimba Hills)', 'Forest Elephants', 'Sykes Monkeys'],
            activities: 'Lagoon water sports, Optional Shimba Hills trek, Sunset dhow sailing',
            accommodation: 'Alfajiri Villas / The Sands at Nomad',
            meals: 'Breakfast & Dinner'
          },
          {
            dayNumber: 4,
            title: 'Diani Beach to Nairobi Wilson & International Transfer',
            transfer: 'Flight 1 hr 10 mins to Nairobi Wilson / JKIA',
            narrative: 'Enjoy a leisurely tropical breakfast on the terrace and a final dip in the warm ocean waves. Midday private transfer to Ukunda Airstrip for your 1-hour flight to Nairobi Wilson, connecting seamlessly with your evening international flight home.',
            wildlife: ['Coastal marine life'],
            activities: 'Morning ocean swim, Ukunda flight to Nairobi',
            accommodation: 'End of Journey',
            meals: 'Breakfast Included'
          }
        ],
        inclusions: [
          'Scheduled domestic flight Nairobi Wilson ↔ Ukunda Airstrip',
          'Private airstrip transfers in Diani',
          '3 Nights luxury beachfront boutique accommodation',
          'Full-day Kisite-Mpunguti Marine Park dhow excursion & snorkel gear',
          'Fresh Swahili seafood lunch on Wasini Island',
          'Breakfast and dinners included',
          'All marine park preservation fees and taxes'
        ],
        exclusions: [
          'International flights & Kenya eTA',
          'Optional Shimba Hills National Reserve excursion',
          'Water sports rentals (kite surfing, scuba diving)',
          'Gratuities for boat crew and villa staff'
        ]
      },
      {
        id: 'bush-to-beach-10day',
        image: imgDiani2,
        title: '10-Day Bush to Beach Signature Odyssey',
        badge: 'Signature Journey',
        duration: '10 Days / 9 Nights',
        tagline: 'Enkop Safaris’ definitive journey: Kilimanjaro giants, world-class Mara big cats, and effortless flight to Diani’s powder sands.',
        tourType: 'Comprehensive Safari & Coastal Odyssey',
        vehicle: 'Custom 4x4 Cruiser, Bush Flights & Private Van',
        comfort: 'Luxury Tented Camps & Beachfront Villas',
        startLocation: 'Nairobi',
        endLocation: 'Nairobi / Mombasa',
        priceGuide: 'From $3,150 / person',
        routeStops: ['Nairobi', 'Amboseli NP (2N)', 'Maasai Mara (4N)', 'Diani Beach Coast (3N)'],
        highlights: [
          'The complete Kenyan dream: Kilimanjaro giants, world-class Mara big cats, and tropical Indian Ocean beaches',
          'Seamless bush flights connecting remote wilderness airstrips directly to the coast',
          'All park fees, private 4x4 cruisers, professional guides, and beachfront villas included'
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Nairobi to Amboseli National Park',
            transfer: 'Drive approx. 4 hrs (240 km)',
            narrative: 'Depart Nairobi early morning arriving at Amboseli National Park in time for lunch with Mount Kilimanjaro in view. Afternoon game drive in the Enkongo Narok swamps.',
            wildlife: ['Elephant Dynasties', 'Lions', 'Cheetahs', 'Buffalos'],
            activities: 'Afternoon game drive, Mountain sunset view',
            accommodation: 'Tortilis Camp / Ol Tukai Lodge',
            meals: 'Lunch & Dinner Included'
          },
          {
            dayNumber: 2,
            title: 'Full Day in Amboseli Beneath Kilimanjaro',
            transfer: 'Full day wildlife tracking',
            narrative: 'Sunrise game drive capturing super-tuskers beneath Kilimanjaro. Observation Hill picnic and late afternoon predator tracking.',
            wildlife: ['Ancient Tuskers', 'Hyenas', 'Hippos', 'Waterfowl'],
            activities: 'Observation Hill picnic, Golden hour drive',
            accommodation: 'Tortilis Camp / Ol Tukai Lodge',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 3,
            title: 'Amboseli to Maasai Mara National Reserve (Fly-In)',
            transfer: 'Bush flight via Nairobi to Mara',
            narrative: 'Morning transfer to Amboseli airstrip for a scheduled flight directly into the Maasai Mara. Lunch at luxury tented camp followed by an afternoon big cat game drive.',
            wildlife: ['Lions', 'Leopards', 'Cheetahs', 'Elephants'],
            activities: 'Bush flight, Afternoon Mara game drive',
            accommodation: 'Mara Plains Camp / Governors’ IL Moran',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 4,
            title: 'Maasai Mara — Predator Coalitions & River Crossings',
            transfer: 'Full day savannah drive',
            narrative: 'Full day wildlife exploration tracking the Great Migration herds, lion prides, and river crossing points along the Mara River with packed bush lunch.',
            wildlife: ['The Big Five', 'Crocodiles', 'Wildebeest Herds'],
            activities: 'Full day game drive with bush picnic',
            accommodation: 'Mara Plains Camp / Governors’ IL Moran',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 5,
            title: 'Maasai Mara Conservancy Wilderness',
            transfer: 'Private conservancy loops',
            narrative: 'Explore uncrowded private conservancies with off-road tracking, guided walking safari with Maasai warriors, and spotlight night tracking.',
            wildlife: ['Black Rhinos', 'Leopards', 'Nocturnal wildlife'],
            activities: 'Bush walk, Sunset ridge sundowner, Night drive',
            accommodation: 'Mara Plains Camp / Governors’ IL Moran',
            meals: 'Breakfast, Lunch & Starlit Dinner'
          },
          {
            dayNumber: 6,
            title: 'Optional Sunrise Balloon Safari & Savannah Solitude',
            transfer: 'Mara reserve trails',
            narrative: 'Optional sunrise hot air balloon flight over the Mara triangle followed by champagne breakfast. Afternoon relaxation and golden hour game drive.',
            wildlife: ['Cheetah coalitions', 'Plains game', 'Giraffes'],
            activities: 'Optional balloon safari, Sunset game drive',
            accommodation: 'Mara Plains Camp / Governors’ IL Moran',
            meals: 'Breakfast, Lunch & Dinner'
          },
          {
            dayNumber: 7,
            title: 'Maasai Mara Bush Flight Direct to Diani Beach Coast',
            transfer: 'Direct coastal flight 2 hrs to Ukunda Airstrip (UKA)',
            narrative: 'Board your direct bush flight from the Maasai Mara airstrip straight to the Indian Ocean coast, landing at Ukunda Airstrip in Diani. Check into your luxury beachfront villa and plunge into the turquoise sea.',
            wildlife: ['Coastal birds', 'Ocean reef life'],
            activities: 'Direct bush-to-beach flight, Oceanfront cocktail dinner',
            accommodation: 'Alfajiri Villas / The Sands at Nomad',
            meals: 'Breakfast & Seafood Dinner'
          },
          {
            dayNumber: 8,
            title: 'Kisite Marine Park Dolphin Safari & Dhow Cruise',
            transfer: 'Dhow cruise from Shimoni',
            narrative: 'Sail on a traditional wooden dhow to Kisite-Mpunguti Marine Park. Snorkel with sea turtles and swim with wild dolphin pods followed by fresh seafood lunch on Wasini Island.',
            wildlife: ['Bottlenose Dolphins', 'Sea Turtles', 'Coral Reefs'],
            activities: 'Dhow sailing, Snorkeling, Wasini crab lunch',
            accommodation: 'Alfajiri Villas / The Sands at Nomad',
            meals: 'Breakfast, Wasini Lunch & Dinner'
          },
          {
            dayNumber: 9,
            title: 'Barefoot Luxury & Ocean Sunset Dhow',
            transfer: 'Diani Beachfront',
            narrative: 'Full day of barefoot ocean relaxation, massage treatments, and tropical beachfront luxury. Evening sunset tamarind dhow cruise along the coast.',
            wildlife: ['Coastal marine life'],
            activities: 'Beachfront relaxation, Sunset dhow cruise',
            accommodation: 'Alfajiri Villas / The Sands at Nomad',
            meals: 'Breakfast & Starlit Dinner'
          },
          {
            dayNumber: 10,
            title: 'Diani Beach to Nairobi / International Departure',
            transfer: 'Flight 1 hr 10 mins to Nairobi Wilson / JKIA',
            narrative: 'Morning swim in the Indian Ocean followed by breakfast. Private transfer to Ukunda Airstrip for your flight to Nairobi, connecting with your international flight home.',
            wildlife: ['Morning shorebirds'],
            activities: 'Transfer to Nairobi & departure',
            accommodation: 'End of Signature Journey',
            meals: 'Breakfast Included'
          }
        ],
        inclusions: [
          'All internal flights (Nairobi → Amboseli → Mara → Diani → Nairobi)',
          'All National Park, Conservancy & Marine Park entrance fees',
          'Private 4x4 Land Cruiser with pop-up roof & licensed KPSGA driver-guide',
          '9 Nights luxury accommodation (tented bush camps & beachfront villa)',
          'All meals as specified in day-by-day itinerary',
          'Kisite Marine Park dhow cruise & snorkeling excursion',
          'AMREF Flying Doctors 24/7 medical evacuation coverage',
          'All airport/airstrip private transfers'
        ],
        exclusions: [
          'International flights to/from Kenya & eTA entry visa',
          'Optional Maasai Mara Hot Air Balloon Safari (~$450 pp)',
          'Driver-guide and lodge/villa staff gratuities',
          'Personal travel & medical insurance'
        ]
      }
    ],
    logistics: {
      flightTime: '1 hour 10 mins direct flight from Maasai Mara or Nairobi Wilson to Ukunda Airstrip (UKA)',
      roadTransfer: 'Airstrip is just 10–15 minutes from premier Diani beachfront boutique villas',
      marineLife: 'Humpback whale migration passes through July–October; whale sharks spotted Nov–February.',
      packingTip: 'Casual resort wear, reef-safe mineral sunscreen, swimwear, and a light linen shirt for evening coastal breezes.'
    }
  }
};

// ... DestinationModal Component;

export function getAllItineraries() {
  const all = [];
  Object.keys(DESTINATION_DETAILS).forEach(destKey => {
    const dest = DESTINATION_DETAILS[destKey];
    if (dest.itineraries) {
      dest.itineraries.forEach(itin => {
        all.push({
          ...itin,
          destKey,
          destName: dest.name,
          destImage: dest.image,
          destLocation: dest.location
        });
      });
    }
  });
  return all;
}

export function getDestination(destId) {
  return DESTINATION_DETAILS[destId] || DESTINATION_DETAILS.mara;
}
