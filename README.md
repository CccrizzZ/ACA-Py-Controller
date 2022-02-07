## ACA-Py-Controller


### The Client :video_game:
- `./acapy-controller`
- Build with React.js.
- Front end app of the express controller server.
- Default running on port 3000.
```haskell
npm i react-scripts
npm i
npm start
```
### The Server :computer:
- `./acapy-express-server`
- Build with Express.js.
- Connect to and controls the aca-py app running on Linux environtment.
- Default running on port 3001.
```haskell
npm i
npm start
```

### The controller :stars:
- Requires linux evironment
- Authenticate your seed on https://indy-test.bosch-digital.de
- Install prerequisites:
```yaml 
sudo apt update
sudo apt install python3-pip
pip install aries-cloudagent
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys CE7709D068DB5E88
sudo add-apt-repository "deb https://repo.sovrin.org/sdk/deb bionic master"
sudo apt update
sudo apt install -y libindy
pip3 install python3_indy
sudo apt install -y indy-cli
sudo apt install libsodium-dev
```



- Run provision
```yaml  
aca-py provision \
--wallet-type indy \
--endpoint http://controller server address \
--seed 100A000000300000c0000000000000FF \
--wallet-name YourWalletName \
--wallet-key MASTER_KEY_SECRET \
--genesis-url https://indy-test.bosch-digital.de/genesis \ 
```


- To start the controller app
```yaml 
aca-py start \
--inbound-transport http 0.0.0.0 8000 \
--endpoint http://controller server address \
--outbound-transport http \
--admin 0.0.0.0 8080 \
--webhook-url http://controller server address:application port \
--genesis-url https://indy-test.bosch-digital.de/genesis \
--wallet-type indy \
--wallet-name YourWalletName \
--wallet-key MASTER_KEY_SECRET \
--seed 100A000000300000c0000000000000FF \
--admin-insecure-mode \
--label MY_SSI_AGENT \
--log-level debug \
--storage-type indy \
--auto-ping-connection \
--max-message-size 10485760 
```