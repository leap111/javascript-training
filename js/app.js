$(function() {
    let height=$("#header").height();
    $("body").css("margin-top", height + 30);
  });



  $(function(){
    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('is-active');
      $('#fa-link').toggleClass('is-change');
    });
  }());

$(function(){
    $('.slideshow').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });
});

function demoslide() {
    $(this).next().slideToggle(300);
}

$(".areaname").click(demoslide);

let button = document.getElementById("button");
let form = document.getElementById("form");
let textarea = document.getElementById("textarea");

let maxTextNum = textarea.getAttribute("maxlength");

let textMessage = document.createElement('div');
let parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

textarea.addEventListener('keyup', function() {
    let currentTextNum = textarea.value.length;
    textMessage.innerHTML = '<p>あと「' + (maxTextNum - currentTextNum) +'」文字入力できます。</p>';
});

const KEY = 'AIzaSyBjpZoFO3p4gl59UKXNJQSu-4Xyk-D9Duc';
let url = 'https://www.googleapis.com/youtube/v3/search?';
url += 'type=video';
url += '&part=snippet';
url += '&q=愛知県　観光';
url += '&videoEmbeddable=true';
url += '&videoSyndicated=true';
url += '&maxResults=4';
url += '&key=' + KEY;

$(function() {
    $.ajax({
        url: url,
        dataType : 'jsonp'
    }).done((data) => {
        if (data.items) {
            setData(data);
        } else {
            console.log(data);
            alert('該当するデータが見つかりませんでした');
        } 
    }).fail((data) => {
        alert('通信に失敗しました');
    });
});

function setData(data) {
    let result = '';
    let video = '';
    for (let i = 0; i < data.items.length; i++) {
        video = '<iframe src="https://www.youtube.com/embed/';
        video += data.items[i].id.videoId;
        video += '" allowfullscreen></iframe>';
        result += '<div class="video">' + video + '</div>'
    }
    $('#videoList').html(result);
}