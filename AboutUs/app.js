
/*
$('.js-loop').infiniteScroll({
  // options
  path: '.pagination__next',
  append: '.people',
  history: false,
});

var infScroll = new InfiniteScroll( ".js-loop", {
    path: function() {
        // 頁面路徑
        if ( this.loadCount < 2 ) {
            // 只讀取前兩頁資料
            var nextIndex = this.loadCount + 2; // 2
            return "page" + nextIndex + ".html"; // page2.html
        }
    },
    append: ".people", // 匯入物件類別
    //status: ".scroller-status"  捲軸狀態類別
})
*/

$(document).ready(function () {
  //'use strict';
  document.getElementById('p4').scrollIntoView({behavior: 'auto', block: 'center',inline:'center'})
  let view = $(window).height() > $(window).width() ? 'higher':'wider'
  console.log(view);
  
  /*
  $(function() {
    $('a').click(function() {
        // 'this' is not a jQuery object, so it will use
        // the default click() function
        this.click();
    }).click();
  });
  */
  
  /*
  $('#dot1').click(() => {
    document.getElementById('p1').scrollIntoView({behavior: 'smooth', block: 'center',inline:'center'})
    //$('#p1').animate({transform: "scale(1.3)"}, 5000, 'linear');
    //$('#p1').css("transform","scale(1.3)");
    //$('#p1').transition('horizontal flip');
    $('#p1').css('background', "url('./src/ａｂｏｕｔ　ｕｓ-09.png') no-repeat top / contain");
    $('#p1').css("transform","scale(1.6)");
  })
  */
  
  /*
  $("#dot1").clickOutsideThisElement(function() {
    $('#p1').css('background', "url('./src/ａｂｏｕｔ　ｕｓ-02.png') no-repeat top / contain");
    $('#p1').css("transform","scale(1)");
  });
  */
  
  /*
  $(document).mouseup(function(e){
    var point = $("#dot1");
	var ppl = $('#p1');
    if(point.is(e.target)){
      document.getElementById('p1').scrollIntoView({behavior: 'smooth', block: 'center',inline:'center'})
      ppl.transition('horizontal flip');
      ppl.css("transform","scale(1.6)");
      //ppl.animate({transform: "scale(1.6)"}, 3000, 'linear');
      ppl.transition('horizontal flip');
      //ppl.css('-webkit-transform', 'rotateY(180deg)');
      ppl.css('background', "url('./src/ａｂｏｕｔ　ｕｓ-09.png') no-repeat top / contain");
    }
    // If the target of the click isn't the point
    if(!point.is(e.target)){
        ppl.css('background', "url('./src/ａｂｏｕｔ　ｕｓ-02.png') no-repeat top / contain");
        ppl.css("transform","scale(1)");
    }
  });
  */
  
  /*
  $('#dot1').on('click', () => {
  $('#p1').toggleClass('detail');
});
  */
  
  for(let i=1; i<8;i++){
    /*
    $(".dots > div:nth-child(" + i + ")").click(() => {
      document.getElementById('p' + i  ).scrollIntoView({behavior: 'smooth', block: 'center',inline:'center'})
    })
    */
    
    
    $(document).mouseup(function(e){
    var point = $("#dot" + i);
	var ppl = $('#p' + i);
    if(point.is(e.target)){
      document.getElementById('p' + i).scrollIntoView({duration: 'slow',behavior: 'smooth', block: 'center',inline:'center'});
      //$( ".dots" ).animate({opacity: "0"},1000);
      
      ppl.transition('horizontal flip', 500);
      ppl.css("transform","scale(1.7)");
      //ppl.animate({transform: "scale(1.6)"}, 3000, 'linear');
      ppl.transition('horizontal flip');
      //ppl.css('-webkit-transform', 'rotateY(180deg)');
      $( ".dots" ).hide();
      $( "#aboutUs" ).hide();
      if(i===1)ppl.css('background', "url('./src/ａｂｏｕｔ　ｕｓ-09.png') no-repeat top / contain");
      else{ppl.css('background', "url('./src/ａｂｏｕｔ　ｕｓ-1"+(i-2)+".png') no-repeat top / contain");};
      //ppl.css('margin', '0 100px');
      //$('.people').css('margin', '0 11px');
      //$('.empty').css("transform","scale(0.7)");
      //$('#flex-scroll>div:nth-child(2)').css('flex-shrink', 1);
      //flex-grow
      //循環滾動
      
      /*
      if(view==='higher'){
        for(let j=1; j<8;j++){
          if(j===i){;};
          else{$("#p" + j).hide()}
        }
      }
      */
    }
    // If the target of the click isn't the point
      
    
    if(!point.is(e.target)){
        //$( ".dots" ).animate({opacity: "1"},5000);
        if($('.dots').has(e.target).length === 0){
          $( ".dots" ).show();
          $( "#aboutUs" ).show();
        }
        ppl.css('background', "url('./src/ａｂｏｕｔ　ｕｓ-0"+(i+1)+".png') no-repeat top / contain");
        ppl.css("transform","scale(1)");
    }
  });
    
    /*
  $('.wrapper').scroll (function (e) {
    var point = $("#dot" + i);
	var ppl = $('#p' + i);
    if($('.dots').has(e.target).length === 0){$( ".dots" ).show();};
    ppl.css('background', "url('./src/ａｂｏｕｔ　ｕｓ-0"+(i+1)+".png') no-repeat top / contain");
    ppl.css("transform","scale(1)");
  });
  */
}
});

