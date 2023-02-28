document.getElementById("descargar").addEventListener("click", function () {
  const a4Width = 793.92;

  html2canvas(document.getElementById("curriculum"), { scale: 2 }).then(
    function (canvas) {
      const imgWidth = a4Width;
      const scaleFactor = imgWidth / canvas.width;
      const imgHeight = canvas.height * scaleFactor;

      let link = document.createElement("a");
      link.download = "Curriculumn.jpg";
      link.href = canvas.toDataURL("image/jpeg", 1.0);

      canvas.width = imgWidth;
      canvas.height = imgHeight;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  );
});
