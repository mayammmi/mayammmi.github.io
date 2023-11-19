let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #7d7874;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #7d7874;">Soy una estudiante de ingeniería con ánimos de aprender todo lo que existe </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
