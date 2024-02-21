import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";

const BookingPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState();
  const [timings, setTimings] = useState();
  const [isAvailable, setIsAvailable] = useState();

  const params = useParams();
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <Layout>
        <h3>BookingPage</h3>
        <div className="container">
          {doctors && (
            <div>
              <h4>
                Dr. {doctors.firstName} {doctors.lastName}
              </h4>
              <h4>Fees: {doctors.feesPerConsultation}</h4>
              {doctors.timings && doctors.timings.length >= 2 && (
                <h4>
                  Timings: {moment(doctors.timings[0]).format("HH:mm")} -{" "}
                  {moment(doctors.timings[1]).format("HH:mm")}
                </h4>
              )}
              <div className="d-flex flex-column w-50">
                <DatePicker
                  className="m-2"
                  format="DD-MM-YYYY"
                  onChange={(value) =>
                    setDate(moment(value).format("DD-MM-YYYY"))
                  }
                />
                <TimePicker.RangePicker
                  className="m-2"
                  format="HH:mm"
                  onChange={(values) =>
                    setTimings([
                      moment(values[0]).format("HH:mm"),
                      moment(values[1]).format("HH:mm"),
                    ])
                  }
                />

                <button className="btn btn-primary mt-2">
                  Check Availability
                </button>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default BookingPage;
