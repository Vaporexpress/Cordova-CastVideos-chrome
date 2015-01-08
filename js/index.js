/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    testing_on_desktop: true,
    // Application Constructor
    initialize: function() {
        if (document.URL.indexOf("http://" || "file://") === -1) {
            this.testing_on_desktop = false;
        }
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        if (this.testing_on_desktop) {
            this.loadScript("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js", function(){
                console.log('Desktop: Loaded cast_sender.js');
            });
            this.loadScript("CastVideos.js", function(){
                console.log('Desktop: Loaded CastVideos.js');
                var castPlayer = new CastPlayer();
            });
        }else{
            document.addEventListener('deviceready', this.onDeviceReady, false);
        }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        this.loadScript("CastVideos.js", function(){
            console.log('Device: Loaded CastVideos.js');
            var castPlayer = new CastPlayer();
        });
    },
    loadScript: function (url, callback) {
        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState){  //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = function(){
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
};
