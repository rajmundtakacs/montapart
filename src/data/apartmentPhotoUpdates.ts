// Client-supplied photos mapped to confirmed accommodation and floor folders.
export const apartmentPhotoUpdates: Record<string, { thumbnail?: string; units?: Record<number, string[]>; sharedImages?: string[] }> = {
  "sarga": {
    "thumbnail": "/images/apartmanok/sarga/kert/sarga-kert-01.jpg",
    "units": {
      "1": [
        "/images/apartmanok/sarga/ap1-friss/sarga-ap1-01.jpg",
        "/images/apartmanok/sarga/ap1-friss/sarga-ap1-02.jpg",
        "/images/apartmanok/sarga/ap1-friss/sarga-ap1-03.jpg",
        "/images/apartmanok/sarga/ap1-friss/sarga-ap1-04.jpg",
        "/images/apartmanok/sarga/ap1-friss/sarga-ap1-05.jpg"
      ]
    },
    "sharedImages": [
      "/images/apartmanok/sarga/kert/sarga-kert-01.jpg",
      "/images/apartmanok/sarga/kert/sarga-kert-02.jpg",
      "/images/apartmanok/sarga/kert/sarga-kert-03.jpg",
      "/images/apartmanok/sarga/kert/sarga-kert-04.jpg"
    ]
  },
  "sajat-strandos": {
    "thumbnail": "/images/apartmanok/aranypart/also-szint/aranypart-also-01.jpg",
    "units": {
      "1": [
        "/images/apartmanok/aranypart/also-szint/aranypart-also-01.jpg",
        "/images/apartmanok/aranypart/also-szint/aranypart-also-02.jpg",
        "/images/apartmanok/aranypart/also-szint/aranypart-also-03.jpg",
        "/images/apartmanok/aranypart/also-szint/aranypart-also-04.jpg",
        "/images/apartmanok/aranypart/also-szint/aranypart-also-05.jpg",
        "/images/apartmanok/aranypart/also-szint/aranypart-also-06.jpg"
      ],
      "2": [
        "/images/apartmanok/aranypart/felso-szint/aranypart-felso-01.jpg",
        "/images/apartmanok/aranypart/felso-szint/aranypart-felso-02.jpg",
        "/images/apartmanok/aranypart/felso-szint/aranypart-felso-03.jpg",
        "/images/apartmanok/aranypart/felso-szint/aranypart-felso-04.jpg",
        "/images/apartmanok/aranypart/felso-szint/aranypart-felso-05.jpg",
        "/images/apartmanok/aranypart/felso-szint/aranypart-felso-06.jpg",
        "/images/apartmanok/aranypart/felso-szint/aranypart-felso-07.jpg",
        "/images/apartmanok/aranypart/felso-szint/aranypart-felso-08.jpg"
      ]
    }
  },
  "petrovac": {
    "thumbnail": "/images/apartmanok/petrovac/friss/petrovac-friss-01.jpg",
    "units": {
      "1": [
        "/images/apartmanok/petrovac/friss/petrovac-friss-01.jpg",
        "/images/apartmanok/petrovac/friss/petrovac-friss-02.jpg",
        "/images/apartmanok/petrovac/friss/petrovac-friss-03.jpg",
        "/images/apartmanok/petrovac/friss/petrovac-friss-04.jpg",
        "/images/apartmanok/petrovac/friss/petrovac-friss-05.jpg",
        "/images/apartmanok/petrovac/friss/petrovac-friss-06.jpg",
        "/images/apartmanok/petrovac/friss/petrovac-friss-07.jpg",
        "/images/apartmanok/petrovac/friss/petrovac-friss-08.jpg",
        "/images/apartmanok/petrovac/friss/petrovac-friss-09.jpg",
        "/images/apartmanok/petrovac/friss/petrovac-friss-10.jpg",
        "/images/apartmanok/petrovac/friss/petrovac-friss-11.jpg"
      ]
    }
  }
};
