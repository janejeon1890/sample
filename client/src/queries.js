import gql from "graphql-tag";

export const ADID_QUERY = gql`
query getAdid($adid: String) {
  User(adid: $adid){
    adid
    gender
    age
    job
    location {
        dailyMovingAverage
        home
        mostStayingArea
        office
    }
    history {
        dateInformation {
            monthly {
                month
                favorateTransitionService
                movingCarRate
                mostStayingAreaDay
                mostStayingAreaNight
                monthlyTimeline {
                    monthT0 {
                        location
                        coordinates
                    }
                    monthT1 {
                        location
                        coordinates
                    }
                    monthT2 {
                        location
                        coordinates
                    }
                    monthT3 {
                        location
                        coordinates
                    }
                    monthT4 {
                        location
                        coordinates
                    }
                    monthT5 {
                        location
                        coordinates
                    }
                    monthT6 {
                        location
                        coordinates
                    }
                    monthT7 {
                        location
                        coordinates
                    }
                    monthT8 {
                        location
                        coordinates
                    }
                    monthT9 {
                        location
                        coordinates
                    }
                    monthT10 {
                        location
                        coordinates
                    }
                    monthT11 {
                        location
                        coordinates
                    }
                    monthT12 {
                        location
                        coordinates
                    }
                    monthT13 {
                        location
                        coordinates
                    }
                    monthT14 {
                        location
                        coordinates
                    }
                    monthT15 {
                        location
                        coordinates
                    }
                    monthT16 {
                        location
                        coordinates
                    }
                    monthT17 {
                        location
                        coordinates
                    }
                    monthT18 {
                        location
                        coordinates
                    }
                    monthT19 {
                        location
                        coordinates
                    }
                    monthT20 {
                        location
                        coordinates
                    }
                    monthT21 {
                        location
                        coordinates
                    }
                    monthT22 {
                        location
                        coordinates
                    }
                    monthT23 {
                        location
                        coordinates
                    }
                }                            
            }        
            daily {
                date
                mostStayingAreaDay
                favorateTransitionService
                mostStayingAreaNight
                movingCarRate
                dailyTimeline {
                    dateT0 {
                        location
                        coordinates
                    }
                    dateT1 {
                        location
                        coordinates
                    }
                    dateT2 {
                        location
                        coordinates
                    }
                    dateT3 {
                        location
                        coordinates
                    }
                    dateT4 {
                        location
                        coordinates
                    }
                    dateT5 {
                        location
                        coordinates
                    }
                    dateT6 {
                        location
                        coordinates
                    }
                    dateT7 {
                        location
                        coordinates
                    }
                    dateT8 {
                        location
                        coordinates
                    }
                    dateT9 {
                        location
                        coordinates
                    }
                    dateT10 {
                        location
                        coordinates
                    }
                    dateT11 {
                        location
                        coordinates
                    }
                    dateT12 {
                        location
                        coordinates
                    }
                    dateT13 {
                        location
                        coordinates
                    }
                    dateT14 {
                        location
                        coordinates
                    }
                    dateT15 {
                        location
                        coordinates
                    }
                    dateT16 {
                        location
                        coordinates
                    }
                    dateT17 {
                        location
                        coordinates
                    }
                    dateT18 {
                        location
                        coordinates
                    }
                    dateT19 {
                        location
                        coordinates
                    }
                    dateT20 {
                        location
                        coordinates
                    }
                    dateT21 {
                        location
                        coordinates
                    }
                    dateT22 {
                        location
                        coordinates
                    }
                    dateT23 {
                        location
                        coordinates
                    }
                }
            }
            
        }
    }
  }

}
`


export const USER_QUERY = gql`
query{
  getUsers{
      adid
      gender
      age
      job
      location {
          dailyMovingAverage
          home
          mostStayingArea
          office
      }
      history {
          dateInformation {
              monthly {
                  month
                  favorateTransitionService
                  movingCarRate
                  mostStayingAreaDay
                  mostStayingAreaNight
                  monthlyTimeline {
                      monthT0 {
                          location
                          coordinates
                      }
                      monthT1 {
                          location
                          coordinates
                      }
                      monthT2 {
                          location
                          coordinates
                      }
                      monthT3 {
                          location
                          coordinates
                      }
                      monthT4 {
                          location
                          coordinates
                      }
                      monthT5 {
                          location
                          coordinates
                      }
                      monthT6 {
                          location
                          coordinates
                      }
                      monthT7 {
                          location
                          coordinates
                      }
                      monthT8 {
                          location
                          coordinates
                      }
                      monthT9 {
                          location
                          coordinates
                      }
                      monthT10 {
                          location
                          coordinates
                      }
                      monthT11 {
                          location
                          coordinates
                      }
                      monthT12 {
                          location
                          coordinates
                      }
                      monthT13 {
                          location
                          coordinates
                      }
                      monthT14 {
                          location
                          coordinates
                      }
                      monthT15 {
                          location
                          coordinates
                      }
                      monthT16 {
                          location
                          coordinates
                      }
                      monthT17 {
                          location
                          coordinates
                      }
                      monthT18 {
                          location
                          coordinates
                      }
                      monthT19 {
                          location
                          coordinates
                      }
                      monthT20 {
                          location
                          coordinates
                      }
                      monthT21 {
                          location
                          coordinates
                      }
                      monthT22 {
                          location
                          coordinates
                      }
                      monthT23 {
                          location
                          coordinates
                      }
                  }                            
              }        
              daily {
                  date
                  mostStayingAreaDay
                  favorateTransitionService
                  mostStayingAreaNight
                  movingCarRate
                  dailyTimeline {
                      dateT0 {
                          location
                          coordinates
                      }
                      dateT1 {
                          location
                          coordinates
                      }
                      dateT2 {
                          location
                          coordinates
                      }
                      dateT3 {
                          location
                          coordinates
                      }
                      dateT4 {
                          location
                          coordinates
                      }
                      dateT5 {
                          location
                          coordinates
                      }
                      dateT6 {
                          location
                          coordinates
                      }
                      dateT7 {
                          location
                          coordinates
                      }
                      dateT8 {
                          location
                          coordinates
                      }
                      dateT9 {
                          location
                          coordinates
                      }
                      dateT10 {
                          location
                          coordinates
                      }
                      dateT11 {
                          location
                          coordinates
                      }
                      dateT12 {
                          location
                          coordinates
                      }
                      dateT13 {
                          location
                          coordinates
                      }
                      dateT14 {
                          location
                          coordinates
                      }
                      dateT15 {
                          location
                          coordinates
                      }
                      dateT16 {
                          location
                          coordinates
                      }
                      dateT17 {
                          location
                          coordinates
                      }
                      dateT18 {
                          location
                          coordinates
                      }
                      dateT19 {
                          location
                          coordinates
                      }
                      dateT20 {
                          location
                          coordinates
                      }
                      dateT21 {
                          location
                          coordinates
                      }
                      dateT22 {
                          location
                          coordinates
                      }
                      dateT23 {
                          location
                          coordinates
                      }
                  }
              }
              
          }
      }
  }
}
`;

