window.addEventListener("load", solve);

function solve() {
    // function solve() {
    //   const titleInputEl = document.getElementById("post-title");
    //   const categoryInputEl = document.getElementById("post-category");
    //   const contentInputEl = document.getElementById("post-content");
    //   const reviewUlEl = document.getElementById("review-list");
    //   const publishedUlEl = document.getElementById("published-list");
    //   const reviewMessage = document.getElementById("reviewed-msg");
    //   const uploadedMessage = document.getElementById("approved-msg");
    //   document.getElementById("clear-btn").addEventListener("click", clearPosts);
    //   const submitButtonEl = document
    //     .getElementById("publish-btn")
    //     .addEventListener("click", (ev) => {
    //       if (
    //         titleInputEl.value !== "" &&
    //         categoryInputEl.value !== "" &&
    //         contentInputEl.value !== ""
    //       ) {
    //         addPost(
    //           ev,
    //           titleInputEl.value,
    //           categoryInputEl.value,
    //           contentInputEl.value
    //         );
    //         clearInputFileds();
    //       }
    //     });
    //
    //   function addPost(ev, titleInputEl, categoryInputEl, contentInputEl) {
    //     // ev.preventDefault();
    //
    //     const li = elGenerator("li");
    //     li.setAttribute("class", "rpost");
    //     const article = elGenerator("article", "", li);
    //     elGenerator("h4", `${titleInputEl}`, article);
    //     elGenerator("p", `Category: ${categoryInputEl}`, article);
    //     elGenerator("p", `Content: ${contentInputEl}`, article);
    //
    //     const approveBtn = elGenerator("button", "Approve", li);
    //     approveBtn.setAttribute("class", "action-btn approve");
    //     // approveBtn.setAttribute("class", "approve");
    //     const editBtn = elGenerator("button", "Edit", li);
    //     editBtn.setAttribute("class", "action-btn edit");
    //     // editBtn.setAttribute("class", "edit");
    //
    //     reviewUlEl.appendChild(li);
    //
    //     if (reviewUlEl.children.length !== 0) {
    //       reviewMessage.style.display = "none";
    //     }
    //
    //     approveBtn.addEventListener("click", (ev) => approvePost(ev, article));
    //     editBtn.addEventListener("click", (ev) =>
    //       editPost(ev, titleInputEl, categoryInputEl, contentInputEl)
    //     );
    //   }
    //
    //   function editPost(ev, _titleInputEl, _categoryInputEl, _contentInputEl) {
    //     ev.target.parentNode.remove();
    //
    //     titleInputEl.value = _titleInputEl;
    //     categoryInputEl.value = _categoryInputEl;
    //     contentInputEl.value = _contentInputEl;
    //   }
    //
    //   function approvePost(ev, articleEl) {
    //     ev.target.parentNode.remove();
    //
    //     const publishedLiEl = document.createElement("li");
    //     publishedLiEl.className = "rpost";
    //     publishedLiEl.appendChild(articleEl);
    //     publishedUlEl.appendChild(publishedLiEl);
    //
    //     if (publishedUlEl.children.length !== 0) {
    //       uploadedMessage.style.display = "none";
    //     }
    //
    //     if (reviewUlEl.children.length == 0) {
    //       reviewMessage.style.display = "block";
    //     }
    //   }
    //
    //   function clearPosts() {
    //     // if (publishedUlEl.children.length > 0) {
    //     //   publishedUlEl.innerHTML = "";
    //     //   uploadedMessage.style.display = "block";
    //     // }
    //     let postsArray = Array.from(publishedUlEl.children);
    //     postsArray.forEach((post) => {
    //       post.remove();
    //     });
    //     if (publishedUlEl.children.length == 0) {
    //       uploadedMessage.style.display = "block";
    //     }
    //   }
    //
    //   function clearInputFileds() {
    //     titleInputEl.value = "";
    //     categoryInputEl.value = "";
    //     contentInputEl.value = "";
    //   }
    //
    //   function elGenerator(type, content, parent) {
    //     const element = document.createElement(type);
    //     element.textContent = content;
    //
    //     if (parent) {
    //       parent.appendChild(element);
    //     }
    //     return element;
    //   }
    // }
    // console.log('It works')

    //we will use Closure for accessing an elements upon the functions
    const inputs = {
        title: document.getElementById('post-title'),
        category: document.getElementById('post-category'),
        content: document.getElementById('post-content')
    }
    const lists = {
        review: document.getElementById('review-list'),
        published: document.getElementById('published-list')
    }

    //buttons
    document.getElementById('publish-btn').addEventListener('click', publish)
    document.getElementById('clear-btn').addEventListener('click', clear)

    //check if  objects are okay
    // console.log(inputs)
    // console.log(lists)

    function publish(e) {
        //read all input fields, validate it, attach it to the screen on first list and remove the value of the input fields.
        // console.log('publish clicked')
        e.preventDefault()
        let title = inputs.title.value;
        let category = inputs.category.value;
        let content = inputs.content.value;

        if (title === '' || category === "" || content === "") {
            return;
        }
        const li = document.createElement('li');
        li.className = 'rpost'
        li.innerHTML = `<article>
<h4>${title}</h4>
<p>Category: ${category}</p>
<p>Content: ${content}</p>
</article>
<button class="action-btn edit">Edit</button>
<button class="action-btn approve">Approve</button>
`

        const editBtn = li.querySelector('.edit')
        editBtn.addEventListener('click', edit)
        const approveBtn = li.querySelector('.approve')
        approveBtn.addEventListener('click', approve)


        lists.review.appendChild(li)
        inputs.title.value = ''
        inputs.category.value = ''
        inputs.content.value = ''

        function edit() {
            //remove from the first list and attach it again to input fields.
            // console.log('edit clicked!', title)
            inputs.title.value = title
            inputs.category.value = category
            inputs.content.value = content

            li.remove()

        }

        function approve() {
            // console.log('approve clicked!', title)
            lists.published.appendChild(li)
            editBtn.remove()
            approveBtn.remove();

            //remove from first list and attach it to the final list
            //remove action buttons

        }
    }


    function clear() {
        // console.log('clear clicked')
        lists.published.innerHTML = ''
        //clear all li elements from the final list -- innerHTML to empty string
    }
}
