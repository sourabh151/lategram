const express = require("express");
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()


const authenticationRouter = require("./routes/authenticate.js")
const authorize = require("./routes/authorize.js")
const messageRouter = require("./routes/messages.js");
const chatsRouter = require("./routes/chats.js");
const errorHandler = require("./middleware/errorHandler.js");
const notFound = require("./middleware/notFound.js");
const logger = require("./middleware/logger.js");

//cors
app.use(cors())
//bodyparser
app.use(express.json())

//logger
app.use(logger)

//authentication route
app.use("/authenticate", authenticationRouter)

//protected routes
app.use("/message", authorize, messageRouter)
app.use("/chats", authorize, chatsRouter)


app.use(errorHandler, notFound)


mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("App listening on port " + process.env.PORT);
  })
}).catch((e) => {
  console.log(e)
})
process.on("SIGINT", () => {
  mongoose.connection.close().then(() => {
    console.log("connection to database closed")
  }).catch((e) => console.log(e.message))
})


//const { ruruHTML } = require("ruru/server")
//const { buildSchema } = require("graphql")
//const { createHandler } = require("graphql-http/lib/use/express")
//require("dotenv").config()
//const app = express();
//
//const schema = buildSchema(`
//type Query{
//rollDice(numDice:Int!,sides:Int):[Int]
//frequency:[[Int!]!]
//}
//`)
//
//const root = {
//  r: [],
//  rollDice({ numDice, sides }) {
//    r = []
//    for (let i = 0; i < numDice; i++) {
//      r.push(Math.floor(Math.random() * (sides || 6)) + 1)
//    }
//    return r
//  },
//  frequency() {
//    const list = new Map();
//    for (e of r) {
//      if (list.has(e)) {
//        list.set(e, (list.get(e) + 1))
//      }
//      else {
//        list.set(e, 1)
//      }
//    }
//    return Array.from(list)
//  }
//}
//
//
//app.all("/graphql",
//  createHandler({
//    schema: schema,
//    rootValue: root
//  })
//)
