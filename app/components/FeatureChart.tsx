"use client";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function FeatureChart({ data }: any) {
    const chartData = Object.entries(data)
        .slice(0, 10)
        .map(([key, value]: any) => ({
            name: key,
            value: value,
        }));

    return (
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
            <h2 className="text-lg font-semibold mb-2 text-white">Primary Churn Drivers</h2>
            <p className="text-gray-500 text-sm mb-6">
                Top contributing factors influencing churn predictions.
                These variables should guide retention strategy decisions.
            </p>

            <ResponsiveContainer width="100%" height={400}>
                <BarChart layout="vertical" data={chartData}>
                    <XAxis type="number" stroke="#9CA3AF" />
                    <YAxis
                        dataKey="name"
                        type="category"
                        width={170}
                        stroke="#9CA3AF"
                        tick={{ fill: "#D1D5DB", fontSize: 13 }}
                    />
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

                    <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 6, 6]} />
                </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-400 leading-relaxed">
                <p>
                    <span className="text-white font-medium">Y-axis:</span> Customer-related
                    variables influencing churn prediction.
                </p>
                <p>
                    <span className="text-white font-medium">X-axis:</span> Feature importance
                    score (model contribution weight). Higher values indicate stronger
                    influence on churn prediction.
                </p>
            </div>

        </div>
    );
}
