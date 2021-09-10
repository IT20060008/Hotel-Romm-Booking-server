const router = require("express").Router();

let reservation = require("../models/reservation");

//localhost:8070/reservation/add

//DATA adding

http: router.route("/add").post((req, res) => {
  const {
    Customer_name,
    National_Identy_Card_No,
    Mobile,
    Payment_Option,
    Email,
    From_Date,
    To_Date,
  } = req.body; //d-structure

  const newReservation = new reservation({
    Customer_name,
    National_Identy_Card_No,
    Mobile,
    From_Date: new Date(From_Date).toISOString(),
    To_Date: new Date(To_Date).toISOString(),
    Payment_Option,
    Email,
  });

  //Display

  newReservation
    .save()
    .then((createdData) => {
      res.status(201).json({
        message: "Added data",
        data: createdData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//All user Reservation Data Retrieveing

router.route("/").get((req, res) => {
  reservation
    .find()
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/reservation/update/5fsadfsad54asdfsad

//Data Update

http: router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const {
    Customer_name,
    National_Identy_Card_No,
    Mobile,
    Payment_Option,
    Email,
  } = req.body; //d-structure

  const updateReservation = {
    Customer_name,
    National_Identy_Card_No,
    Mobile,
    From_Date: new Date(req.body.From_Date).toISOString(),
    To_Date: new Date(req.body.To_Date).toISOString(),
    Payment_Option,
    Email,
  };

  const update = await reservation
    .findByIdAndUpdate(userId, updateReservation)
    .then(() => {
      res.status(200).send({ status: "User updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

//localhost:8070/reservation/delete/5fsadfsad54asdfsad

//Data Delete

http: router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await reservation
    .findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

//One user Data Fetching

router.route("/get/:id").get(async (req, res) => {
  let userId = req.param.id;
  const user = await reservation
    .findById(userId)
    .then((reservation) => {
      res.status(200).send({ status: "User fetched", reservation });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
