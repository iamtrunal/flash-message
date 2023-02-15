exports.flashMessage = async (req, res) => {
    try {

        const Message = req.flash('msg')
        res.render('pages/home', { Message })

    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}

exports.alertMessage = async (req,res) => {
    try {
        
        req.flash('msg', 'Your Subbmission Added');
        res.redirect('message');

    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        }) 
    }
}