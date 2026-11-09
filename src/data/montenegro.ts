import type { TextRun } from './richText';

interface MontenegroContent {
  intro: TextRun[][];
  reasons: TextRun[][];
  practical: { title: string; paragraphs: TextRun[][]; orderedItems?: TextRun[][] }[];
  closing: TextRun[];
}

// Source: Miért épp Montenegró_aloldal.docx, retrieved 2026-11-09.
// Preserve the supplied copy; factual questions are tracked privately before publication.
export const montenegroContent: MontenegroContent = {
  "intro": [
    [
      {
        "text": "Montenegró a drámai tájak és tenger találkozása. Ahol a fekete hegyek a sós Adriáig futnak, miközben körbe ölelik az édesvízi Skadar-tavat, a gyomrukban megannyi barlangot rejtenek,  égig érő ormaikon pedig templomokkal áldoznak."
      }
    ],
    [
      {
        "text": "Montenegró egy igazán kis ország. Területe majd hétszer ráférne Magyarországéra,  viszont lépten-nyomon természeti, történeti és építészeti látványosságokat kínál. Adjon neki egy vagy két hetet, hogy bemutatkozhasson. Élvezze ki aktív és passzív pihenésre egyaránt alkalmas adottságait. Hagyja, hogy az Adria közelsége lelassítsa, majd a hegyek attrakciói – mint a túraútvonalak, vagy a Kotori bobpálya – adrenalinnal töltsék fel, a kulináris élmények pedig elcsavarják a fejét."
      }
    ],
    [
      {
        "text": "Nézzen szét az oldalamon, és biztos vagyok benne, hogy Montenegró, a fekete hegyek országa felkerül a bakancslistájára. Én várni fogom a vendégeim között!",
        "bold": true
      }
    ]
  ],
  "reasons": [
    [
      {
        "text": "Repülővel kényelmesen mindössze egy óra az út Budapestről, így viszont kimarad az élmények közül az a festői útvonal, amely sok autós szerint "
      },
      {
        "text": "Európa egyik legszebb road trip-je",
        "bold": true
      },
      {
        "text": ". Ön dönt!"
      }
    ],
    [
      {
        "text": "Érkezzen repülővel, autóval vagy csoportosan busszal, az országba történő belépéshez "
      },
      {
        "text": "elég lesz az érvényes kártya formájú személyi igazolvány",
        "bold": true
      },
      {
        "text": " is. Ugyanúgy elfogadják a határon és más ellenőrzésnél, mint az útlevelet. Fontos, hogy az okmányoknak a beutazástól számítva még legalább 90 napig érvényesnek kell lenniük! Az aktuális beutazási információk a konzuli oldalon érhetők el: "
      },
      {
        "text": "KONZULI SZOLGÁLAT OLDALA",
        "href": "https://konzinfo.mfa.gov.hu/utazasi-tanacsok-orszagonkent/montenegro"
      },
      {
        "text": "."
      }
    ],
    [
      {
        "text": "A "
      },
      {
        "text": "hivatalos fizetőeszköz az Euro",
        "bold": true
      },
      {
        "text": ", így nem szükséges a vakáció végén a megmaradt pénz átváltásával törődni, hiszen az bármely uniós országban használható lesz. De nem feltétlenül szükséges sok készpénz, ugyanis az országban a legtöbb nemzetközi típusú bankkártyát elfogadják."
      }
    ],
    [
      {
        "text": "Nincsenek távolságok",
        "bold": true
      },
      {
        "text": ": délelőtt dönthet a tenger mellett, délután pedig már a 2000 méteres hegyekben gyűjtheti az élményt. A tengerpartról alig 1-1,5 óra szerpentinezés, és máris fent lehet a Lovćen-hegyen vagy a Skadari-tó vadregényes panoráma-pontjain."
      }
    ],
    [
      {
        "text": "294 kilométer hosszú tengerpart",
        "bold": true
      },
      {
        "text": "ján minden nap más jellegű öblöt fedezhet fel: hétfőn a Budvai Riviéra pezsgő strandjait, kedden Kotor sziklás fjordjait, szerdán pedig Ulcinj végtelen, finomhomokos partját. És még bőven marad a változatosságból a hét többi napjára is."
      }
    ],
    [
      {
        "text": "A "
      },
      {
        "text": "delfinek",
        "bold": true
      },
      {
        "text": " kedvelik a montenegrói vizeket, gyakran bukkannak fel a kirándulóhajók társaságaként. A kristálytiszta vízben a tenger változatos világa a part mentén búvárkodva vagy sznorkelezve is felfedezhető."
      }
    ],
    [
      {
        "text": "A Skadar-tó madárrezervátuma, és vadregényes apró szigeteinek rejtett kincsei az "
      },
      {
        "text": "érintetlen természet",
        "bold": true
      },
      {
        "text": " megtapasztalásának örömével ajándékozzák meg. Remek evezős, vagy motoros vízitúra lehetőségek közül válogathat."
      }
    ],
    [
      {
        "text": "A "
      },
      {
        "text": "magyar vonatkozású helyek",
        "bold": true
      },
      {
        "text": " miatt kicsit úgy érezheti, hogy itt otthon van. Látogassa meg a Monarchia erődjeit Kotorban, vagy a Lovcen-hegyen, emlékezzen Petrovac partjainál a Zenta cirkálóra, és húzza meg a harangot a Szent Vasárnap-sziget kápolnáján az első világháborús hőseinkért."
      }
    ],
    [
      {
        "text": "Montenegróban garantáltan megdolgoztatja majd az ízlelőbimbóit. Élvezze a "
      },
      {
        "text": "kulináris kaland",
        "bold": true
      },
      {
        "text": "ot, a mediterrán és balkáni ízek ötvözetét. A kínálatban ott lesznek a friss tengeri halak, rákok és kagylók mellett a kiadós húsételek ("
      },
      {
        "text": "ćevapi, pljeskavica, karadjordjeva snicla"
      },
      {
        "text": "), valamint a helyi különlegességek. Kipróbálásra csábít a híres Njeguški pršut (ami egy helyi szárított, érlelt sonka), a friss és füstölt kecske ("
      },
      {
        "text": "kackavalj"
      },
      {
        "text": ")- és juhsajtok, no, meg persze a kiváló montenegrói vörösbor, a "
      },
      {
        "text": "Vranac"
      },
      {
        "text": ", vagy az édeskés gránátalmabor és -szörp, valamint a helyi jellegzetes szőlőpálinka a"
      },
      {
        "text": " loza"
      },
      {
        "text": "."
      }
    ]
  ],
  "practical": [
    {
      "title": "Iratok és beutazás",
      "paragraphs": [
        [
          {
            "text": "Úti okmány",
            "bold": true
          },
          {
            "text": ": Magyar állampolgárok érvényes új típusú kártyás személyi igazolvánnyal legfeljebb 30 napig, útlevéllel legfeljebb 90 napig tartózkodhatnak az országban vízummentesen."
          }
        ],
        [
          {
            "text": "Idegenforgalmi adó és regisztráció",
            "bold": true
          },
          {
            "text": ": Montenegróban kötelező a turisták regisztrációja, illetve az idegenforgalmi adó megfizetése. Utóbbi napi mértéke településenként is változhat. Hotelek esetén ezt a helyszínen intézzük, de magánszálláshelyen (apartmanban) általában a vendégnek kell elmennie a helyi turisztikai irodába ("
          },
          {
            "text": "Turistička organizacija"
          },
          {
            "text": "). Azt, hogy Ön hogyan szeretné rendezni, egyeztetem Önnek. Azt mindenképp érdemes tudni, hogy a regisztráció elmulasztása komoly bírságot vonhat maga után."
          }
        ]
      ]
    },
    {
      "title": "Helyi közlekedés",
      "paragraphs": [
        [
          {
            "text": "A terepviszonyok és a helyi sofőrök miatt óvatosabban kell vezetni, mint Magyarországon. Még "
          },
          {
            "text": "autópálya főszakaszokon is gyakori a 100 km/órás korlátozás, lakott területen kívül pedig általában 80 km/h",
            "bold": true
          },
          {
            "text": " a legmagasabb megengedett sebesség. A helyi autósok meglehetősen szabadon értelmezik a szabályokat. Az irányjelzőt szinte alig használják, a dudát viszont annál gyakrabban."
          }
        ],
        [
          {
            "text": "Az "
          },
          {
            "text": "autópálya ",
            "bold": true
          },
          {
            "text": "nem matricás rendszerű! Az A1-es gyorsforgalmi út egyes szakaszain (Smokovac–Mateševo) és a Sozina-alagútban is kapuknál kell fizetni (Euróban, készpénzzel vagy kártyával). A Lepetane–Kamenari komp szintén díj megfizetésével vehető igénybe."
          }
        ]
      ]
    },
    {
      "title": "Mobilhívás és internet",
      "paragraphs": [
        [
          {
            "text": "Nem érvényes az EU-s ingyenes adat- és hívásroaming!",
            "bold": true
          },
          {
            "text": " A magyar mobilszolgáltatók emelt díjas, külső zónás tarifákat számítanak fel"
          },
          {
            "text": ". ",
            "bold": true
          },
          {
            "text": "Érdemes figyelmesen elolvasni a szolgáltatói sms-eket és a nem kívánt extra szolgáltatásokat mielőbb kikapcsolni, hogy elkerüljük a jelentős többletköltséget."
          },
          {
            "text": " ",
            "bold": true
          },
          {
            "text": "Két megoldás van:"
          }
        ]
      ],
      "orderedItems": [
        [
          {
            "text": "Fizikai SIM",
            "bold": true
          },
          {
            "text": " vásárlása megérkezéskor a repülőtereken, vagy a helyi üzletekben. A kártyát a telefonba helyezve aktiválódik és gyakran nagy adatkeretet (akár 500GB, vagy 1TB) adnak 15–30 napra 15–25 euró körüli áron. (Figyelem: az MTel-nél regisztráció/személyazonosítás szükséges - vásárláskor elkérik úti okmányát.)"
          }
        ],
        [
          {
            "text": "Az "
          },
          {
            "text": "e-SIM",
            "bold": true
          },
          {
            "text": " praktikus megoldás, de a régebbi típusú telefonok nem támogatják, ezt érdemes vásárlás előtt ellenőrizni. Előre megvásárolható, online aktiválható. Több szolgáltató (pl. MTel) fix, magas adatcsomagot kínál, míg a "
          },
          {
            "text": "Revolut applikációban"
          },
          {
            "text": " sávos megoldással ez sokkal inkább egyéni igényre szabható."
          }
        ]
      ]
    },
    {
      "title": "Egészségügyi ellátás",
      "paragraphs": [
        [
          {
            "text": "Vészhelyzetben hívható általános telefonszám itt is a "
          },
          {
            "text": "112",
            "bold": true
          },
          {
            "text": "."
          }
        ],
        [
          {
            "text": "Az "
          },
          {
            "text": "egészségügyi ellátások igénybevétele",
            "href": "https://neak.gov.hu/felso_menu/lakossagnak/ellatas_kulfoldon/ellatas_az_eun_kivul/egeszsegugyi_ellatasok_igenybevetele_montenegroban"
          },
          {
            "text": " "
          },
          {
            "text": "utas- és balesetbiztosítás",
            "bold": true
          },
          {
            "text": "sal zökkenőmentes és sokrétű  – érdemes utazás előtt mindenképp megkötni. De a Magyarország és Montenegró közötti megállapodás értelmében az "
          },
          {
            "text": "Európai Egészségbiztosítási Kártya",
            "bold": true
          },
          {
            "text": " korlátozottan vagy sürgősségi esetben érvényesíthető, azonban ehhez is ajánlott kiváltani a "
          },
          {
            "text": "HU/CG 111",
            "bold": true
          },
          {
            "text": " jelű kétoldalú sürgősségi nyomtatványt. Ezt a magyar állampolgárok az utazást megelőzően ingyenesen igényelhetik a Nemzeti Egészségbiztosítási Alapkezelőnél (NEAK) vagy online az Ügyfélkapun keresztül."
          }
        ]
      ]
    }
  ],
  "closing": [
    {
      "text": "Kellemes utazást, sok élményt kívánok!",
      "bold": true
    }
  ]
};
