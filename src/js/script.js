// =========================================
// SMART PLANT WATERING SYSTEM
// Version 2.0 - Part A
// =========================================

const plantContainer = document.getElementById("plantContainer");

const plantModal = document.getElementById("plantModal");
const detailModal = document.getElementById("detailModal");

const addPlantBtn = document.getElementById("addPlant");
const savePlantBtn = document.getElementById("savePlant");

const closeBtn = document.querySelector(".close");
const closeDetail = document.getElementById("closeDetail");

// =========================================
// LOAD DATA
// =========================================

let plants = JSON.parse(localStorage.getItem("plants")) || [];

// =========================================
// SAVE
// =========================================

function savePlants(){

    localStorage.setItem("plants", JSON.stringify(plants));

}

// =========================================
// OPEN ADD MODAL
// =========================================

addPlantBtn.onclick = () => {

    plantModal.style.display = "flex";

};

// =========================================
// CLOSE MODALS
// =========================================

closeBtn.onclick = () => {

    plantModal.style.display = "none";

};

closeDetail.onclick = () => {

    detailModal.style.display = "none";

};

window.onclick = (e)=>{

    if(e.target===plantModal){

        plantModal.style.display="none";

    }

    if(e.target===detailModal){

        detailModal.style.display="none";

    }

}

// =========================================
// ADD PLANT
// =========================================

savePlantBtn.onclick = ()=>{

    const name = document.getElementById("plantName").value.trim();

    const icon = document.getElementById("plantIcon").value;

    const description = document.getElementById("plantDescription").value.trim();

    const device = document.getElementById("deviceID").value.trim();

    if(name==="" || device===""){

        alert("Please complete all required fields.");

        return;

    }

    plants.push({

        id:Date.now(),

        icon:icon,

        name:name,

        description:description,

        device:device,

        soil:0,

        temp:0,

        humidity:0,

        battery:0,

        pump:"OFF",

        status:"Healthy"

    });

    savePlants();

    renderPlants();

    plantModal.style.display="none";

    document.getElementById("plantName").value="";
    document.getElementById("plantDescription").value="";
    document.getElementById("deviceID").value="";

};

// =========================================
// RENDER
// =========================================

function renderPlants(){

    plantContainer.innerHTML="";

    if(plants.length===0){

        plantContainer.innerHTML=`

        <div class="empty">

            <h2>🌿 No Plants Yet</h2>

            <p>

            Click Add Plant to add your first ESP32 plant.

            </p>

        </div>

        `;

        return;

    }

    plants.forEach((plant,index)=>{

        plantContainer.innerHTML += `

        <div class="plantCard">

            <div class="cardHeader">

                <h2>

                ${plant.icon} ${plant.name}

                </h2>

                <span class="healthy">

                ${plant.status}

                </span>

            </div>

            <div class="info">

                <p>

                <span>💧 Soil Moisture</span>

                <b>${plant.soil}%</b>

                </p>

                <p>

                <span>🌡 Temperature</span>

                <b>${plant.temp}°C</b>

                </p>

                <p>

                <span>💨 Humidity</span>

                <b>${plant.humidity}%</b>

                </p>

                <p>

                <span>🔋 Battery</span>

                <b>${plant.battery}V</b>

                </p>

            </div>

            <div class="buttonGroup">

                <button

                    class="details"

                    onclick="viewPlant(${index})">

                    📊 View Details

                </button>

                <button

                    class="water"

                    onclick="manualPump(${index})">

                    💦 Water

                </button>

            </div>

        </div>

        `;

    });

}

// =========================================
// PLACEHOLDERS
// (Part 3B)
// =========================================

function viewPlant(index){

    alert("Coming soon on update 1.2.4.0");

}

function manualPump(index){

    alert("Pump command will be available in the next update.(1.2.6.0)");

}

// =========================================

renderPlants();
