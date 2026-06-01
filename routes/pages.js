const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/home", { title: "Home" });
});

router.get("/about-us", (req, res) => {
    res.render("pages/about-us", { title: "About Us" });
});

router.get("/contact-us", (req, res) => {
    res.render("pages/contact-us", { title: "Contact Us" });
});

router.get("/services/damp-survey", (req, res) => {
    res.render("pages/damp-survey");
});

router.get("/damp-survey", (req, res) => {
    res.render("pages/damp-survey");
});

router.get("/services/damp-proofing-services", (req, res) => {
    res.render("pages/damp-proofing");
});

router.get("/damp-proofing", (req, res) => {
    res.render("pages/damp-proofing");
});

router.get("/services/wet-rot-and-dry-rot-treatment", (req, res) => {
    res.render("pages/wet-dry-rot");
});

router.get("/wet-dry-rot", (req, res) => {
    res.render("pages/wet-dry-rot");
});

router.get("/services/structural-repairs", (req, res) => {
    res.render("pages/structural-repairs");
});

router.get("/structural-repairs", (req, res) => {
    res.render("pages/structural-repairs");
});

router.get("/services/pitched-roofing", (req, res) => {
    res.render("pages/pitched-roofing");
});

router.get("/pitched-roofing", (req, res) => {
    res.render("pages/pitched-roofing");
});

router.get("/services/flat-roofing", (req, res) => {
    res.render("pages/flat-roofing");
});

router.get("/flat-roofing", (req, res) => {
    res.render("pages/flat-roofing");
});

router.get("/services/i-beam-fitting-and-removal", (req, res) => {
    res.render("pages/i-beam-fitting");
});

router.get("/i-beam-fitting", (req, res) => {
    res.render("pages/i-beam-fitting");
});

router.get("/gallery", (req, res) => {
    res.render("pages/gallery");
});

router.get("/testimonials", (req, res) => {
    res.render("pages/testimonials");
});

router.get("/faq", (req, res) => {
    res.render("pages/faq");
});

router.get("/privacy-policy", (req, res) => {
    res.render("pages/privacy-policy");
});

router.get("/cookie-policy", (req, res) => {
    res.render("pages/cookie-policy");
});

router.get("/terms-and-conditions", (req, res) => {
    res.render("pages/terms");
});

module.exports = router;