function getArticleGenerator(articles) {
    const div = document.getElementById('content')//thanks to closure, we have access to the return function
    return function () {
        const firstArticle = articles.shift()//removes first element and store it into variable

        //these type of methods, if they don't find anything, it returns undefined
        if (firstArticle !== undefined) {
            const articleElement = document.createElement('article')
            articleElement.textContent = firstArticle;
            div.appendChild(articleElement)
        }
    }
}
