// GraphQL Schema

export default `
  type User {
    adid: String
    gender: String
    age: String
    job: String
    location: Location
    history: History
  }
  type Location {
    dailyMovingAverage: Int
    home: String
    mostStayingArea: String
    office: String
  }
  type History {
    dateInformation: [DateInformation]
  }
  type DateInformation {
    monthly: [Monthly]
    daily: [Daily]
    # weekly: [Weekly]
  }
  type Monthly {
    month: String
    favorateTransitionService: String
    movingCarRate: Float
    mostStayingAreaDay: String
    mostStayingAreaNight: String
    monthlyTimeline: MonthlyTimeline
  }
  type MonthlyTimeline {
    monthT0: MonthT0
    monthT1: MonthT1
    monthT2: MonthT2
    monthT3: MonthT3
    monthT4: MonthT4
    monthT5: MonthT5
    monthT6: MonthT6
    monthT7: MonthT7
    monthT8: MonthT8
    monthT9: MonthT9
    monthT10: MonthT10
    monthT11: MonthT11
    monthT12: MonthT12
    monthT13: MonthT13
    monthT14: MonthT14
    monthT15: MonthT15
    monthT16: MonthT16
    monthT17: MonthT17
    monthT18: MonthT18
    monthT19: MonthT19
    monthT20: MonthT20
    monthT21: MonthT21
    monthT22: MonthT22
    monthT23: MonthT23
  }
  type MonthT0 {
    location: String
    coordinates: [Float]
  }
  type MonthT1 {
    location: String
    coordinates: [Float]
  }
  type MonthT2 {
    location: String
    coordinates: [Float]
  }
  type MonthT3 {
    location: String
    coordinates: [Float]
  }
  type MonthT4 {
    location: String
    coordinates: [Float]
  }
  type MonthT5 {
    location: String
    coordinates: [Float]
  }
  type MonthT6 {
    location: String
    coordinates: [Float]
  }
  type MonthT7 {
    location: String
    coordinates: [Float]
  }
  type MonthT8 {
    location: String
    coordinates: [Float]
  }
  type MonthT9 {
    location: String
    coordinates: [Float]
  }
  type MonthT10 {
    location: String
    coordinates: [Float]
  }
  type MonthT11 {
    location: String
    coordinates: [Float]
  }
  type MonthT12 {
    location: String
    coordinates: [Float]
  }
  type MonthT13 {
    location: String
    coordinates: [Float]
  }
  type MonthT14 {
    location: String
    coordinates: [Float]
  }
  type MonthT15 {
    location: String
    coordinates: [Float]
  }
  type MonthT16 {
    location: String
    coordinates: [Float]
  }
  type MonthT17 {
    location: String
    coordinates: [Float]
  }
  type MonthT18 {
    location: String
    coordinates: [Float]
  }
  type MonthT19 {
    location: String
    coordinates: [Float]
  }
  type MonthT20 {
    location: String
    coordinates: [Float]
  }
  type MonthT21 {
    location: String
    coordinates: [Float]
  }
  type MonthT22 {
    location: String
    coordinates: [Float]
  }
  type MonthT23 {
    location: String
    coordinates: [Float]
  }

  type Daily {
    date: String
    favorateTransitionService: String
    movingCarRate: Float
    mostStayingAreaDay: String
    mostStayingAreaNight: String
    dailyTimeline: DailyTimeline
  }
  type DailyTimeline {
    dateT0: DateT0
    dateT1: DateT1
    dateT2: DateT2
    dateT3: DateT3
    dateT4: DateT4
    dateT5: DateT5
    dateT6: DateT6
    dateT7: DateT7
    dateT8: DateT8
    dateT9: DateT9
    dateT10: DateT10
    dateT11: DateT11
    dateT12: DateT12
    dateT13: DateT13
    dateT14: DateT14
    dateT15: DateT15
    dateT16: DateT16
    dateT17: DateT17
    dateT18: DateT18
    dateT19: DateT19
    dateT20: DateT20
    dateT21: DateT21
    dateT22: DateT22
    dateT23: DateT23
  }

  type DateT0 {
    location: String
    coordinates: [Float]
  }
  type DateT1 {
    location: String
    coordinates: [Float]
  }
  type DateT2 {
    location: String
    coordinates: [Float]
  }
  type DateT3 {
    location: String
    coordinates: [Float]
  }
  type DateT4 {
    location: String
    coordinates: [Float]
  }
  type DateT5 {
    location: String
    coordinates: [Float]
  }
  type DateT6 {
    location: String
    coordinates: [Float]
  }
  type DateT7 {
    location: String
    coordinates: [Float]
  }
  type DateT8 {
    location: String
    coordinates: [Float]
  }
  type DateT9 {
    location: String
    coordinates: [Float]
  }
  type DateT10 {
    location: String
    coordinates: [Float]
  }
  type DateT11 {
    location: String
    coordinates: [Float]
  }
  type DateT12 {
    location: String
    coordinates: [Float]
  }
  type DateT13 {
    location: String
    coordinates: [Float]
  }
  type DateT14 {
    location: String
    coordinates: [Float]
  }
  type DateT15 {
    location: String
    coordinates: [Float]
  }
  type DateT16 {
    location: String
    coordinates: [Float]
  }
  type DateT17 {
    location: String
    coordinates: [Float]
  }
  type DateT18 {
    location: String
    coordinates: [Float]
  }
  type DateT19 {
    location: String
    coordinates: [Float]
  }
  type DateT20 {
    location: String
    coordinates: [Float]
  }
  type DateT21 {
    location: String
    coordinates: [Float]
  }
  type DateT22 {
    location: String
    coordinates: [Float]
  }
  type DateT23 {
    location: String
    coordinates: [Float]
  }

  type Query {
    getAdid(adid: String!): [User]
    getUsers: [User]

    location: [Location]
    history: [History]
    dateInformation: [DateInformation]
    monthly: [Monthly]
    daily: [Daily]

    monthlyTimeline: [MonthlyTimeline]
    monthT0: [MonthT0]
    monthT1: [MonthT1]
    monthT2: [MonthT2]
    monthT3: [MonthT3]
    monthT4: [MonthT4]
    monthT5: [MonthT5]
    monthT6: [MonthT6]
    monthT7: [MonthT7]
    monthT8: [MonthT8]
    monthT9: [MonthT9]
    monthT10: [MonthT10]
    monthT11: [MonthT11]
    monthT12: [MonthT12]
    monthT13: [MonthT13]
    monthT14: [MonthT14]
    monthT15: [MonthT15]
    monthT16: [MonthT16]
    monthT17: [MonthT17]
    monthT18: [MonthT18]
    monthT19: [MonthT19]
    monthT20: [MonthT20]
    monthT21: [MonthT21]
    monthT22: [MonthT22]
    monthT23: [MonthT23]

    dailyTimeline: [DailyTimeline]
    dateT0: [DateT0]
    dateT1: [DateT1]
    dateT2: [DateT2]
    dateT3: [DateT3]
    dateT4: [DateT4]
    dateT5: [DateT5]
    dateT6: [DateT6]
    dateT7: [DateT7]
    dateT8: [DateT8]
    dateT9: [DateT9]
    dateT10: [DateT10]
    dateT11: [DateT11]
    dateT12: [DateT12]
    dateT13: [DateT13]
    dateT14: [DateT14]
    dateT15: [DateT15]
    dateT16: [DateT16]
    dateT17: [DateT17]
    dateT18: [DateT18]
    dateT19: [DateT19]
    dateT20: [DateT20]
    dateT21: [DateT21]
    dateT22: [DateT22]
    dateT23: [DateT23]
  }

`;
