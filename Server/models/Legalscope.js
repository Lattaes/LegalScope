const mongoose = require('mongoose')

const LegalscopeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const LegalscopeModel = mongoose.model("legalscope-test", LegalscopeSchema)
module.exports = LegalscopeModel