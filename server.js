const express = require('express');
const dotenv = require('dotenv');
const app = express();
const catgoriesRoute = require('./routes/catgories');
dotenv.config({ path: './config/config.env' });

app.use("/api/v1/catgories", catgoriesRoute);
app.listen(
  process.env.PORT,
  () => console.log(`express сервер ачаалалтлаа хүлээнэ үү... ${process.env.PORT} дээр аслаа`)
);
app.get('/', (req, res) => { res.send('UniPray сервер амжилттай ажиллаж байна!'); });
