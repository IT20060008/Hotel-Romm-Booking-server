const router = require("express").Router();

let reservation = require("../models/reservation");


http://localhost:8070/reservation/add


//DATA adding

router.route("/add").post((req,res)=>{

    const Customer_name = req.body.Customer_name;
    const National_Identy_Card_No = req.body.National_Identy_Card_No;
    const Mobile = Number(req.body.Mobile);
    const Date = req.body.Date;

    const newReservation = new reservation({

        Customer_name,  
        National_Identy_Card_No,
        Mobile,
        Date
    })


    //Display

    newReservation.save().then(()=>{
        res.json("Received the DATA")
    }).catch((err)=>{
        console.log(err);
    })

})

//All user Reservation Data Retrieveing

router.route("/").get((req,res)=>{

    reservation.find().then((reservation)=>{
        res.json(reservation)
    }).catch((err)=>{
        console.log(err)
    })
})


http://localhost:8070/reservation/update/5fsadfsad54asdfsad


//Data Update

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {Customer_name, National_Identy_Card_No, Mobile, Date} = req.body; //d-structure

    const updateReservation = {
        Customer_name, 
        National_Identy_Card_No, 
        Mobile, 
        Date 
    }

    const update = await reservation.findByIdAndUpdate(userId, updateReservation).then(() =>{
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


http://localhost:8070/reservation/delete/5fsadfsad54asdfsad


//Data Delete

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await reservation.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

//One user Data Fetching


router.route("/get/:id").get(async (req, res) => {
    let userId = req.param.id;
    const user = await reservation.findById(userId).then((reservation) => {
        res.status(200).send({status: "User fetched", reservation}) 
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;