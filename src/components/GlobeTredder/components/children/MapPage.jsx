// react, d3 and topojson-client imports
import React from "react";
import * as d3 from "d3/dist/d3.js";
import { feature } from "topojson-client";
// 'TidalWave' component displays tide api data [ES6 class]
class TidalWave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    d3.json("./data/team_data/tides_christmasIsland.json").then((data) => {
      data.extremes.forEach((d) => {
        d.datetime = new Date(d.datetime);
      });
      data.heights.forEach((d) => {
        d.datetime = new Date(d.datetime);
      });
      this.renderWave(data.extremes, data.heights);
    });
  }
  renderWave(arr, arr2) {
    const height = 240;
    const width = 480;
    const svg = d3
      .select("#tidal-graph")
      .append("svg")
      .attr("id", "svg-canvas")
      .attr("viewBox", "14 10 450 250");
    const xData = (d) => d.datetime;
    const yData = (d) => d.height;
    const padding = {
      left: 8,
      right: 20,
      top: 0,
      bottom: 50,
    };
    const displayWidth = width - (padding.left + padding.right);
    const displayHeight = height - (padding.top + padding.bottom);
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(arr, xData))
      .range([0, displayWidth]);
    const xScale2 = d3
      .scaleTime()
      .domain(d3.extent(arr2, xData))
      .range([0, displayWidth]);
    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(arr, yData))
      .range([displayHeight, 0]);
    const yScale2 = d3
      .scaleLinear()
      .domain(d3.extent(arr2, yData))
      .range([displayHeight, 0]);
    const mainGraph = svg
      .append("g")
      .attr("transform", `translate(${padding.left}, ${padding.bottom})`);
    const newLine = d3
      .line()
      .x((d) => xScale(xData(d)))
      .y((d) => yScale(yData(d)))
      .curve(d3.curveBasis);
    const newLine2 = d3
      .line()
      .x((d) => xScale2(xData(d)))
      .y((d) => yScale2(yData(d)))
      .curve(d3.curveBasis);
    mainGraph.append("path").attr("id", "line").attr("d", newLine(arr));
    mainGraph.append("path").attr("id", "line2").attr("d", newLine2(arr2));
    const xAxis = d3.axisBottom(xScale).tickSize(0);
    const zero = displayHeight / 2;
    mainGraph.append("g").call(xAxis).attr("transform", `translate(0,${zero})`);
    const legend = mainGraph
      .append("g")
      .attr("transform", `translate(20, -10)`)
      .attr("id", "legend");
    legend
      .append("text")
      .attr("stroke", "#20c997")
      .text("20 yr. Average")
      .attr("x", 85)
      .attr("y", 0);
    legend
      .append("rect")
      .attr("fill", "#20c997")
      .attr("height", 4)
      .attr("width", 10)
      .attr("x", 65)
      .attr("y", -8);
    legend
      .append("text")
      .attr("stroke", "#17a2b8")
      .text("Projected")
      .attr("x", 225)
      .attr("y", 0);
    legend
      .append("rect")
      .attr("fill", "#17a2b8")
      .attr("height", 4)
      .attr("width", 10)
      .attr("x", 205)
      .attr("y", -8);
  }
  render() {
    return <div id="tidal-graph"></div>;
  }
}
//'TidalWaveTwo' component displays an alternate d3 tide graph to demonstrate variety [ES6 class]
class TidalWaveTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    d3.json("./data/team_data/tides.json").then((data) => {
      data.extremes.forEach((d) => {
        d.datetime = new Date(d.datetime);
      });
      data.heights.forEach((d) => {
        d.datetime = new Date(d.datetime);
      });
      this.renderWave(data.extremes, data.heights);
    });
  }
  renderWave(arr, arr2) {
    const height = 240;
    const width = 480;
    const svg = d3
      .select("#tidal-graph")
      .append("svg")
      .attr("id", "svg-canvas")
      .attr("viewBox", "14 10 450 250");
    const xData = (d) => d.datetime;
    const yData = (d) => d.height;
    const padding = {
      left: 8,
      right: 20,
      top: 0,
      bottom: 50,
    };
    const displayWidth = width - (padding.left + padding.right);
    const displayHeight = height - (padding.top + padding.bottom);
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(arr, xData))
      .range([0, displayWidth]);
    const xScale2 = d3
      .scaleTime()
      .domain(d3.extent(arr2, xData))
      .range([0, displayWidth]);
    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(arr, yData))
      .range([displayHeight, 0]);
    const yScale2 = d3
      .scaleLinear()
      .domain(d3.extent(arr2, yData))
      .range([displayHeight, 0]);
    const mainGraph = svg
      .append("g")
      .attr("transform", `translate(${padding.left}, ${padding.bottom})`);
    const newLine = d3
      .line()
      .x((d) => xScale(xData(d)))
      .y((d) => yScale(yData(d)))
      .curve(d3.curveBasis);
    const newLine2 = d3
      .line()
      .x((d) => xScale2(xData(d)))
      .y((d) => yScale2(yData(d)))
      .curve(d3.curveBasis);
    mainGraph.append("path").attr("id", "line").attr("d", newLine(arr));
    mainGraph.append("path").attr("id", "line2").attr("d", newLine2(arr2));
    const xAxis = d3.axisBottom(xScale).tickSize(0);
    const zero = displayHeight / 2;
    mainGraph.append("g").call(xAxis).attr("transform", `translate(0,${zero})`);
    const legend = mainGraph
      .append("g")
      .attr("transform", `translate(20, -10)`)
      .attr("id", "legend");
    legend
      .append("text")
      .attr("stroke", "#20c997")
      .text("20 yr. Average")
      .attr("x", 85)
      .attr("y", 0);
    legend
      .append("rect")
      .attr("fill", "#20c997")
      .attr("height", 4)
      .attr("width", 10)
      .attr("x", 65)
      .attr("y", -8);
    legend
      .append("text")
      .attr("stroke", "#17a2b8")
      .text("Projected")
      .attr("x", 225)
      .attr("y", 0);
    legend
      .append("rect")
      .attr("fill", "#17a2b8")
      .attr("height", 4)
      .attr("width", 10)
      .attr("x", 205)
      .attr("y", -8);
  }
  render() {
    return <div id="tidal-graph"></div>;
  }
}
// 'MoreInfo' component displays additional country information [ES6 class]
class MoreInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fiat: this.props.fiats[this.props.country.currencies[0]],
    };
  }
  render() {
    let borders = [];
    for (let i = 0; i < this.props.country.borders.length; i++) {
      this.props.countries.map((item) => {
        if (this.props.country.borders[i] === item.alpha3Code) {
          borders.push(item.name);
        }
        return borders;
      });
    }
    let languages = [];
    for (let i = 0; i < this.props.country.languages.length; i++) {
      this.props.languages.map((item) => {
        if (this.props.country.languages[i] === item.code) {
          languages.push(item);
        }
        return languages;
      });
    }
    let allLanguages = languages.map((index) => (
      <div className="w3-col s12">
        <div className="country-info">
          {index.language_name + "  - -  " + index.native_name}
        </div>
      </div>
    ));
    return (
      <div id="more-info-card">
        <div className="w3-row box w3-padding-16">
          <div className="w3-col s6">
            <label>Native Currency:</label>
            <div className="country-info">{this.state.fiat.currency_name}</div>
          </div>
          <div className="w3-col s6">
            <label>Exchange Rate/$1 USD:</label>
            <div className="country-info">
              {this.props.rates[this.props.country.currencies[0]].toFixed(2)}
            </div>
          </div>
        </div>
        <div className="w3-row box w3-padding-16">
          <div className="w3-col s12">
            <label>Border Countries :</label>
            <div className="country-info">{borders.join(", ")}</div>
          </div>
        </div>
        <div className="w3-row box w3-padding-16">
          <div className="w3-col s12">
            <label>Languages :</label>
            {allLanguages}
          </div>
        </div>
      </div>
    );
  }
}
// 'MapDisplay' component displays map in svg [ES6 class]
class MapDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const svg = d3.select("svg").attr("viewBox", "14 37 1572 800");
    const projection = d3.geoEquirectangular().scale(250);
    const pathGenerator = d3.geoPath().projection(projection);
    const g = svg.append("g");
    g.append("path")
      .attr("class", "sphere")
      .attr("d", pathGenerator({ type: "Sphere" }))
      .attr("transform", "translate(320, 180)");
    Promise.all([
      d3.tsv("./data/map_data/countryNames110m.tsv"),
      d3.json("./data/map_data/worldMap110m.json"),
    ]).then(([tsvData, jsonData]) => {
      const countryName = tsvData.reduce((accumulator, d) => {
        accumulator[d.iso_n3] = {
          continent: d.continent,
          country: d.name,
        };
        return accumulator;
      }, {});
      const countries = feature(jsonData, jsonData.objects.countries);
      g.selectAll("path")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("id", (d) => `${countryName[d.id].country}`)
        .attr("class", (d) => {
          switch (`${countryName[d.id].continent}`) {
            case "North America":
              return "north-america country drag-container";
            case "South America":
              return "south-america country drag-container";
            case "Europe":
              return "europe country drag-container";
            case "Africa":
              return "africa country drag-container";
            case "Asia":
              return "asia country drag-container";
            case "Oceania":
              return "oceania country drag-container";
            case "Antarctica":
              return "antarctica country drag-container";
            case "Seven seas (open ocean)":
              return "open-ocean country drag-container";
            default:
              return `${countryName[d.id].continent}`;
          }
        })
        .attr("d", pathGenerator)
        .attr("transform", "translate(320, 180)")
        .append("title")
        .text((d) => `${countryName[d.id].country}`);
    });
    // event listener to grab country data for modal
    document.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.classList[1] === "country") {
        fetch("./data/team_data/countries.json")
          .then((response) => response.json())
          .then((data) => {
            let test = data.filter((x) => x.name === event.target.id);
            this.props.submitCountryInfo(test[0]);
          });
      }
    });
    // functionality for dragging pins to map
    const draggables = document.querySelectorAll(".draggable");
    const containers = document.querySelectorAll(".drag-container");
    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });
      draggable.addEventListener("dragend", (e) => {
        draggable.classList.remove("dragging");
      });
    });
    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
          container.appendChild(draggable);
        } else {
          container.insertBefore(draggable, afterElement);
        }
      });
    });
    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
      ];
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }
  }
  componentDidUpdate() {
    // functionality for dragging pins to map
    const draggables = document.querySelectorAll(".draggable");
    const containers = document.querySelectorAll(".drag-container");
    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", (e) => {
        draggable.classList.remove("dragging");
      });
    });
    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
          container.appendChild(draggable);
        } else {
          container.insertBefore(draggable, afterElement);
        }
      });
    });
    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
      ];
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }
  }
  render() {
    return (
      <div id="map-svg">
        <svg></svg>
      </div>
    );
  }
}
// 'WeatherCell' component displays weather information [stateless functional]
const WeatherCell = ({
  date,
  high,
  low,
  description,
  wind_speed,
  wind_gust,
  dir,
}) => {
  return (
    <span id="weather-cell">
      <div id="date">{date}</div>
      <span id="high-temp">{high}</span>
      <span id="low-temp">/{low}</span>
      <div id="description">{description}</div>
      <div id="wind">
        <span id="enhance">{wind_speed}</span>-
        <span id="enhance">{wind_gust}</span>mph
      </div>
      <div>{dir}</div>
    </span>
  );
};
// 'MapPage' child component [stateless functional]
const MapPage = (props) => {
  const weatherData = props.weatherData.map((x, i) => (
    <WeatherCell
      key={i}
      date={new Date(x.datetime).toDateString().match(/\w{3} \w{3} \d{2}/)}
      high={(x.high_temp * (9 / 5) + 32).toFixed(0)}
      low={(x.low_temp * (9 / 5) + 32).toFixed(0)}
      description={x.weather.description}
      wind_speed={(x.wind_spd.toFixed(0) * 2.24).toFixed(0)}
      wind_gust={(x.wind_gust_spd.toFixed(0) * 2.24).toFixed(0)}
      dir={x.wind_cdir}
    />
  ));
  return (
    <div id="map-page" className="page">
      <MapDisplay submitCountryInfo={props.submitCountryInfo} />
      <span id="map-legend" className="">
        <span id="map-legend-hdr">Map Legend</span>
        <span className="keys">
          <div id="na-key" className="key-color drag-container"></div>
          <span className="key-label">North America</span>
        </span>
        <span className="keys">
          <div id="sa-key" className="key-color drag-container"></div>
          <span className="key-label">South America</span>
        </span>
        <span className="keys">
          <div id="eu-key" className="key-color drag-container"></div>
          <span className="key-label">Europe</span>
        </span>
        <span className="keys">
          <div id="af-key" className="key-color drag-container"></div>
          <span className="key-label">Africa</span>
        </span>
        <span className="keys">
          <div id="as-key" className="key-color drag-container"></div>
          <span className="key-label">Asia</span>
        </span>
        <span className="keys">
          <div id="oc-key" className="key-color drag-container"></div>
          <span className="key-label">Oceania</span>
        </span>
        <span className="keys">
          <div id="an-key" className="key-color drag-container"></div>
          <span className="key-label">Antarctica</span>
        </span>
        <span className="keys">
          <div id="oo-key" className="key-color drag-container"></div>
          <span className="key-label">Open Ocean</span>
        </span>
        <div id="map-pin-container" className="drag-container">
          {[...props.mapPins]}
        </div>
        <button
          id="map-pin-btn"
          className="btn btn-success"
          onClick={props.mapPinCreator}
        >
          Add <i className="fas fa-map-pin"></i> To Map
        </button>
      </span>
      <React.Fragment>
        {/* ----- modal ----- */}
        <div className="modal" id="id01">
          <div className="modal-dialog">
            <div className="modal-content" id="id02">
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
                  <div className="w3-col s6 country-info" id="country-name">
                    {props.country.name}
                  </div>
                  <div className="w3-col s6 country-info" id="country-native">
                    {props.country.nativeName}
                  </div>
                </div>
                <div className="w3-row box">
                  <div className="w3-col s6">
                    <label>Capital:</label>
                    <div className="country-info" id="country-capitol">
                      {props.country.capital}
                    </div>
                  </div>
                  <div className="w3-col s6">
                    <label>Global Region:</label>
                    <div className="country-info" id="country-region">
                      {props.country.region}
                    </div>
                  </div>
                </div>
                <div className="w3-row box  w3-border-bottom w3-padding-16">
                  <div className="w3-col s6">
                    <label>Population:</label>
                    <div className="country-info" id="country-population">
                      {props.country.population.toLocaleString("en", {
                        maximumFractionDigits: 0,
                      })}
                    </div>
                  </div>
                  <div className="w3-col s6">
                    <label>Subregion:</label>
                    <div className="country-info" id="country-region">
                      {props.country.subregion}
                    </div>
                  </div>
                </div>
                <div className="w3-container w3-light-grey">
                  <button
                    onClick={props.handleWeatherDisplay}
                    className="btn btn-success mx-1 my-2 px-3 py-2"
                  >
                    Weather
                  </button>
                  <button
                    onClick={props.handleTideDisplay}
                    className="btn btn-primary mx-1 my-2 px-3 py-2"
                  >
                    Tides
                  </button>
                  <button
                    // onClick={}
                    className="btn btn-danger mx-1 my-2 px-3 py-2"
                  >
                    Favorite
                  </button>
                  <button
                    onClick={props.handleMoreDisplay}
                    className="btn btn-warning mx-1 my-2 px-3 py-2"
                  >
                    More Info
                  </button>
                </div>
              </div>
              <div className="modal-footer" id="id03">
                {props.country.region === "Asia" ||
                props.country.region === "Americas" ? (
                  <TidalWave />
                ) : (
                  <TidalWaveTwo />
                )}
              </div>
              <div className="modal-footer" id="id04">
                <div id="weather-cell-container">{weatherData.reverse()}</div>
              </div>
              <div className="" id="id05">
                {props.moreInfoToggle === true ? (
                  <MoreInfo
                    languages={props.languages}
                    countries={props.countries}
                    country={props.country}
                    rates={props.rates}
                    fiats={props.fiats}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};
export default MapPage;
