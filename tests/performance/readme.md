- Download prometheues
- Run prometheus.exe --web.enable-remote-write-receiver
- Run Prometheues at startup (task scheduler)
- Install Grafana
- Setup Grafana k6 Dashboard

* Run tests in CI
  - foreach ($file in Get-ChildItem ./tests -Filter \*.js) {
    k6 run $file.FullName
    }
