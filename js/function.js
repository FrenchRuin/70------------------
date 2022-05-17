$(function () {

  const $container = $('.slides>.slides-container')

  const $btnNext = $('.slides>.next')
  const $btnPrev = $('.slides>.prev')
  const $btnAuto = $('.slides>.status>.autoplay')
  const $gage = $('.gage')

  let intervalKey = null;
  let nowidx = 9;  //인덱스 9 ~ 17


  // 다음버튼
  $btnNext.on('click', function (evt) {
    evt.preventDefault();

    if (nowidx < 17) {
      nowidx++;
    } else {
      nowidx = 9;
    }
    $('.status>.leftnum').text('0' + (nowidx - 8))
    $container.stop().animate({
      left: '-1000%'
    }, 400, function () {
      $('.slides>.slides-container>p').first().appendTo($container)
      $container.css({ left: '-900%' })
    })


  })

  $btnPrev.on('click', function (evt) {
    evt.preventDefault();

    if (nowidx > 9) {
      nowidx--;
    } else {
      nowidx = 17;
    }

    $('.status>.leftnum').text('0' + (nowidx - 8))
    $container.stop().animate({
      left: '-800%'
    }, 400, function () {
      $('.slides>.slides-container>p').last().prependTo($container)
      $container.css({ left: '-900%' })
    })
  })

  $btnAuto.on('click', function () {
    if ($(this).hasClass('pause')) {
      $(this).removeClass('pause')
      $gage.removeClass('pause')
      // $gage.css({ 'animation-play-state': 'paused' })

      clearInterval(intervalKey)
    } else {
      $(this).addClass('pause')
      $gage.addClass('pause')
      // $gage.css({ 'animation-play-state': '' })
      intervalKey = setInterval(function () {
        $btnNext.trigger('click')
      }, 3000)
    }
  })

  $(window).on('load', function () {
    $btnAuto.trigger('click')
  })






})