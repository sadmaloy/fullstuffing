new WOW().init();
var button = $('#btn-offer');
var modal = $('#modal-offer');
var close = $('#close-offer');
        $(document).ready(function() {
            $('#brif-form').validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true
                    }
                },
                messages: {
                    username: "Укажите Ваше имя",
                    email: "Укажите Ваш e-mail",
                    phone: "Укажите Ваш телефон"
                },
                submitHandler: function (form) {
                    $.ajax({
                          url: 'mail.php',
                          type: 'GET',
                          success: function () {
                              modal.addClass('modal-offer_active');
                              $('.modal-block').show();
                              $('.modal-block__text').text('Спасибо за заявку, скоро мы вам перезвоним.');
                              $('input').each(function () {
                                $('input').val('');
                              });
                          }
                    });
                  }
            });

            $('#modal-form').validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                    },
                    phone: {
                        required: true
                    }
                },
                messages: {
                    username: "Укажите Ваше имя",
                    phone: "Укажите Ваш телефон"
                },
                submitHandler: function (form) {
                    $.ajax({
                          url: 'mail.php',
                          type: 'GET',
                          success: function () {
                              modal.addClass('modal-offer_active');
                              $('.modal-block').show();
                              $('.modal-block__text').text('Спасибо за заявку, скоро мы вам перезвоним.');
                              $('input').each(function () {
                                $('input').val('');
                              });
                          }
                    });
                  }
            });

            $('#call-form').validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                    },
                    phone: {
                        required: true
                    }
                },
                messages: {
                    username: "Укажите Ваше имя",
                    phone: "Укажите Ваш телефон"
                },
                submitHandler: function (form) {
                    $.ajax({
                          url: 'mail.php',
                          type: 'GET',
                          success: function () {
                              modal.addClass('modal-offer_active');
                              $('.modal-block').show();
                              $('.modal-block__text').text('Спасибо за заявку, скоро мы вам перезвоним.');
                              $('input').each(function () {
                                $('input').val('');
                              });
                          }
                    });
                  }
            });

            $('#offer-form').validate({
                errorClass: "invalid",
                errorElement: "div",
                rules: {
                  username: {
                    required: true,
                    minlength: 2,
                    maxlength: 15
                  },
                },
                messages: {
                  username: {
                    required: "Введите имя",
                    minlength: jQuery.validator.format("Требуется не менее {0} символов")
                  }
                },
                submitHandler: function (form) {
                  $.ajax({
                        url: 'mail.php',
                        type: 'GET',
                        success: function () {
                            modal.addClass('modal-offer_active');
                            $('.modal-block').show();
                            $('.modal-block__text').text('Спасибо за заявку, скоро мы вам перезвоним.');
                            $('input').each(function () {
                              $('input').val('');
                            });
                        }
                  });
                }
              });

            $('.phone').mask('+7 (999) 999-99-99');
            $('.slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: $('.arrows__left'),
                nextArrow: $('.arrows__right'),
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },   
                ]
            }); 
        });