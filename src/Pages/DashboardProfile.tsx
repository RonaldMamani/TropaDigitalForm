import Search from "../assets/search.svg"
import Notification from "../assets/notification.svg"
import BoxStatistic from "../components/BoxStatistic"

import stats1 from "../assets/stats1.png"
import stats2 from "../assets/stats2.png"
import stats3 from "../assets/stats3.png"
import stats4 from "../assets/stats4.png"
import BoxStatsNumber from "../components/BoxStatsNumber"

export default function DashboardProfile() {
    return (
        <section className="col-span-4 px-[78px] pt-14">
            <section className="flex justify-end gap-8 items-center">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Pesquisar" 
                        className="px-16 py-3 rounded-3xl border-0 shadow-black shadow-sm w-[420px]" />
                    <div className="absolute left-5 top-3">
                        <img src={Search} alt="Icone de Pesquisa" />
                    </div>
                </div>
                <div>
                    <img src={Notification} alt="Icone de Notificação"/>
                </div>
            </section>
            <section className="pt-8">
                <h6 className="font-['Poppins'] text-black text-5xl font-bold">Dashboard</h6>
                <div className="py-6 grid gap-10 grid-rows-3 grid-cols-3">
                    <div className="h-[330px]">
                        <BoxStatsNumber
                            title="LoremIpsum"
                            subTitle="LoremIpsum"
                            statistic="5.987,37"
                            image={stats1}
                            className="h-[225px]"
                        />
                    </div>
                    <div className="h-[330px]">
                        <BoxStatistic 
                            title="Primary Text"
                            subTitle="Secundary Text"
                            image={stats2}
                        />
                    </div>
                    <div className="h-[330px]">
                        <BoxStatistic 
                            title="Primary Text"
                            subTitle="Secundary Text"
                            image={stats3}
                            className="h-[225px]"
                        />
                    </div>
                    <div className="col-span-3 row-span-2">
                        <BoxStatistic 
                            title="Primary Text"
                            subTitle="Secundary Text"
                            image={stats4}
                            isGreat
                        />
                    </div>
                </div>
            </section>
        </section>
    )
}