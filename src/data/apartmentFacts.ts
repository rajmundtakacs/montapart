import type { ApartmentUnit } from './apartments';
// Shared accommodation sheet snapshot, 2026-11-19.
// Aranypart sea distance comes from its current client description (20 m sea / 100 m beach); the sheet has no numeric distance.
// PetroVibes distance and the Rusztikus Panoráma dishwasher were confirmed on 2026-11-25.
export const apartmentFacts: Record<string, Record<number, Partial<ApartmentUnit>>> = {
  "sajat-strandos": {
    "1": {
      "capacity": 4,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "20 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "garázs",
      "bathrooms": 1
    },
    "2": {
      "capacity": 6,
      "bedrooms": 2,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "20 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen",
      "bathrooms": 1
    }
  },
  "utjeha-villa": {
    "1": {
      "bedrooms": 4,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "0 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "Mosogatógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen",
      "bathrooms": 4
    }
  },
  "lugas": {
    "1": {
      "capacity": 5,
      "bedrooms": 2,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "500 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen",
      "bathrooms": 1
    },
    "2": {
      "capacity": 3,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "500 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen",
      "bathrooms": 1
    },
    "3": {
      "capacity": 6,
      "bedrooms": 3,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "500 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen",
      "bathrooms": 1
    }
  },
  "branka": {
    "1": {
      "capacity": 5,
      "bedrooms": 2,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "110 m",
      "amenities": [
        "Klíma",
        "Mosogatógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "utca"
    },
    "2": {
      "capacity": 3,
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "110 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "utca"
    }
  },
  "medences-sajat-strandos": {
    "1": {
      "capacity": 2,
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "0 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "udvar"
    },
    "2": {
      "capacity": 3,
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "0 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "udvar"
    },
    "3": {
      "capacity": 4,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "0 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "udvar"
    },
    "4": {
      "capacity": 5,
      "bedrooms": 2,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "0 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "udvar",
      "bathrooms": 2
    }
  },
  "kek": {
    "1": {
      "capacity": 5,
      "bedrooms": 2,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "5 m",
      "amenities": [
        "Klíma",
        "Mosogatógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen"
    },
    "2": {
      "capacity": 4,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "5 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen"
    },
    "3": {
      "capacity": 3,
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "5 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen"
    }
  },
  "rusztikus": {
    "1": {
      "capacity": 5,
      "bedrooms": 2,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen"
    },
    "2": {
      "capacity": 4,
      "bedrooms": 2,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "amenities": [
        "Klíma",
        "Mosógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen"
    },
    "3": {
      "capacity": 3,
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen"
    },
    "4": {
      "capacity": 2,
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen"
    },
    "5": {
      "capacity": 6,
      "bedrooms": 3,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "amenities": [
        "Klíma",
        "Mosógép",
        "Mosogatógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen",
      "bathrooms": 2
    }
  },
  "viragos": {
    "1": {
      "capacity": 4,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "120 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "garázs 8 eur"
    },
    "2": {
      "capacity": 5,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "120 m",
      "amenities": [
        "Klíma",
        "Mosógép (kérésre)",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "2 db van"
    },
    "3": {
      "capacity": 3,
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "120 m",
      "amenities": [
        "Klíma",
        "Mosógép (kérésre)",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ]
    },
    "4": {
      "capacity": 5,
      "bedrooms": 2,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "120 m",
      "amenities": [
        "Klíma",
        "Mosógép (kérésre)",
        "Mosogatógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ]
    },
    "5": {
      "capacity": 2,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "120 m",
      "amenities": [
        "Klíma",
        "Mosógép (kérésre)",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ]
    }
  },
  "szololugas": {
    "1": {
      "capacity": 4,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "400 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "nem"
    }
  },
  "studio-sajat-part": {
    "1": {
      "capacity": "2-3",
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "0 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló"
      ],
      "parking": "fizetős"
    }
  },
  "del-tengeri": {
    "1": {
      "capacity": 4,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "50 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló"
      ],
      "parking": "igen",
      "terraceCount": 2
    },
    "2": {
      "capacity": 2,
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": false,
      "hasTerrace": true,
      "seaDistance": "50 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet"
      ],
      "parking": "igen"
    }
  },
  "petrovac": {
    "1": {
      "capacity": 5,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "200 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "Mosogatógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "utcán",
      "terraceCount": 2
    }
  },
  "barna": {
    "1": {
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "zárt"
    },
    "2": {
      "capacity": "2-3",
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "zárt"
    }
  },
  "natasa": {
    "1": {
      "capacity": "2-3",
      "bedrooms": 1,
      "hasLivingRoom": false,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "100 m",
      "amenities": [
        "Klíma",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "utcán"
    }
  },
  "inex": {
    "1": {
      "capacity": 5,
      "bedrooms": 2,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": false,
      "seaDistance": "0 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "Mosogatógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "garázs (fizetős)"
    }
  },
  "sarga": {
    "1": {
      "capacity": 4,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "150 m",
      "amenities": [
        "Klíma",
        "Mosógép (van lehetőség)",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen"
    },
    "2": {
      "capacity": 4,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "150 m",
      "amenities": [
        "Klíma",
        "Mosógép (van lehetőség)",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen"
    },
    "3": {
      "capacity": 4,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "150 m",
      "amenities": [
        "Klíma",
        "Mosógép (van lehetőség)",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "igen"
    },
    "4": {
      "capacity": 2,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "150 m",
      "amenities": [
        "Klíma",
        "Mosógép (van lehetőség)",
        "TV",
        "Internet",
        "Vízforraló"
      ],
      "parking": "igen"
    },
    "5": {
      "capacity": 3,
      "bedrooms": 1,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "150 m",
      "amenities": [
        "Klíma",
        "Mosógép (van lehetőség)",
        "TV",
        "Internet",
        "Vízforraló"
      ],
      "parking": "igen"
    }
  },
  "petrovibes": {
    "1": {
      "capacity": "5-6",
      "bedrooms": 2,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "500 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "Mosogatógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "nem",
      "bathrooms": 1
    }
  },
  "zold": {
    "1": {
      "capacity": 5,
      "bedrooms": 3,
      "hasLivingRoom": true,
      "hasKitchen": true,
      "hasTerrace": true,
      "seaDistance": "500 m",
      "amenities": [
        "Klíma",
        "Mosógép",
        "Mosogatógép",
        "TV",
        "Internet",
        "Vízforraló",
        "Mikró"
      ],
      "parking": "udvaron",
      "bathrooms": 1
    }
  }
};
