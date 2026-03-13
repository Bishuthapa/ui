import Link from "next/link";

export default function CourseSection() {
  return (
    <section className="course-wrapper">
      <div className="course-content">
        
        <div className="course-text">
          <p className="course-subtitle">
            Explore our classes and master trending skills!
          </p>
          <h1 className="course-title">
            Dive Into{" "}
            <span className="course-title-highlight">What&apos;s Hot Right Now!</span>{" "}
            🔥
          </h1>
        </div>

        <div className="course-cards">
          <article className="course-card course-card-primary">
            <div className="course-card-primary-top">
              <Link href="#" className="course-card-link">
                <span>View all Courses</span>
                <span className="course-card-link-icon">➜</span>
              </Link>
            </div>

            <div className="course-card-icons-row">
              <div className="course-icon course-icon-react" />
              <div className="course-icon course-icon-hashtag" />
              <div className="course-icon course-icon-vue" />
              <div className="course-icon course-icon-design" />
            </div>

            <div className="course-card-primary-bottom">
              <div className="course-card-primary-count">
                23<span className="course-card-plus">+</span>
              </div>
              <div className="course-card-primary-copy">
                <div className="course-card-primary-title">All Courses</div>
                <div className="course-card-primary-body">
                  courses you&apos;re powering through right now.
                </div>
              </div>
            </div>
          </article>

          <article className="course-card course-card-secondary">
            <div className="course-card-secondary-inner">
              <div className="course-card-vertical">
                <span className="course-card-vertical-title">
                  Upcoming
                  <br />
                  Courses
                </span>
                <span className="course-card-vertical-body">
                  exciting new courses
                  <br />
                  waiting to boost your skills.
                </span>
              </div>
              <div className="course-card-secondary-count">
                <span className="course-card-secondary-number">05</span>
                <span className="course-card-secondary-plus">+</span>
              </div>
            </div>
          </article>

          <article className="course-card course-card-secondary">
            <div className="course-card-secondary-inner">
              <div className="course-card-vertical">
                <span className="course-card-vertical-title">
                  Ongoing
                  <br />
                  Courses
                </span>
                <span className="course-card-vertical-body">
                  currently happening—don&apos;t
                  <br />
                  miss out on the action!
                </span>
              </div>
              <div className="course-card-secondary-count">
                <span className="course-card-secondary-number">10</span>
                <span className="course-card-secondary-plus">+</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

