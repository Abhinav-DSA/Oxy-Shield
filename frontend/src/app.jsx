import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import VitalCard from "./components/VitalCard";
import VitalsChart from "./components/VitalsChart";
import AlertsPanel from "./components/AlertsPanel";
import { HeartPulse, Activity, Thermometer, Moon } from "lucide-react";

const HeartSVG = () => (
  <svg
    className="heart-background"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50,90 C25,75 10,60 10,45 C10,30 20,20 30,20 C38,20 45,25 50,32 C55,25 62,20 70,20 C80,20 90,30 90,45 C90,60 75,75 50,90 Z"
      fill="currentColor"
    />
  </svg>
);

export default function App() {
  return (
    <div className="app-container">
      <HeartSVG />
      <div className="layout">
        <Sidebar />
        <div className="main-area">
          <Header />

          <div className="vitals-grid">
            <VitalCard icon={<HeartPulse />} label="Heart Rate" value="104 bpm" status="High" />
            <VitalCard icon={<Activity />} label="SpO₂" value="90%" status="Low" />
            <VitalCard icon={<Thermometer />} label="Blood Pressure" value="150/95" status="Elevated" />
            <VitalCard icon={<Moon />} label="Sleep" value="4h 12m" status="Poor" />
          </div>

          <VitalsChart />
        </div>
        <AlertsPanel />
      </div>
    </div>
  );
}
