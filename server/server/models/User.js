// mongoDB Schema

import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const UserSchema = new Schema({
  adid: String,
  gender : String,
  age : String,
  job : String,
  location: {
    dailyMovingAverage: Number, 
    home: String,
    mostStayingArea: String,
    office: String
  },
  history: {
    dateInformation:[
         {
            monthly:[
                {
                    month: String,
                    favorateTransitionService: String, 
                    movingCarRate: Number,
                    mostStayingAreaDay: String, 
                    mostStayingAreaNight: String,  
                    monthlyTimeline: {
                        monthT0: { location: String, coordinates: Array },
                        monthT1: { location: String, coordinates: Array },
                        monthT2: { location: String, coordinates: Array },
                        monthT3: { location: String, coordinates: Array },
                        monthT4: { location: String, coordinates: Array },
                        monthT5: { location: String, coordinates: Array },
                        monthT6: { location: String, coordinates: Array },
                        monthT7: { location: String, coordinates: Array },
                        monthT8: { location: String, coordinates: Array },
                        monthT9: { location: String, coordinates: Array },
                        monthT10: { location: String, coordinates: Array },
                        monthT11: { location: String, coordinates: Array },
                        monthT12: { location: String, coordinates: Array },
                        monthT13: { location: String, coordinates: Array },
                        monthT14: { location: String, coordinates: Array },
                        monthT15: { location: String, coordinates: Array },
                        monthT16: { location: String, coordinates: Array },
                        monthT17: { location: String, coordinates: Array },
                        monthT18: { location: String, coordinates: Array },
                        monthT19: { location: String, coordinates: Array },
                        monthT20: { location: String, coordinates: Array },
                        monthT21: { location: String, coordinates: Array },
                        monthT22: { location: String, coordinates: Array },
                        monthT23: { location: String, coordinates: Array }
                    }                    
                }
              ],
            daily:[
              {
                date: String,
                mostStayingAreaDay: String, 
                favorateTransitionService: String, 
                mostStayingAreaNight: String, 
                movingCarRate: Number,
                dailyTimeline: {
                  dateT0: { location: String, coordinates: Array },
                  dateT1: { location: String, coordinates: Array },
                  dateT2: { location: String, coordinates: Array },
                  dateT3: { location: String, coordinates: Array },
                  dateT4: { location: String, coordinates: Array },
                  dateT5: { location: String, coordinates: Array },
                  dateT6: { location: String, coordinates: Array },
                  dateT7: { location: String, coordinates: Array },
                  dateT8: { location: String, coordinates: Array },
                  dateT9: { location: String, coordinates: Array },
                  dateT10: { location: String, coordinates: Array },
                  dateT11: { location: String, coordinates: Array },
                  dateT12: { location: String, coordinates: Array },
                  dateT13: { location: String, coordinates: Array },
                  dateT14: { location: String, coordinates: Array },
                  dateT15: { location: String, coordinates: Array },
                  dateT16: { location: String, coordinates: Array },
                  dateT17: { location: String, coordinates: Array },
                  dateT18: { location: String, coordinates: Array },
                  dateT19: { location: String, coordinates: Array },
                  dateT20: { location: String, coordinates: Array },
                  dateT21: { location: String, coordinates: Array },
                  dateT22: { location: String, coordinates: Array },
                  dateT23: { location: String, coordinates: Array }
                }
              }
            ],
            weekly:[
              
            ]
          }
      ]
   }
});

export default mongoose.model("User", UserSchema);
