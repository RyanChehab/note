const add_btn = document.getElementById('add')
// link counter to database
let counter = 0

// creating files when user clicks add
add_btn.addEventListener('click',function(){
    counter +=1;

    // get parent div
    const content = document.getElementById('content');
    // create div
    let div = document.createElement('div')
    div.classList.add("file", "flex","column", "ml-1", "align-center","mt-1","justify-center")
    const title = `Title ${counter}`
    // inject the div with dynamic content
    div.innerHTML = `<a href="notes.html?title=${encodeURIComponent(title)}&id=${counter}" class="flex column align-center" style=" text-decoration: none;"><i class="fas fa-file-alt add p-2 pc"></i><h1 class="file-title" id="file-title" name="file-title">Title ${counter}</h1></a>`
    // append the created div to the parent

    content.append(div)
    addPageToDataBaes(title)
})

function addPageToDataBaes(title){
    // sending a request to the php
    fetch('index.php',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, content: ''})
    })
    .then(response => response.json())
    .then(data => {
        console.log('Page added:',data);
    })
    .catch(error=>{
        console.error('Error adding page:',error);
    })
}