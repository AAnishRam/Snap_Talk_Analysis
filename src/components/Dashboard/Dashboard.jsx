import React from "react";
import "./Dashboard.css";
import { Avatar, AvatarGroup, Input } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSelector } from "react-redux";

function Dashboard() {

  const user = useSelector((state) => state.user.user);
  return (
    <div className="outer-box">
      <div className="dashboard">
        <div className="side-banner">
          <div className="side-banner__logo">
            <p className="side-banner__logo__p">Snap Talk Analyzer.</p>
            <div className="side-banner__profile">
              <img
                className="side-banner__profile__logo"
                src="./src/assets/profile-user-1.jpg"
                alt="Profile Picture"
              />
              <p className="side-banner__profile__name">{user?.name}</p>
              <div className="side-banner__profile__rating">
                <div className="side-banner__profile__rating__item">
                  <span className="side-banner__profile__rating__star">★</span>
                  <span className="side-banner__profile__rating__score">
                    7.5
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="side-banner__contents">
            <div className="side-banner__item">
              <div className="side-banner__icon">
                <img
                  className="side-banner__icon"
                  src="./src/assets/home.png"
                />
              </div>
              <div>
                <p>Dashboard</p>
              </div>
            </div>
            <div className="side-banner__item">
              <div className="side-banner__icon">
                <img
                  className="side-banner__icon"
                  src="./src/assets/task.png"
                />
              </div>
              <div>
                <p>My Tasks</p>
              </div>
            </div>
            <div className="side-banner__item">
              <div className="side-banner__icon">
                <img
                  className="side-banner__icon"
                  src="./src/assets/statistics.png"
                />
              </div>
              <div>
                <p>Statistics</p>
              </div>
            </div>
            <div className="side-banner__item">
              <div className="side-banner__icon">
                <img
                  className="side-banner__icon"
                  src="./src/assets/courses1.png"
                />
              </div>
              <div>
                <p>Courses</p>
              </div>
            </div>
          </div>

          <div className="side-banner__footer">
            <div className="side-banner__footer__profiles">
              <AvatarGroup oup max={3}>
                <Avatar alt="Remy Sharp" src="./src/assets/profile-1.jpg" />
                <Avatar alt="Travis Howard" src="./src/assets/profile-2.jpg " />
                <Avatar alt="Cindy Baker" src="./src/assets/profile-3.jpg" />
              </AvatarGroup>
            </div>
            <div className="side-banner__footer__text">
              <p className="side-banner__footer__text__p">
                Join our community to learn together
              </p>
            </div>
          </div>
        </div>

        {/* second column */}

        <div className="main-section">
          <div className="main-section__search">
            <div className="main-section__search__logo">
              <img
                className="side-banner__icon"
                src="./src/assets/search.png"
              />
            </div>
            <div className="main-section__search__input">
              <form>
                <input
                  type="text"
                  placeholder="Search something"
                  className="main-section__search__input"
                />
              </form>
            </div>
          </div>

          <div className="main-section__content">
            <p className="main-section__content__h1">
              {" "}
              Good Morning, <br /> {user?.name}
            </p>
            <p className="main-section__content__p">
              Here you can track your activity and find a <br /> suitable course
              to learn a new skills
            </p>
            <button className="main-section__content__button">
              See suggestions
            </button>
          </div>

          <div className="main-section__categories">
            <div className="main-section__categories__title">
              <div className="main-section__categories__title__text">
                <h1 className="main-section__categories__title__h1">
                  Categories
                </h1>
              </div>
              <div className="main-section__categories__title__img">
                <img src="./src/assets/more.png" alt="More" />
              </div>
            </div>

            <div className="main-section__categories__sections">
              <div className="main-section__categories__sections__box">
                <div className="main-section__categories__sections__box__icon">
                  <img
                    className="main-section__categories__sections__box__icon__img"
                    src="./src/assets/pencil.png"
                  ></img>
                </div>
                <div className="main-section__categories__sections__box__heading">
                  <p className="main-section__categories__sections__box__heading__p">
                    Writing
                  </p>
                </div>
              </div>
              <div className="main-section__categories__sections__box">
                <div className="main-section__categories__sections__box__icon">
                  <img
                    className="main-section__categories__sections__box__icon__img"
                    src="./src/assets/speaker.png"
                  ></img>
                </div>
                <div className="main-section__categories__sections__box__heading">
                  <p className="main-section__categories__sections__box__heading__p">
                    Speaking
                  </p>
                </div>
              </div>
              <div className="main-section__categories__sections__box">
                <div className="main-section__categories__sections__box__icon">
                  <img
                    className="main-section__categories__sections__box__icon__img"
                    src="./src/assets/snap talk.png"
                  ></img>
                </div>
                <div className="main-section__categories__sections__box__heading">
                  <p className="main-section__categories__sections__box__heading__p">
                    Snap Talk
                  </p>
                </div>
              </div>
              <div className="main-section__categories__sections__box">
                <div className="main-section__categories__sections__box__icon">
                  <img
                    className="main-section__categories__sections__box__icon__img"
                    src="./src/assets/ted.png"
                  ></img>
                </div>
                <div className="main-section__categories__sections__box__heading">
                  <p className="main-section__categories__sections__box__heading__p">
                    TED Talks
                  </p>
                </div>
              </div>
              <div className="main-section__categories__sections__box">
                <div className="main-section__categories__sections__box__icon">
                  <img
                    className="main-section__categories__sections__box__icon__img"
                    src="./src/assets/speech.png"
                  ></img>
                </div>
                <div className="main-section__categories__sections__box__heading">
                  <p className="main-section__categories__sections__box__heading__p">
                    Top Speeches
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="main-section__footer">
            <div className="main-section__footer__h1">
              <h1 className="main-section__footer__h1">Analysis</h1>
            </div>
            <div className="main-section__footer__graph">
              <div className="main-section__footer__graph__main">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: "Completed" },
                        { id: 1, value: 15, label: "Pending" },
                      ],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
              <div className="main-section__footer__graph__marks">
                <div className="main-section__footer__graph__marks__yourPoints">
                  <div>
                    <p className="main-section__footer__graph__marks__yourPoints__num">
                      78
                    </p>
                  </div>
                  <div>
                    <p className="main-section__footer__graph__marks__yourPoints__text">
                      Your points
                    </p>
                  </div>
                </div>
                <div className="main-section__footer__graph__marks__avgPoints">
                  <div>
                    <p className="main-section__footer__graph__marks__avgPoints__num">
                      52
                    </p>
                  </div>
                  <div>
                    <p className="main-section__footer__graph__marks__avgPoints__text">
                      Average
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd column */}

        <div className="feautures-section">
          <div className="feautures-section__header">
            <div className="feautures-section__header__notification-icon-div">
              <img
                className="feautures-section__header__notification-icon"
                src="./src/assets/notification.png"
              />
            </div>
            <div className="feautures-section__header__calendar-icon-div">
              <img
                className="feautures-section__header__calendar-icon"
                src="./src/assets/calander.png"
              />
            </div>
            <div className="feautures-section__header__profile-div">
              <div className="feautures-section__header__profiles">
                <AvatarGroup max={3}>
                  <Avatar alt="Remy Sharp" src="./src/assets/profile-1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="./src/assets/profile-2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="./src/assets/profile-3.jpg" />
                </AvatarGroup>
              </div>
            </div>
          </div>

          <div className="feautures-section__calanedar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>

          <div className="feautures-section__webinars">
            <div className="feautures-section__webinars__title">
              <div>
                <h1 className="feautures-section__webinars__title__h1">
                  Webinars
                </h1>
              </div>
              <div>
                <p className="feautures-section__webinars__title__p2">
                  See all
                </p>
              </div>
            </div>

            <table class="event-table">
              <tr>
                <td class="icon-cell">
                  <img
                    src="./src/assets/webinar-1.png"
                    alt="Color theory icon"
                  />
                </td>
                <td class="text-cell">
                  <div class="title">Before : Publci Speaking ...</div>
                  <div class="details">31 Jul | 8pm</div>
                </td>
                <td class="duration-cell">2h</td>
              </tr>
              <tr>
                <td class="icon-cell">
                  <img
                    src="./src/assets/webinar-2.png"
                    alt="Double Diamond icon"
                  />
                </td>
                <td class="text-cell">
                  <div class="title">
                    Your body language may shape who you are
                  </div>
                  <div class="details">3 Aug | 6pm</div>
                </td>
                <td class="duration-cell">1h</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
