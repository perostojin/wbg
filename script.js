const messageInput = document.getElementById('message');
const characterCount = document.getElementById('character-count');

messageInput.addEventListener('input', () => {
  const currentLength = messageInput.value.length;
  characterCount.textContent = `${currentLength} av 500 tecken`;
});