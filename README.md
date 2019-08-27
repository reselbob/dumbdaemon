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
 
Go the Katacoda Kubernete Playbround [here](https://katacoda.com/courses/kubernetes/playground).

Clone this source code into the Katacoda Kubernetes Playground

`git clone https://github.com/reselbob/dumbdaemon.git`
 

Navigate to the source code directory:

`cd dumbdaemon`

Apply the following manifest to attempt to create the daemonset.

`kubectl apply -f k8s/daemonset.yaml`

Now, see if any pods are running

`kubectl get pods`

You should see a response:

`No resources found.`

Also, take a fast look at the daemonset:

`kubectl get ds`

Notice from the result below that the daemonset exists but that nothing is running. Also notice that the
daemonset has a node selector, `stooge=moe `.

```text
NAME             DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
dumb-daemonset   0         0         0       0            0           stooge=moe      38s
```


Why aren't things working? Take a look at the manifest for the daemonset:

`cat k8s/daemonset.yaml`

Notice that the container has an attribute, `nodeSelector` set to `stooge=moe`.

When you run, `kubectl describe node node01` you'll observe that `node01` has no label `stooge=moe`.

So, let's add the label to the node.

`kubectl label node node01 stooge=moe`.

Now, take another look at the daemonset:

`kubectl get ds`

Here's the result. The daemonset is indeed running because the label has been added to the node.

```text
NAME             DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
dumb-daemonset   1         1         0       1            0           stooge=moe      9m7s
```

Next, let take a look the logs from the daemonset's container. Get the pod name:

`kubectrl get pods`
