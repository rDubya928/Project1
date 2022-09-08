// react import
import React from "react";
// 'ProfilePage' child component [stateless functional]
const ProfilePage = (props) => {
  let user = props.userLoggedIn.user_info;
  let filtered = props.friends.filter(
    (item) => item.user_info.name.first_name !== user.name.first_name
  );
  let companions = filtered.map((item, i) => (
    <div className="companion-list-item" key={i}>
      <i className="far fa-user-circle companion-img"></i>
      <span>
        {item.user_info.name.first_name + " " + item.user_info.name.last_name}
      </span>
    </div>
  ));
  return (
    <div id="profile-page" className="page container-fluid">
      <section className="user-details">
        <i className="fas fa-user-circle user-img"></i>
        <span className="user-name">
          {user.name.first_name + " " + user.name.last_name}
        </span>
        <span className="user-age">{user.age} Years Young</span>
        <span className="user-location">{user.city + ", " + user.state}</span>
      </section>
      <section>
        <ul id="profile-tabs" className="pagination">
          <li className="page-item">
            <a className="page-link" href="##" onClick={props.tabClick}>
              About Me
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="##" onClick={props.tabClick}>
              Travel Log
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="##" onClick={props.tabClick}>
              Bucket List
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="##" onClick={props.tabClick}>
              Souvenirs
            </a>
          </li>
        </ul>
        <ul id="smartphone-tabs" className="pagination">
          <li className="page-item">
            <a className="page-link" href="##" onClick={props.tabClick}>
              About Me
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="##" onClick={props.tabClick}>
              Travel Log
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="##" onClick={props.tabClick}>
              Bucket List
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="##" onClick={props.tabClick}>
              Souvenirs
            </a>
          </li>
        </ul>
      </section>
      {props.view === "About Me" ? (
        <section className="about-me-section">
          <fieldset className="bio">
            <legend>Bio</legend>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem aliquid aspernatur labore dolorum sequi praesentium
              suscipit inventore ipsa commodi eaque similique ducimus doloremque
              consequuntur, eum dolore. Et alias modi ipsum? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Dolor ea pariatur, quam
              corporis maxime accusamus aliquid delectus nam. Quos repellat
              exercitationem omnis temporibus consectetur dolore, eveniet nam at
              beatae quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Sit odit blanditiis nostrum eaque, voluptatem sunt culpa
              nobis dolorum accusamus, accusantium consequatur. Minima,
              perspiciatis reprehenderit. Nam a deserunt libero sequi omnis.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              culpa repellat, placeat architecto nisi nostrum veritatis velit
              voluptas incidunt adipisci eveniet natus? Facilis ad, suscipit
              inventore totam a doloribus qui. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Dolor voluptates possimus libero
              quam vero rem, suscipit modi soluta sunt atque earum impedit
              repellendus nesciunt reiciendis asperiores placeat iure officiis.
              Doloremque.
            </p>
          </fieldset>
          <fieldset className="companions">
            <legend>Companions</legend>
            <div className="companion-list">{companions}</div>
          </fieldset>
          <fieldset className="favorite-activities">
            <legend>Favorite Activites</legend>
            <div className="activity-icons">
              <span>
                <label>
                  <i className="fas fa-hiking"></i>
                  Hiking
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-road"></i>
                  Roadtrips
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-swimmer"></i>
                  Swimming
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-campground"></i>
                  Camping
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-utensils"></i>
                  Dining Out
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-seedling"></i>
                  Gardening
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-ghost"></i>
                  Ghost Hunting
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-mask"></i>
                  Masquerade Balls
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-paw"></i>
                  Fur Baby Playtime
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-user-tie"></i>
                  Dressing Fancy
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-record-vinyl"></i>
                  Record Collecting
                </label>
              </span>
            </div>
          </fieldset>
          <fieldset className="favorite-destinations">
            <legend>Favorite Destinations</legend>
            <div className="destination-icons">
              <span>
                <label>
                  <i className="far fa-compass"></i>
                  Uruguay
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-compass"></i>
                  Argentina
                </label>
              </span>
              <span>
                <label>
                  <i className="far fa-compass"></i>
                  Brazil
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-compass"></i>
                  Chile
                </label>
              </span>
              <span>
                <label>
                  <i className="far fa-compass"></i>
                  Colombia
                </label>
              </span>
              <span>
                <label>
                  <i className="fas fa-compass"></i>
                  Peru
                </label>
              </span>
            </div>
          </fieldset>
        </section>
      ) : props.view === "Travel Log" ? (
        <section className="travel-log-section">
          <div className="travel-log-entry-list">
            <fieldset className="travel-log-entry">
              <legend>
                July 01, 2021 | 11:37 A.M. |<span> Cambodia</span>
              </legend>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, commodi! Officia dicta laborum vitae recusandae
                obcaecati? Odio quos exercitationem non laudantium ea debitis
                suscipit laboriosam, fuga tempora ut mollitia maiores. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                reiciendis a illo perspiciatis quis facilis cum dolorem
                perferendis dolorum, incidunt laborum hic et rerum, aliquid
                nobis voluptatem nisi, ad harum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Alias eos debitis, unde assumenda
                aspernatur dolor illo! Et numquam cum fugit exercitationem
                veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
                voluptatibus aliquid.
              </p>
            </fieldset>
            <fieldset className="travel-log-entry">
              <legend>
                July 03, 2021 | 07:16 P.M. |<span> Thailand</span>
              </legend>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, commodi! Officia dicta laborum vitae recusandae
                obcaecati? Odio quos exercitationem non laudantium ea debitis
                suscipit laboriosam, fuga tempora ut mollitia maiores. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                reiciendis a illo perspiciatis quis facilis cum dolorem
                perferendis dolorum, incidunt laborum hic et rerum, aliquid
                nobis voluptatem nisi, ad harum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Alias eos debitis, unde assumenda
                aspernatur dolor illo! Et numquam cum fugit exercitationem
                veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
                voluptatibus aliquid.
              </p>
            </fieldset>
            <fieldset className="travel-log-entry">
              <legend>
                July 04, 2021 | 04:55 A.M. |<span> Australia</span>
              </legend>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, commodi! Officia dicta laborum vitae recusandae
                obcaecati? Odio quos exercitationem non laudantium ea debitis
                suscipit laboriosam, fuga tempora ut mollitia maiores. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                reiciendis a illo perspiciatis quis facilis cum dolorem
                perferendis dolorum, incidunt laborum hic et rerum, aliquid
                nobis voluptatem nisi, ad harum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Alias eos debitis, unde assumenda
                aspernatur dolor illo! Et numquam cum fugit exercitationem
                veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
                voluptatibus aliquid.
              </p>
            </fieldset>
            <fieldset className="travel-log-entry">
              <legend>
                July 09, 2021 | 01:09 P.M. |<span> Brazil</span>
              </legend>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, commodi! Officia dicta laborum vitae recusandae
                obcaecati? Odio quos exercitationem non laudantium ea debitis
                suscipit laboriosam, fuga tempora ut mollitia maiores. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                reiciendis a illo perspiciatis quis facilis cum dolorem
                perferendis dolorum, incidunt laborum hic et rerum, aliquid
                nobis voluptatem nisi, ad harum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Alias eos debitis, unde assumenda
                aspernatur dolor illo! Et numquam cum fugit exercitationem
                veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
                voluptatibus aliquid.
              </p>
            </fieldset>
            <fieldset className="travel-log-entry">
              <legend>
                July 15, 2021 | 05:42 P.M. |<span> Phoenix, AZ (Home)</span>
              </legend>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, commodi! Officia dicta laborum vitae recusandae
                obcaecati? Odio quos exercitationem non laudantium ea debitis
                suscipit laboriosam, fuga tempora ut mollitia maiores. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                reiciendis a illo perspiciatis quis facilis cum dolorem
                perferendis dolorum, incidunt laborum hic et rerum, aliquid
                nobis voluptatem nisi, ad harum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Alias eos debitis, unde assumenda
                aspernatur dolor illo! Et numquam cum fugit exercitationem
                veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
                voluptatibus aliquid.
              </p>
            </fieldset>
            <fieldset className="travel-log-entry">
              <legend>
                July 29, 2021 | 08:13 P.M. |<span> Sedona, AZ</span>
              </legend>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, commodi! Officia dicta laborum vitae recusandae
                obcaecati? Odio quos exercitationem non laudantium ea debitis
                suscipit laboriosam, fuga tempora ut mollitia maiores. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                reiciendis a illo perspiciatis quis facilis cum dolorem
                perferendis dolorum, incidunt laborum hic et rerum, aliquid
                nobis voluptatem nisi, ad harum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Alias eos debitis, unde assumenda
                aspernatur dolor illo! Et numquam cum fugit exercitationem
                veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
                voluptatibus aliquid.
              </p>
            </fieldset>
            <fieldset className="travel-log-entry">
              <legend>
                July 30, 2021 | 03:11 P.M. |<span> Sedona, AZ</span>
              </legend>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, commodi! Officia dicta laborum vitae recusandae
                obcaecati? Odio quos exercitationem non laudantium ea debitis
                suscipit laboriosam, fuga tempora ut mollitia maiores. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                reiciendis a illo perspiciatis quis facilis cum dolorem
                perferendis dolorum, incidunt laborum hic et rerum, aliquid
                nobis voluptatem nisi, ad harum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Alias eos debitis, unde assumenda
                aspernatur dolor illo! Et numquam cum fugit exercitationem
                veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
                voluptatibus aliquid.
              </p>
            </fieldset>
            <fieldset className="travel-log-entry">
              <legend>
                July 31, 2021 | 09:26 A.M. |<span> Flagstaff, AZ</span>
              </legend>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, commodi! Officia dicta laborum vitae recusandae
                obcaecati? Odio quos exercitationem non laudantium ea debitis
                suscipit laboriosam, fuga tempora ut mollitia maiores. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                reiciendis a illo perspiciatis quis facilis cum dolorem
                perferendis dolorum, incidunt laborum hic et rerum, aliquid
                nobis voluptatem nisi, ad harum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Alias eos debitis, unde assumenda
                aspernatur dolor illo! Et numquam cum fugit exercitationem
                veritatis omnis! Esse, doloremque aperiam. Minus quibusdam
                voluptatibus aliquid.
              </p>
            </fieldset>
          </div>
        </section>
      ) : props.view === "Bucket List" ? (
        <section id="bucket-list-section">Bucket List Section</section>
      ) : props.view === "Souvenirs" ? (
        <section id="souvenir-section">Souvenirs Section</section>
      ) : null}
    </div>
  );
};
export default ProfilePage;
