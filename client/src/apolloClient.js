import ApolloCilent from "apollo-boost";

const client = new ApolloCilent({
    uri: "http://localhost:4000/graphql/" // graphQL API가 있는 서버 주소
})

export default client;