`curl https://api.github.com/users/jcasimir/events/public > jcasimir.json`

`cat jcasimir.json | ruby -r json  -e 'puts JSON.parse($stdin.read).select { |e| e["type"] == "PushEvent" }.flat_map { |e| e["payload"]["commits"] }.map { |e| e["message"] }.to_json' |  jq . > jcasimir.js`