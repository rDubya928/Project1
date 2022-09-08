// react import
import React from "react";
// 'MyCirclePage' child component [stateless functional]
const MyCirclePage = (props) => {
  let user = props.userLoggedIn.user_info;
  let filtered = props.friends.filter(
    (item) => item.user_info.name.first_name !== user.name.first_name
  );
  let companions = filtered.map((item, i) => (
    <div className="circle-list-entry" key={i}>
      <i className="fas fa-user-circle"></i>
      <span>
        {item.user_info.name.first_name + " " + item.user_info.name.last_name}
      </span>
      <br />
      <span>{item.user_info.city + ", " + item.user_info.state}</span>
      {item.log_info.loggedIn === false ? (
        <span className="circle-online-status">
          <div className="status-dot offline"></div>
          Offline
        </span>
      ) : item.log_info.loggedIn === true ? (
        <span className="circle-online-status">
          <div className="status-dot online"></div>
          Online
        </span>
      ) : null}
    </div>
  ));
  return (
    <div id="my-circle-page" className="page">
      <span id="my-circle-hdr">My Circle</span>
      <div id="circle-list">{companions}</div>
    </div>
  );
};
export default MyCirclePage;
