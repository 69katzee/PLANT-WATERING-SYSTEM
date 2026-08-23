# Plant-Watering-System-With-Website

An IoT-based automated plant watering system that connects a web dashboard with an **ESP32** microcontroller. Users can remotely monitor soil metrics, manually trigger irrigation, manage multiple plants, and set custom watering schedules.

> ⚠️ **Project Status: In Development**  
> We are currently building this 
> So please don't expect this files of code or any file will works 

---

##  Key Features

What makes this project different from traditional smart watering systems is its high level of user customization and planned intelligence:

* **Dynamic Plant Management**: Easily add, rename, or remove plants from your dashboard dynamically.
* **Custom Timers**: Set personalized watering schedules based on specific times or intervals.
* **Bi-Directional Control**: Seamlessly handles both inputs (sensor data to web) and outputs (web commands to ESP32 relays).
* **AI Assistance (Planned)**: Future integration of an AI assistant to help users automatically configure website layouts and optimize plant care settings based on their specific needs.

---

##  System Architecture

The project relies on a local server environment to route commands and data securely:

1. **Hardware Layer**: ESP32 microcontrollers read soil moisture levels and drive water pumps.
2. **Network Layer**: Data is transmitted wirelessly via local Wi-Fi between the ESP32 boards and the server.
3. **Server Layer**: A local PC acts as the central server, hosting the web application backend and database.
4. **User Interface**: A web-based dashboard accessible from any browser on the network.

---

##  Hardware Requirements

* **ESP32** Development Board
* Soil Moisture Sensor(s)
* 5V/12V Water Pump & Relay Module
* Breadboard and Jumper Wires
* External Power Supply (for the pump)

---

##  Getting Started

### 1. Prerequisites
* [Arduino IDE](https://arduino.cc) (with ESP32 board manager installed)
* [Node.js](https://nodejs.org) or Python (depending on your website backend framework)

### 2. Website Setup
```bash
# Clone the repository
git clone https://github.com

# Navigate to the server directory
cd plant-watering-server

# Install dependencies (Example: if using npm)
npm install

# Start the local server
npm start
```

### 3. ESP32 Configuration
1. Open the `/firmware/firmware.ino` file in Arduino IDE.
2. Replace the placeholder values with your local network configurations:
   ```cpp
   const char* ssid = "YOUR_WIFI_SSID";
   const char* password = "YOUR_WIFI_PASSWORD";
   const char* serverAddress = "http://YOUR_PC_IP_ADDRESS:port";
   ```
3. Upload the sketch to your ESP32 board.
