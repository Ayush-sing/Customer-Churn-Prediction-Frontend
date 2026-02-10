"use client";

import { useEffect, useState } from "react";
import API from "../../lib/api";
import KPICard from "../components/KPICard";
import RiskChart from "../components/RiskChart";
import FeatureChart from "../components/FeatureChart";

export default function Dashboard() {
    const [analytics, setAnalytics] = useState<any>(null);
    const [features, setFeatures] = useState<any>(null);

    useEffect(() => {
        API.get("/analytics").then((res) => setAnalytics(res.data));
        API.get("/feature_importance").then((res) => setFeatures(res.data));
    }, []);

    if (!analytics || !features)
        return <div className="p-10 text-gray-400">Loading analytics...</div>;

    const churnPercent = (analytics.predicted_churn_rate * 100).toFixed(2);

    return (
        <div className="p-10 space-y-10 min-h-screen bg-[#0B0F14]">

            <div>
                <h1 className="text-4xl font-bold tracking-tight text-white">
                    Customer Churn Intelligence
                </h1>
                <p className="text-gray-400 mt-2">
                    Customer Churn predictive analysis of churn risk and revenue exposure.
                </p>
            </div>

            {/* Executive Summary */}
            <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
                <h2 className="text-xl font-semibold mb-3 text-white">Executive Insight</h2>
                <p className="text-gray-400 leading-relaxed">
                    The model predicts that <span className="text-red-400 font-semibold">{churnPercent}%</span>
                    of customers are at risk of churn.
                    Estimated revenue exposure is
                    <span className="text-yellow-400 font-semibold">
                        ₹ {analytics.revenue_at_risk.toLocaleString()}
                    </span>.
                    Immediate intervention strategies should prioritize high-risk segments.
                </p>
            </div>

            {/* KPI Grid */}
            <div className="grid md:grid-cols-4 gap-6">
                <KPICard
                    title="Total Customers"
                    value={analytics.total_customers}
                    description="Active customer base"
                />
                <KPICard
                    title="Predicted Churn Rate"
                    value={`${churnPercent}%`}
                    description="Customers likely to churn"
                    highlight="red"
                />
                <KPICard
                    title="Revenue at Risk"
                    value={`₹ ${analytics.revenue_at_risk.toLocaleString()}`}
                    description="Projected revenue loss"
                    highlight="yellow"
                />
                <KPICard
                    title="High Risk Customers"
                    value={analytics.risk_segmentation.High}
                    description="Immediate retention priority"
                    highlight="red"
                />
            </div>

            <RiskChart data={analytics.risk_segmentation} />
            <FeatureChart data={features} />
        </div>
    );
}
