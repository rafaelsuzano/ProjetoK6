import http from 'k6/http';
import { check, sleep } from 'k6';
console.log('Preparing the end-of-test summary...');
export let options = {
    stages: [
      { duration: '10s', target: 100 },
   //   { duration: '1h', target: 100 },
    //  { duration: '5m', target: 0 },
    ],
    thresholds: {
      http_req_failed: ['rate<=0.05'],
      http_req_duration: ['p(95)<=5000'],
    },
  };

export function handleSummary(data) {

    data.root_group.name = "Relatório de Teste -!!! 🚀";

    return {
        "resultado.json": JSON.stringify(data),
    };
}

export default function () {
    const res = http.get('https://quickpizza.grafana.com/');
   // check(res, { 'status was 200': (r) => r.status == 200 },



        res, { 'status was 200': (r) => r.timings.duration < 500 }
        check(res, { 'status was 200': (r) => r.status == 200 });



    sleep(1);
}



