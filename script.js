
const typed1 = new Typed("#el", {
    strings: ["Text Gradients", ""],
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 1000,
    backDelay: 2000,
    loop: false,
    showCursor: false,
    smartBackspace: false,
  });
  
  const typed2 = new Typed("#ment", {
    strings: ["Make your headlines stand out", ""],
    typeSpeed: 78,
    backSpeed: 20,
    startDelay: 1000,
    loop: false,
    showCursor: false,
    smartBackspace: false,
    onComplete: () => {
      document.body.classList.remove("bg-first");
      document.body.classList.add("bg-second");
  
      const typed3 = new Typed("#elem", {
        strings: ["Design is intelligence made visible", ""],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 1000,
        backDelay: 2000,
        loop: false,
        showCursor: false,
        smartBackspace: false,
      });
  
      const typed4 = new Typed("#te", {
        strings: [
          "Interaction design isn’t merely a matter of aesthetic choice; rather, it is based on an understanding of users and cognitive principles.",
          ""
        ],
        typeSpeed: 18,
        backSpeed: 20,
        startDelay: 1000,
        loop: false,
        showCursor: false,
        smartBackspace: false,
        onComplete: () => {
          document.body.classList.remove("bg-second");
          document.body.classList.add("bg-three");
          
  
          new Typed("#n", {
            strings: ["Netflix Splash Screen", ""],
            typeSpeed: 68,
            backSpeed: 20,
            startDelay: 1000,
            loop: false,
            showCursor: false,
            smartBackspace: false,
            onComplete: () => {
                const image = document.getElementById("img");
                image.style.display = "block";
              }
          });
          
        }
      });
    }
  });
  
  