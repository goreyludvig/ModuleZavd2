import Photo from "./model";

const photoControler = {
    //отримати весь список фото
    async get(req, res) {
        try {
            const list = await Photo.find(makeQueryObject (req.query));            
            res.send(list);
        } catch (error) {
            res.status(500).send(error);
        }

        function makeQueryObject(query){
            let result={};
            if(query.auth)
            result.$expr={"$eq":[{"$auth":"$author"},]};
        }
    },
    //отримати по id
    async getById(req, res) {
        try {
            const photo = await Photo.findById(req.params.id);
            if (!photo)
                res.status(404).send("Not found");
            res.send(photo);

        } catch (error) {
            res.status(500).send(error);
        }
    },
    async post (req, res) {
        try {
            const photo = new Photo(req.body);
            await photo.save();
            res.send(photo);

        } catch (error) {
            res.status(500).send(error);
        }
    }
};

export default photoControler;