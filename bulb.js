function turnoff() {
  let image = document.getElementById("Image");
  let button1=document.getElementById("bt1");
  let button2=document.getElementById("bt2");


  if (image.src.includes("ONbulb")) {
    image.src = "https://ittrainingclasses.in/OFFbulb.jpg";
    button1.disabled = false;
    button2.disabled = true;
  } else if (image.src.includes("OFFbulb")) {
    image.src = "https://ittrainingclasses.in/ONbulb.jpg";
    button1.disabled = true;
    button2.disabled = false;
  }
}
