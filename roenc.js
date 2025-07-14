const messages = [
  "Tu es plus forte que tu ne le crois ✨",
  " Je crois en toi toujours",
  "Tu vas y arriver, comme tu l'as toujours fait !",
  "Les heures dont tu n'as pas dormis ne sont pas gratuites!",
  "Tu seras une médecin incroyable, j’en suis sûr !",
  "Ne pense  jamais que tu es seule, je suis toujours la avec toi 💖",
  "لاَ يُكَلِّفُ اللّهُ نَفْسًا إِلاَّ وُسْعَهَا",
 
];

function nouveauMessage() {
  const index = Math.floor(Math.random() * messages.length);
  document.getElementById("message").textContent = messages[index];
}
