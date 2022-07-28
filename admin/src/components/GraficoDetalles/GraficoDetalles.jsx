import React from "react";
import SideBar from "../SideBar/SideBar";
import "./GraficoDetalles.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  grafico,
  graficoById,
  clearCache,
  getAllProducts,
} from "../../redux/actions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loading from "../Loading/Loading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function GraficoById() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const graficoId = useSelector((state) => state.graficosId);
  const userToken = localStorage.user;

  useEffect(() => {
    dispatch(graficoById(id, userToken));
  }, []);

  const data = [];
  graficoId.map((item) => {
    data.push({
      date: item.date[0],
      vendidos: item.quantity.length,
    });
  });

  return (
    <div className="coontenedor">
      <SideBar />
      <div className="neewcontenedor">
        <div className="topgrafic">
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <button>
              <ArrowBackIcon /> ATRAS
            </button>
          </Link>
          <h1 className="titleGraficoId"> Gráfico de {graficoId.model}</h1>
        </div>
        {data.length === 0 ? (
          <div className="buttonloading">
            <Loading className="loading" />
          </div>
        ) : (
          <ResponsiveContainer width="95%" height="80%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={30}
            >
              <XAxis className="xx" dataKey="date" />
              <YAxis dataKey="vendidos" />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="vendidos"
                fill="#DD8643"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
