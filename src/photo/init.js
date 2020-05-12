import Photo from "./model";

export default {
    async run(req, res) {
        try {
            await Photo.deleteMany({});
            const photos = [
                {

                    name: "Photo1",
                    comment: "Comment to Photo 1",
                    author: "Lidvig Gorey",
                    published: new Date("01-01-2020"),
                    tagsList: ["#photo", "#picture", "#photo1"],
                    likes: 120
                },
                {

                    name: "Photo2",
                    comment: "Comment to Photo 2",
                    author: "Lidvig Gorey",
                    published: new Date("02-01-2020"),
                    tagsList: ["#photo", "#picture", "#photo2"],
                    likes: 22
                },
                {

                    name: "Photo3",
                    comment: "Comment to Photo 3",
                    author: "Lidvig Gorey",
                    published: new Date("03-01-2020"),
                    tagsList: ["#photo", "#picture", "#photo3"],
                    likes: 56
                },
                {

                    name: "Photo4",
                    comment: "Comment to Photo 4",
                    author: "Lidvig Gorey",
                    published: new Date("04-01-2020"),
                    tagsList: ["#photo", "#picture", "#photo4"],
                    likes: 0
                },
                {

                    name: "Photo5",
                    comment: "Comment to Photo 5",
                    author: "Lidvig Gorey",
                    published: new Date("05-02-2020"),
                    tagsList: ["#photo", "#picture", "#photo5"],
                    likes: 19
                },
                {

                    name: "Photo6",
                    comment: "Comment to Photo 6",
                    author: "Lidvig Gorey",
                    published: new Date("06-02-2020"),
                    tagsList: ["#photo", "#picture", "#photo6"],
                    likes: 264
                }
            ];

            photos.forEach(async photo => await new Photo(photo).save());
        } catch (error) {
            console.log(error)
        }
    }
}
