# Customer Churn Intelligence Dashboard – Frontend

This frontend is a dark-themed executive dashboard built using Next.js.  
It visualizes churn predictions, revenue risk, and model insights powered by a FastAPI backend.

---

## 🚀 Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Recharts
- Axios

---

## 🎯 Purpose

The dashboard presents machine learning insights in a clear, business-friendly format.  
It is designed for decision-makers to understand churn risk and revenue exposure quickly.

---

## 📊 Features

### Executive Summary
- Predicted churn rate
- Revenue at risk
- High-risk customer count
- Total customers

### Risk Segmentation
- Bar chart showing customer distribution:
  - Low risk
  - Medium risk
  - High risk

### Churn Drivers
- Top 10 feature importance scores
- Clear explanation of model contribution weights

All charts include axis explanations for better user understanding.

---

## 📂 Project Structure

frontend/
│
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── dashboard/
│ └── page.tsx
│
├── components/
│ ├── KPICard.tsx
│ ├── RiskChart.tsx
│ └── FeatureChart.tsx
│
├── lib/
│ └── api.ts
│
└── package.json
