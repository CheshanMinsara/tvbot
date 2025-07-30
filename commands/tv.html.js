/*CMD
  command: tv.html
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🇱🇰 LankaStream</title>
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; background-color: #111; color: white; margin: 0; }
        #videoContainer { width: 100vw; height: 56.25vw; max-height: 50vh; background: black; position: fixed; top: 0; left: 0; z-index: 1000; }
        #player { width: 100%; height: 100%; object-fit: cover; }
        .content { padding-top: 55vh; }
        .category { margin: 20px auto; width: 90%; }
        .category h2 { border-bottom: 2px solid white; display: inline-block; padding-bottom: 5px; }
        .channels { display: flex; flex-wrap: wrap; justify-content: center; padding: 10px; }
        .channel { list-style: none; margin: 5px; padding: 10px; background: #222; cursor: pointer; border-radius: 5px; }
        .channel:hover { background: #444; }
        #searchBar { width: 80%; padding: 10px; margin: 20px auto; display: block; font-size: 16px; border-radius: 5px; border: 1px solid #555; background: #222; color: white; text-align: center; }
    </style>
</head>
<body>

    <h1>🇱🇰 LankaStream</h1>

    <div id="videoContainer">
        <video id="player" controls autoplay></video>
    </div>

    <div class="content">
        <input type="text" id="searchBar" placeholder="🔍 Search Channels..." onkeyup="searchChannels()">

        <div class="category">
            <h2>🇱🇰 Local TV Channels</h2>
            <ul class="channels" id="localChannels"></ul>
        </div>

        <div class="category">
            <h2>🏆 Sports Channels</h2>
            <ul class="channels" id="sportsChannels"></ul>
        </div>

        <div class="category">
            <h2>🎬 Entertainment Channels</h2>
            <ul class="channels" id="entertainmentChannels"></ul>
        </div>

        <div class="category">
            <h2>📺 Animation</h2>
            <ul class="channels" id="animationChannels"></ul>
        </div>

        <div class="category">
            <h2>🚗 Auto</h2>
            <ul class="channels" id="autoChannels"></ul>
        </div>

        <div class="category">
            <h2>💼 Business</h2>
            <ul class="channels" id="businessChannels"></ul>
        </div>

        <div class="category">
            <h2>🎞 Classic</h2>
            <ul class="channels" id="classicChannels"></ul>
        </div>

        <div class="category">
            <h2>😂 Comedy</h2>
            <ul class="channels" id="comedyChannels"></ul>
        </div>

        <div class="category">
            <h2>🍳 Cooking</h2>
            <ul class="channels" id="cookingChannels"></ul>
        </div>

        <div class="category">
            <h2>🎭 Culture</h2>
            <ul class="channels" id="cultureChannels"></ul>
        </div>

        <div class="category">
            <h2>📚 Documentary</h2>
            <ul class="channels" id="documentaryChannels"></ul>
        </div>

        <div class="category">
            <h2>🎓 Education</h2>
            <ul class="channels" id="educationChannels"></ul>
        </div>

        <div class="category">
            <h2>👨‍👩‍👧 Family</h2>
            <ul class="channels" id="familyChannels"></ul>
        </div>

        <div class="category">
            <h2>📡 General</h2>
            <ul class="channels" id="generalChannels"></ul>
        </div>

    </div>

    <script>
        const channels = {
            "local": [
                { name: "Hiru TV", url: "https://tv.hiruhost.com:1936/8012/8012/playlist.m3u8" },
                { name: "ITN", url: "https://j78dp2pnlq5r-hls-live.comcities.net/ITNDigital/cf467ddf13ba30dd3c71435cafa6fd6e.sdp/playlist_dvr.m3u8" },
                { name: "Vasantham TV", url: "https://j78dp2pnlq5r-hls-live.comcities.net/ITNDigital/20a317b0496a4930b375290505e5d628.sdp/playlist_dvr.m3u8" },
                { name: "Monara TV", url: "https://jk3lz8xklw79-hls-live.5centscdn.com/lpl/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist.m3u8" },
                { name: "Rupavahini", url: "http://dammikartmp.tulix.tv/slrc1/slrc1/playlist.m3u8" },
                { name: "Siyatha TV", url: "https://stvlk.live/live/eml079n7ui3ytg1c6x4/index.m3u8" },
                { name: "Swarnavahini", url: "https://jk3lz8xklw79-hls-live.5centscdn.com/live/6226f7cbe59e99a90b5cef6f94f966fd.sdp/playlist.m3u8" }
            ],
            "sports": [
                { name: "Red Bull TV", url: "https://3ea22335.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWdiX1JlZEJ1bGxUVl9ITFM/playlist.m3u8" },
                { name: "Impact Plus!", url: "https://d2tuwvs0ja335j.cloudfront.net/hls/main.m3u8"}
            ],
            "entertainment": [
                { name: "AXN Central America", url: "https://streamer1.nexgen.bz/AXN/index.m3u8" },
                { name: "6PR", url: "https://6prlive.akamaized.net/hls/live/2033806/6PR/index.m3u8"},
                { name: "9Gem Sydney", url: "https://9now-livestreams.akamaized.net/hls/live/2008311/gem-syd/master.m3u8"}
            ],
            "animation": [
                { name: "3ABN Kids", url: "https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8" },
                { name: "Xtrema Anime", url: "https://stmv1.cnarlatam.com/xtremaanime/xtremaanime/playlist.m3u8"},
                { name: "Anime TV", url: "https://stmv1.srvif.com/animetv/animetv/playlist.m3u8"},
                { name: "Anime Zone TV", url: "http://animezonetv.net/hls/stream.m3u8"},
                { name: "Pluto TV Anime (Germany)", url: "http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/608181d420fc8500075f612a/master.m3u8?appName=web&appVersion=unknown&clientTime=0&deviceDNT=0&deviceId=84ae7970-4b92-11ef-aece-533610f1ea34&deviceMake=Chrome&deviceModel=web&deviceType=web&deviceVersion=unknown&includeExtendedEvents=false&serverSideAds=false&sid=042724a5-f12e-43ab-9538-dac62e47d082"},
            ]
        };

        function loadChannels(category, elementId) {
            const channelList = document.getElementById(elementId);
            channels[category].forEach(channel => {
                let li = document.createElement("li");
                li.classList.add("channel");
                li.textContent = channel.name;
                li.onclick = () => playChannel(channel.url);
                channelList.appendChild(li);
            });
        }

        function playChannel(url) {
            const video = document.getElementById("player");

            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(video);
                video.play();
            } else {
                video.src = url;
                video.play();
            }
        }

        function searchChannels() {
            let input = document.getElementById("searchBar").value.toLowerCase();
            let allChannels = document.querySelectorAll(".channel");

            allChannels.forEach(channel => {
                channel.style.display = channel.textContent.toLowerCase().includes(input) ? "block" : "none";
            });
        }

        Object.keys(channels).forEach(category => loadChannels(category, category + "Channels"));
    </script>

</body>
</html>
