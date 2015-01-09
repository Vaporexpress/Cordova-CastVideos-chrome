# Cordova-CastVideos-chrome
Sample [googlecast/CastVideos-chrome](https://github.com/googlecast/CastVideos-chrome) adapted to use with [GetVideostream/cordova-chromecast](https://github.com/GetVideostream/cordova-chromecast) plugin for Cordova/Phonegap with minimal changes.

## Requeriments:

1) Latest Android SDK

2) Apache Cordova

3) Node.js

## Installation:

**1)** Go to your workspace and create a new Cordova project with this command:

`$ cordova create hellocastworld com.example.hellocastworld HelloCastWorld`

**2)** Enter inside the new folder project:

`$ cd hellocastworld`

**3)** Add the Android platform

`$ cordova platform add android`

```Note: 
By default, Android platform is created with "target-19". 
Now, we need to modify under /platforms/android folder the "project.properties" file to target-21 
and "AndroidManifest.xml" file to android:targetSdkVersion="21" to avoid google libraries resource errors.
```

Once modified we can install the cordova chromecast plugin ...

**4)** Install Cordova Chromecast Plugin:

`$ cordova plugin add https://github.com/GetVideostream/cordova-chromecast.git`

**5)** Now download this example and put the files under "[YourProject]\www" folder after cleaning the actual content.

**6)** And finally, build or run the project:

`$ cordova build --debug android`

or

`$ cordova run --debug android`

**That's it ;)**

```
Warning: If Android Mediaplayer don't show the video when you come back locally click on pause and next click on play. 
This is necessary only the first time caused by initialization with HTML5 and Android webview, I think.
```
