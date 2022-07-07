const kamar= require('../../model/kamar');


class ApiKamar {
    constructor() {
        // get all users
        this.getkamar = (req, res) => {
            kamar.model.aggregate([
                {
                    $sort: {
                        "nama_kamar":1
                    }
                } , 
                {
                    $match: {
                        "nama_kamar": {
                            $regex: req.query.search || '.*'
                        }
                    }
                    
                },   
                {
                    $skip: (parseInt(req.query.page) - 1) * parseInt(req.query.limit)  || 0
                },
                {
                    $limit: parseInt(req.query.limit) || 8,
                 
                },
                
            ],(err, kamar) => { 
                if (err)
                res.send(err);
            res.json(kamar);
                }
            )
        };
        //get user by id
        this.findKamar = (req, res) => {
            kamar.model.findById(req.params.Id, (err, kamar) => {
                if (err)
                    res.send(err);
                res.json(kamar);
            });
        }
        //addUser
        this.addKamar = (req, res) => {
            if ( !req.body.nama_kamar) {
                res.json({
                    status: false,
                    message: 'Please fill all fields'
                });
            }else{
            let newKamar = new kamar.model(req.body);
            newKamar.save((err, kamar) => {
                if (err)
                    res.send(err);
                res.json(kamar);
            });
          }
        };
        //update user
        this.updateKamar = (req, res) => {
            if (!req.body.nama_kamar, !req.body.lantai, !req.body.harga, !req.body.status) {
                res.json({
                    status: false,
                    message: 'Name is required'
                });
            }else{
            kamar.model.findOneAndUpdate({ _id: req.params.Id }, req.body, { new: true }, (err, kamar) => {
                if (err)
                    res.send(err);
                res.json(kamar);
            });
          }
        }
        //delete user
        this.deleteKamar = (req, res) => {
            kamar.model.deleteOne({ _id: req.params.Id }, (err, kamar) => {
                if (err)
                    res.send(err);
                res.json({ message: 'Successfully deleted' });
            });
        }
    }
}

module.exports = new ApiKamar();
