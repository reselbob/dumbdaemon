A container that has a daemon that does nothing more than use a cron job to log output every second by default, or
according to the interval declared in the env var DUMBDAEMON_EMISSION_INTERVAL.

# Env Vars

 `DUMBDAEMON_STOOGE`
 
 The name of the [stooge](https://en.wikipedia.org/wiki/The_Three_Stooges) that will be emitted in the log output.
 You can assign a known stooge such as `moe`, `larry` or `curly`, or you can make one up to suit your very particular need. The default value is UNKNOWN
 
`DUMBDAEMON_EMISSION_INTERVAL`
 
 A string that describes the interval at which to emit a log entry. Use [standard cron format](http://www.nncron.ru/help/EN/working/cron-format.htm) notation.
 The default value is `* * * * * *`.
 
 # Assigning `dumbdaemon` to a node in a Kubernetes cluster
 
Go the Katacoda Kubernete Playbround [here](https://katacoda.com/courses/ubuntu/playground).

Clone this source code into the Katacoda Kubernetes Playground

`git clone https://github.com/reselbob/dumbdaemon.git`
 

Navigate to the source code directory:

`cd dumbdaemon`

Apply the following manifest to attempt to create the daemonset.

`kubectrl apply -f manifest/daemonset.yaml`
