function sendText() {
  const text = document.getElementById('textInput').value;
  fetch('https://your-backend-url.com/get-video', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  })
  .then(res => res.json())
  .then(data => {
    const videoPath = `videos/${data.video}`;
    document.getElementById('gestureVideo').src = videoPath;
  })
  .catch(err => console.error(err));
}
