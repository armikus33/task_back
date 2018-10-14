var Quotes = require('../models/quotes');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    Quotes.find((err, result) =>{
		if(err) return console.log(err)
		res.json(result)
	})

};

exports.quotes_create = function (req, res) {
    console.log(req.body.quote)

    if(!req.body.quote){
    
        res.send('NO DATA')
    }else{
    
    var quotes = new Quotes(
        {
            name: req.body.name,
            quote: req.body.quote
        }
    );

    quotes.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Quote Created successfully')
    })
}

};