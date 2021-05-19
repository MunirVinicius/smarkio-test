const form = document.querySelector('form')
const converter = document.querySelector('textarea')
const loading = document.querySelector('#message')


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    loading.textContent = "Loading ..."
    const txt = converter.value;
    fetch("http://localhost:3000/convert", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        txt: `${txt}`,
        })
      })
    .then(async (response) => { 
      const data = await response.json();
      loading.textContent = '';
      const comments = document.querySelector('#comments');
      comments.innerHTML+=`
      <p>${txt}</p>
      <audio controls>
          <source src="/audios/${data.audio}" type="audio/wav">
      </audio>
      `
    });
})