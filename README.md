# KisanShakti ?? | Integrated AgriTech Ecosystem

> **Official Project Portfolio & Presentation**
> *Empowering smallholder farmers through Edge-AI crop disease diagnosis, solar-powered IoT microclimate telemetry, and direct local mandi commerce.*

---

> ?? **Important Notice & Usage Policy**
> - ?? **Open Research & Collaboration**: We welcome academic research partnerships, AgriTech dataset contributions, and field pilot collaborations.
> - ?? **Portfolio Codebase Notice**: This repository is maintained strictly as an official project portfolio. The source code, assets, and design files contained within this portfolio are **proprietary and not open to cloning, unauthorized copying, or commercial redistribution**.

---

## ?? Ecosystem Overview

**KisanShakti** is an end-to-end smart agricultural platform designed to optimize crop yields, predict microclimate variations, and connect farmers directly with buyers�eliminating predatory market intermediaries.

### Core Ecosystem Pillars:
1. **Upaj (Farmers Mobile App)**: Offline-first mobile application providing real-time crop disease diagnosis using on-device PyTorch Edge-AI, microclimate telemetry alerts, and direct harvest listings.
2. **Mandi (Buyers Mobile App)**: B2B digital marketplace for produce buyers, bulk aggregators, and retailers to inspect verified farm listings and source directly from local farmers.
3. **IoT Telemetry Node**: Solar-powered ESP32 microcontroller cluster measuring real-time soil moisture, temperature, humidity, and rain precipitation.
4. **FastAPI Backend & GIS Core**: High-performance RESTful API powered by PostgreSQL/PostGIS managing telemetry feeds, market price analytics, and user authentication.

---

## ?? Mobile Applications

### 1. Upaj (Farmer App)
- **Offline Edge-AI Disease Detection**: Analyzes plant leaf images locally on-device without internet access using lightweight PyTorch / TFLite models.
- **Microclimate Weather Card**: Displays live sensor readings (soil moisture %, temperature, humidity, rain status) with dynamic animated weather visualizations.
- **Crop Advisory & Digital Ledger**: Enables farmers to track yield expenses, manage crop health, and post produce for sale.
- **Download**: Available via Android APK (`Upaj.apk`) | *iOS version coming soon*.

### 2. Mandi (Buyer App)
- **Direct B2B Marketplace**: Allows verified buyers to browse crop listings, negotiate prices, and contract directly with farmers.
- **Live Market Price Intelligence**: Real-time mandi price trends across regional agricultural markets.
- **Download**: Available via Android APK (`Mandi.apk`) | *iOS version coming soon*.

---

## ??? Technology Stack

### Web Portfolio
- **Framework**: React 18 with TypeScript & Vite
- **Styling**: Tailwind CSS & Lucide React Icons
- **Interactive Assets**: Three.js / GLTF 3D Hardware Model Renderer

### Mobile Apps (`Upaj` & `Mandi`)
- **Framework**: React Native with Expo SDK 54 (Expo Router v4)
- **On-Device AI**: PyTorch Mobile / TensorFlow Lite (`crop_disease_v1.tflite`)
- **UI & Icons**: Custom design system tokens + `@expo/vector-icons`

### Backend & Database
- **API Framework**: FastAPI (Python 3.12)
- **Database**: PostgreSQL with PostGIS extension & SQLAlchemy ORM
- **Task Scheduling**: APScheduler for microclimate telemetry polling

### Hardware Node
- **Microcontroller**: ESP32 System-on-Chip (Wi-Fi / LoRaWAN enabled)
- **Sensors**: Soil Moisture Sensor (Analog), Rain Drop Sensor, DHT11 Temperature & Humidity Sensor

---

## ?? Academic Research & Open Collaboration

This project is developed under **Visvesvaraya Technological University (VTU)** academic research guidelines with pilot deployments across the **Kolar & Chikkaballapur Agricultural Clusters, Karnataka**.

- **Project Lead**: Bhanu Kiran
- **Research Collaboration**: Open for academic contributions, telemetry data exchanges, and AgriTech field trials.
- **Contact Team**: `bhanukiran90216@gmail.com`

---

## ?? Portfolio Rights & Usage Terms

All rights reserved. This repository serves as an official project portfolio and presentation. 
- **Academic & Research Inquiries**: Open for collaborative research, paper citations, and dataset sharing.
- **Codebase Restrictions**: Cloning, copying, mirroring, or redistributing this portfolio codebase or its assets is strictly prohibited without explicit written permission from the author.
