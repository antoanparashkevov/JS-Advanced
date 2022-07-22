class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250
        };
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {

        quantity= +quantity

        articleModel = articleModel.toLowerCase()

        if (this.possibleArticles.hasOwnProperty(articleModel) === false) {
            throw new Error('This article model is not included in this gallery!')
        }

        const obj = this.listOfArticles.find(obj => obj.articleName === articleName && obj.articleModel === articleModel);

        if (obj !== undefined) {
                obj.quantity += quantity
        } else {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity
            })
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }


    inviteGuest(guestName, personality) {
        const findGuest = this.guests.find(obj => obj.guestName === guestName)
        if (findGuest !== undefined) {
            throw new Error(`${guestName} has already been invited.`)
        }

        //{guestName, points, purchaseArticle: default 0}.

        let points = 0;
        if (personality === "Vip") {
            points = 500;
        } else if (personality === "Middle") {
            points = 250;
        } else {
            points = 50;
        }

        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0
        })

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase()
        const article = this.listOfArticles.find(obj => obj.articleName === articleName && obj.articleModel === articleModel)
        const guest = this.guests.find(obj => obj.guestName === guestName)
        const neededPoints = Number(this.possibleArticles[articleModel])

        if (article === undefined) {//or !article
            throw new Error('This article is not found.')
        }
        if (article.quantity === 0) {
            return `The ${articleName} is not available.`
        }
        if (guest === undefined) {
            return `This guest is not invited.`
        } else {

            if (neededPoints > guest.points) {
                return `You need to more points to purchase the article.`
            } else {
                guest.points -= neededPoints;
                article.quantity-=1;
                guest.purchaseArticle+=1;
            }
        }
        return `${guestName} successfully purchased the article worth ${neededPoints} points.`

    }

    showGalleryInfo(criteria) {
        //{articleModel} - {articleName} - {quantity}
        if (criteria === 'article') {
            let result = "Articles information:\n";
            this.listOfArticles.forEach((obj) => result += `${obj.articleModel} - ${obj.articleName} - ${obj.quantity}\n`)

            return result.trim();
        }else{
            let result = "Guests information:\n";

            this.guests.forEach((obj) => result += `${obj.guestName} - ${obj.purchaseArticle}\n`)
            return result.trim();
        }

    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

