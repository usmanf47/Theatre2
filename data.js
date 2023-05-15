var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.4146646535222622,
        "pitch": 0.3369322815843656,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 0.08232833749676338,
          "pitch": 0.021706779588500424,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.846566128222877,
        "pitch": 0.11351981097316965,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 1.5791922323863758,
          "pitch": 0.017405919450084184,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Theatre",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
