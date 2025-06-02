import { check } from "k6";
import http from "k6/http";
import { EnvConfig } from "../config/env.js";
import { ThresholdsConfig } from "../config/thresholds.js";

const Config = EnvConfig.dev;
const thresholds = ThresholdsConfig.common;

export const options = {
  thresholds: thresholds,
  vus: 10, // Number of virtual users
  duration: "10s", // How long the test runs
};

export default function () {
  const res = http.get(`${Config.BASE_URL}/views`);
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
}
