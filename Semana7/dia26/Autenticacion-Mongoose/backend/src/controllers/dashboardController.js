module.exports.getDashboard = (req, res) => {
    res.status(200).json({ message: "Welcome to the protected dashboard!" });
};