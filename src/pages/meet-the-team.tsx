import {GetServerSideProps} from "next";
import Page from "@/layouts/Page";
import React from "react";
import {allTeamMembers, ITeamMember} from "@/lib/models/TeamMember";
import Image from "next/image";
import styles from "@/styles/pages/meet-the-team.module.scss"

declare interface MeetTheTeam_Props {
    members: ITeamMember[]
}

const MeetTheTeam = ({members}: MeetTheTeam_Props) => {

    return (
        <Page>
            <section className={"section section-dark-gray"}>
                <div className="container text-center">
                    <h1 className={"mb-4"}>
                        Meet Your Team at Delta
                    </h1>
                    <p className={"text-lg"}>
                        Check out the team behind Delta Effect
                    </p>
                </div>
            </section>
            <section className={"section section-default"}>
                <div className="container">
                    <div className="panel">
                        <h2 className={"mb-12 text-center"}>
                            Team Members
                        </h2>
                        <div className={"flex justify-center -m-6"}>
                            {members.map(member => {
                                return (
                                    <div className={"p-6 lg:w-1/3 2xl:w-1/4"} key={member.id}>
                                        <div className={styles.team_card}>
                                            <div className="header relative">
                                                <canvas height={400}></canvas>
                                                <Image src={member.picture.url} layout={"fill"} objectFit={"cover"}/>
                                            </div>
                                            <div className={styles.body}>
                                                <div className="">
                                                    <div className={""}>
                                                        <h2 className={styles.title}>
                                                            {member.name}
                                                        </h2>
                                                    </div>
                                                    <div className={""}>

                                                        {member.bio && <div className={"my-4"}
														                    dangerouslySetInnerHTML={{__html: member.bio.html}}>

														</div>}
                                                        <hr className={"my-4"}/>

                                                        <img src="/static/assets/images/ea_color.jpg" loading={"lazy"}
                                                             className={"w-32"}/>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await allTeamMembers()
    return {
        props: {
            members: data
        },
    }
}


export default MeetTheTeam
