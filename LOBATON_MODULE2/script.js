let girlCount = 0;
        let boyCount = 0;

        function getRandomImage() {
            document.getElementById("random-image").src = "https://pic.re/image?" + new Date().getTime();
        }

        function chooseGirl() {
            girlCount++;
            document.getElementById("girl-count").textContent = girlCount;
            getRandomImage();
        }

        function chooseBoy() {
            boyCount++;
            document.getElementById("boy-count").textContent = boyCount;
            getRandomImage();
        }

        getRandomImage();
