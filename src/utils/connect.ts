// import mongoose, { Schema } from "mongoose";
// import config from "config";

// mongoose.Promise = global.Promise;

// const connectionOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   };

// const connectDBs = () => {
//   try {
//     const dbUrl_kyawsan = config.get<string>("dbUrl_kyawsan");
//     const dbUrl_chawsu = config.get<string>("dbUrl_chawsu");

//     const kyaw_san = mongoose.createConnection(dbUrl_kyawsan , connectionOptions);
//     const chaw_su = mongoose.createConnection(dbUrl_chawsu , connectionOptions);
//     console.log("db connected");

//     kyaw_san.on("connected", () => {
//         console.log("Connected to Kyaw San database");
//       });

//       chaw_su.on("connected", () => {
//         console.log("Connected to Chaw Su database");
//       });

//     return { kyaw_san, chaw_su };
//   } catch (error) {
//     console.error(`Error:${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDBs;

// import mongoose from "mongoose";
// import config from "config";

// mongoose.Promise = global.Promise;

// const connectionOptions: mongoose.ConnectOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
// };

// const connectDBs = () => {
//     try {
//         const dbUrl_kyawsan = config.get<string>("dbUrl_kyawsan");
//         const dbUrl_chawsu = config.get<string>("dbUrl_chawsu");

//         const kyaw_san = mongoose.createConnection(dbUrl_kyawsan, connectionOptions);
//         const chaw_su = mongoose.createConnection(dbUrl_chawsu, connectionOptions);

//         kyaw_san.on("connected", () => {
//             console.log("Connected to Kyaw San database");
//         });

//         chaw_su.on("connected", () => {
//             console.log("Connected to Chaw Su database");
//         });

//         return { kyaw_san, chaw_su };
//     } catch (error) {
//         console.error(`Error:${error.message}`);
//         process.exit(1);
//     }
// };

// export default connectDBs;

// import mongoose from "mongoose";
// import config from "config";

// mongoose.Promise = global.Promise;

// const connectionOptions: any = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// };

// const connectDBs = () => {
//   try {
//     const dbUrl_kyawsan = config.get<string>("dbUrl_kyawsan");
//     const dbUrl_chawsu = config.get<string>("dbUrl_chawsu");

//     const kyaw_san = mongoose.createConnection(
//       dbUrl_kyawsan,
//       connectionOptions
//     );
//     const chaw_su = mongoose.createConnection(dbUrl_chawsu, connectionOptions);

//     kyaw_san.on("connected", () => {
//       console.log("Connected to Kyaw San database");
//     });

//     chaw_su.on("connected", () => {
//       console.log("Connected to Chaw Su database");
//     });

//     return { kyaw_san, chaw_su };
//   } catch (error) {
//     console.error(`Error:${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDBs;

import mongoose from "mongoose";
import config from "config";

// mongoose.Promise = global.Promise;

const connectionOptions: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDBs = () => {
  try {
    const dbUrl_kyawsan = config.get<string>("dbUrl_kyawsan");
    const dbUrl_chawsu = config.get<string>("dbUrl_chawsu");

    const kyaw_san = mongoose.createConnection(
      dbUrl_kyawsan,
      connectionOptions
    );
    const chaw_su = mongoose.createConnection(dbUrl_chawsu, connectionOptions);

    kyaw_san.on("connected", () => {
      console.log("Connected to Kyaw San database");
    });

    chaw_su.on("connected", () => {
      console.log("Connected to Chaw Su database");
    });

    return { kyaw_san, chaw_su };
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

export default connectDBs;
