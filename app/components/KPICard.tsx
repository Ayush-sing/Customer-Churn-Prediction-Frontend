export default function KPICard({
    title,
    value,
    description,
    highlight,
}: any) {
    const highlightColor =
        highlight === "red"
            ? "text-red-400"
            : highlight === "yellow"
                ? "text-yellow-400"
                : "text-white";

    return (
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-gray-400 text-sm">{title}</h3>
            <p className={`text-2xl font-semibold mt-2 ${highlightColor}`}>
                {value}
            </p>
            <p className="text-xs text-gray-500 mt-3">{description}</p>
        </div>
    );
}
