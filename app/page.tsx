import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { LuCircle as ProfileIcon } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import "@/styles/global.css";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <BlueprintLogo />
          </div>
          <span className={styles.headerText}>
            <span className={styles.blueprint}>blueprint</span> volunteers
          </span>
        </div>

        <div className={styles.contentScroll}>
          <ProfileIcon size={24} />
          <p>neha32 at Mission Bit</p>
          <p>San Francisco, CA</p>
          <div className={styles.post}>
            <header className="{styles.postHeader">
              <div className="{styles.avatar">
                <div>
                  <p className="{styles.author">neha32 at Mission Bit</p>
                  <p className="{styles.location}">San Francisco, CA</p>
                </div>
              </div>
            </header>

          <p>
            Image Link:
            https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg
          </p>
            <img 
              className="{styles.postImage}"
              src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
              alt="San Francisco"
            />
          </div>

          <p>
          <p className="{styles.body}">
            This past weekend, I taught at Mission Bit. I was working with a
            group of high school students who were building their first web
            pages. I really enjoyed being able to help guide 10 students on
            learning CS fundamentals through a project! They were all really
            eager to learn, and I&#39;m glad I signed up. Highly recommend to
            any other software engineers interested in volunteering! Sign-up
            here: https://missionbit.org/get-involved/volunteer-with-us/
            here:{" "}
            <a href="https://missionbit.org/get-involved/volunteer-with-us/">
              https://missionbit.org/get-involved/volunteer-with-us/
            </a>
          </p>

          <p>3 Likes</p>
          <p>View 2 Comments</p>
          <HeartIcon size={24} />
          <TbMessageCircle size={24} />
          <ShareIcon size={24} />

          <p>February 1</p>

          <ProfileIcon size={24} />
          <p>aiden_ugh at Boys and Girls Club</p>
          <p>Oakland, CA</p>
          <p>I recently volunteered at my local Boys and Girls Club!</p>
          <div className="styles.stats">
            <div className={styles.stats}>
              <span>3 likes</span>
              <span>View 2 comments</span>
            </div>
            <div className={styles.actions}>
              <div className={styles.actionLeft}>
                <HeartIcon size={24} />
                <TbMessageCircle size={24} />
              </div>
              <ShareIcon size={24} />
            </div>
            <p className={styles.date}>February 1</p>
          </div>
          <hr className={styles.divider} />
          <article className={styles.post}>
            <header className={styles.postHeader}>
              <div className={styles.avatar} />
              <div>
                <p className={styles.author}>
                  <strong>aiden_ugh</strong> at Boys and Girls Club
                </p>
                <p className={styles.location}>Oakland, CA</p>
              </div>
            </header>
            <p className={styles.body}>
              I recently volunteered at my local Boys and Girls Club!
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}

