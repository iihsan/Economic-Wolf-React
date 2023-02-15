
import axios from "axios";
export const GET_GRAPH_DATA = "GET_GRAPH_DATA";

export const getGraphData = (onSuccess) => async (dispatch) => {
  const axiosrequest1 = axios.get(
    "http://wolf.skipems.com/KSE100Api/"
  );
  const axiosrequest2 = axios.get(
    "http://wolf.skipems.com/GoldApi/"
  );
  const axiosrequest3 = axios.get(
    "http://wolf.skipems.com/USDToPKRApi/"
  );
  const axiosrequest4 = axios.get(
    "http://wolf.skipems.com/ExportsApi/"
  );
  const axiosrequest5 = axios.get(
    "http://wolf.skipems.com/ImportsApi/"
  );
  const axiosrequest6 = axios.get(
    "http://wolf.skipems.com/RemittancesApi/"
  );
  const axiosrequest7 = axios.get(
    "http://wolf.skipems.com/LSMApi/"
  );
  const axiosrequest8 = axios.get(
    "http://wolf.skipems.com/TAXApi/"
  );
  const axiosrequest9 = axios.get(
    "http://wolf.skipems.com/CurrentAccountApi/"
  );
  const axiosrequest10 = axios.get(
    "http://wolf.skipems.com/DebtApi/"
  );
  const axiosrequest11 = axios.get(
    "http://wolf.skipems.com/InflationApi/"
  );
  const axiosrequest12 = axios.get(
    "http://wolf.skipems.com/FXApi/"
  );
  const axiosrequest13 = axios.get(
    "http://wolf.skipems.com/InvestmentApi/"
  );
  // you could also use destructuring to have an array of responses
  await axios
    .all([
      axiosrequest1,
      axiosrequest2,
      axiosrequest3,
      axiosrequest4,
      axiosrequest5,
      axiosrequest6,
      axiosrequest7,
      axiosrequest8,
      axiosrequest9,
      axiosrequest10,
      axiosrequest11,
      axiosrequest12,
      axiosrequest13,
    ])
    .then(
      axios.spread(function (
        res1,
        res2,
        res3,
        res4,
        res5,
        res6,
        res7,
        res8,
        res9,
        res10,
        res11,
        res12,
        res13
      ) {
    
        var response = [
          {
            id: 1,
            name: "Daily",
            data: [res1.data, res3.data, res2.data],
          },
          {
            id: 2,
            name: "Monthly",
            data: [
              res4.data,
              res5.data,
              res6.data,
              res7.data,
              res8.data,
              res9.data,
              res10.data,
              res11.data,
              res12.data,
              res13.data,
            ],
          },
        ];

        dispatch({ type: GET_GRAPH_DATA, payload: response });
      })
    );
};
