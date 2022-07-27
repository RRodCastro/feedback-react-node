module.exports = (req, res, next) => {
    if (!req.user && res.user.credits < 1) {
        return res.status(403).send({error: 'You need at least one credit!'})
    }
    // Continue to the next middleware
    next();
 }