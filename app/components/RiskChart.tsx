"use client";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function RiskChart({ data }: any) {
    const chartData = Object.keys(data).map((key) => ({
        name: key,
        value: data[key],
    }));

    return (
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
            <h2 className="text-lg font-semibold mb-2 text-white">Risk Segmentation</h2>
            <p className="text-gray-500 text-sm mb-6">
                Distribution of customers based on predicted churn probability.
                High-risk customers require proactive retention engagement.
            </p>

            <ResponsiveContainer width="100%" height={320} >
                <BarChart data={chartData}>
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                        cursor={{ fill: "transparent" }}
                        contentStyle={{
                            backgroundColor: "#0B0F14",
                            border: "1px solid #1F2937",
                            borderRadius: "8px",
                            color: "#E5E7EB",
                            fontSize: "14px",
                        }}
                        labelStyle={{
                            color: "#F9FAFB",
                            fontWeight: 600,
                        }}
                        itemStyle={{
                            color: "#F87171",
                        }}
                    />

                    <Bar dataKey="value" fill="#ef4444" radius={[6, 6, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-400 leading-relaxed">
                <p>
                    <span className="text-white font-medium">X-axis:</span> Risk category
                    (Low, Medium, High) based on predicted churn probability.
                </p>
                <p>
                    <span className="text-white font-medium">Y-axis:</span> Number of customers
                    in each risk segment.
                </p>
            </div>
        </div>
    );
}
