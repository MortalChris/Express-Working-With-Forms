const express = require('express');
const app = express();
const { body, validationResult } = require("express-validator");


// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
    res.render("genre_form", { title: "Create Genre" });
    };
