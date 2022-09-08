// react import
import React from "react";
// 'AccountInfoPage' child component [stateless functional]
const AccountInfoPage = (props) => {
  return (
    <div id="account-info-page" className="page">
      <span id="account-info-hdr">Account Info.</span>
      <div id="credentials-info">
        <button
          className="btn btn-success"
          onClick={props.accountUpdateDisplay}
        >
          Change Username
        </button>
        <button
          className="btn btn-primary"
          onClick={props.accountUpdateDisplay}
        >
          Change Password
        </button>
        <button className="btn btn-danger" onClick={props.handleAccountDelete}>
          Delete Account
        </button>
      </div>
      <hr />
      <div id="profile-info">
        <span>Update Profile</span>
        <fieldset id="update-bio">
          <label htmlFor="">Bio:</label>
          <textarea placeholder={"Enter Text Here..."}></textarea>
        </fieldset>
        <fieldset id="update-favorite-activites">
          <label htmlFor="">Favorite Acitvities & Destinations</label>
          <div className="activity-list">
            <div className="activity-list-item">
              <i className="fas fa-hiking"></i>
              <span>Hiking</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="activity-list-item">
              <i className="fas fa-road"></i>
              <span>Road Trips</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="activity-list-item">
              <i className="fas fa-swimmer"></i>
              <span>Swimming</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="activity-list-item">
              <i className="fas fa-campground"></i>
              <span>Camping</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="activity-list-item">
              <i className="fas fa-utensils"></i>
              <span>Dining Out</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="activity-list-item">
              <i className="fas fa-seedling"></i>
              <span>Gardening</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="activity-list-item">
              <i className="fas fa-ghost"></i>
              <span>Ghost Hunting</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="activity-list-item">
              <i className="fas fa-mask"></i>
              <span>Masquerade Balls</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="activity-list-item">
              <i className="fas fa-paw"></i>
              <span>Fur Baby Playtime</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="activity-list-item">
              <i className="fas fa-user-tie"></i>
              <span>Dressing Fancy</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="activity-list-item">
              <i className="fas fa-record-vinyl"></i>
              <span>Record Collecting</span>
              <button className="btn btn-danger">&times;</button>
            </div>
          </div>
          <div className="destination-list">
            <div className="destination-list-item">
              <i className="far fa-compass"></i>
              <span>Uruguay</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="destination-list-item">
              <i className="fas fa-compass"></i>
              <span>Argentina</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="destination-list-item">
              <i className="far fa-compass"></i>
              <span>Brazil</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="destination-list-item">
              <i className="fas fa-compass"></i>
              <span>Chile</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="destination-list-item">
              <i className="far fa-compass"></i>
              <span>Colombia</span>
              <button className="btn btn-danger">&times;</button>
            </div>
            <div className="destination-list-item">
              <i className="fas fa-compass"></i>
              <span>Peru</span>
              <button className="btn btn-danger">&times;</button>
            </div>
          </div>
        </fieldset>
      </div>
      {/* ----- modal ----- */}
      <div className="modal" id="id09">
        <div className="modal-dialog">
          <div className="modal-content" id="">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={props.handleHide}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="w3-row w3-container w3-border-bottom w3-light-grey">
                <div className="w3-col" id="update-hdr">
                  {"· " +
                    props.user.user_info.name.first_name +
                    " " +
                    props.user.user_info.name.last_name +
                    " ·"}
                </div>
                <br />
              </div>
              <div className="w3-row box">
                <div className="w3-col">
                  <div className="" id="">
                    Username:
                  </div>
                  <b>{props.user.log_info.username}</b>
                </div>
                <div className="w3-col">
                  <div className="" id="">
                    E-mail:
                  </div>
                  <b>{props.user.user_info.email}</b>
                </div>
                <br />
              </div>
              <div className="w3-row box w3-border-bottom">
                {props.updateToggle === "Change Username" ? (
                  <div className="w3-col">
                    <label>New Username:</label>
                    <br />
                    <input
                      id="update-username"
                      type="text"
                      placeholder="Enter New Username"
                    ></input>
                    <div id="update-alert"></div>
                  </div>
                ) : (
                  <div className="w3-col">
                    <label>New Password:</label>
                    <br />
                    <input
                      id="update-password"
                      type="text"
                      placeholder="Enter New Password"
                    ></input>
                    <div id="update-alert"></div>
                  </div>
                )}
                <br />
                <br />
                <br />
                <br />
              </div>
              <br />
              <div className="w3-container w3-light-grey">
                <button
                  onClick={props.updateUserAccount}
                  id="account-update-btn"
                  className="btn btn-success mx-1 my-2 px-3 py-2"
                >
                  Update Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="id11">
        <div className="modal-dialog">
          <div className="modal-content" id="">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={props.handleHide}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="w3-row w3-container w3-border-bottom w3-light-grey">
                <div className="w3-col" id="delete-hdr">
                  {"· " +
                    props.user.user_info.name.first_name +
                    " " +
                    props.user.user_info.name.last_name +
                    " ·"}
                </div>
                <br />
              </div>
              <div className="w3-row box">
                <div className="w3-col">
                  <div className="" id="">
                    Username:
                  </div>
                  <b>{props.user.log_info.username}</b>
                </div>
                <div className="w3-col">
                  <div className="" id="">
                    E-mail:
                  </div>
                  <b>{props.user.user_info.email}</b>
                </div>
                <br />
              </div>
              <div className="w3-row box w3-border-bottom">
                <div className="w3-col">
                  <label>Verify password here to delete account:</label>
                  <br />
                  <input
                    id="delete-verify"
                    type="text"
                    placeholder="Enter Password"
                  ></input>
                  <div id="delete-alert"></div>
                </div>
                <br />
                <br />
                <br />
                <br />
              </div>
              <br />
              <div className="w3-container w3-light-grey">
                <button
                  onClick={props.accountDelete}
                  className="btn btn-danger mx-1 my-2 px-3 py-2"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountInfoPage;
