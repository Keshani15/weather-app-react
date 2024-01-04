import "./Weather.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Weather() {
  return (
    <div className="Wrapper">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-6 ms-4">
              <Form.Control
                type="Search"
                placeholder="Enter City..."
                autoFocus
              />
            </div>
            <div className="col-2">
              <Button type="Submit" variant="primary">
                Search
              </Button>
            </div>
            <div className="col-2">
              <Button variant="success">Current</Button>
            </div>
          </div>
        </form>
        <h2 className="Display-City ms-4 mt-2">Johannesburg</h2>
        <ul className="Day-Time">
          <li>Thursday 15:38</li>
          <li>Clouds</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Sunny"
              id="icon"
            />
            <strong className="Temperature">24</strong>
            <span className="Units"> °C </span>
          </div>
          <div className="col-6 mt-4">
            <ul>
              <li>Precipitation: 82%</li>
              <li>Wind: 4km/h</li>
            </ul>
          </div>
        </div>
        <div className="row ms-4 Forecast">
          <div className="col-2">Fri </div>
          <div className="col-2">Sat </div>
          <div className="col-2">Sun </div>
          <div className="col-2">Mon </div>
          <div className="col-2">Tue </div>
        </div>
        <div className="row ms-2">
          <div className="col-2">
            <div className="Forecast-Image ms-2">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Sunny"
                id="icon"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="Forecast-Image ms-4">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAepJREFUaN7tmd2thCAQhSnBEijBEmjgJpZgCZZgCZZgCXZwLcFX3yiBDlhIhhvC5dcdFzeB5LzsTtjz4cwwZomUknyzSANoAA2gATQANICSdZ4nA/Wk0ioGUGY7pVVJKElLXGl6NIAySMGojGh9MsCRMG80Pw5AmRozzRvppzVoGNCk068mwFYI4JPArpMSgB0BwGj5doAVutnsdDNdYwwVAH5o8rTNqzoyGsKIAqAvKETjRkNGQxC5BR8EuMm8vJCO0cKPAXBs83DyXcF9YmvKBoDHfIf5/o2DESUAM7L5HU6eez4fraFwzEwvYQo9BLDfcPrM2dek02jd1vZnOfuyEMCKaH52OwqMGaF04vBdDsQaApgQT546Jy9g/1gtcHgSqUxYQgD0xrwvgR9gn5D6WBtdEC6s6e55KQbQWd3hijqECVakxoq33okzXj03pFpiNQCOT4zfSYCf35MprUpHaBMrhltzlKwOoAx1SkJJgnqPeR3DrRhmXYZY6q8CLJaxP3NOzOzEjOSDKwigT9sxtnvM01RMTYDdMUc9AG5M/wgAnQaOsdljfnBiFlJh/QPwFK4u0C5RuMKNqQngFu7wtMJNAYhUUebE1ATYYoULAFvNwk0BmFuVZty8lFRe7S+mBtAAGkADeFsvKpKWeAy6FowAAAAASUVORK5CYII="
                alt="Rain"
                id="icon"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="Forecast-Image ms-4 ps-2">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                alt="Mostly Raining"
                id="icon"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="Forecast-Image ms-5">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAepJREFUaN7tmd2thCAQhSnBEijBEmjgJpZgCZZgCZZgCXZwLcFX3yiBDlhIhhvC5dcdFzeB5LzsTtjz4cwwZomUknyzSANoAA2gATQANICSdZ4nA/Wk0ioGUGY7pVVJKElLXGl6NIAySMGojGh9MsCRMG80Pw5AmRozzRvppzVoGNCk068mwFYI4JPArpMSgB0BwGj5doAVutnsdDNdYwwVAH5o8rTNqzoyGsKIAqAvKETjRkNGQxC5BR8EuMm8vJCO0cKPAXBs83DyXcF9YmvKBoDHfIf5/o2DESUAM7L5HU6eez4fraFwzEwvYQo9BLDfcPrM2dek02jd1vZnOfuyEMCKaH52OwqMGaF04vBdDsQaApgQT546Jy9g/1gtcHgSqUxYQgD0xrwvgR9gn5D6WBtdEC6s6e55KQbQWd3hijqECVakxoq33okzXj03pFpiNQCOT4zfSYCf35MprUpHaBMrhltzlKwOoAx1SkJJgnqPeR3DrRhmXYZY6q8CLJaxP3NOzOzEjOSDKwigT9sxtnvM01RMTYDdMUc9AG5M/wgAnQaOsdljfnBiFlJh/QPwFK4u0C5RuMKNqQngFu7wtMJNAYhUUebE1ATYYoULAFvNwk0BmFuVZty8lFRe7S+mBtAAGkADeFsvKpKWeAy6FowAAAAASUVORK5CYII="
                alt="Rain"
                id="icon"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="Forecast-Image ms-5">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Sunny"
                id="icon"
              />
            </div>
          </div>
        </div>
        <div className="row ms-4 Forecast">
          <div className="col-2">
            <div>23°</div>
          </div>
          <div className="col-2">
            <div>15°</div>
          </div>
          <div className="col-2">
            <div>12°</div>
          </div>
          <div className="col-2">
            <div>15°</div>
          </div>
          <div className="col-2">
            <div>20°</div>
          </div>
        </div>
      </div>
      <footer className="ms-2">
        <a href="https://github.com/Keshani15/weather-app-react">
          Open source code,
        </a>{" "}
        by Keshani Naidoo
      </footer>
    </div>
  );
}
