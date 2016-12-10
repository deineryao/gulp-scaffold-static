$(function(){
    var player;
    $('#play-video').click(function(){
        $('.pop-window').addClass('pop-video-show');
        if (player) {
            if (player.pauseing) player.play();
            return;
        }
        player = cyberplayer("video-box").setup({
            width: 650,
            height: 362,
            stretching: "uniform",
            file: "http://video.ylyq.duoku.com/1478681347288047.mp4",
            autostart: true,
            repeat: false,
            volume: 100,
            controls: true,
            ak: '257deb295b9743e38150368c0c0453b9' // 公有云平台注册即可获得accessKey
        });
        player.seek(0);
        player.onPlay(function(){
            player.playing = true;
            player.pauseing = false;
        });
        player.onPause(function(){
            player.pauseing = true;
            player.playing = false;
        });
        player.onComplete(function(){
            $('.pop-window').attr({'class':'pop-window'});
            $('.video-box').html('<div id="video-box"></div>');
            player = null;
        });
        $('.canvas').click(function(){
            $('.pop-window').attr({'class':'pop-window'});
            if (player.playing) player.pause();
        });

    });

});