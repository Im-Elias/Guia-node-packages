import express from "express";
import enviar from "../config/mailer.js";
import path from "path";
//para ejercicio 6
import Jimp from "jimp";

const router = express.Router();
const __dirname = path.resolve();

// Routes
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.get("/chao", (req, res) => {
  res.send("Hello Chao!");
});

router.get("/enviar", (req, res) => {
  const { to, subject, text } = req.query;
  enviar(to, subject, text);
  res.send("Email enviado!");
});

router.post("/form", (req, res) => {
  try {
    const { to, subject, text } = req.body;
    enviar(to, subject, text);
    res.send("Email enviado!");
  } catch (error) {
    console.log(error);
  }
});

//GUIA DIA 14 EJ 6
router.get("/imagen", async (req, res) => {
  res.setHeader("Content-Type", "image/png");
  const imagen = await Jimp.read(
    "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg"
  );
  await imagen
    .resize(300, Jimp.AUTO)
    .grayscale()
    .quality(60)
    .writeAsync("imagen.png");

  res.sendFile(__dirname + "/imagen.png");
});

export default router;
