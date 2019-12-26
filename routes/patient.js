const router = require("express").Router();

const Patient = require("../model/Patient");

router.post("/create", async (req, res) => {
  console.log(req.body);
  const {
    id,
    name,
    age,
    gender,
    pastMedicalHistory,
    symptoms,
    reportData
  } = req.body;

  //Check if patient already exists
  const patientExist = await Patient.findOne({ id });
  if (patientExist) {
    return res.status(400).send("Patient already exists");
  }

  const today = new Date().toISOString();
  const patient = new Patient({
    id,
    name,
    age,
    gender,
    pastMedicalHistory,
    symptoms,
    reportData,
    createdAt: today
  });

  console.log("Before saving");

  try {
    console.log("Saving...");
    await patient.save();
    console.log("Saved!");

    res.status(200).json({
        patient
      });

  } catch (error) {
    res.status(400).send(error);
  }
});


 router.get('/get', async (req, res) => {
     try {
        //let patientData = mongoose.model("Patients");
        let patients;

        await Patient.find({}, (err, data) => {
            patients = data;
        })
        res.status(200).json({
            patients
          });

     } catch (error) {
         res.status(400).send(error);
     }
 });

module.exports = router;

//TODO: beingTreated and treating