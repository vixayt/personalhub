import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import Modal from 'react-bootstrap/Modal';

function Stocks({ data }) {
  let noData;
  if (data === undefined || data === null) {
    noData = true;
  }
  if (process.browser) {
    if (window.innerWidth < 800) {
      console.log('graph may not work');
    }
  }
  const [stockData, setStockData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (stock) => {
    setShow(true);
    setStockData(stock);
  };
  const CustomToolTip = ({ active, payload }) => {
    if (!active) return null;
    if (payload && payload[0]) {
      return (
        <div>
          Date: {payload[0].payload.date}
          <br />
          Close: {payload[0].payload.close}
        </div>
      );
    }
    return null;
  };
  return (
    <Layout>
      <Head>
        <title>Home Stocks</title>
      </Head>
      <br />
      {noData ? (
        <div>No data available.</div>
      ) : (
        data.map((stock) => {
          const today = stock.chart[stock.chart.length - 1];
          let stockStatus = 'success';
          if (today.change < 0) {
            stockStatus = 'danger';
          } else if (today.change === 0) {
            stockStatus = 'secondary';
          }
          return (
            <div
              className={`card border-${stockStatus} m-1`}
              style={{ width: '18rem', display: 'inline-block' }}
              key={stock.quote.symbol}
              onClick={() => handleShow(stock)}
            >
              <div className="card-body">
                <h5 className="card-title">
                  {stock.quote.symbol}
                  <span className={`badge float-right badge-${stockStatus}`}>
                    Change: {today.change}
                  </span>
                </h5>
                <p className="card-text">Close: {today.close}</p>
                <p className="card-text">High: {today.high}</p>
                <p className="card-text">Low: {today.low}</p>
              </div>
            </div>
          );
        })
      )}
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-dialog modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{stockData?.quote?.symbol}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LineChart
            width={700}
            height={300}
            data={stockData.chart}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<CustomToolTip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="close"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const stocks = ['AMD', 'AMZN', 'ARKK', 'COST', 'INTC', 'MSFT'];
  let data = [];

  for (const stock of stocks) {
    const res = await fetch(
      `https://z8mcjsdp5a.execute-api.us-west-2.amazonaws.com/Prod/${stock}`
    );
    const resJson = await res.json();
    if (resJson.message.includes('Error')) {
      return { props: {} };
    } else {
      data.push(resJson.stockData[stock]);
    }
  }

  // Pass data to the page via props
  return { props: { data } };
}

export default Stocks;
