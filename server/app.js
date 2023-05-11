
//npm packages
import express from 'express';
import dotenv from 'dotenv';
import helmet from "helmet";
import cookieParser from "cookie-parser"
import compression from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';

//Custom Modules, Packages, Configs, Etc


const app = express();
app.use(express.json({limit: '10kb'}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
app.use(helmet());
app.use(compression());


export const PORT = process.env.PORT || 5000;
export default app;