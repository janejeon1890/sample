// User resolvers

import User from "../../../server/models/User";

const resolvers = {
  Query: {
    getUsers: async () => await User.find({}).exec(),
    getAdid: (_, { adid }) => User.find({adid: adid})
  }
};

export default resolvers;

