import { Tabs, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleMarkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("somthing went wrong");
    }
  };
  const handleDeleteAllRead = () => {};

  return (
    <Layout>
      <h4 className="p-3 text-center">NotificationPage</h4>
      <Tabs>
        <Tabs.TabPane tab="unRead" key={0}>
          <div className="justify-content-end d-flex">
            <h4 className="p-2" onClick={handleMarkAllRead}>
              Mark All Read
            </h4>
          </div>
          {user?.notification.map((notificationMsgs) => {
            <div className="card" onClick={()=>navigate(notificationMsgs.onClickPath)} style={{cursor:"pointer"}}>
              <div className="card-text">{notificationMsgs.message}</div>
            </div>;
          })}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
          <div className="justify-content-end d-flex">
            <h4 className="p-2" onClick={handleDeleteAllRead}>
              Delete All Read
            </h4>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
};

export default NotificationPage;
