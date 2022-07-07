const penyakit = require('../../model/penyakit');


class ApiPenyakit{
    constructor(){
        this.getpenyakit =  (req, res) => {
            penyakit.model.aggregate([
                {
                    $sort: {
                        "nama_penyakit":1
                    }
                } , 
                {
                    $match: {
                        "nama_penyakit": {
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
                
            ],(err, penyakit) => { 
                if (err)
                res.send(err);
            res.json(penyakit);
                }
            )
         };
        this.findpenyakit = (req, res) => {
            penyakit.model.findById(req.params.Id, (err, penyakit) => {
                if (err)
                    res.send(err);
                res.json(penyakit);
            });
        }
        this.addpenyakit = (req, res) => {
            if (!req.body.nama_penyakit) {
                res.json({
                    status: false,
                    message: 'Name is required'
                });
            }else{
            let newpenyakit = new penyakit.model(req.body);
            newpenyakit.save((err, penyakit) => {
                if (err)
                    res.send(err);
                res.json(penyakit);
            });
          }
        }
        this.updatepenyakit = (req, res) => {
            penyakit.model.findOneAndUpdate({ _id: req.params.Id }, req.body, { new: true }, (err, penyakit) => {
                if (err)
                    res.send(err);
                res.json(penyakit);
            });
        }
        this.deletepenyakit = (req, res) => {
            penyakit.model.deleteOne({ _id: req.params.Id }, (err, penyakit) => {
                if (err)
                    res.send(err);
                res.json({ message: 'Successfully deleted' });
            });
        }

      
    }

   
}

module.exports = new ApiPenyakit();
