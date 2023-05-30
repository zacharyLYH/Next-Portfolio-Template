import { Stats } from "Render/Stats/StatsCommendation";

export interface StatsProps {
    stats: Stats[];
}

export default function StatsComponent({ stats }: StatsProps) {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="w-1/2 h-1/2 flex flex-col items-center justify-center">
                {stats.map((stat) => (
                    <div className="stats stats-vertical lg:stats-horizontal shadow w-full text-center shadow-2xl bg-base-200 py-2 my-1">
                        <div className="stat">
                            <div className="stat-title text-primary text-xl font-bold">
                                {stat.title}
                            </div>
                            <div className="stat-value text-secondary">
                                {stat.value}
                            </div>
                            <div className="stat-desc text-secondary">
                                {stat.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
