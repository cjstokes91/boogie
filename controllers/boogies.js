const Boogie = require('../models/boogie');

module.exports = {
    index,
    show,
    create,
    delete: deleteBoogie,
    update
};

async function index(req, res) {
    const boogies = await Boogie.find({});
    res.status(200).json(boogies);
}

async function show(req, res) {
    const boogie = Boogie.findById(req.params.id);
    res.status(200).json(boogie);
}

async function create(req, res) {
    try {
        const boogie = await Boogie.create(req.body);
        res.json(boogie);
    } catch (err) {
        res.status(400).json(err)
    }
}
// async function create(req, res) {
//     const boogie = await Boogie.create(req.body); 
//     console.log('hitting', boogie)
//     res.status(201).json(boogie);
// }

async function deleteBoogie(req, res) {
    const deletedBoogie = await Boogie.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedBoogie);
}

async function update(req, res) {
    const updateBoogie = Boogie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updateBoogie);
}
