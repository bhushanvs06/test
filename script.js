    const chatbotContainer = document.getElementById("chatbotContainer");
    const chatContent = document.getElementById("chatContent");
    const artTypeSelect = document.getElementById("artType");
    const artSizeSelect = document.getElementById("artSize");
    const imageOverlay = document.getElementById("imageOverlay");
    const overlayImage = document.getElementById("overlayImage");

    const images = {
        "Pencil Sketch": [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeGpMVqDLsQjZyPSMkLHWV5_i0mICgGP03d2cbq95N1y7agDwTg3yGXdE6aSUt6D_LdxUk8BCMAhDvXa8EpDfnjclwA7aRpt5VaIiCsh7LOq1gziQMbT-oRqOqGKJ93gkqzzCN639hGIEbTU1nLy613zoGx5EkcYvOnTullEVweW9nzvk181Yf3XI8CNux/s1459/IMG_0486.jpeg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu1yUHGpk4Y7370TthYKHhxsl5aYm3BqPc80h2iYNlAt0aQoiUJkaBMaaeCPzfOXx3f7inv6_CQeCpZL_ed1l0LfpN63vm28OYAHyPPDcHIUAP0CBz7lozqKfJ-D0DXNp3pnIG9MQmly2OJJyq7BktvX0vdMFpGpd3HCpPFB-3sSP3UIoa2_iD4V2iDzr9/s2494/IMG_0493.jpeg"
        ],
        "Colour Sketch": [
            "https://via.placeholder.com/300x300/32CD32"
        ],
        "Pen Sketch": [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAf9VUJbATIywNBKbRcz2Mv0MO-LRvJx2eSMggoyMGS5yX8TUHsdsvpVpWMQNbC4jpm22oKavAsb0J1hwAep9wLVmI-7PgRLH41FdT1SjXnSo7ZL1BXnvsRyVAEcUg4dKDyWXHIP8RhqpUyzOSbKJm2JhJhw0Sb1a4DBuvPIADMc91c3z7m3Ywa64WU0i0/s1652/IMG_0498.jpeg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKLRcMEkFt03XhInb63V4XXD3DmXoUbvEQN3KA-v49s6u2Bd9QytWcWAVMDqjCo4jMt26kNp5cnE_4QsUpYkuhH_xuWhncRpOrWNWjnJZyWgA2cwGxQ0vl31UmbExF-1YWoFv9P6lLw8sNf12R5XYzZqMsBmr5naq2BBiaZw01ijr777LR7GN30VM0cRQq/s1440/IMG_0496.jpeg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9X12QTKzMaViog9ZTNsARAX7k_43j6S0-dMXdkDxuHly4VPMev7Fhzwu2mK9SDWXhyDVL-7KUXLKRXG6qm0igfIfUgGZWRrxiSVIz0DUGmAD4SMleGW9q9qCMdpIYh4GfCof-M-1XdMoPkHOufbs2hcVedLIwf3VjlUYSem6nWXdhjGy06dRdHk4cau7Z/s2080/IMG_0495.jpeg"
        ]
    };

    function toggleChatbot() {
        chatbotContainer.style.display = chatbotContainer.style.display === "flex" ? "none" : "flex";
        if (chatbotContainer.style.display === "flex") {
            displayWelcomeMessage();
        }
    }

    function displayWelcomeMessage() {
        chatContent.innerHTML += `
            <div class="message bot-message">
                Welcome to Soulful Arts!!!😃😃<br>
                We craft the best artworks which will touch your soul and leave a lasting impression.<br><br>
                For reference artworks, click on this link: <a href="https://www.instagram.com/soulful_arts21/" target="_blank">Soulful Arts</a><br>
                For any enquiries, contact: 7337758185 / 9110899218
            </div>
        `;
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    function updateSizeMenu() {
        const selectedArt = artTypeSelect.value;
        artSizeSelect.innerHTML = `<option value="" disabled selected>Select size</option>`;
        ["A3", "A4", "A5"].forEach(size => {
            const option = document.createElement("option");
            option.value = size;
            option.textContent = size;
            artSizeSelect.appendChild(option);
        });
    }

    function getOrderOptions() {
        const artType = artTypeSelect.value;
        const artSize = artSizeSelect.value;

        chatContent.innerHTML += `
            <div class="gallery">
                ${images[artType].map(img => `<img src="${img}" onclick="zoomImage('${img}')">`).join("")}
            </div>
            <div class="message bot-message">
                This are the sample images 👆<br>
                Pricing:
                <ul>
                    <li>1. Pay advance of ₹200</li>
                    <li>2. Pay full amount of ₹500</li>
                </ul>
                Note: Extra ₹300 for each additional person.<br>
                Order Now: <a href="https://api.whatsapp.com/send?phone=917337758185&text=Hello,%20I%20recently%20visited%20your%20website%20and%20was%20really%20impressed%20with%20your%20work.%20I%20would%20love%20to%20place%20an%20order%20for%20${artType}%20on%20${artSize}" target="_blank">Click here</a><br>
                It will be delivered in 7 days.
            </div>

        `;
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    function zoomImage(imgSrc) {
        overlayImage.src = imgSrc;
        imageOverlay.style.display = "flex";
    }

    function closeOverlay() {
        imageOverlay.style.display = "none";
    }
