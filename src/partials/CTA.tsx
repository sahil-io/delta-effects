import Link from "next/link";
import cn from 'classnames'
import styles from "@/styles/partials/CTA.module.scss"

const CTA = () => {
    return (
        <section className={cn("section section-primary relative")}>
            <img src={"/static/assets/images/line_pattern.png"} className={styles.cta_pattern}
                 loading={"lazy"}/>
            <div className="container">
                <div className="panel text-center text-white max-w-xl mx-auto">
                    <h2 className={"text-3xl"}>
                        Contact Full-Service Accounting Firm Based in Boulder, CO
                    </h2>

                    <p className={"mt-6"}>
                        We handle your tax and financial concerns
                        so you can focus on the job at hand. Your books done right — <b>guaranteed</b>.
                    </p>
                    <div className={"mt-8"}>
                        <Link href={"/contact"}>
                            <a className={"button button-secondary"}>
                                Book An Appointment
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CTA
