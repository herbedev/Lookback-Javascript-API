var models = require("./server.js").models;

// Deleting Data
var filter = {
  where: {
    email: { like: "john" },
  }, // kind of like mysql where
  order: "id ASC",
  limit: 10,
  skip: 0,
  fields: {
    email: true,
  },
};

// models.Profile.findById(
//   "5e89126b65d1f63fd096a8ce",
//   { include: "Posts" },
//   (err, found) => {
//     console.log("Found?", err, found);
//     found.Posts.destroyAll({ date: { lte: new Date("2019-02-04") } });
//   }
// );

// var filter = {
//   where: {
//     email: { like: "john" },
//   }, // kind of like mysql where
// };
// models.Profile.destroyAll(filter.where, (err, found) => {
//   console.log("Found?", err, found);
// });
// models.Profile.destroyById(
//   "id",
//   (err,
//   (found) => {
//     console.log("Found?", err, found);
//   })
// );

// Creating Data
// models.Profile.findOrCreate({ name: "John1" }, (err, profile) => {
//   if (err) {
//     console.log("There was an error", err);
//   } else if (profile) {
//     profile.updateAttributes(
//       {
//         email: "john@gmail.com ",
//       },
//       (updateError, updated) => {
//         console.log("Saved?", updateError, updated);
//       }
//     );
//     // profile.email = "john@gmail.com";
//     // profile.save((ue,updated) => {
//     // console.log("Updated?", updated);
//     // });
//   }
// });
// models.Profile.upsert({id: "5e89126b65d1f63fd096a8ce name: "John1" }, (err, profile) => {
//     console.log("data?", err, profile);
//   });
// models.Profile.create({ name: "John1" }, (err, profile) => {
//     console.log("data?", err, profile);
//   });

// Saving Data
// var toSave = [
//   { name: "johntest1", email: "john1@testmail.com" },
//   { name: "johntest2", email: "john2@testmail.com" },
//   { name: "johntest3", email: "john3@testmail.com" },
//   { name: "johntest4", email: "john4@testmail.com" },
//   { name: "johntest5", email: "john5@testmail.com" },
//   { name: "johntest6", email: "john6@testmail.com" },
//   { name: "johntest7", email: "john7@testmail.com" },
//   { name: "johntest8", email: "john8@testmail.com" },
//   { name: "johntest9", email: "john9@testmail.com" },
// ];
// toSave.map((obj) => {
//   models.Profile.create(obj, (err, created) => {
//     console.log("Created?", created);
//   });
// });

// Finding Data
// var filter = {
//   where: {
//     email: { like: "john" },
//   }, // kind of like mysql where
//   order: "id ASC", // what to order data by 'prop direction'
//   limit: 10,
//   skip: 0,
//   fields: {
//     email: true,
//   },
// };
// models.Profile.findById("5e89126b65d1f63fd096a8ce", (err, found) => {
//     console.log("Found?", err, found);
//     found.destroy();
//   });
