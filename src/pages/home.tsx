import React from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import {Chart4} from "../components/chart-4";
import {Chart5} from "../components/chart-5";
import {Chart6} from "../components/chart-6";
import {Chart8} from "../components/chart-8";
import {Chart9} from "../components/chart-9";
import {Chart7} from "../components/chart-7";


export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className = "home">
      <header style={{backgroundImage: `url(${headerBg}`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className=" section2">
          <Chart3/>
          <Chart4/>
        </section>
        <section className="bordered section3">
          <Chart5/>
        </section>
        <section className="bordered section4">
          <Chart6/>
          <div className="年龄段 bordered">
            <h2>犯罪人员年龄分部</h2>
            <div className="charts">
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
        </section>
        <section className="bordered section5"></section>
      </main>
      <footer>
         Xinhai(Xin-hai))  2021-{year}
         {/* 添加底部信息*/}
      </footer>
    </div>
  );
};
