var username = document.getElementById('name');
    email = document.getElementById('email');
    title = document.getElementById('title');
    img = document.getElementById('img');
    content = document.getElementById('content');
    submit = document.getElementById('submit');
    blog = document.querySelector('.content');
    Date = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });


submit.addEventListener('click',function (e) {
    e.preventDefault()
    var imgURL = img.files.length > 0 ? URL.createObjectURL(img.files[0]) : "";
    var div = document.createElement('div')
    div.setAttribute('class','container')
    div.innerHTML =`<div>
        <img src='${imgURL}' style='max-width = 340px'/>
        <h4>${title.value}</h4>
        <p>${content.value}</p>
        <section>
          <div>${Date}</div>
          <div>${username.value}</div>
        </section>
      </div>`
      blog.appendChild(div);

    username.value = "";
    email.value = "";
    title.value = "";
    img.value = "";  // Clears selected file
    content.value = "";
})