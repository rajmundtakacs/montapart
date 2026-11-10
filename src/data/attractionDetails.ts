import type { TextRun } from './richText';

export interface PhotoCredit {
  author: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  changes?: string;
}

export interface AttractionPlace {
  slug: string;
  name: string;
  category: 'varosok' | 'nevezetessegek';
  images: string[];
  photoCredit?: PhotoCredit;
  description: TextRun[];
  descriptionTitle?: string;
  details: { label: string; paragraphs: TextRun[][]; ordered?: boolean }[];
}

// Ági's shared Drive copy and named photos, retrieved 2026-11-09.
export const attractionPlaces: AttractionPlace[] = [
  {
    "slug": "budva",
    "name": "Budva",
    "category": "varosok",
    "images": [
      "/images/attractions/varosok/budva.jpg"
    ],
    "description": [
      {
        "text": "Budva",
        "bold": true
      },
      {
        "text": ":"
      },
      {
        "text": " Velencei stílusú, várfallal körülvett óvárosa "
      },
      {
        "text": "(Stari Grad)"
      },
      {
        "text": " sikátoros labirintusaival, hangulatos kávézóival és a tengerre néző Citadellájával azonnal elvarázsolja a látogatókat. Budva a balkáni nyár fővárosa: főszezonban a tengerparti sétányok megtelnek élettel, a világszínvonalú klubok és szabadtéri koncertek pedig felejthetetlen ritmust adnak az estéknek. Kikötőjében halászhajók és luxus jachtok egyaránt helyet kapnak. Apró köves, homokos strandjai ("
      },
      {
        "text": "Mogren, Ričardova Glava, Slovenska Plaža, Pizana)"
      },
      {
        "text": " a fiatalok kedvencei. A város a szíve és névadója a tőle délre folytatódó riviérának, a 35 kilométernyi kristálytiszta vizű adriai partszakasznak.  "
      }
    ],
    "details": []
  },
  {
    "slug": "petrovac",
    "name": "Petrovac na Moru",
    "category": "varosok",
    "images": [
      "/images/attractions/varosok/petrovac.jpg"
    ],
    "description": [
      {
        "text": "Petrovac na Moru",
        "bold": true
      },
      {
        "text": ":"
      },
      {
        "text": " "
      },
      {
        "text": "A balkán egyik legeurópaibb, a Budva Riviéra egyik legbájosabb, olajfaligetekkel és fenyvesekkel övezett, családias kisvárosa, amely vöröses homokú strandjaival és ikonikus, 16. századi velencei erődítményével "
      },
      {
        "text": "(Kastel Lastva)"
      },
      {
        "text": " hódít. A reggeli joggingolós, esti sétálós, kilátópontokkal tűzdelt erdei és tengerparti sétányain át a szomszédos települések strandjai is könnyen elérhetők. Adottságaival és szolgáltatásaival a kikapcsolódást, feltöltődést szolgálja.  A magyar utazók számára mély történelmi és spirituális jelentőséggel is bír: a parttal szemközti szigeten emelt kápolna zarándokhelye a hadtörténet és az első világháború iránt érdeklő turistáknak."
      }
    ],
    "details": []
  },
  {
    "slug": "sutomore",
    "name": "Sutomore",
    "category": "varosok",
    "images": [
      "/images/attractions/varosok/sutomore.jpg"
    ],
    "description": [
      {
        "text": "Sutomore:",
        "bold": true
      },
      {
        "text": " Az Adria pénztárcabarát tengerpartja, amely a magyar utazónak közvetlenül és gyorsan elérhető autóval vagy akár vonattal is. A majd két km hosszú, homokos, aprókavicsos központi strandja sétányával együtt a kisváros legnyüzsgőbb negyede éjjel-nappal. A csendesebb partszakaszra vágyóknak menedéket nyújthat a zsongás elől a közeli Vörös strand ("
      },
      {
        "text": "Crvena Plaža"
      },
      {
        "text": "), a vadregényes, tiszta vizű "
      },
      {
        "text": "Štrbina Beach"
      },
      {
        "text": " és a magyarok által csak Alagút Strandként emlegetett "
      },
      {
        "text": "Devchen Plaza"
      },
      {
        "text": ". A város világszerte híres kétoltáros templomairól – ilyen a Szent Péter templom is –, amelyek a katolikus és az ortodox hívők évszázados békés együttélésének a szimbólumai. Sutomore a 19. században az Osztrák–Magyar Monarchia legdélebbi csücske, határállomása volt. Erre emlékeztet a város feletti "
      },
      {
        "text": "Golo brdo"
      },
      {
        "text": " dombon álló "
      },
      {
        "text": "Tabija"
      },
      {
        "text": " erőd, amelynek romjai tökéletes helyszínt kínálnak a romantikus naplementékhez."
      }
    ],
    "details": []
  },
  {
    "slug": "bar",
    "name": "Bar / Stari Bar",
    "category": "varosok",
    "images": [
      "/images/attractions/varosok/bar.jpg"
    ],
    "description": [
      {
        "text": "Bar/Stari Bar:",
        "bold": true
      },
      {
        "text": " ",
        "bold": true
      },
      {
        "text": "A tengerparti új Bar egy üzletekkel teli modern kikötőváros strandokkal és sétányokkal. A település egykor nem itt a parton, hanem 5 kilométerrel feljebb, a "
      },
      {
        "text": "Rumija-hegység"
      },
      {
        "text": " biztonságában virágzott, és romjaiban ma is gyönyörű turistalátványosság. Ó-Bar főkapujához egy hangulatos bazársor macskaköves útja vezet, amely üzleteivel, hoteljeivel, éttermeivel és kocsmácskáival lüktet, vibrál egész évben, de főleg a nyári szezonban. Átlépve az egykori városkapun, egy különleges időutazás veszi kezdetét a régészeti emlékek között."
      }
    ],
    "details": []
  },
  {
    "slug": "sveti-stefan",
    "name": "Sveti Stefan",
    "category": "varosok",
    "images": [
      "/images/attractions/varosok/sveti-stefan.jpg"
    ],
    "description": [
      {
        "text": "Sveti Stefan:",
        "bold": true
      },
      {
        "text": " Montenegró prémium arcának szimbóluma. A hajdani 15. századi halászfalu az ország legikonikusabb, legtöbbet fényképezett luxus úti célja, amely egy különleges, vörös tetős kőházakkal beépített apró földnyelven (tombolón) terül el a Budvai Riviérán. A 20. század közepén alakult át exkluzív szálloda-komplexummá a szomszédjában található "
      },
      {
        "text": "Miločer"
      },
      {
        "text": " kastéllyal együtt. Bár sokan megelégszenek a főútról készített, képeslapra illő panoráma fotójával – mondván, hogy a sziget úgyse látogatható –, mégis érdemes közelebb menni; egy sétát tenni a földnyelven és az egykori királyi rezidencia több hektáros botanikus kertjében, valamint strandolni a vörös homokos parton és csobbanni a türkizkék vízben."
      }
    ],
    "details": []
  },
  {
    "slug": "kotor",
    "name": "Kotor",
    "category": "varosok",
    "images": [
      "/images/attractions/varosok/kotor.jpg"
    ],
    "description": [
      {
        "text": "Kotor:",
        "bold": true
      },
      {
        "text": " Az öböl névadó települése az UNESCO Világörökség része, a természet, a kaland és a lenyűgöző panoráma ötvözete. Sikátorszerű velencei utcákkal, kabalamacskákkal, kávéházakkal és templomokkal csábít. Aki nem szeppen meg 1350 lépcsőfoktól, az mindenképp hódítsa meg a hegyoldalba épült"
      },
      {
        "text": " San Giovanni "
      },
      {
        "text": "erődöt. A város határában található "
      },
      {
        "text": "Kotor Cable Car",
        "href": "https://www.kotorcablecar.me"
      },
      {
        "text": " turisztikai attrakciói (bob, kabinos libegő, Aerobar torony és Falcon Fly felfüggesztett siklópálya) élményt és adrenalin löketet egyaránt kínálnak."
      }
    ],
    "details": []
  },
  {
    "slug": "herceg-novi",
    "name": "Herceg Novi",
    "category": "varosok",
    "images": [
      "/images/attractions/varosok/herceg-novi.jpg"
    ],
    "description": [
      {
        "text": "Herceg Novi:",
        "bold": true
      },
      {
        "text": " A Kotori-öböl bejáratánál, az "
      },
      {
        "text": "Orjen-hegy"
      },
      {
        "text": " lábánál fekvő település népszerű fesztiválok helyszíne. Óvárosa kis ékszerdobozként maga az elegancia. Remek kiindulópont hajós kirándulásokhoz, amelyek elhagyott tengeralattjáró bázisokkal, a Kék Barlang "
      },
      {
        "text": "(Plava špilja"
      },
      {
        "text": ") és a Mamula-sziget bemutatásával kápráztatják el a turistákat."
      }
    ],
    "details": []
  },
  {
    "slug": "perast",
    "name": "Perast",
    "category": "varosok",
    "images": [
      "/images/attractions/varosok/perast.jpg"
    ],
    "description": [
      {
        "text": "Perast",
        "bold": true
      },
      {
        "text": ":"
      },
      {
        "text": " Apró, csendes barokk ékszerdoboz a Kotori-öböl közepén. Szűk utcás óvárosában 16 különböző templom áll. Ezek közül a leghíresebb a Szent Miklós-templom, amely az 55 méter magas, látogatható harangtornyával a legmagasabb épület az egész Kotori-öbölben. Perast kőpalotákkal és pálmákkal szegélyezett tengerparti sétányáról indulnak a kishajók az ország egyetlen mesterséges szigetéhez, a híres templommal ékeskedő Sziklák Miasszonyához "
      },
      {
        "text": "(Gospa od Škrpjela)"
      },
      {
        "text": "."
      }
    ],
    "details": []
  },
  {
    "slug": "cetinje",
    "name": "Cetinje",
    "category": "varosok",
    "images": ["/images/attractions/varosok/cetinje.jpg"],
    "description": [
      {
        "text": "Cetinje:",
        "bold": true
      },
      {
        "text": " ",
        "bold": true
      },
      {
        "text": "A "
      },
      {
        "text": "Lovćen"
      },
      {
        "text": " lábánál, 670 méteres magasságban fekvő régi királyi főváros az ország szuverenitásának és kulturális örökségének dacos bástyája, egy igazi  kifinomult európai központ. "
      },
      {
        "text": "Cetinje"
      },
      {
        "text": " hűvösebb hegyi levegőjével, platánokkal szegélyezett sétálóutcáival és lenyűgöző építészetével kiváló egy napos úticél azok számára, akik az autentikus Montenegrót keresik. Kolostora olyan felbecsülhetetlen ereklyéket őriz, mint Keresztelő János jobb keze és a Szent Kereszt egy darabja. A rendházzal szemben található a középkori várra hasonlító "
      },
      {
        "text": "Biljárda, "
      },
      {
        "text": "II. Petar Petrović-Njegoš egykori rezidenciája, amelynek elnevezése az ország első biliárdasztalára utal. Az épület kiállításai a legendás uralkodónak állítanak emléket. A dinasztia másik rezidenciája a városban az elegáns Kék Palota volt, amely ma is az elnök hivatalos székhelyeként szolgál."
      }
    ],
    "details": []
  },
  {
    "slug": "njegusi",
    "name": "Njeguši",
    "category": "varosok",
    "images": [
      "/images/attractions/varosok/njegusi.jpg"
    ],
    "description": [
      {
        "text": "Njegusi",
        "bold": true
      },
      {
        "text": ":"
      },
      {
        "text": " A sokak által csak „sonkafalva”-ként emlegetett település a húsimádók számára maga a mennyország. A falakon szó szerint százával lógnak a 6-8 kilósra érlelt egész sonkák, amelyek különleges ízét a tengeri és hegyi levegő találkozása, valamint a bükkfafüst keveréke adja, és nem kevesebb, mint egy éves érleléssel, szigorú előírás szerint készülnek. A szabályok még azt is kikötik, hogy november 15. és február 15. között végezhető a füstölésük. “Sonkafalva” egy Kotor feletti fennsíkon fekszik, ahova lélegzetelállító szerpentin visz fel. Rajta autózni szintén az élmény része."
      }
    ],
    "details": []
  },
  {
    "slug": "rustovo-kolostor",
    "name": "Rustovo-kolostor",
    "descriptionTitle": "Rustovo-kolostor (Manastir Rustovo)",
    "category": "nevezetessegek",
    "images": [
      "/images/attractions/nevezetessegek/rustovo-kolostor.jpg"
    ],
    "description": [
      {
        "text": "Rustovo-kolostor",
        "bold": true
      },
      {
        "text": " ",
        "bold": true
      },
      {
        "text": "(Manastir Rustovo)"
      },
      {
        "text": " Montenegró festői hegyeinek rejtett gyöngyszeme, csendes környezetével és varázslatos hangulatával azonnal elvarázsolja a látogatókat.\n\nA zárdaként működő komplexum nemcsak spirituális menedék, hanem igazi kuriózum is, ugyanis ebben a gyönyörű környezetben – a Nursiai Szent Benedek-kápolna mellett – a Romanov cári család emlékére emelt, hangulatos orosz fatemplom is megtalálható.\n\nA kolostor híres, csodatevő ikonjai különleges titkokat őriznek: az egyik szentkép színeinek intenzitása rejtélyes módon ciklikusan változik, míg egy másiknak gyógyító erőt tulajdonítanak.\n\nA belépés ingyenes, a látogatás emlékét pedig a helyi apácák által készített, kézműves termékek teszik teljessé."
      }
    ],
    "details": [
      {
        "label": "Megközelítés",
        "paragraphs": [
          [
            {
              "text": "Távolság"
            },
            {
              "text": " Petrovacból 14 km (🚗, 🚶)"
            }
          ],
          [
            {
              "text": "Sutomoréból 26 km (🚗)"
            }
          ]
        ]
      },
      {
        "label": "Tipp a látogatáshoz",
        "paragraphs": [
          [
            {
              "text": "Tipp a látogatáshoz:"
            },
            {
              "text": "  Különleges ajándéktárgyakat, ízletes teákat, szörpöket, mogyorókrémet, sőt kozmetikai termékeket is készítenek az apácák, érdemes tőlük vásárolni."
            }
          ]
        ]
      },
      {
        "label": "Amire érdemes figyelni",
        "paragraphs": [
          [
            {
              "text": "Amire érdemes figyelni: "
            },
            {
              "text": "A kolostor területén a szent helyekre vonatkozó öltözködési szabályok érvényesek (vállat és térdet takaró ruházat ajánlott)"
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "szent-vasarnap-sziget",
    "name": "Szent Vasárnap-sziget és kápolnája",
    "category": "nevezetessegek",
    "images": [
      "/images/attractions/nevezetessegek/szent-vasarnap-sziget.jpg"
    ],
    "description": [
      {
        "text": "Szent Vasárnap-sziget ",
        "bold": true
      },
      {
        "text": "(Sveta Nedjelja)"
      },
      {
        "text": " és kápolnája:",
        "bold": true
      },
      {
        "text": " A magyar turistának már-már kötelező meghúzni a Szent Vasárnap-sziget kápolnájának harangját mielőtt Petrovacból távozik. A parttól rövid hajóútra fekvő sziget nemcsak pazar rálátást nyújt az egykori halászfalura, hanem hadtörténeti szempontból is jelentős magyar emlékhely: 1914-ben a közelben süllyedt el az SMS Zenta osztrák–magyar cirkáló. A hősies csata túlélői – köztük 49 magyar – saját kezűleg építették fel a szigeten álló kis kápolnát, amelynek harangját megkongatni ma is felemelő élmény."
      }
    ],
    "details": [
      {
        "label": "Megközelítés",
        "paragraphs": [
          [
            {
              "text": "Távolság"
            },
            {
              "text": " a kikötőbe Petrovacból 0 km"
            }
          ],
          [
            {
              "text": "Sutomoréból 15 km (🚗)"
            }
          ]
        ]
      },
      {
        "label": "Tipp a látogatáshoz",
        "paragraphs": [
          [
            {
              "text": "Tipp a látogatáshoz:"
            },
            {
              "text": " Olyan öltözet, ami nem baj, ha vizes lesz a hajóút során. (🛥️)"
            }
          ]
        ]
      },
      {
        "label": "Amire érdemes figyelni",
        "paragraphs": [
          [
            {
              "text": "Amire érdemes figyelni: Érdemes "
            },
            {
              "text": "tájékozódni a hajós társaságok árairól és útvonaláról a vízi út megkezdése előtt."
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "stari-bar-regeszeti-park",
    "name": "Stari Bar régészeti park",
    "category": "nevezetessegek",
    "images": [
      "/images/attractions/nevezetessegek/stari-bar-regeszeti-park.jpg"
    ],
    "description": [
      {
        "text": "Stari Bar",
        "bold": true
      },
      {
        "text": " régészeti park:",
        "bold": true
      },
      {
        "text": " A hegyek ölelésébe épült Ó-Bár ma is régészeti feltárás alatt áll. Belépve a fallal körülölelt 2000 éves óváros kapuján elcsendesedik a világ és egy időutazás veszi kezdetét. Macskaköves ösvényei átvezetnek ősi boltívek alatt, összekötnek tornyokat, vagy éppen bevezetnek a föld alá hidegrázósan izgalmas, zegzugos kazamatákba. A parkban a régészeti és restaurálási munkák ma is zajlanak, ezek egyik eredménye a római kori vízvezeték egy rekonstruált szakasza. A romváros lenyűgöző kulturális olvasztótégely lehetett egykor: grandiózus templomait és palotáit nyüzsgő élet tölthette meg, amit virtuális valósággal idézhetnek meg a látogatók applikáció segítségével."
      }
    ],
    "details": [
      {
        "label": "Megközelítés",
        "paragraphs": [
          [
            {
              "text": "Távolság"
            },
            {
              "text": " Petrovacból 25 km  (🚗)"
            }
          ],
          [
            {
              "text": "Sutomoréból 13 km (🚗)"
            }
          ]
        ]
      },
      {
        "label": "Tipp a látogatáshoz",
        "paragraphs": [
          [
            {
              "text": "Tipp a látogatáshoz:"
            },
            {
              "text": " Szendviccsel nem kell készülni, a helyi konobák (éttermek) kínálata ugyanis nagyon csábító; és mindenképpen érdemes megkóstolni a gránátalma sört is."
            }
          ]
        ]
      },
      {
        "label": "Amire érdemes figyelni",
        "paragraphs": [
          [
            {
              "text": "Kényelmes cipő, mert a macskakő csúszhat és a régészeti park nagy területét is kényelmesebb lesz bejárni."
            }
          ],
          [
            {
              "text": "A naplemente hangulatossá teszi a romokat, érdemes délutánra időzíteni a látogatást."
            }
          ],
          [
            {
              "text": "Fentről haladj lefelé - az óramutató járásával megegyező irányba -, meghatározóbb az élmény."
            }
          ]
        ],
        "ordered": true
      }
    ]
  },
  {
    "slug": "szent-jovan-vladimir-templom",
    "name": "Szent Jovan Vladimir templom",
    "category": "nevezetessegek",
    "images": [
      "/images/attractions/nevezetessegek/szent-jovan-vladimir-templom.jpg"
    ],
    "description": [
      {
        "text": "Szent Jovan Vladimir templom",
        "bold": true
      },
      {
        "text": ": Bar katedrálisa Montenegró legnagyobb temploma, amely nemcsak aranyló tetejével, de méreteivel is felhívja magára a figyelmet. Magassága a kereszttel együtt 44,5 méter, míg alapterülete 2000 négyzetméter, és csaknem 1200-an férnek el benne. A híveket misére 12 harangjával hívja, amelyek közül a legnehezebb 800 kg. A templomnak nemcsak a külseje lenyűgöző. A szentélyt 4860 négyzetméternyi falfestmény és 1700 négyzetméteres mozaikpadló díszíti. 18 méter magas ikonosztáza gazdagon díszített."
      }
    ],
    "details": [
      {
        "label": "Megközelítés",
        "paragraphs": [
          [
            {
              "text": "Távolság"
            },
            {
              "text": " Petrovacból 21 km  (🚗)"
            }
          ],
          [
            {
              "text": "Sutomoréból 13 km (🚗)"
            }
          ]
        ]
      },
      {
        "label": "Tipp a látogatáshoz",
        "paragraphs": [
          [
            {
              "text": "Tipp a látogatáshoz:"
            },
            {
              "text": " A templom mellett működik egy szerény kis étterem, amit a tulajdonos maga üzemeltet. Minden nap friss, hàzias étel kerül a menüre - kedvező áron."
            }
          ]
        ]
      },
      {
        "label": "Amire érdemes figyelni",
        "paragraphs": [
          [
            {
              "text": "Amire érdemes figyelni: "
            },
            {
              "text": "A szent helyekre vonatkozó öltözködési szabályok érvényesek (vállat és térdet takaró ruházat ajánlott)."
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "rezevici-kolostor",
    "name": "Reževići kolostor",
    "category": "nevezetessegek",
    "images": [
      "/images/attractions/nevezetessegek/rezevici-kolostor.jpg"
    ],
    "description": [
      {
        "text": "Reževići kolostor:",
        "bold": true
      },
      {
        "text": " A középkori eredetű szerb ortodox kolostor egy igazi történelmi és spirituális oázis "
      },
      {
        "text": "Petrovac"
      },
      {
        "text": " és "
      },
      {
        "text": "Budva"
      },
      {
        "text": " között. Legendája szerint a 13. században az első szerb király, I. István "
      },
      {
        "text": "(Prvovenčani)"
      },
      {
        "text": " miután jót ivott a helyiek borából, megfogadta, hogy templomot emeltet a helyen. Az évszázadok során a kolostort többször is feldúlták és újjáépítették – akár a török támadások, akár az 1979-es pusztító földrengést miatt is. A falakat borító középkori és újkori freskók elvarázsolják a művészet kedvelőit, akárcsak a kolostor mögötti kilátópont tengeri panorámája."
      }
    ],
    "details": [
      {
        "label": "Megközelítés",
        "paragraphs": [
          [
            {
              "text": "Távolság"
            },
            {
              "text": " Petrovacból 2 km (🚶) vagy 4,5 (🚗)"
            }
          ],
          [
            {
              "text": "Sutomoréból 17 km (🚗)"
            }
          ]
        ]
      },
      {
        "label": "Tipp a látogatáshoz",
        "paragraphs": [
          [
            {
              "text": "Tipp a látogatáshoz:"
            },
            {
              "text": " Petrovacból kényelmes sétaút vezet a tengerparton a kolostorhoz."
            }
          ]
        ]
      },
      {
        "label": "Amire érdemes figyelni",
        "paragraphs": [
          [
            {
              "text": "Amire érdemes figyelni:  "
            },
            {
              "text": "A szent helyekre vonatkozó öltözködési szabályok érvényesek (vállat és térdet takaró ruházat ajánlott)."
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "gradiste-kolostor",
    "name": "Gradiste kolostor",
    "category": "nevezetessegek",
    "images": [
      "/images/attractions/nevezetessegek/gradiste-kolostor.jpg"
    ],
    "description": [
      {
        "text": "Gradiste kolostor: ",
        "bold": true
      },
      {
        "text": "Közel "
      },
      {
        "text": "Petrovachoz"
      },
      {
        "text": ", a "
      },
      {
        "text": "Buljarica"
      },
      {
        "text": " feletti hegyoldalban álló kolostoregyüttest az írott források 1305 óta említik. A Montenegrói Köztársaság védett kulturális és történelmi műemlékeinek listáján szereplő komplexum fő látnivalója a Szent Miklós-főtemplom, amelynek különleges beosztású ikonosztázán egyedülálló módon szamárfejjel ábrázolták Szent Kristófot. A legrégebbi és legkisebb Szent Szava-szentélyt gyönyörű, 17. századi freskók díszítik, míg a legmagasabban fekvő Boldogságos Szűz Mária-templomtól páratlan tengeri panoráma tárul elénk."
      }
    ],
    "details": [
      {
        "label": "Megközelítés",
        "paragraphs": [
          [
            {
              "text": "Távolság"
            },
            {
              "text": " Petrovacból 2,5 km (🚗, 🚶)"
            }
          ],
          [
            {
              "text": "Sutomoréból 12 km (🚗)"
            }
          ]
        ]
      },
      {
        "label": "Tipp a látogatáshoz",
        "paragraphs": [
          [
            {
              "text": "Tipp a látogatáshoz:"
            },
            {
              "text": " A helyszínen szerzetesi és egyházi kézműves tárgyak, illetve emléktárgyak vásárolhatók"
            }
          ]
        ]
      },
      {
        "label": "Amire érdemes figyelni",
        "paragraphs": [
          [
            {
              "text": "Amire érdemes figyelni: "
            },
            {
              "text": "A kolostor területén a szent helyekre vonatkozó öltözködési szabályok érvényesek (vállat és térdet takaró ruházat ajánlott)."
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "san-giovanni-erod",
    "name": "San Giovanni erőd",
    "category": "nevezetessegek",
    "images": [
      "/images/attractions/nevezetessegek/san-giovanni-erod.jpg"
    ],
    "description": [
      {
        "text": "San Giovanni erőd:",
        "bold": true
      },
      {
        "text": " ",
        "bold": true
      },
      {
        "text": "Kotor középkori óvárosa mögött meredeken emelkedő Szent János erőd az a hely, ahol a történelem találkozik a lélegzetelállító panorámával. A fellegvár évszázadokon át védte a várost a hódítóktól, ma pedig a város hódítja vele az ide érkező vendégeket. Nappal robosztus látványa, éjjel kivilágított könnyed sziluettje vonzza a tekintetet a kikötőből. Felfelé haladva – a majd 1350 lépcsőfok leküzdése közben – a háztetők, a Szent György templom tornya és a tenger kékje olyan látványt nyújt, mintha egy élő képeslapba csöppent volna a turista."
      }
    ],
    "details": [
      {
        "label": "Megközelítés",
        "paragraphs": [
          [
            {
              "text": "Távolság"
            },
            {
              "text": " (Kotorba) Petrovacból 40 km (🚗)"
            }
          ],
          [
            {
              "text": "Sutomoréból 53 km (🚗)"
            }
          ],
          [
            {
              "text": "Kotor- San Giovanni erőd (hegytető) 1,3 (🚶)"
            }
          ]
        ]
      },
      {
        "label": "Tipp a látogatáshoz",
        "paragraphs": [
          [
            {
              "text": "Tipp a látogatáshoz:"
            },
            {
              "text": " A hegyoldalban nincs árnyék, érdemes kora reggel indulni kényelmes cipőben és vízzel felszerelkezve."
            }
          ]
        ]
      },
      {
        "label": "Amire érdemes figyelni",
        "paragraphs": [
          [
            {
              "text": "Amire érdemes figyelni: "
            },
            {
              "text": "Az erőd látogatásáért – vagy viccesen a lépcsős edzésért – belépőjegyet kell fizetni. A városban nehéz a parkolás, a legtöbb belvárosi parkoló fizetős és zsúfolt."
            }
          ]
        ]
      }
    ]
  },
  {
    "slug": "haj-nehaj",
    "name": "Haj-Nehaj erőd és Tabija alvár",
    "category": "nevezetessegek",
    "images": [
      "/images/attractions/nevezetessegek/haj-nehaj.jpg"
    ],
    "description": [
      {
        "text": "Haj-Nehaj erőd és Tabija alvár",
        "bold": true
      },
      {
        "text": ": Sutomore közvetlen szomszédságában a sziklatetőn magasodik a Haj-Nehaj erődrendszer, amely lenyűgöző panorámával és izgalmas történelmi titkokkal várja a látogatókat. A legenda szerint a bevehetetlenségét madáráldozattal akarták biztosítani, de az egy ‘Nehaj’ hangot kiadva elröppent. Az erődítmény két jól elkülöníthető részének meglátogatása eltérő edzettséget igényel: a könnyebben megközelíthető, az Osztrák–Magyar Monarchia idejéből is emlékeket őrző "
      },
      {
        "text": "Tabija",
        "bold": true
      },
      {
        "text": " alvár gyalogosan akár tíz perc alatt elérhető, míg a magasabban fekvő "
      },
      {
        "text": "Nehaj",
        "bold": true
      },
      {
        "text": " megtekintése bő negyvenperces, izgalmasabb túrát igényel. A várról a legelső írásos feljegyzés 1550-ből származik, bár leletek bizonyítják, hogy már a 13. században is állt a vár; sőt, már korábban is lakott volt, hisz' a Római Birodalom idejéről is találtak leleteket a domb oldalában."
      }
    ],
    "details": [
      {
        "label": "Megközelítés",
        "paragraphs": [
          [{ "text": "Petrovacból Tabija 12 km (🚗+🚶), Nehaj erőd 13,5 km (🚗+🚶)." }],
          [{ "text": "Sutomoréból Tabija 800 m (🚶), Nehaj erőd 3 km (🚗+🚶)." }]
        ]
      },
      {
        "label": "Tipp a látogatáshoz",
        "paragraphs": [
          [{ "text": "Egyik látnivalóhoz sem vezet autóút végig, így gyaloglással számolni kell. Ezért érdemes túracipőben nekivágni a felfedezésnek – főként Nehaj esetében." }]
        ]
      },
      {
        "label": "Amire érdemes figyelni",
        "paragraphs": [
          [{ "text": "Főként Nehaj meghódításához kell némi edzettség a meredeken emelkedő hegyoldalban." }]
        ]
      }
    ]
  },
  {
    "slug": "lovcen-mauzoleum",
    "name": "Lovćen-mauzóleum",
    "category": "nevezetessegek",
    "images": ["/images/attractions/nevezetessegek/lovcen-mauzoleum-stock.jpg"],
    "photoCredit": {
      "author": "Ingo Mehling / Wikimedia Commons",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Njegos_mausoleum_frontside.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "changes": "méretezve, vágva"
    },
    "description": [],
    "details": []
  }
];
