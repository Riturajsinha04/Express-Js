 const Mobile = require("../models/mobile.js");

 const mobileController = {

    home: (req, res) => {
        res.render("home");
    },

    getMobiles: async (req, res) => {
        const allMobile = await Mobile.find();
        res.render("mobiles", { allMobile });
    },

    insertPage: (req, res) => {
        res.render("form");
    },

    createMobile: async (req, res) => {
        await Mobile.create(req.body);
        res.redirect("/getdata");
    },

    editPage: async (req, res) => {
        const data = await Mobile.findById(req.params.userid);
        res.render("edit", { data });
    },

    updateMobile: async (req, res) => {
        await Mobile.findByIdAndUpdate(req.params.userid, req.body, {
            new: true
        });

        res.redirect("/getdata");
    },

    deleteMobile: async (req, res) => {
        await Mobile.findByIdAndDelete(req.params.id);
        res.redirect("/getdata");
    },

    searchMobile: async (req, res) => {
        const searchBrand = req.query.brand;

        const allMobile = await Mobile.find({
            brand: { $regex: searchBrand, $options: "i" }
        });

        res.render("mobiles", { allMobile });
    }
};

module.exports = mobileController;