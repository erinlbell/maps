

#Map Template
Email: erinbelldeveloper@gmail.com
Ionic Framework setup</br> 

Note: Be sure to have the given environments already installed on computer else download from the links:

1.) Java jdk  && Android sdk-Android Studio http://developer.android.com/sdk/index.html  API 23

http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html and path to it in system variable ex.) C:\Program-Files\java\jdk_21</br> (type in system variables in search->edit system variables->advanced(tab)->environment variables->2nd box=System variables->(scroll to variable(left)=Path) ->highlight path and click edit->In second box=Variable Value scroll all the way right to the end add a semi-colon and paste location of jdk ex. C:\Program Files\Java\jdk1.8.0_91; Press okay three times.


Install Settings

1.)Node- Download and complete setup of node.js .msi file from http://nodejs.org/en/#download Click on npm package-> and path to variables C:\Program Files\nodejs\; create new system variable: NODE_PATH to path: C:\Users\erinb\AppData\Roaming\npm\node_modules
2.)Check-open command prompt > cd C:\Program Files\nodejs\  > npm --version reboot command prompt > cd workspace > npm --version</br>
3.)Install Ionic > npm install -g ionic > npm install -g cordova </br> 
4.)Install Cordova > npm install phonegap@latest </br> 
5.)Install Bower > npm install -g bower </br> 
6.)Create project >cd C:\Users\{{your name}}\workspace </br> 
Either: Clone repository or start new project</br> 
7.) > git clone https://github.com/erinbelldeveloper/maps.git</br> 
or </br> 
7.) > ionic start {{appname}} {{tabs/sidemenu/blank}} ex. ionic start example tabs ->ionic.io? NO!(buggy) </br> 
8.) > cd {{appname}} ex. cd extample </br> 
9.) > ionic setup sass </br> 
10) > npm install gulp </br> 
11) > cd node_modules </br> 
12) > npm-check-updates -u </br> 
13) > cd .. </br> 
14) > ionic platform add android    Note: ionic platfrom add ios(to develop in mac hardware xcode-only) </br> 
15) > ionic serve </br> 


To Create apk </br> 
16) > ionic build platform android </br> 
17.) Generates folder platforms/android/build/output/debug.apk  </br> 





