export const ThresholdsConfig = {
  common: {
    http_req_duration: ['p(99)<1000'],
    http_req_failed: ['rate<0.01'],
  },
  prod: {
    http_req_duration: ['p(99)<500'],
  },
};