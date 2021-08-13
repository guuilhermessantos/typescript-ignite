// const express = require("express") em JS 

import express from 'express' // em ts
import { createCourse } from './routes'

const app = express()

app.get("/", createCourse)

app.listen(3333)