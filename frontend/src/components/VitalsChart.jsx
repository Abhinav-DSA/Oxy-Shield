import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { t: 1, spo2: 96, hr: 82 },
  { t: 2, spo2: 95, hr: 86 },
  { t: 3, spo2: 94, hr: 92 },
  { t: 4, spo2: 92, hr: 98 },
  { t: 5, spo2: 90, hr: 104 },
];

export default function VitalsChart() {
  return (
    <div className="chart glass fade-in">
      <h3>Vitals Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="t" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line type="monotone" dataKey="spo2" stroke="#00c6ff" strokeWidth={2} />
          <Line type="monotone" dataKey="hr" stroke="#ff4d4d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
